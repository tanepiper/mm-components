import { Component, Prop, Event, EventEmitter, Listen, Method } from '@stencil/core';

import { MMAudioContext } from './AudioContext';

@Component({
  tag: 'mm-context'
})
export class MmContext {
  public _context: MMAudioContext;

  @Prop() alternativeContext: AudioContext;

  @Method()
  create(): Promise<MMAudioContext> {
    this._context = new MMAudioContext(this.alternativeContext) || this._context || new MMAudioContext();
    return new Promise(resolve => resolve(this._context));
  }

  render() {
    return <slot />;
  }
}
