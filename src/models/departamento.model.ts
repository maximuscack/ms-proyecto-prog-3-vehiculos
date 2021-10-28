import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Facultad} from './facultad.model';

@model({
  settings:{
    foreignkeys:{
      fk_facultad: {
        name : 'fk_facultad',
        Entity: 'facultad',
        entitykey : 'id',
        foreignkey: 'id_facultad',
      }
    },
  },

}
)
export class Departamento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_departamento?: number;

  @property({
    type: 'string',
  })
  nombre?: string;

  @belongsTo(() => Facultad, {name: 'tiene_facultad'})
  id_facultad: number;

  @belongsTo(() => Facultad)
  facultadId: number;

  constructor(data?: Partial<Departamento>) {
    super(data);
  }
}

export interface DepartamentoRelations {
  // describe navigational properties here
}

export type DepartamentoWithRelations = Departamento & DepartamentoRelations;
