export type TPhoto = {
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

export type TPhotoMars = {
    id: number
    img_src: string
    camera: {
        full_name: string
    }
}



interface IState {
    photoOfDay: TPhoto | null
    marsPhoto: TPhotoMars[] | null
    page: number,
    loading: boolean
}

export const state: IState = {
    photoOfDay: null,
    loading: false,
    page: 0,
    marsPhoto: null
}
  
export type State = typeof state