import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'mm-key',
  styleUrl: 'mm-key.scss'
})
export class MmKey {
  @Prop() key: string;

  @Prop() frequency: number;

  @Prop() gain: number;

  @Event() keyEvents: EventEmitter;

  @Listen('click')
  handleClick(event: CustomEvent) {
    this.playKey(event);
  }

  @Listen('keydown')
  handleKeyDown(event: CustomEvent) {
    this.playKey(event);
  }

  render() {
    return (
      <div class="mm-key-container">
        <div class="key" data-key={this.key} id={this.key} />
      </div>
    );
  }

  playKey(e) {
    const { frequency, gain } = this;
    this.keyEvents.emit({ key: e, frequency, gain });
  }
}
