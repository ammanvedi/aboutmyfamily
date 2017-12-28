import myClass from './lib/lib.js';
import Templating from './lib/Templating.js';

const x = new myClass();

document.body.appendChild( Templating.render( 'template', {
  modelProp: 'hahahahahahhahah'
} ) );
