import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TiposSolicitud, TiposSolicitudRelations} from '../models';

export class TiposSolicitudRepository extends DefaultCrudRepository<
  TiposSolicitud,
  typeof TiposSolicitud.prototype.id_tipos_de_solicitud,
  TiposSolicitudRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(TiposSolicitud, dataSource);
  }
}
