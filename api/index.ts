import type { IUser } from '~/types'

import { BASE_URL } from '~/constants'

export const api = {
    async subscribeUs(name: string, phone: string): Promise<IUser> {
        try {
            const user = await $fetch(`${BASE_URL}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, id: Math.floor(Math.random() * 1001) }),
            })
            return user as IUser
        } catch (error: unknown) {
            if (error !== null && typeof error === 'object' && 'message' in error) {
                console.error(error.message)
            } else {
                console.error(error)
            }
            throw error
        }
    },
}
