<template>
    <div class="flex w-full flex-wrap gap-11">
        <a
            v-for="({ icon, href }, idx) in fakeData"
            :key="idx"
            class="flex size-16 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition hover:bg-white hover:text-primary active:bg-white active:text-primary"
            :href="href"
        >
            <component :is="icon" class="fill-current transition-colors" />
        </a>
    </div>
</template>
<script setup lang="ts">
import type { IFakeSocialItem } from '~/types'

import FacebookIcon from '@/assets/icons/facebook-icon.svg'
import InstagramIcon from '@/assets/icons/instagram-icon.svg'
import UnknownIcon from '@/assets/icons/unknown-icon.svg'
import XIcon from '@/assets/icons/x-icon.svg'

const fakeData: IFakeSocialItem[] = [
    {
        icon: FacebookIcon,
        href: 'https://www.facebook.com/',
    },
    {
        icon: InstagramIcon,
        href: 'https://www.instagram.com/',
    },
    {
        icon: UnknownIcon,
        href: 'https://google.com/',
    },
    {
        icon: XIcon,
        href: 'https://x.com/',
    },
]
</script>
