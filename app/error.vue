<template>
  <UError
    icon="i-lucide-file-x"
    :error="{
            status: props.error?.status,
            statusText:'دسترسی امکان پذیر نیست',
            message:(props.error.data as Record<string, any>)?.message || 'خطایی رخ داده است'
    }"
    :clear="{to:'/admin/auth'}"
  />
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{error: NuxtError}>()

</script>