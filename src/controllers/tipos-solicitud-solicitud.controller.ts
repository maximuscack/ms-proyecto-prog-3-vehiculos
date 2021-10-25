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
  TiposSolicitud,
  Solicitud,
} from '../models';
import {TiposSolicitudRepository} from '../repositories';

export class TiposSolicitudSolicitudController {
  constructor(
    @repository(TiposSolicitudRepository) protected tiposSolicitudRepository: TiposSolicitudRepository,
  ) { }

  @get('/tipos-solicituds/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of TiposSolicitud has many Solicitud',
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
    return this.tiposSolicitudRepository.solicituds(id).find(filter);
  }

  @post('/tipos-solicituds/{id}/solicituds', {
    responses: {
      '200': {
        description: 'TiposSolicitud model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TiposSolicitud.prototype.id_tipos_de_solicitud,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInTiposSolicitud',
            exclude: ['id_solicitud'],
            optional: ['tiposSolicitudId']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'id_solicitud'>,
  ): Promise<Solicitud> {
    return this.tiposSolicitudRepository.solicituds(id).create(solicitud);
  }

  @patch('/tipos-solicituds/{id}/solicituds', {
    responses: {
      '200': {
        description: 'TiposSolicitud.Solicitud PATCH success count',
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
    return this.tiposSolicitudRepository.solicituds(id).patch(solicitud, where);
  }

  @del('/tipos-solicituds/{id}/solicituds', {
    responses: {
      '200': {
        description: 'TiposSolicitud.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.tiposSolicitudRepository.solicituds(id).delete(where);
  }
}
