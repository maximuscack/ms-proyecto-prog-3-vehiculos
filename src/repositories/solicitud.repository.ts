import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Proponente, Modalidad, TiposSolicitud, EvaluacionSolicitud, AreaLineaInvetigacion} from '../models';
import {ProponenteRepository} from './proponente.repository';
import {ModalidadRepository} from './modalidad.repository';
import {TiposSolicitudRepository} from './tipos-solicitud.repository';
import {EvaluacionSolicitudRepository} from './evaluacion-solicitud.repository';
import {AreaLineaInvetigacionRepository} from './area-linea-invetigacion.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id_solicitud,
  SolicitudRelations
> {

  public readonly proponente: BelongsToAccessor<Proponente, typeof Solicitud.prototype.id_solicitud>;

  public readonly modalidad: BelongsToAccessor<Modalidad, typeof Solicitud.prototype.id_solicitud>;

  public readonly tiposSolicitud: BelongsToAccessor<TiposSolicitud, typeof Solicitud.prototype.id_solicitud>;

  public readonly evaluacionSolicituds: HasManyRepositoryFactory<EvaluacionSolicitud, typeof Solicitud.prototype.id_solicitud>;

  public readonly areaLineaInvetigacion: BelongsToAccessor<AreaLineaInvetigacion, typeof Solicitud.prototype.id_solicitud>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('ProponenteRepository') protected proponenteRepositoryGetter: Getter<ProponenteRepository>, @repository.getter('ModalidadRepository') protected modalidadRepositoryGetter: Getter<ModalidadRepository>, @repository.getter('TiposSolicitudRepository') protected tiposSolicitudRepositoryGetter: Getter<TiposSolicitudRepository>, @repository.getter('EvaluacionSolicitudRepository') protected evaluacionSolicitudRepositoryGetter: Getter<EvaluacionSolicitudRepository>, @repository.getter('AreaLineaInvetigacionRepository') protected areaLineaInvetigacionRepositoryGetter: Getter<AreaLineaInvetigacionRepository>,
  ) {
    super(Solicitud, dataSource);
    this.areaLineaInvetigacion = this.createBelongsToAccessorFor('areaLineaInvetigacion', areaLineaInvetigacionRepositoryGetter,);
    this.registerInclusionResolver('areaLineaInvetigacion', this.areaLineaInvetigacion.inclusionResolver);
    this.evaluacionSolicituds = this.createHasManyRepositoryFactoryFor('evaluacionSolicituds', evaluacionSolicitudRepositoryGetter,);
    this.registerInclusionResolver('evaluacionSolicituds', this.evaluacionSolicituds.inclusionResolver);
    this.tiposSolicitud = this.createBelongsToAccessorFor('tiposSolicitud', tiposSolicitudRepositoryGetter,);
    this.registerInclusionResolver('tiposSolicitud', this.tiposSolicitud.inclusionResolver);
    this.modalidad = this.createBelongsToAccessorFor('modalidad', modalidadRepositoryGetter,);
    this.registerInclusionResolver('modalidad', this.modalidad.inclusionResolver);
    this.proponente = this.createBelongsToAccessorFor('proponente', proponenteRepositoryGetter,);
    this.registerInclusionResolver('proponente', this.proponente.inclusionResolver);
  }
}
