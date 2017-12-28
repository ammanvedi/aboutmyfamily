import 'types/TimelineEntryFeatured.js';
import 'types/TimelineEntryHero.js';
import 'types/TimelineEntryText.js';
import { TIMELINE_ENTRY_TYPE } from '../../Constants.js';

/**
 * Get an instance of a timeline entry
 * @param  {Object} entryData the timeline data from the JSON structure
 * @return {TimelineEntry} a timeline entry class instance
 */
const entryFactory = function( entryData ) {
  switch( entryData.type ) {
    case TIMELINE_ENTRY_TYPE.FEATURED:
      return new TimelineEntryFeatured( entryData );
    case TIMELINE_ENTRY_TYPE.HERO:
      return new TimelineEntryHero( entryData );
    case TIMELINE_ENTRY_TYPE.TEXT:
      return new TimelineEntryText( entryData );
  }
}

export { entryFactory }
