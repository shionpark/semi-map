import type { PLACE_CATEGORIES, PLACE_SORT_OPTIONS } from '@/const';

export type PlaceCategory = (typeof PLACE_CATEGORIES)[number];
export type PlaceSortOptionValue =
  (typeof PLACE_SORT_OPTIONS)[number]['value'];

export interface Place {
  id: string;
  name: string;
  category: PlaceCategory;
  lat: number;
  lng: number;
  address: string;
  phone?: string;
  distanceMeters: number;
  rating: number;
  reviewCount?: number;
  imageUrl?: string;
  description?: string;
  kakaoMapUrl?: string;
  naverMapUrl?: string;
  tags?: string[];
}
