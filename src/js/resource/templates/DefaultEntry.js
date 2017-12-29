import Template from '../../lib/Template.js';

class TemplateHtml extends Template {
  constructor( name ) {
    super( name );
  }

  /**
   * get the html. This is where you should add custom html
   * @augments Template.getHtml
   * @return {String} get the template html
   */
  render( model ) {
    var html = `

      <div class="timeline-entry">
        ${model.entry.getTitle()}
        ${model.entry.getDescription()}
      </div>

    `;
    return html;
  }
}

export default new TemplateHtml( 'default_entry' );
