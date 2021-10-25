import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Jurados} from './jurados.model';
import {Solicitud} from './solicitud.model';
import {ResultadoEvaluacion} from './resultado-evaluacion.model';

@model()
export class EvaluacionSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_E?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_invitacion: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_respuesta: string;

  @property({
    type: 'string',
    required: true,
  })
  respuesta: string;

  @hasMany(() => ResultadoEvaluacion)
  resultadoEvaluacions: ResultadoEvaluacion[];

  @belongsTo(() => Solicitud)
  solicitudId: number;

  @belongsTo(() => Jurados)
  juradosId: number;

  constructor(data?: Partial<EvaluacionSolicitud>) {
    super(data);
  }
}

export interface EvaluacionSolicitudRelations {
  // describe navigational properties here
}

export type EvaluacionSolicitudWithRelations = EvaluacionSolicitud & EvaluacionSolicitudRelations;
