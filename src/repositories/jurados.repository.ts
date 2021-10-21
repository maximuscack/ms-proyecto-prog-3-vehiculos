import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jurados, JuradosRelations, AreaLineaInvetigacion, JuradosxInvestigacion} from '../models';
import {JuradosxInvestigacionRepository} from './juradosx-investigacion.repository';
import {AreaLineaInvetigacionRepository} from './area-linea-invetigacion.repository';

export class JuradosRepository extends DefaultCrudRepository<
  Jurados,
  typeof Jurados.prototype.id_jurado,
  JuradosRelations
> {

  public readonly areaLineaInvetigacions: HasManyThroughRepositoryFactory<AreaLineaInvetigacion, typeof AreaLineaInvetigacion.prototype.id_linea_investigacion,
          JuradosxInvestigacion,
          typeof Jurados.prototype.id_jurado
        >;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('JuradosxInvestigacionRepository') protected juradosxInvestigacionRepositoryGetter: Getter<JuradosxInvestigacionRepository>, @repository.getter('AreaLineaInvetigacionRepository') protected areaLineaInvetigacionRepositoryGetter: Getter<AreaLineaInvetigacionRepository>,
  ) {
    super(Jurados, dataSource);
    this.areaLineaInvetigacions = this.createHasManyThroughRepositoryFactoryFor('areaLineaInvetigacions', areaLineaInvetigacionRepositoryGetter, juradosxInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('areaLineaInvetigacions', this.areaLineaInvetigacions.inclusionResolver);
  }
}
