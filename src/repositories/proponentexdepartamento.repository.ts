import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Proponentexdepartamento, ProponentexdepartamentoRelations} from '../models';

export class ProponentexdepartamentoRepository extends DefaultCrudRepository<
  Proponentexdepartamento,
  typeof Proponentexdepartamento.prototype.id_proponentexdepartamento,
  ProponentexdepartamentoRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Proponentexdepartamento, dataSource);
  }
}
