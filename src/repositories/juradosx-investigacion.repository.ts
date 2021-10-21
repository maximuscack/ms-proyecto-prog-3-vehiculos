import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {JuradosxInvestigacion, JuradosxInvestigacionRelations} from '../models';

export class JuradosxInvestigacionRepository extends DefaultCrudRepository<
  JuradosxInvestigacion,
  typeof JuradosxInvestigacion.prototype.id_JxI,
  JuradosxInvestigacionRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(JuradosxInvestigacion, dataSource);
  }
}
