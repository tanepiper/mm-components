export class Sound {
  context: any;

  oscillator: any;

  oscillatorType: string;

  gainNode: any;

  constructor(context, oscillatorType) {
    this.context = context;
    this.oscillatorType = oscillatorType;
  }

  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = this.oscillatorType;
  }

  play({ frequency, time }) {
    this.init();

    this.oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);

    this.oscillator.start(this.context.currentTime);
    this.stop(this.context.currentTime + time);
  }

  stop(time) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + 1);
    this.oscillator.stop(time + 1);
  }
}
