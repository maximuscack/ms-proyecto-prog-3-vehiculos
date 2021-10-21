import {Entity, model, property} from '@loopback/repository';

@model()
export class JuradosxInvestigacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_JxI?: number;


  constructor(data?: Partial<JuradosxInvestigacion>) {
    super(data);
  }
}

export interface JuradosxInvestigacionRelations {
  // describe navigational properties here
}

export type JuradosxInvestigacionWithRelations = JuradosxInvestigacion & JuradosxInvestigacionRelations;
