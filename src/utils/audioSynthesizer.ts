// Pure Web Audio API Synthesizer for ambient calming frequency (432 Hz) & relaxation chimes
class CalmingAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private lfo: OscillatorNode | null = null;
  private isPlaying: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleAmbience(volume: number = 0.15): boolean {
    if (this.isPlaying) {
      this.stopAmbience();
      return false;
    } else {
      this.startAmbience(volume);
      return true;
    }
  }

  public startAmbience(volume: number = 0.15) {
    this.initContext();
    if (!this.ctx) return;

    this.stopAmbience();

    try {
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(volume, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Warm 432Hz root tone (calming frequency)
      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(432, this.ctx.currentTime);

      // Subtle overtone (theta wave binaural beat offset ~ 437.5Hz -> 5.5Hz Theta trance state)
      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(437.5, this.ctx.currentTime);

      // Warm filter to soften harmonics
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, this.ctx.currentTime);

      // Gentle LFO for breathing wave feeling
      this.lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      this.lfo.frequency.setValueAtTime(0.1, this.ctx.currentTime); // 10 second gentle wave
      lfoGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      this.lfo.connect(lfoGain.gain);

      this.osc1.connect(filter);
      this.osc2.connect(filter);
      filter.connect(this.masterGain);

      this.osc1.start();
      this.osc2.start();
      this.lfo.start();
      this.isPlaying = true;
    } catch (e) {
      console.warn('Could not start audio synthesizer:', e);
    }
  }

  public stopAmbience() {
    if (!this.ctx || !this.isPlaying) return;
    try {
      if (this.masterGain) {
        this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);
        setTimeout(() => {
          try {
            this.osc1?.stop();
            this.osc2?.stop();
            this.lfo?.stop();
            this.osc1?.disconnect();
            this.osc2?.disconnect();
            this.lfo?.disconnect();
            this.masterGain?.disconnect();
          } catch (_) {}
          this.isPlaying = false;
        }, 1500);
      } else {
        this.isPlaying = false;
      }
    } catch (e) {
      this.isPlaying = false;
    }
  }

  public playSingingBowlBell() {
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, now); // 528Hz Solfeggio Love/Repair tone

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 4.1);
    } catch (e) {
      // safe fallback
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const calmingAudio = new CalmingAudioEngine();
