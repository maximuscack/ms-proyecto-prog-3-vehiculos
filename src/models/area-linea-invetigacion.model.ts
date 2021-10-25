import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

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

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  constructor(data?: Partial<AreaLineaInvetigacion>) {
    super(data);
  }
}

export interface AreaLineaInvetigacionRelations {
  // describe navigational properties here
}

export type AreaLineaInvetigacionWithRelations = AreaLineaInvetigacion & AreaLineaInvetigacionRelations;
