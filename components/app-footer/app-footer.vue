<template>
    <footer class="w-full bg-sand-color py-28">
        <div class="mx-auto w-full max-w-[418px] px-3 lg:flex lg:max-w-[1048px] lg:justify-center lg:gap-[75px] xl:max-w-[1464px]">
            <div class="mb-[45px] lg:order-2 lg:max-w-[174px]">
                <socials />
            </div>
            <div class="mb-[62px] flex w-full justify-start lg:order-1 lg:max-w-[210px]">
                <div class="flex w-full flex-wrap gap-[75px] lg:flex-col lg:gap-0">
                    <div class="order-2 lg:order-1 lg:mb-[55px]">
                        <h3 class="text-xl font-bold text-title-color">Телефон</h3>
                        <a href="tel:+1234567" class="block text-lg text-dark">123-45-67</a>
                    </div>
                    <div class="order-1 lg:order-2">
                        <h3 class="text-xl font-bold text-title-color">Электронна пошта</h3>
                        <a href="mailto:email@gmail.com" class="text-lg text-dark">email@gmail.com</a>
                    </div>
                </div>
            </div>
            <div class="w-full lg:order-3 lg:max-w-[510px]">
                <contact-form />
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import contactForm from '@/components/contact-form/contact-form.vue'
import socials from '@/components/socials-block/socials-block.vue'
</script>
