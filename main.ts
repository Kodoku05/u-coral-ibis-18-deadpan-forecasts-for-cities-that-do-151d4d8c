import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const forecast = 'Gutterhollow: snow will hang six feet above Market Street until noon; double-decker buses are diverted while council gritters await developments.';

if (forecast.length === 0 || forecast.length > 160 ||
    !/^[\x20-\x7e]+$/.test(forecast) || forecast.trim() !== forecast) {
  throw new Error('Forecast must be 1 to 160 printable ASCII characters with no edge whitespace.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), forecast, 'utf8');
