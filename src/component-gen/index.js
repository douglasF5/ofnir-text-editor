import * as fs from 'fs';
import { component } from './component-template.js';

// Grabbing component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components`;

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// Creating the actual files
// Component
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);