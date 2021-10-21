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
  TiposSolicitud,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudTiposSolicitudController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/tipos-solicitud', {
    responses: {
      '200': {
        description: 'TiposSolicitud belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TiposSolicitud)},
          },
        },
      },
    },
  })
  async getTiposSolicitud(
    @param.path.number('id') id: typeof Solicitud.prototype.id_solicitud,
  ): Promise<TiposSolicitud> {
    return this.solicitudRepository.tiene_tipo_solicitud(id);
  }
}
