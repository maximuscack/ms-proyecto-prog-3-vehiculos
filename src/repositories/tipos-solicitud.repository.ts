import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TiposSolicitud, TiposSolicitudRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class TiposSolicitudRepository extends DefaultCrudRepository<
  TiposSolicitud,
  typeof TiposSolicitud.prototype.id_tipos_de_solicitud,
  TiposSolicitudRelations
> {

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof TiposSolicitud.prototype.id_tipos_de_solicitud>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(TiposSolicitud, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
  }
}
