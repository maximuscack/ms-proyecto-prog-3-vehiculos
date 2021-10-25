import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Solicitud,
  EvaluacionSolicitud,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudEvaluacionSolicitudController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/evaluacion-solicituds', {
    responses: {
      '200': {
        description: 'Array of Solicitud has many EvaluacionSolicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(EvaluacionSolicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<EvaluacionSolicitud>,
  ): Promise<EvaluacionSolicitud[]> {
    return this.solicitudRepository.evaluacionSolicituds(id).find(filter);
  }

  @post('/solicituds/{id}/evaluacion-solicituds', {
    responses: {
      '200': {
        description: 'Solicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(EvaluacionSolicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Solicitud.prototype.id_solicitud,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EvaluacionSolicitud, {
            title: 'NewEvaluacionSolicitudInSolicitud',
            exclude: ['id_E'],
            optional: ['solicitudId']
          }),
        },
      },
    }) evaluacionSolicitud: Omit<EvaluacionSolicitud, 'id_E'>,
  ): Promise<EvaluacionSolicitud> {
    return this.solicitudRepository.evaluacionSolicituds(id).create(evaluacionSolicitud);
  }

  @patch('/solicituds/{id}/evaluacion-solicituds', {
    responses: {
      '200': {
        description: 'Solicitud.EvaluacionSolicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EvaluacionSolicitud, {partial: true}),
        },
      },
    })
    evaluacionSolicitud: Partial<EvaluacionSolicitud>,
    @param.query.object('where', getWhereSchemaFor(EvaluacionSolicitud)) where?: Where<EvaluacionSolicitud>,
  ): Promise<Count> {
    return this.solicitudRepository.evaluacionSolicituds(id).patch(evaluacionSolicitud, where);
  }

  @del('/solicituds/{id}/evaluacion-solicituds', {
    responses: {
      '200': {
        description: 'Solicitud.EvaluacionSolicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(EvaluacionSolicitud)) where?: Where<EvaluacionSolicitud>,
  ): Promise<Count> {
    return this.solicitudRepository.evaluacionSolicituds(id).delete(where);
  }
}
