import { Component, Prop, Event, EventEmitter, Listen, Method } from '@stencil/core';

@Component({
  tag: 'mm-key',
  styleUrl: 'mm-key.scss'
})
export class MmKey {
  @Prop() key: string;

  @Prop() title: string;

  @Prop() frequency: number;

  @Prop() time: number;

  @Prop() className: string;

  @Event() mmKey: EventEmitter;

  @Listen('mousedown')
  handleMouseDown() {
    this.playKey();
  }

  render() {
    return (
      <button
        class={`key ${this.className}`}
        data-key={this.key}
        id={this.key}
        title={this.title || `${this.frequency}`}
      />
    );
  }

  @Method()
  playKey() {
    const { frequency, time } = this;
    this.mmKey.emit({ frequency, time });
  }
}
