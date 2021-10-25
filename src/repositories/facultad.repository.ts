import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Facultad, FacultadRelations, Departamento} from '../models';
import {DepartamentoRepository} from './departamento.repository';

export class FacultadRepository extends DefaultCrudRepository<
  Facultad,
  typeof Facultad.prototype.id_facultad,
  FacultadRelations
> {

  public readonly departamentos: HasManyRepositoryFactory<Departamento, typeof Facultad.prototype.id_facultad>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>,
  ) {
    super(Facultad, dataSource);
    this.departamentos = this.createHasManyRepositoryFactoryFor('departamentos', departamentoRepositoryGetter,);
    this.registerInclusionResolver('departamentos', this.departamentos.inclusionResolver);
  }
}
