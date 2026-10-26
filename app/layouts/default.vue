<template>
    <Navbar v-if="navbar"/>
    <slot />
</template>

<script setup lang="ts">
defineProps<{
    navbar: boolean,
}>()
</script>