import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind4,
} from 'unocss';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  presets: [presetWind4(), presetAttributify(), presetIcons()],
  transformers: [transformerAttributifyJsx()],
});
