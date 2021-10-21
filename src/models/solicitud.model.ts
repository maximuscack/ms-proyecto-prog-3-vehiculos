import {Entity, model, property} from '@loopback/repository';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_proponente?: number;

  @property({
    type: 'date',
  })
  fecha_de_radicacion?: string;

  @property({
    type: 'string',
  })
  nombre_del_trabajo?: string;

  @property({
    type: 'string',
  })
  tipos_de_comite?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;


  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
