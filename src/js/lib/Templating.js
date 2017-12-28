import { APPLICATION_CORE } from '../core/ApplicationCore.js';

// import all template files here
// TODO: automate this in the build process
import { TemplateTest } from '../resource/templates/Template.js';

const Templating = {

  /**
   * Check for template existance and render the content
   * @param  {String} template The name of the template_* file, excluding template_
   * @param  {Object} model Model object
   * @return {HTMLElement|Array.<HTMLElement>|false} the html element or false
   */
  render: function( template, model ) {

    if( !APPLICATION_CORE.TEMPLATE_CACHE[ template ] ) {
      console.warn( 'Templating: template not found in cache, ', template );
    }
    const html = APPLICATION_CORE.TEMPLATE_CACHE[ template ].render( model );
    const temp = document.createElement( 'div' );
    temp.innerHTML = html;
    return temp.children[ 0 ];
  }
};

export default Templating;
