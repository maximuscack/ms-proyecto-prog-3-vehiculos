import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  EvaluacionSolicitud,
  Jurados,
} from '../models';
import {EvaluacionSolicitudRepository} from '../repositories';

export class EvaluacionSolicitudJuradosController {
  constructor(
    @repository(EvaluacionSolicitudRepository)
    public evaluacionSolicitudRepository: EvaluacionSolicitudRepository,
  ) { }

  @get('/evaluacion-solicituds/{id}/jurados', {
    responses: {
      '200': {
        description: 'Jurados belonging to EvaluacionSolicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Jurados)},
          },
        },
      },
    },
  })
  async getJurados(
    @param.path.number('id') id: typeof EvaluacionSolicitud.prototype.id_E,
  ): Promise<Jurados> {
    return this.evaluacionSolicitudRepository.jurados(id);
  }
}
