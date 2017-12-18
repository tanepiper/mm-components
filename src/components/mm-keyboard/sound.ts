export class Sound {
  context: any;

  oscillator: any;

  gainNode: any;

  constructor(context) {
    this.context = context;
  }

  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sawtooth';
  }

  play({ frequency, time }) {
    this.init();

    this.oscillator.frequency.value = frequency;
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);

    this.oscillator.start(this.context.currentTime);
    this.stop(this.context.currentTime + time);
  }

  stop(time) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, time + 1);
    this.oscillator.stop(time + 1);
  }
}
