import { Component, Prop, Listen } from '@stencil/core';

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

  private _oscillatorType: string;

  constructor() {
    this.maxFreq = (this.maxFreq && parseFloat(`${this.maxFreq}`)) || 6000;
    this.maxVol = (this.maxVol && parseFloat(`${this.maxVol}`)) || 0.02;
    this.initialFreq = (this.initialFreq && parseFloat(`${this.initialFreq}`)) || 3000;
    this.initialVol = (this.initialVol && parseFloat(`${this.initialVol}`)) || 0.001;
  }

  componentDidLoad() {
    this._oscillatorType = this.oscillatorType;
    this.audioCtx = new AudioContext();
  }

  @Listen('keyEvents')
  handleKeyEventr(event: CustomEvent) {
    const sound = new Sound(this.audioCtx, this._oscillatorType);
    sound.play(event.detail);
  }

  @Listen('change')
  handleChange(event) {
    this._oscillatorType = event.target.value;
  }

  render() {
    return (
      <div class="mm-keyboard-container">
        <div class="controller">
          <label>Select Wave Form&nbsp;</label>
          <select class="ot">
            <option value="sine">sine</option>
            <option value="square">square</option>
            <option value="sawtooth">sawtooth</option>
            <option value="triangle">triangle</option>
          </select>
        </div>
        <slot />
      </div>
    );
  }
}
