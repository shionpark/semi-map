export const DEFAULT_LAT = 37.5642135;
export const DEFAULT_LNG = 127.0016985;

export const PLACE_CATEGORIES = ['all', 'cafe', 'restaurant', 'dessert', 'bar'] as const;

export const PLACE_SORT_OPTIONS = [
  { value: 'distance', label: '거리순' },
  { value: 'rating', label: '평점순' },
] as const;
