import { entryFactory } from './entry/EntryFactory.js';


/**
 * describes the overall timeline
 */
export default class Timeline {

  /**
   * call the instance factory to get instances of the
   * timeline entries
   */
  _createInstances() {
    const _self = this;

    _self.timelineEntries = _self.data.entries.map( ( entry ) => {
      const instance = entryFactory( entry );
      _self.container.appendChild( instance.getElement() );
      return instance;
    } );

  }

  /**
   * Construct the instance basd on the json data
   * the format of this data can be found in the
   * timeline.schema.json file
   * @param  {Object} data the timeline data
   * @param {HTMLElement} container where should we render the data
   * @constructor
   */
  constructor( data, container ) {
    const _self = this;

    _self.data = data;
    _self.container = container;
    _self._createInstances();

  }
}
