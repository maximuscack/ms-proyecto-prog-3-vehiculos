import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {EvaluacionSolicitud, EvaluacionSolicitudRelations, Jurados, Solicitud} from '../models';
import {JuradosRepository} from './jurados.repository';
import {SolicitudRepository} from './solicitud.repository';

export class EvaluacionSolicitudRepository extends DefaultCrudRepository<
  EvaluacionSolicitud,
  typeof EvaluacionSolicitud.prototype.id_E,
  EvaluacionSolicitudRelations
> {

  public readonly tiene_jurados: BelongsToAccessor<Jurados, typeof EvaluacionSolicitud.prototype.id_E>;

  public readonly tiene_solicitud: BelongsToAccessor<Solicitud, typeof EvaluacionSolicitud.prototype.id_E>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('JuradosRepository') protected juradosRepositoryGetter: Getter<JuradosRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(EvaluacionSolicitud, dataSource);
    this.tiene_solicitud = this.createBelongsToAccessorFor('tiene_solicitud', solicitudRepositoryGetter,);
    this.registerInclusionResolver('tiene_solicitud', this.tiene_solicitud.inclusionResolver);
    this.tiene_jurados = this.createBelongsToAccessorFor('tiene_jurados', juradosRepositoryGetter,);
    this.registerInclusionResolver('tiene_jurados', this.tiene_jurados.inclusionResolver);
  }
}
