import { EVENT_MANAGER_CONFIG } from './Constants.js';

/**
 * [EventManager description]
 */
class EventManager {
  /**
   * [constructor description]
   * @param  {[type]} config [description]
   * @return {[type]}        [description]
   */
  constructor( config ) {
    const _self = this;
    _self.config = { ...EVENT_MANAGER_CONFIG, ...config || {} };
  }

  /**
   * [subscribe description]
   * @return {[type]} [description]
   */
  subscribe( target, eventName, callback ) {
    const _self = this;
     ( target || _self.config.target ).addEventListener( eventName, callback );
  }

  /**
   * [notify description]
   * @return {[type]} [description]
   */
  notify( target, eventName, data ) {
    const _self = this;

    const customEvent = new CustomEvent( eventName, {
      detail: data || {}
    } );
    ( target || _self.config.target ).dispatchEvent( customEvent );
  }
}

export default new EventManager();
