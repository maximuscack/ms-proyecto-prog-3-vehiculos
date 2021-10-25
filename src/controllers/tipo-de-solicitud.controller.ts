import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TiposSolicitud} from '../models';
import {TiposSolicitudRepository} from '../repositories';

export class TipoDeSolicitudController {
  constructor(
    @repository(TiposSolicitudRepository)
    public tiposSolicitudRepository : TiposSolicitudRepository,
  ) {}

  @post('/tipos-solicituds')
  @response(200, {
    description: 'TiposSolicitud model instance',
    content: {'application/json': {schema: getModelSchemaRef(TiposSolicitud)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TiposSolicitud, {
            title: 'NewTiposSolicitud',
            exclude: ['id_tipos_de_solicitud'],
          }),
        },
      },
    })
    tiposSolicitud: Omit<TiposSolicitud, 'id'>,
  ): Promise<TiposSolicitud> {
    return this.tiposSolicitudRepository.create(tiposSolicitud);
  }

  @get('/tipos-solicituds/count')
  @response(200, {
    description: 'TiposSolicitud model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TiposSolicitud) where?: Where<TiposSolicitud>,
  ): Promise<Count> {
    return this.tiposSolicitudRepository.count(where);
  }

  @get('/tipos-solicituds')
  @response(200, {
    description: 'Array of TiposSolicitud model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TiposSolicitud, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TiposSolicitud) filter?: Filter<TiposSolicitud>,
  ): Promise<TiposSolicitud[]> {
    return this.tiposSolicitudRepository.find(filter);
  }

  @patch('/tipos-solicituds')
  @response(200, {
    description: 'TiposSolicitud PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TiposSolicitud, {partial: true}),
        },
      },
    })
    tiposSolicitud: TiposSolicitud,
    @param.where(TiposSolicitud) where?: Where<TiposSolicitud>,
  ): Promise<Count> {
    return this.tiposSolicitudRepository.updateAll(tiposSolicitud, where);
  }

  @get('/tipos-solicituds/{id}')
  @response(200, {
    description: 'TiposSolicitud model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TiposSolicitud, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TiposSolicitud, {exclude: 'where'}) filter?: FilterExcludingWhere<TiposSolicitud>
  ): Promise<TiposSolicitud> {
    return this.tiposSolicitudRepository.findById(id, filter);
  }

  @patch('/tipos-solicituds/{id}')
  @response(204, {
    description: 'TiposSolicitud PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TiposSolicitud, {partial: true}),
        },
      },
    })
    tiposSolicitud: TiposSolicitud,
  ): Promise<void> {
    await this.tiposSolicitudRepository.updateById(id, tiposSolicitud);
  }

  @put('/tipos-solicituds/{id}')
  @response(204, {
    description: 'TiposSolicitud PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tiposSolicitud: TiposSolicitud,
  ): Promise<void> {
    await this.tiposSolicitudRepository.replaceById(id, tiposSolicitud);
  }

  @del('/tipos-solicituds/{id}')
  @response(204, {
    description: 'TiposSolicitud DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tiposSolicitudRepository.deleteById(id);
  }
}
