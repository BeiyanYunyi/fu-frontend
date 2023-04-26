import type { Preset } from 'unocss';

const unoPreset = (): Preset => ({
  name: 'unoPreset',
  rules: [
    [
      'nm-flat',
      {
        background: 'linear-gradient(145deg,hsla(0,0%,45%,.15) 15%,#2b2d2f 80%)',
        'box-shadow': '20px 20px 60px #161718, -20px -20px 60px #404346',
      },
    ],
  ],
  preflights: [
    { layer: 'myPreflightLayer', getCSS: () => `:root {background: #2b2d2f;color:#fff;}` },
  ],
});

export default unoPreset;
