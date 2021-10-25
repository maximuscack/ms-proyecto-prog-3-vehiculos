import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {AreaLineaInvetigacion} from './area-linea-invetigacion.model';
import {Proponente} from './proponente.model';
import {TiposSolicitud} from './tipos-solicitud.model';
import {Modalidad} from './modalidad.model';
import {EvaluacionSolicitud} from './evaluacion-solicitud.model';

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
  @belongsTo(() => Proponente)
  proponenteId: number;

  @belongsTo(() => Modalidad)
  modalidadId: number;

  @belongsTo(() => TiposSolicitud)
  tiposSolicitudId: number;

  @hasMany(() => EvaluacionSolicitud)
  evaluacionSolicituds: EvaluacionSolicitud[];

  @belongsTo(() => AreaLineaInvetigacion)
  areaLineaInvetigacionId: number;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
