/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TemplateParentComponent } from './template-parent.component';

describe('Component: TemplateParent', () => {
  it('should create an instance', () => {
    let component = new TemplateParentComponent();
    expect(component).toBeTruthy();
  });
});
