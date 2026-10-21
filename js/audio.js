// Web Audio API Synthesizer (Zero external files needed)
class AudioManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playTone(freq, type = "sine", duration = 0.2, gain = 0.15, startTime = 0) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

      gainNode.gain.setValueAtTime(gain, this.ctx.currentTime + startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playCorrect() {
    this.init();
    if (!this.enabled) return;
    // Pleasant arpeggio: C5, E5, G5, C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, "sine", 0.35, 0.12, idx * 0.08);
    });
  }

  playIncorrect() {
    this.init();
    if (!this.enabled) return;
    // Low dissonant boop
    this.playTone(180, "sawtooth", 0.3, 0.12, 0);
    this.playTone(130, "sawtooth", 0.4, 0.15, 0.12);
  }

  playVictory() {
    this.init();
    if (!this.enabled) return;
    // Triumph fanfare
    const melody = [
      { f: 523.25, t: 0, d: 0.15 },
      { f: 659.25, t: 0.12, d: 0.15 },
      { f: 783.99, t: 0.24, d: 0.15 },
      { f: 1046.50, t: 0.36, d: 0.45 },
      { f: 880.00, t: 0.70, d: 0.15 },
      { f: 1046.50, t: 0.85, d: 0.60 }
    ];
    melody.forEach(m => this.playTone(m.f, "triangle", m.d, 0.15, m.t));
  }

  playPop() {
    this.init();
    if (!this.enabled) return;
    this.playTone(600, "sine", 0.08, 0.08, 0);
  }

  playHeartLost() {
    this.init();
    if (!this.enabled) return;
    this.playTone(320, "sine", 0.25, 0.15, 0);
    this.playTone(240, "sine", 0.35, 0.15, 0.15);
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

export const audio = new AudioManager();
