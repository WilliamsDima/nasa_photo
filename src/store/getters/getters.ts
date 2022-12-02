import { TPhoto } from './../state';
import { GetterTree } from 'vuex'
import { State } from '../state'

export type Getters = {
    searchList(state: State): null
}

export const getters: GetterTree<State, State> & Getters = {
    searchList(state: State) {
        return null
        // return [...state.items].filter(item => item.title.toLowerCase().includes(state.searchValue.toLowerCase()))
    }
}