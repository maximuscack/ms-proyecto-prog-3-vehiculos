import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jurados, JuradosRelations, EvaluacionSolicitud, AreaLineaInvetigacion, JuradosxInvestigacion} from '../models';
import {EvaluacionSolicitudRepository} from './evaluacion-solicitud.repository';
import {JuradosxInvestigacionRepository} from './juradosx-investigacion.repository';
import {AreaLineaInvetigacionRepository} from './area-linea-invetigacion.repository';

export class JuradosRepository extends DefaultCrudRepository<
  Jurados,
  typeof Jurados.prototype.id_jurado,
  JuradosRelations
> {

  public readonly evaluacionSolicituds: HasManyRepositoryFactory<EvaluacionSolicitud, typeof Jurados.prototype.id_jurado>;

  public readonly areaLineaInvetigacions: HasManyThroughRepositoryFactory<AreaLineaInvetigacion, typeof AreaLineaInvetigacion.prototype.id_linea_investigacion,
          JuradosxInvestigacion,
          typeof Jurados.prototype.id_jurado
        >;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('EvaluacionSolicitudRepository') protected evaluacionSolicitudRepositoryGetter: Getter<EvaluacionSolicitudRepository>, @repository.getter('JuradosxInvestigacionRepository') protected juradosxInvestigacionRepositoryGetter: Getter<JuradosxInvestigacionRepository>, @repository.getter('AreaLineaInvetigacionRepository') protected areaLineaInvetigacionRepositoryGetter: Getter<AreaLineaInvetigacionRepository>,
  ) {
    super(Jurados, dataSource);
    this.areaLineaInvetigacions = this.createHasManyThroughRepositoryFactoryFor('areaLineaInvetigacions', areaLineaInvetigacionRepositoryGetter, juradosxInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('areaLineaInvetigacions', this.areaLineaInvetigacions.inclusionResolver);
    this.evaluacionSolicituds = this.createHasManyRepositoryFactoryFor('evaluacionSolicituds', evaluacionSolicitudRepositoryGetter,);
    this.registerInclusionResolver('evaluacionSolicituds', this.evaluacionSolicituds.inclusionResolver);
  }
}
