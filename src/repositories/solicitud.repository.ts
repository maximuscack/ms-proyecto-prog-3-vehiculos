import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, AreaLineaInvetigacion, Proponente, TiposSolicitud, Modalidad} from '../models';
import {AreaLineaInvetigacionRepository} from './area-linea-invetigacion.repository';
import {ProponenteRepository} from './proponente.repository';
import {TiposSolicitudRepository} from './tipos-solicitud.repository';
import {ModalidadRepository} from './modalidad.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id_proponente,
  SolicitudRelations
> {

  public readonly tiene_area_linea_investigacion: BelongsToAccessor<AreaLineaInvetigacion, typeof Solicitud.prototype.id_proponente>;

  public readonly tiene_proponente: BelongsToAccessor<Proponente, typeof Solicitud.prototype.id_solicitud>;

  public readonly tiene_tipo_solicitud: BelongsToAccessor<TiposSolicitud, typeof Solicitud.prototype.id_solicitud>;

  public readonly tiene_modalidad: BelongsToAccessor<Modalidad, typeof Solicitud.prototype.id_solicitud>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('AreaLineaInvetigacionRepository') protected areaLineaInvetigacionRepositoryGetter: Getter<AreaLineaInvetigacionRepository>, @repository.getter('ProponenteRepository') protected proponenteRepositoryGetter: Getter<ProponenteRepository>, @repository.getter('TiposSolicitudRepository') protected tiposSolicitudRepositoryGetter: Getter<TiposSolicitudRepository>, @repository.getter('ModalidadRepository') protected modalidadRepositoryGetter: Getter<ModalidadRepository>,
  ) {
    super(Solicitud, dataSource);
    this.tiene_modalidad = this.createBelongsToAccessorFor('tiene_modalidad', modalidadRepositoryGetter,);
    this.registerInclusionResolver('tiene_modalidad', this.tiene_modalidad.inclusionResolver);
    this.tiene_tipo_solicitud = this.createBelongsToAccessorFor('tiene_tipo_solicitud', tiposSolicitudRepositoryGetter,);
    this.registerInclusionResolver('tiene_tipo_solicitud', this.tiene_tipo_solicitud.inclusionResolver);
    this.tiene_proponente = this.createBelongsToAccessorFor('tiene_proponente', proponenteRepositoryGetter,);
    this.registerInclusionResolver('tiene_proponente', this.tiene_proponente.inclusionResolver);
    this.tiene_area_linea_investigacion = this.createBelongsToAccessorFor('tiene_area_linea_investigacion', areaLineaInvetigacionRepositoryGetter,);
    this.registerInclusionResolver('tiene_area_linea_investigacion', this.tiene_area_linea_investigacion.inclusionResolver);
  }
}
