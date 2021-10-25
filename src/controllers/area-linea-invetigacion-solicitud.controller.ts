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
  AreaLineaInvetigacion,
  Solicitud,
} from '../models';
import {AreaLineaInvetigacionRepository} from '../repositories';

export class AreaLineaInvetigacionSolicitudController {
  constructor(
    @repository(AreaLineaInvetigacionRepository) protected areaLineaInvetigacionRepository: AreaLineaInvetigacionRepository,
  ) { }

  @get('/area-linea-invetigacions/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of AreaLineaInvetigacion has many Solicitud',
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
    return this.areaLineaInvetigacionRepository.solicituds(id).find(filter);
  }

  @post('/area-linea-invetigacions/{id}/solicituds', {
    responses: {
      '200': {
        description: 'AreaLineaInvetigacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AreaLineaInvetigacion.prototype.id_linea_investigacion,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInAreaLineaInvetigacion',
            exclude: ['id_solicitud'],
            optional: ['areaLineaInvetigacionId']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'id_solicitud'>,
  ): Promise<Solicitud> {
    return this.areaLineaInvetigacionRepository.solicituds(id).create(solicitud);
  }

  @patch('/area-linea-invetigacions/{id}/solicituds', {
    responses: {
      '200': {
        description: 'AreaLineaInvetigacion.Solicitud PATCH success count',
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
    return this.areaLineaInvetigacionRepository.solicituds(id).patch(solicitud, where);
  }

  @del('/area-linea-invetigacions/{id}/solicituds', {
    responses: {
      '200': {
        description: 'AreaLineaInvetigacion.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.areaLineaInvetigacionRepository.solicituds(id).delete(where);
  }
}
