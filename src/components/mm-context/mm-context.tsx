import { Component, Prop, Method, State } from '@stencil/core';

import { MMAudioContext } from './AudioContext';

@Component({
  tag: 'mm-context'
})
export class MmContext {
  @State() _context: MMAudioContext;

  @Prop() alternativeContext: AudioContext;

  @Method()
  create(): Promise<MMAudioContext> {
    this._context = this._context || new MMAudioContext(this.alternativeContext)  || new MMAudioContext();
    return new Promise(resolve => resolve(this._context));
  }

  render() {
    return <slot />;
  }
}
