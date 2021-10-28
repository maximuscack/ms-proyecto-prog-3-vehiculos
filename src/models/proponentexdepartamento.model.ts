import {Entity, findByForeignKeys, model, property} from '@loopback/repository';
import {Proponente} from '.';

@model({
  settings :{
    foreignkeys:{
      fk_departamento_id_departamento: {
        name : 'fk_proponente_id_departamento',
        Entity: 'departamento',
        entitykey : 'id',
        foreignkey: 'id_departamento',


      },
      fk_proponente_id_proponente:{
        name:'fk_proponente_id_proponente',
        entity: 'Proponente',
        Entitykey:'id',
        foreignkey:'id_proponente'
      },
    },
  },

}

)
export class Proponentexdepartamento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_proponentexdepartamento?: number;

  @property({
    type: 'number',
  })
  id_proponente?: number;

  @property({
    type: 'number',
  })
  id_departamento?: number;

  @property({
    type: 'number',
  })
  proponenteId?: number;

  @property({
    type: 'number',
  })
  departamentoId?: number;

  constructor(data?: Partial<Proponentexdepartamento>) {
    super(data);
  }
}

export interface ProponentexdepartamentoRelations {
  // describe navigational properties here
}

export type ProponentexdepartamentoWithRelations = Proponentexdepartamento & ProponentexdepartamentoRelations;
