import {Entity, model, property} from '@loopback/repository';

@model()
export class TiposComited extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_T_C?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<TiposComited>) {
    super(data);
  }
}

export interface TiposComitedRelations {
  // describe navigational properties here
}

export type TiposComitedWithRelations = TiposComited & TiposComitedRelations;
