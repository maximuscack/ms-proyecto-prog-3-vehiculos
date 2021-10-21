import {Entity, model, property, hasMany} from '@loopback/repository';
import {AreaLineaInvetigacion} from './area-linea-invetigacion.model';
import {JuradosxInvestigacion} from './juradosx-investigacion.model';

@model()
export class Jurados extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_jurado?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  correo_electronico: string;

  @hasMany(() => AreaLineaInvetigacion, {through: {model: () => JuradosxInvestigacion, keyFrom: 'id_jurados', keyTo: 'id_area_investigacion'}})
  areaLineaInvetigacions: AreaLineaInvetigacion[];

  constructor(data?: Partial<Jurados>) {
    super(data);
  }
}

export interface JuradosRelations {
  // describe navigational properties here
}

export type JuradosWithRelations = Jurados & JuradosRelations;
