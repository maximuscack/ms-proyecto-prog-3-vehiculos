import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {EvaluacionSolicitud, EvaluacionSolicitudRelations, ResultadoEvaluacion, Solicitud, Jurados} from '../models';
import {ResultadoEvaluacionRepository} from './resultado-evaluacion.repository';
import {SolicitudRepository} from './solicitud.repository';
import {JuradosRepository} from './jurados.repository';

export class EvaluacionSolicitudRepository extends DefaultCrudRepository<
  EvaluacionSolicitud,
  typeof EvaluacionSolicitud.prototype.id_E,
  EvaluacionSolicitudRelations
> {

  public readonly resultadoEvaluacions: HasManyRepositoryFactory<ResultadoEvaluacion, typeof EvaluacionSolicitud.prototype.id_E>;

  public readonly solicitud: BelongsToAccessor<Solicitud, typeof EvaluacionSolicitud.prototype.id_E>;

  public readonly jurados: BelongsToAccessor<Jurados, typeof EvaluacionSolicitud.prototype.id_E>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('ResultadoEvaluacionRepository') protected resultadoEvaluacionRepositoryGetter: Getter<ResultadoEvaluacionRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>, @repository.getter('JuradosRepository') protected juradosRepositoryGetter: Getter<JuradosRepository>,
  ) {
    super(EvaluacionSolicitud, dataSource);
    this.jurados = this.createBelongsToAccessorFor('jurados', juradosRepositoryGetter,);
    this.registerInclusionResolver('jurados', this.jurados.inclusionResolver);
    this.solicitud = this.createBelongsToAccessorFor('solicitud', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
    this.resultadoEvaluacions = this.createHasManyRepositoryFactoryFor('resultadoEvaluacions', resultadoEvaluacionRepositoryGetter,);
    this.registerInclusionResolver('resultadoEvaluacions', this.resultadoEvaluacions.inclusionResolver);
  }
}
