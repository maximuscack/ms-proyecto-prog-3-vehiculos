import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class TiposSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_tipos_de_solicitud?: number;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  formato?: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];

  constructor(data?: Partial<TiposSolicitud>) {
    super(data);
  }
}

export interface TiposSolicitudRelations {
  // describe navigational properties here
}

export type TiposSolicitudWithRelations = TiposSolicitud & TiposSolicitudRelations;
