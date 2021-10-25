import {Entity, model, property, hasMany} from '@loopback/repository';
import {Departamento} from './departamento.model';

@model()
export class Facultad extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_facultad?: number;

  @property({
    type: 'number',
  })
  codigo_facultad?: number;

  @property({
    type: 'string',
  })
  nombre_facultad?: string;

  @hasMany(() => Departamento)
  departamentos: Departamento[];

  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;
