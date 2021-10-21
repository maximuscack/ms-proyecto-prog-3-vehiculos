import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TiposComited, TiposComitedRelations} from '../models';

export class TiposComitedRepository extends DefaultCrudRepository<
  TiposComited,
  typeof TiposComited.prototype.id_T_C,
  TiposComitedRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(TiposComited, dataSource);
  }
}
