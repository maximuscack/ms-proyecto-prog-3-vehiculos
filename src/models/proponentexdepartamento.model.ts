import {Entity, model, property} from '@loopback/repository';

@model()
export class Proponentexdepartamento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_proponentexdepartamento?: number;


  constructor(data?: Partial<Proponentexdepartamento>) {
    super(data);
  }
}

export interface ProponentexdepartamentoRelations {
  // describe navigational properties here
}

export type ProponentexdepartamentoWithRelations = Proponentexdepartamento & ProponentexdepartamentoRelations;
