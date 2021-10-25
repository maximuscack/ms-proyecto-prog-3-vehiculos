import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {AreaLineaInvetigacion, AreaLineaInvetigacionRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class AreaLineaInvetigacionRepository extends DefaultCrudRepository<
  AreaLineaInvetigacion,
  typeof AreaLineaInvetigacion.prototype.id_linea_investigacion,
  AreaLineaInvetigacionRelations
> {

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof AreaLineaInvetigacion.prototype.id_linea_investigacion>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(AreaLineaInvetigacion, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
  }
}
