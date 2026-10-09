// Pulso al tempo del reproductor: lo usan el halo del hero y la mirada del interlude.
// ponytail: va al tempo, no al audio real — SoundCloud no expone el audio (CORS).
export const BPM = 142
const BEAT = 60 / BPM // segundos por negra

export const isPlaying = () => !!document.querySelector('#audio-player .is-spinning')

/** 1 justo en el golpe del kick, decae rápido hasta 0. `t` en segundos. */
export const kick = (t: number) => Math.exp(-(t % BEAT) / 0.09)
