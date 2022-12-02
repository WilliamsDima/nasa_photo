import { TPhoto, TPhotoMars } from './../state';
import { MutationTree } from 'vuex'
import { State } from '../state'
import { MutationTypes } from './mutation-types'

export type Mutations<S = State> = {
    [MutationTypes.setMainDay](state: S, items: TPhoto): void,
    [MutationTypes.setLoadind](state: S, value: boolean): void,
    [MutationTypes.setMarsPhoto](state: S, data: TPhotoMars[]): void,
    [MutationTypes.setPage](state: S, page: number): void,
}
  
export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.setMainDay](state, data: TPhoto) {
        state.photoOfDay = data
    },
    [MutationTypes.setLoadind](state, value: boolean) {
        state.loading = value
    },
    [MutationTypes.setMarsPhoto](state, data: TPhotoMars[]) {
        state.marsPhoto = data
    },
    [MutationTypes.setPage](state, page: number) {
        state.page = page
    },
}
