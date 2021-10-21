import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {AreaLineaInvetigacion, AreaLineaInvetigacionRelations} from '../models';

export class AreaLineaInvetigacionRepository extends DefaultCrudRepository<
  AreaLineaInvetigacion,
  typeof AreaLineaInvetigacion.prototype.id_linea_investigacion,
  AreaLineaInvetigacionRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(AreaLineaInvetigacion, dataSource);
  }
}
