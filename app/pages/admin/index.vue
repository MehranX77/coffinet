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

interface requestType {
    data:any
}

const {data:result, error} = await useFetch<requestType>('/api/requests')
console.log('ressss:', result);

if (error?.value) {
     showError({
        data:error.value.data
    })
}

console.log(error.value?.data);


</script>