import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Departamento, DepartamentoRelations, Facultad} from '../models';
import {FacultadRepository} from './facultad.repository';

export class DepartamentoRepository extends DefaultCrudRepository<
  Departamento,
  typeof Departamento.prototype.id_departamento,
  DepartamentoRelations
> {

  public readonly facultad: BelongsToAccessor<Facultad, typeof Departamento.prototype.id_departamento>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('FacultadRepository') protected facultadRepositoryGetter: Getter<FacultadRepository>,
  ) {
    super(Departamento, dataSource);
    this.facultad = this.createBelongsToAccessorFor('facultad', facultadRepositoryGetter,);
    this.registerInclusionResolver('facultad', this.facultad.inclusionResolver);
  }
}
