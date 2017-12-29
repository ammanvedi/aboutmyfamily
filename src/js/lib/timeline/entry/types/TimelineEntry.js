import Templating from '../../../Templating.js';
import { GlobalIntersectionObserver } from '../../../IntersectionObserver.js';
import { EVENT, TIMELINE_ENTRY_STATE } from '../../../Constants.js'
import EventManager from '../../../EventManager.js';

export default class TimelineEntry {

  _render() {
    const _self = this;

    _self.element = Templating.render( 'default_entry', {
      entry: _self
    } );

    EventManager.subscribe( _self.element, EVENT.ACTIVATE, _self.activate.bind( _self ) );
    GlobalIntersectionObserver.add( _self.element );
  }

  constructor( data ) {
    const _self = this;

    _self.data = data;
    _self.state = TIMELINE_ENTRY_STATE.INACTIVE;
    _self._render();
  }

  getElement() {
    const _self = this;

    return _self.element;
  }

  activate() {
    const _self = this;

    if( _self.state === TIMELINE_ENTRY_STATE.ACTIVE ) {
      return;
    }

    _self.state = TIMELINE_ENTRY_STATE.ACTIVE;
    console.log( 'did activate element' );
  }

  /**
   * property getters
   */

  getTitle() {
    const _self = this;
    return _self.data.title;
  }

  getDescription() {
    const _self = this;
    return _self.data.description;
  }

  getLeadMedia() {
    const _self = this;
    return _self.data.leadMedia;
  }
}
