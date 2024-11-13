import { LocalStorageTypes } from "@/models/localstorage";
import { Person } from "@/models/people";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage.utility";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];


export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavorites: (_, action) => {
          setLocalStorage(LocalStorageTypes.FAVORITES, action.payload)
          return action.payload
        },
        removeFavorite: (state, action) => {
          const filteredState = current(state).filter((p: Person ) => p.id !== action.payload.id)
          setLocalStorage(LocalStorageTypes.FAVORITES, filteredState)
          return filteredState
        }

    }
});
export const {addFavorites, removeFavorite} = favoritesSlice.actions