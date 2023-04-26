/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'unocss/vite';
import {
  presetWind,
  presetAttributify,
  transformerAttributifyJsx,
  transformerVariantGroup,
  transformerDirectives,
} from 'unocss';
import unoPreset from './src/unoPreset';

export default defineConfig({
  presets: [presetWind(), presetAttributify(), unoPreset()],
  transformers: [transformerAttributifyJsx(), transformerVariantGroup(), transformerDirectives()],
  layers: { myPreflightLayer: 4 },
});
