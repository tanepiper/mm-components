import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';

import { Sound } from './sound';

@Component({
  tag: 'mm-keyboard',
  styleUrl: 'mm-keyboard.scss'
})
export class MmKeyboard {
  @Prop() maxFreq: number;

  @Prop() maxVol: number;

  @Prop() initialFreq: number;

  @Prop() initialVol: number;

  @Prop() disabled: boolean;

  private audio: any = {};

  constructor() {
    this.maxFreq = (this.maxFreq && parseFloat(`${this.maxFreq}`)) || 6000;
    this.maxVol = (this.maxVol && parseFloat(`${this.maxVol}`)) || 0.02;
    this.initialFreq = (this.initialFreq && parseFloat(`${this.initialFreq}`)) || 3000;
    this.initialVol = (this.initialVol && parseFloat(`${this.initialVol}`)) || 0.001;
  }

  componentDidLoad() {
    this.audio.audioCtx = new AudioContext();
    // this.audio.oscillator = this.audio.audioCtx.createOscillator();
    // this.audio.gainNode = this.audio.audioCtx.createGain();

    // this.audio.oscillator.type = 'square';
    // this.audio.oscillator.frequency.value = this.initialFreq; // value in hertz
    // this.audio.oscillator.detune.value = 100; // value in cents

    // this.audio.gainNode.gain.value = this.initialVol;

    // this.audio.start = () => {
    //   this.audio.oscillator.connect(this.audio.gainNode);
    //   this.audio.gainNode.connect(this.audio.audioCtx.destination);
    //   this.audio.oscillator.start(0);
    // };

    // this.audio.update = ({ frequency, gain }) => {
    //   const currentTime = this.audio.audioCtx.currentTime;
    //   this.audio.oscillator.frequency.value = frequency / (50 * this.maxFreq);
    //   this.audio.gain.setValueAtTime(1, currentTime);
    //   this.audio.gain.exponentialRampToValueAtTime(this.initialVol, gain + currentTime);

    // };

    // if (!this.disabled) {
    //   this.audio.start();
    // }
  }

  @Listen('keyEvents')
  handleKeyPress(event: CustomEvent) {
    console.log('Key was clicked!', event.detail);
    const sound = new Sound(this.audio.audioCtx);
    sound.play(event.detail);
    //this.audio.update(event.detail);
  }

  render() {
    return (
      <div class="mm-keyboard-container">
        <slot name="keys" />
      </div>
    );
  }
}
