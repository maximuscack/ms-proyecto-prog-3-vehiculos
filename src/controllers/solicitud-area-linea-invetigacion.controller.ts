import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitud,
  AreaLineaInvetigacion,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudAreaLineaInvetigacionController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/area-linea-invetigacion', {
    responses: {
      '200': {
        description: 'AreaLineaInvetigacion belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(AreaLineaInvetigacion)},
          },
        },
      },
    },
  })
  async getAreaLineaInvetigacion(
    @param.path.number('id') id: typeof Solicitud.prototype.id_solicitud,
  ): Promise<AreaLineaInvetigacion> {
    return this.solicitudRepository.areaLineaInvetigacion(id);
  }
}
