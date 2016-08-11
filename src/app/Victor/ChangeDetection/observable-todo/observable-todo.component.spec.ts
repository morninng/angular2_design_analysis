/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ObservableTodoComponent } from './observable-todo.component';

describe('Component: ObservableTodo', () => {
  it('should create an instance', () => {
    let component = new ObservableTodoComponent();
    expect(component).toBeTruthy();
  });
});
