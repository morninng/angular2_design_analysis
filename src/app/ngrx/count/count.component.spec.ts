/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CountComponent } from './count.component';

describe('Component: Count', () => {
  it('should create an instance', () => {
    let component = new CountComponent();
    expect(component).toBeTruthy();
  });
});
