import {Entity, model, property, belongsTo} from '@loopback/repository';
import {AreaLineaInvetigacion} from './area-linea-invetigacion.model';
import {Proponente} from './proponente.model';
import {TiposSolicitud} from './tipos-solicitud.model';
import {Modalidad} from './modalidad.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_solicitud?: number;

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

  @belongsTo(() => AreaLineaInvetigacion, {name: 'tiene_area_linea_investigacion'})
  Id_area_linea_investigacion: number;

  @belongsTo(() => Proponente, {name: 'tiene_proponente'})
  id_proponente: number;

  @belongsTo(() => TiposSolicitud, {name: 'tiene_tipo_solicitud'})
  id_tipo_solicitud: number;

  @belongsTo(() => Modalidad, {name: 'tiene_modalidad'})
  id_modalidad: number;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
