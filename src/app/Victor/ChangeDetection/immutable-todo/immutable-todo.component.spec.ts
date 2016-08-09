/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ImmutableTodoComponent } from './immutable-todo.component';

describe('Component: ImmutableTodo', () => {
  it('should create an instance', () => {
    let component = new ImmutableTodoComponent();
    expect(component).toBeTruthy();
  });
});
