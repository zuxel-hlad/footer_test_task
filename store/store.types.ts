import type { IFakeSocialItem, IUser } from '~/types'

export interface IStoreState {
    socials: IFakeSocialItem[]
    loading: boolean
    error: string | null
    subscriber: null | IUser
    alert: boolean
}
