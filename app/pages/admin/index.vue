<template>
    <div>
        <AdminNavbar />
        <LazyAdminTopCards :data = "result?.data"/>
        <LazyAdminRequestsBox :data = "result?.data"/>
        <LazyAdminSales :data = "result?.data"/>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: {
        name: 'default',
        props: {
            navbar: false
        }
    },
    middleware: 'auth'
})



const {data:result, error} = await useFetch('/api/requests')

console.log(error.value?.data);


</script>