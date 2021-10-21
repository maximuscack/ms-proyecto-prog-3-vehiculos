import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<TiposSolicitud>) {
    super(data);
  }
}

export interface TiposSolicitudRelations {
  // describe navigational properties here
}

export type TiposSolicitudWithRelations = TiposSolicitud & TiposSolicitudRelations;
