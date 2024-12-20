import { Person } from "@/models/people";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice } from "./states/people";
import { favoritesSlice } from "./states/favorites";

export interface AppStore {
    people: Person[],
    favorites: Person[]
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer
    }
})