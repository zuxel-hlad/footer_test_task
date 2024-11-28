<template>
    <div
        class="fixed right-0 top-0 overflow-hidden border-2 border-transparent bg-black p-5 text-white"
        :class="{ '!border-green-500': type === 'success', '!border-red-500': type === 'error' }"
    >
        <slot />
        <button type="button" class="absolute right-0 top-[-10px] p-[10px] text-white" @click="$emit('close')">x</button>
    </div>
</template>
<script setup lang="ts">
defineEmits<{ close: () => void }>()
defineProps<{ type: 'success' | 'error' }>()
</script>
