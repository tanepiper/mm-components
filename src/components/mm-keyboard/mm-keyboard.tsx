import { Component, Prop, Listen, Event, EventEmitter, State } from '@stencil/core';
import { MmContext } from '../mm-context/mm-context';
import { MMAudioContext } from '../mm-context/AudioContext';

import { Sound } from './sound';

@Component({
  tag: 'mm-keyboard',
  styleUrl: 'mm-keyboard.scss'
})
export class MmKeyboard {
  @Prop({ connect: 'mm-context' })
  mmContext: MmContext;

  @Prop() oscillatorType: string;

  @Prop() maxFreq: number;

  @Prop() maxVol: number;

  @Prop() initialFreq: number;

  @Prop() initialVol: number;

  @Prop() disabled: boolean;

  @State() keys: Array<Element>;

  private audioCtx: any;

  private _oscillatorType: string;

  constructor() {
    this.maxFreq = (this.maxFreq && parseFloat(`${this.maxFreq}`)) || 6000;
    this.maxVol = (this.maxVol && parseFloat(`${this.maxVol}`)) || 0.02;
    this.initialFreq = (this.initialFreq && parseFloat(`${this.initialFreq}`)) || 3000;
    this.initialVol = (this.initialVol && parseFloat(`${this.initialVol}`)) || 0.001;
  }

  async componentDidLoad() {
    this._oscillatorType = this.oscillatorType;
    this.keys = Array.from(document.querySelectorAll('mm-key'));
    this.audioCtx = await this.mmContext.create();
  }

  @Listen('keydown')
  async handleKeydown(event: KeyboardEvent) {
    const key: any = this.keys.find((el: any) => el.key.toLowerCase() === event.key.toLowerCase());
    if (key) {
      key.playKey();
    }
  }

  @Listen('mmKey')
  async handleKeyEventr(event: CustomEvent) {
    const sound = new Sound(await this.audioCtx.context, this._oscillatorType);
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
