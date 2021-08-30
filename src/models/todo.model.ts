import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'string',
    required: true,
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @property({
    type: 'boolean',
    required: true,
  })
  completed: boolean;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
}

export type TodoWithRelations = Todo & TodoRelations;
