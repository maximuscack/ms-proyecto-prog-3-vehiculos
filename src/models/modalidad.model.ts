import {Entity, model, property} from '@loopback/repository';

@model()
export class Modalidad extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_modalidad?: number;

  @property({
    type: 'string',
  })
  nombre?: string;


  constructor(data?: Partial<Modalidad>) {
    super(data);
  }
}

export interface ModalidadRelations {
  // describe navigational properties here
}

export type ModalidadWithRelations = Modalidad & ModalidadRelations;
