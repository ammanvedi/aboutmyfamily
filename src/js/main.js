import './lib/Vendor.js';
import myClass from './lib/lib.js';
import Templating from './lib/Templating.js';
import { data } from './resource/data/timeline.js';
import Timeline from './lib/timeline/Timeline.js';

const x = new myClass();

document.body.appendChild( Templating.render( 'template', {
  modelProp: 'hahahahahahhahah'
} ) );

new Timeline( data, document.body );
