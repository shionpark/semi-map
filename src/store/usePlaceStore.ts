import { create } from 'zustand';

import { fetchPlaces } from '@/services/placeService';
import type { FetchPlacesParams } from '@/services/placeService';
import type { LatLng } from '@/types/location';
import type {
  Place,
  PlaceCategory,
  PlaceSortOptionValue,
} from '@/types/place';

type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

interface PlaceFilters {
  keyword: string;
  category: PlaceCategory;
  sort: PlaceSortOptionValue;
}

interface PlaceState {
  places: Place[];
  filters: PlaceFilters;
  lastOrigin: LatLng | null;
  status: AsyncStatus;
  error: string | null;
  setKeyword: (keyword: string) => void;
  setCategory: (category: PlaceCategory) => void;
  setSort: (sort: PlaceSortOptionValue) => void;
  setFilters: (filters: Partial<PlaceFilters>) => void;
  loadPlaces: (params?: Omit<FetchPlacesParams, 'take'>) => Promise<void>;
}

const defaultFilters: PlaceFilters = {
  keyword: '',
  category: 'all',
  sort: 'distance',
};

export const usePlaceStore = create<PlaceState>((set, get) => ({
  places: [],
  filters: defaultFilters,
  lastOrigin: null,
  status: 'idle',
  error: null,
  setKeyword: (keyword) =>
    set((state) => ({
      filters: { ...state.filters, keyword },
    })),
  setCategory: (category) =>
    set((state) => ({
      filters: { ...state.filters, category },
    })),
  setSort: (sort) =>
    set((state) => ({
      filters: { ...state.filters, sort },
    })),
  setFilters: (nextFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...nextFilters },
    })),
  loadPlaces: async (params) => {
    const { filters, lastOrigin } = get();
    const origin = params?.origin ?? lastOrigin ?? null;
    const nextFilters: PlaceFilters = {
      ...filters,
      ...(params?.keyword !== undefined ? { keyword: params.keyword } : {}),
      ...(params?.category !== undefined ? { category: params.category } : {}),
      ...(params?.sort !== undefined ? { sort: params.sort } : {}),
    };

    set({
      status: 'loading',
      error: null,
      filters: nextFilters,
      lastOrigin: origin,
    });

    try {
      const places = await fetchPlaces({
        ...nextFilters,
        origin: origin ?? undefined,
      });

      set({
        places,
        status: 'success',
      });
    } catch (err) {
      set({
        status: 'error',
        error:
          err instanceof Error ? err.message : '장소 정보를 불러오지 못했습니다.',
      });
    }
  },
}));
