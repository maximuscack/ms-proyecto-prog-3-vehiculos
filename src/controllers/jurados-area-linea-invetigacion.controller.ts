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
Jurados,
JuradosxInvestigacion,
AreaLineaInvetigacion,
} from '../models';
import {JuradosRepository} from '../repositories';

export class JuradosAreaLineaInvetigacionController {
  constructor(
    @repository(JuradosRepository) protected juradosRepository: JuradosRepository,
  ) { }

  @get('/jurados/{id}/area-linea-invetigacions', {
    responses: {
      '200': {
        description: 'Array of Jurados has many AreaLineaInvetigacion through JuradosxInvestigacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(AreaLineaInvetigacion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<AreaLineaInvetigacion>,
  ): Promise<AreaLineaInvetigacion[]> {
    return this.juradosRepository.areaLineaInvetigacions(id).find(filter);
  }

  @post('/jurados/{id}/area-linea-invetigacions', {
    responses: {
      '200': {
        description: 'create a AreaLineaInvetigacion model instance',
        content: {'application/json': {schema: getModelSchemaRef(AreaLineaInvetigacion)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Jurados.prototype.id_jurado,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaLineaInvetigacion, {
            title: 'NewAreaLineaInvetigacionInJurados',
            exclude: ['id_linea_investigacion'],
          }),
        },
      },
    }) areaLineaInvetigacion: Omit<AreaLineaInvetigacion, 'id_linea_investigacion'>,
  ): Promise<AreaLineaInvetigacion> {
    return this.juradosRepository.areaLineaInvetigacions(id).create(areaLineaInvetigacion);
  }

  @patch('/jurados/{id}/area-linea-invetigacions', {
    responses: {
      '200': {
        description: 'Jurados.AreaLineaInvetigacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaLineaInvetigacion, {partial: true}),
        },
      },
    })
    areaLineaInvetigacion: Partial<AreaLineaInvetigacion>,
    @param.query.object('where', getWhereSchemaFor(AreaLineaInvetigacion)) where?: Where<AreaLineaInvetigacion>,
  ): Promise<Count> {
    return this.juradosRepository.areaLineaInvetigacions(id).patch(areaLineaInvetigacion, where);
  }

  @del('/jurados/{id}/area-linea-invetigacions', {
    responses: {
      '200': {
        description: 'Jurados.AreaLineaInvetigacion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(AreaLineaInvetigacion)) where?: Where<AreaLineaInvetigacion>,
  ): Promise<Count> {
    return this.juradosRepository.areaLineaInvetigacions(id).delete(where);
  }
}
