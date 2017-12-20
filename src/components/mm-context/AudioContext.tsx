export class MMAudioContext {
  public audioContext: AudioContext;

  constructor(context?: AudioContext) {
    this.audioContext = context || new AudioContext();
  }

  getData(): AudioContext {
    return this.audioContext;
  }

  get context() {
    return this.audioContext;
  }
}
