import {Entity, model, property} from '@loopback/repository';

@model()
export class Proponente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_proponente?: number;

  @property({
    type: 'number',
    required: true,
  })
  documento_identidad: number;

  @property({
    type: 'string',
    required: true,
  })
  primer_nombre: string;

  @property({
    type: 'string',
  })
  segundo_nombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  primer_apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  segundo_apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  correo_electronico: string;

  @property({
    type: 'number',
  })
  telefono_celular?: number;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'object',
  })
  foto?: object;


  constructor(data?: Partial<Proponente>) {
    super(data);
  }
}

export interface ProponenteRelations {
  // describe navigational properties here
}

export type ProponenteWithRelations = Proponente & ProponenteRelations;
