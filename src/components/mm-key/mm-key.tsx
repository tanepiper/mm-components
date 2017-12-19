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

  @Event() mmKeyPress: EventEmitter;

  @Listen('click')
  handleClick(event: CustomEvent) {
    this.playKey();
  }

  @Listen('keydown')
  handleKeydown(event: KeyboardEvent) {
    console.log('Key pressed', event, this.key);
    if (event.key.toLowerCase() === this.key.toLowerCase()) {
      this.playKey();
    }
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

  playKey() {
    const { frequency, time } = this;
    this.mmKeyPress.emit({ frequency, time });
  }
}
