import { TIMELINE_ENTRY_TYPE } from '../../lib/Constants.js';

export const data = {
  name: 'Surinder Vedi',
  description: 'this is the description',
  entries: [
    {
      type: TIMELINE_ENTRY_TYPE.HERO,
      title: 'this is the main title',
      description: 'this is the main description'
    },
    {
      type: TIMELINE_ENTRY_TYPE.TEXT,
      title: 'this is the text title',
      description: 'this is the text description'
    },
    {
      type: TIMELINE_ENTRY_TYPE.FEATURED,
      title: 'this is the featured title',
      description: 'this is the featured description'
    }
  ]
}
