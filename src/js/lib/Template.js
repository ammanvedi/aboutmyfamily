import { APPLICATION_CORE } from '../core/ApplicationCore.js';

/**
 * Wrapper class for sa template string
 * @class
 */
export default class Template {
  /**
   * pass in the template string so it can be used later to
   * return a html string
   * @param  {String} name the name of the template
   * @class
   */
  constructor( name ) {
    const _self = this;

    _self.name = name;
    APPLICATION_CORE.TEMPLATE_CACHE[ _self.name ] = _self;

  }

  /**
   * Render the html
   * @param  {Object} model the model to use to construct the instance
   * @return {String} returns the generated string or a console warning
   */
  render( model ) {
    console.warn( 'Template Class: getHtml should be overridden by a sub class' );
  }
}
