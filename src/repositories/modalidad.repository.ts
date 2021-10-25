import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Modalidad, ModalidadRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class ModalidadRepository extends DefaultCrudRepository<
  Modalidad,
  typeof Modalidad.prototype.id_modalidad,
  ModalidadRelations
> {

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Modalidad.prototype.id_modalidad>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Modalidad, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
  }
}
