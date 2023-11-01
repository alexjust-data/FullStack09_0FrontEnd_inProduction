import _ from 'lodash';
import join from 'lodash/join';
import { printConsole } from './app';

const hello = "hola";
const mundo = "mundo"; // Corregir el nombre de la variable

console.log(`${hello} ${mundo}`);
console.log(_.join([hello, mundo]));
console.log(join([hello, mundo]));

printConsole(`${hello} ${mundo}`);
