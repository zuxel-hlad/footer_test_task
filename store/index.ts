import { defineStore } from 'pinia'

import type { IStoreState } from './store.types'

import { api } from '~/api'

export const useFooterStore = defineStore('footer', {
    state: () =>
        ({
            socials: [],
            subscriber: null,
            loading: false,
            error: null,
            alert: false,
        }) as IStoreState,

    actions: {
        async addNewSubscriber(name: string, phone: string): Promise<void> {
            this.loading = true
            try {
                const newSubscriber = await api.subscribeUs(name, phone)
                this.subscriber = newSubscriber
                this.alert = true
            } catch {
                this.error = 'Ой! Трапилася неочікувана помилка. Спробуйте ще раз.'
                this.alert = true
            } finally {
                this.loading = false
            }
        },

        handleCloseAlert() {
            this.alert = false
        },
    },
})
