import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';

import { Sound } from './sound';

@Component({
  tag: 'mm-keyboard',
  styleUrl: 'mm-keyboard.scss'
})
export class MmKeyboard {

  @Prop() oscillatorType: string;

  @Prop() maxFreq: number;

  @Prop() maxVol: number;

  @Prop() initialFreq: number;

  @Prop() initialVol: number;

  @Prop() disabled: boolean;

  private audioCtx: AudioContext;

  constructor() {
    this.maxFreq = (this.maxFreq && parseFloat(`${this.maxFreq}`)) || 6000;
    this.maxVol = (this.maxVol && parseFloat(`${this.maxVol}`)) || 0.02;
    this.initialFreq = (this.initialFreq && parseFloat(`${this.initialFreq}`)) || 3000;
    this.initialVol = (this.initialVol && parseFloat(`${this.initialVol}`)) || 0.001;
  }

  componentDidLoad() {
    this.audioCtx = new AudioContext();
  }

  @Listen('keyEvents')
  handleKeyPress(event: CustomEvent) {
    console.log('Key was clicked!', event.detail);
    const sound = new Sound(this.audioCtx, this.oscillatorType);
    sound.play(event.detail);
  }

  render() {
    return (
      <div class="mm-keyboard-container">
        <slot name="keys" />
      </div>
    );
  }
}
