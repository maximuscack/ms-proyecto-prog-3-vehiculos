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
  Proponente,
  Solicitud,
} from '../models';
import {ProponenteRepository} from '../repositories';

export class ProponenteSolicitudController {
  constructor(
    @repository(ProponenteRepository) protected proponenteRepository: ProponenteRepository,
  ) { }

  @get('/proponentes/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of Proponente has many Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.proponenteRepository.solicituds(id).find(filter);
  }

  @post('/proponentes/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Proponente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Proponente.prototype.id_proponente,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInProponente',
            exclude: ['id_solicitud'],
            optional: ['proponenteId']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'id_solicitud'>,
  ): Promise<Solicitud> {
    return this.proponenteRepository.solicituds(id).create(solicitud);
  }

  @patch('/proponentes/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Proponente.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.proponenteRepository.solicituds(id).patch(solicitud, where);
  }

  @del('/proponentes/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Proponente.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.proponenteRepository.solicituds(id).delete(where);
  }
}
