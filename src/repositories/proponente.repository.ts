import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Proponente, ProponenteRelations, Departamento, Proponentexdepartamento, Solicitud} from '../models';
import {ProponentexdepartamentoRepository} from './proponentexdepartamento.repository';
import {DepartamentoRepository} from './departamento.repository';
import {SolicitudRepository} from './solicitud.repository';

export class ProponenteRepository extends DefaultCrudRepository<
  Proponente,
  typeof Proponente.prototype.id_proponente,
  ProponenteRelations
> {

  public readonly departamentos: HasManyThroughRepositoryFactory<Departamento, typeof Departamento.prototype.id_departamento,
          Proponentexdepartamento,
          typeof Proponente.prototype.id_proponente
        >;

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Proponente.prototype.id_proponente>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('ProponentexdepartamentoRepository') protected proponentexdepartamentoRepositoryGetter: Getter<ProponentexdepartamentoRepository>, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Proponente, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
    this.departamentos = this.createHasManyThroughRepositoryFactoryFor('departamentos', departamentoRepositoryGetter, proponentexdepartamentoRepositoryGetter,);
    this.registerInclusionResolver('departamentos', this.departamentos.inclusionResolver);
  }
}
