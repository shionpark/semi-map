import { mockPlaces } from '@/data/mockPlaces';
import type { LatLng } from '@/types/location';
import type { Place, PlaceCategory, PlaceSortOptionValue } from '@/types/place';
import { calculateDistanceMeters } from '@/utils/location.utils';

export interface FetchPlacesParams {
  keyword?: string;
  category?: PlaceCategory;
  sort?: PlaceSortOptionValue;
  origin?: LatLng;
  take?: number;
}

const normalizeText = (value: string) =>
  value.toLowerCase().replace(/\s+/g, '');

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchPlaces({
  keyword = '',
  category = 'all',
  sort = 'distance',
  origin,
  take,
}: FetchPlacesParams = {}): Promise<Place[]> {
  await delay(250);

  let placesWithDistance = mockPlaces.map((place) => {
    const distance = origin
      ? calculateDistanceMeters(origin, {
          lat: place.lat,
          lng: place.lng,
        })
      : place.distanceMeters;

    return {
      ...place,
      distanceMeters: distance,
    };
  });

  if (category !== 'all') {
    placesWithDistance = placesWithDistance.filter(
      (place) => place.category === category
    );
  }

  if (keyword) {
    const normalizedKeyword = normalizeText(keyword);
    placesWithDistance = placesWithDistance.filter((place) =>
      normalizeText(place.name).includes(normalizedKeyword)
    );
  }

  if (sort === 'distance') {
    placesWithDistance.sort((a, b) => a.distanceMeters - b.distanceMeters);
  }

  if (sort === 'rating') {
    placesWithDistance.sort((a, b) => b.rating - a.rating);
  }

  if (take) {
    placesWithDistance = placesWithDistance.slice(0, take);
  }

  return placesWithDistance;
}
