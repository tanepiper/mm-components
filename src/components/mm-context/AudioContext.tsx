export class MMAudioContext {
  public audioContext: AudioContext;

  constructor(context?: AudioContext) {
    this.audioContext = context || new AudioContext();
  }

  getData() {
    return this.audioContext;
  }
}
