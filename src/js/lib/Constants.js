export const TIMELINE_ENTRY_TYPE = {
  HERO: 'timeline/hero',
  TEXT: 'timeline/text',
  FEATURED: 'timeline/featured'
};

export const EVENT = {
  ACTIVATE: 'event/activate'
};

export const INTERSECTION_OBSERVER_CONFIG = {
  root: null,
  rootMargin: '0px',
  threshold: [ 0.10 ] // 1% of the element visible
}

export const EVENT_MANAGER_CONFIG = {
  target: document.body
}


export const TIMELINE_ENTRY_STATE = {
  INACTIVE: 'entry/inactive',
  ACTIVE: 'entry/active'
}
