import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';

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

  @Event() keyEvents: EventEmitter;

  @Listen('click')
  handleClick(event: CustomEvent) {
    this.playKey(event);
  }

  @Listen('keydown')
  handleKeydown(event: CustomEvent) {
    console.log('Key pressed');
    this.playKey(event);
  }

  render() {
    return <div class={`key ${this.className}`} data-key={this.key} id={this.key} title={this.title || `${this.frequency}`} />;
  }

  playKey(e) {
    const { frequency, time } = this;
    this.keyEvents.emit({ key: e, frequency, time });
  }
}
