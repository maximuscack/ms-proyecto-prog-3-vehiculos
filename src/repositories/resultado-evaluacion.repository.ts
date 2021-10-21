import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ResultadoEvaluacion, ResultadoEvaluacionRelations, EvaluacionSolicitud} from '../models';
import {EvaluacionSolicitudRepository} from './evaluacion-solicitud.repository';

export class ResultadoEvaluacionRepository extends DefaultCrudRepository<
  ResultadoEvaluacion,
  typeof ResultadoEvaluacion.prototype.id_RE,
  ResultadoEvaluacionRelations
> {

  public readonly tiene_evaluacionSolicitud: BelongsToAccessor<EvaluacionSolicitud, typeof ResultadoEvaluacion.prototype.id_RE>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('EvaluacionSolicitudRepository') protected evaluacionSolicitudRepositoryGetter: Getter<EvaluacionSolicitudRepository>,
  ) {
    super(ResultadoEvaluacion, dataSource);
    this.tiene_evaluacionSolicitud = this.createBelongsToAccessorFor('tiene_evaluacionSolicitud', evaluacionSolicitudRepositoryGetter,);
    this.registerInclusionResolver('tiene_evaluacionSolicitud', this.tiene_evaluacionSolicitud.inclusionResolver);
  }
}
