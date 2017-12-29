import { EVENT, INTERSECTION_OBSERVER_CONFIG } from './Constants.js';
import EventManager from './EventManager.js';
/**
 * Page wide controller to handle adding elements to the
 * intersection observer
 * @class
 */
class GlobalIntersectionObserverManager {
  /**
   * creates the instance of the observer using the native or
   * polyfill component, this is included through the Vendors.js file
   */
  constructor() {
    const _self = this;
    _self.observer = new IntersectionObserver( ( entries ) => {

      entries.forEach( ( entry ) => {
        if( entry.isIntersecting && entry.intersectionRatio >= INTERSECTION_OBSERVER_CONFIG.threshold ) {
          // the function will pass when threshold is passed in either a growing
          // or shrinking direction so filter this here
          _self.observer.unobserve( entry.target );
          EventManager.notify( entry.target, EVENT.ACTIVATE );
        }
      } );

    }, INTERSECTION_OBSERVER_CONFIG );
  }

  /**
   * add an entry to the intersection observer
   * @param {HTMLElement} element an element to observe
   */
  add( element ) {
    const _self = this;

    _self.observer.observe( element );
  }


}

export const GlobalIntersectionObserver = new GlobalIntersectionObserverManager();
