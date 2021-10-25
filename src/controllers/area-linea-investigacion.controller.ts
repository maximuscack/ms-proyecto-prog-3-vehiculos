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
import {AreaLineaInvetigacion} from '../models';
import {AreaLineaInvetigacionRepository} from '../repositories';

export class AreaLineaInvestigacionController {
  constructor(
    @repository(AreaLineaInvetigacionRepository)
    public areaLineaInvetigacionRepository : AreaLineaInvetigacionRepository,
  ) {}

  @post('/area-linea-invetigacions')
  @response(200, {
    description: 'AreaLineaInvetigacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(AreaLineaInvetigacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaLineaInvetigacion, {
            title: 'NewAreaLineaInvetigacion',
            exclude: ['id_linea_investigacion'],
          }),
        },
      },
    })
    areaLineaInvetigacion: Omit<AreaLineaInvetigacion, 'id'>,
  ): Promise<AreaLineaInvetigacion> {
    return this.areaLineaInvetigacionRepository.create(areaLineaInvetigacion);
  }

  @get('/area-linea-invetigacions/count')
  @response(200, {
    description: 'AreaLineaInvetigacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AreaLineaInvetigacion) where?: Where<AreaLineaInvetigacion>,
  ): Promise<Count> {
    return this.areaLineaInvetigacionRepository.count(where);
  }

  @get('/area-linea-invetigacions')
  @response(200, {
    description: 'Array of AreaLineaInvetigacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AreaLineaInvetigacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AreaLineaInvetigacion) filter?: Filter<AreaLineaInvetigacion>,
  ): Promise<AreaLineaInvetigacion[]> {
    return this.areaLineaInvetigacionRepository.find(filter);
  }

  @patch('/area-linea-invetigacions')
  @response(200, {
    description: 'AreaLineaInvetigacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaLineaInvetigacion, {partial: true}),
        },
      },
    })
    areaLineaInvetigacion: AreaLineaInvetigacion,
    @param.where(AreaLineaInvetigacion) where?: Where<AreaLineaInvetigacion>,
  ): Promise<Count> {
    return this.areaLineaInvetigacionRepository.updateAll(areaLineaInvetigacion, where);
  }

  @get('/area-linea-invetigacions/{id}')
  @response(200, {
    description: 'AreaLineaInvetigacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AreaLineaInvetigacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AreaLineaInvetigacion, {exclude: 'where'}) filter?: FilterExcludingWhere<AreaLineaInvetigacion>
  ): Promise<AreaLineaInvetigacion> {
    return this.areaLineaInvetigacionRepository.findById(id, filter);
  }

  @patch('/area-linea-invetigacions/{id}')
  @response(204, {
    description: 'AreaLineaInvetigacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaLineaInvetigacion, {partial: true}),
        },
      },
    })
    areaLineaInvetigacion: AreaLineaInvetigacion,
  ): Promise<void> {
    await this.areaLineaInvetigacionRepository.updateById(id, areaLineaInvetigacion);
  }

  @put('/area-linea-invetigacions/{id}')
  @response(204, {
    description: 'AreaLineaInvetigacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() areaLineaInvetigacion: AreaLineaInvetigacion,
  ): Promise<void> {
    await this.areaLineaInvetigacionRepository.replaceById(id, areaLineaInvetigacion);
  }

  @del('/area-linea-invetigacions/{id}')
  @response(204, {
    description: 'AreaLineaInvetigacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.areaLineaInvetigacionRepository.deleteById(id);
  }
}
