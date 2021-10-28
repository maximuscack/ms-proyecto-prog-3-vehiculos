import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_jurados: {
        name: 'fk_jurados',
        entity: 'jurados',
        entityKey: 'id',
        foreignKey: 'id_jurados',
      },
      fk_area_deinvesstigacion: {
        name: 'fk_area_deinvesstigacion',
        entity: 'area-linea-investigacion',
        entityKey: 'id',
        foreignKey: 'areaLineaInvetigacionId',
      },
    },
  },
})
export class JuradosxInvestigacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_JxI?: number;

  @property({
    type: 'number',
  })
  id_jurados?: number;

  @property({
    type: 'number',
  })
  id_area_investigacion?: number;

  @property({
    type: 'number',
  })
  juradosId?: number;

  @property({
    type: 'number',
  })
  areaLineaInvetigacionId?: number;

  constructor(data?: Partial<JuradosxInvestigacion>) {
    super(data);
  }
}

export interface JuradosxInvestigacionRelations {
  // describe navigational properties here
}

export type JuradosxInvestigacionWithRelations = JuradosxInvestigacion & JuradosxInvestigacionRelations;
