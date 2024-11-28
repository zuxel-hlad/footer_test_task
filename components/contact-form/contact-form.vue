<template>
    <form class="w-full" @submit="onSubmit">
        <div class="mb-[55px] flex w-full flex-col gap-11 lg:flex-row">
            <div class="w-full">
                <input v-model="userName" v-bind="userNameAttrs" type="text" placeholder="Ваше имя" class="w-full rounded-[37px] px-9 py-4 text-lg" />
                <span v-if="errors.userName" class="text-sm text-primary">{{ errors.userName }}</span>
            </div>
            <div class="w-full">
                <input v-model="userPhone" v-bind="userPhoneAttrs" type="text" placeholder="Ваш телефон" class="w-full rounded-[37px] px-9 py-4 text-lg" />
                <span v-if="errors.userPhone" class="text-sm text-primary">{{ errors.userPhone }}</span>
            </div>
        </div>
        <div class="flex flex-col items-start gap-11 lg:flex-row">
            <button
                :disabled="!isFormValid || store.loading"
                type="submit"
                class="order-2 whitespace-nowrap rounded-[37px] bg-primary px-16 py-4 text-lg text-white transition-colors hover:bg-white hover:text-primary active:bg-white active:text-primary disabled:pointer-events-none disabled:bg-gray-400 lg:order-1"
            >
                {{ store.loading ? 'Відправка ...' : 'Записатись' }}
            </button>
            <span class="order-1 block w-3/5 text-lg lg:order-2">Наш менеджер звʼяжеться з вами протягом дня</span>
        </div>
    </form>
    <app-alert v-if="store.error && store.alert" type="error" @close="store.handleCloseAlert">
        <span>{{ store.error }}</span>
    </app-alert>
    <app-alert v-if="store.subscriber && store.alert" type="success" @close="store.handleCloseAlert">
        <div>
            <h6 class="font-bold">Успіх!</h6>
            <span class="block">Ваша підписка оформлена!</span>
            <span class="block">Ваще імʼя: {{ store.subscriber.name }}</span>
            <span class="block">Ваш телефон: {{ store.subscriber.phone }}</span>
        </div>
    </app-alert>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate'

import { validationSchema } from './validationSchema'

import appAlert from '@/components/UI/app-alert/app-alert.vue'
import { useFooterStore } from '~/store'

const store = useFooterStore()

const { errors, defineField, handleSubmit, resetForm } = useForm(validationSchema)
const [userName, userNameAttrs] = defineField('userName')
const [userPhone, userPhoneAttrs] = defineField('userPhone')

const isFormValid = computed(() => Object.keys(errors.value).length === 0 && userName.value?.length && userPhone.value?.length)
const onSubmit = handleSubmit(({ userPhone, userName }) => {
    store.addNewSubscriber(userName, userPhone)
    resetForm()
})
</script>
