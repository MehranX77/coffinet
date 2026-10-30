<template>
    <div>
        <AdminNavbar />
        <LazyAdminTopCards :data = "result?.data"/>
        <LazyAdminRequestsBox :data = "result?.data"/>
        <LazyAdminSales :data = "result?.data"/>
    </div>
</template>

<script setup lang="ts">
import {LazyAdminChangePasswordModal} from '#components'

definePageMeta({
    layout: {
        name: 'default',
        props: {
            navbar: false
        }
    },
    middleware: 'auth'
})

const overlay = useOverlay()
const modal = overlay.create(LazyAdminChangePasswordModal)

const openChangePasswordModal = async () => {
  await modal.open()
}

onMounted(() => {
    openChangePasswordModal()
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


</script>