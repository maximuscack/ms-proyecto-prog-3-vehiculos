import {Entity, model, property} from '@loopback/repository';

@model()
export class AreaLineaInvetigacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_linea_investigacion?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<AreaLineaInvetigacion>) {
    super(data);
  }
}

export interface AreaLineaInvetigacionRelations {
  // describe navigational properties here
}

export type AreaLineaInvetigacionWithRelations = AreaLineaInvetigacion & AreaLineaInvetigacionRelations;
