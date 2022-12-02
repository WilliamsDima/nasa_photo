import { Mutations } from './../mutatiouns/mutations';
import { ActionTree, ActionContext } from 'vuex'
import { ActionTypes } from './action-types'
import { State } from '../state';
import { MutationTypes } from '../mutatiouns/mutation-types';
import axios from 'axios';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.fetchMain](
        { state, commit }: AugmentedActionContext,
    ): void,
    [ActionTypes.fetchMars](
        { state, commit }: AugmentedActionContext,
    ): void,
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.fetchMain]({ state, commit }) {
        const url = 'https://api.nasa.gov/planetary/apod'
        try {
            commit(MutationTypes.setLoadind, true)

            const { data } = await axios.get(url, {
                params: {
                    api_key: 'fihSEyuP2J0raPRlsENSMrruZlA4Nn4TDz94DqPR'
                }
            })

            console.log('data', data);

            commit(MutationTypes.setMainDay, data)

        } catch (error) {
            console.log('fetchItems', error);
        } finally {
            commit(MutationTypes.setLoadind, false)
        }
    },
    async [ActionTypes.fetchMars]({ state, commit }) {
        const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos'
        try {
            commit(MutationTypes.setLoadind, true)
            commit(MutationTypes.setPage, state.page + 1)

            const { data } = await axios.get(url, {
                params: {
                    sol: 1000,
                    page: state.page,
                    api_key: 'fihSEyuP2J0raPRlsENSMrruZlA4Nn4TDz94DqPR'
                }
            })
 

            if (state.marsPhoto) {
                commit(MutationTypes.setMarsPhoto, [...state.marsPhoto, ...data.photos])
            } else {
                commit(MutationTypes.setMarsPhoto, data.photos)
            }

        } catch (error) {
            console.log('fetchItems', error);
        } finally {
            commit(MutationTypes.setLoadind, false)
        }
    },
}
