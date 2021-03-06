import {Entity, model, property, belongsTo} from '@loopback/repository';
import {EvaluacionSolicitud} from './evaluacion-solicitud.model';

@model({
  settings: {
    foreignKeys: {
      fk_evaluacion_solucitud: {
        name: 'fk_evaluacion_solucitud',
        entity: 'evaluacion-solicitud',
        entityKey: 'id',
        foreignKey: 'evaluacionSolicitudId' ,
      }
    },
  },
}
)
export class ResultadoEvaluacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_RE?: number;

  @property({
    type: 'string',
    required: true,
  })
  resultado: string;


  @property({
    type: 'string',
    required: true,
  })
  formato_diligenciado: string;

  @belongsTo(() => EvaluacionSolicitud)
  evaluacionSolicitudId: number;

  constructor(data?: Partial<ResultadoEvaluacion>) {
    super(data);
  }
}

export interface ResultadoEvaluacionRelations {
  // describe navigational properties here
}

export type ResultadoEvaluacionWithRelations = ResultadoEvaluacion & ResultadoEvaluacionRelations;
