<template>
    <div
        class="xl:w-[65%] w-[95%] flex justify-between bg-white dark:bg-slate-800 p-4 rounded-xl mx-auto mt-5 shadow-2xl shadow-slate-300/30 dark:shadow-slate-900">
        <ClientOnly>
            <template #default>
                <UUser :name="adminAuth?.username || 'مدیر سایت'" description="مدیر" size="xl"
                    :avatar="{ src: 'banner.jpg', chip: true }" />
            </template>
            <template #fallback>
                <USkeleton class="rounded-full w-12 h-12"/>
            </template>
        </ClientOnly>
        <!-- desktop mode -->
        <div class="md:flex hidden gap-x-3">
            <UColorModeButton color="secondary" variant="soft" class="self-center" />
            <UTooltip text="بارگذاری مجدد" arrow>
                <UButton icon="solar:refresh-linear" class="self-center" variant="soft" color="neutral"
                    @click="refreshPage" />
            </UTooltip>
            <UTooltip text="خروج" arrow>
                <UButton icon="solar:logout-linear" class="self-center" color="error" variant="ghost" @click="logout" />
            </UTooltip>
        </div>
        <!-- mobile mode -->
        <UPopover mode="click" enable-touch arrow class="md:hidden block">
            <UButton icon="solar:hamburger-menu-linear" variant="ghost" color="neutral" class="self-center" />
            <template #content>
                <div class="flex flex-col gap-y-3 p-4">
                    <UColorModeButton color="secondary" variant="subtle" class="self-center w-25 place-content-center"
                        :ui="{ base: 'py-2' }" />
                    <UButton icon="solar:refresh-linear" class="self-center w-25 place-content-center"
                        :ui="{ base: 'py-2' }" color="neutral" @click="refreshPage" />
                    <UButton icon="solar:logout-linear" class="self-center w-25 place-content-center"
                        :ui="{ base: 'py-2' }" color="error" variant="ghost" @click="logout" />
                </div>
            </template>
        </UPopover>
    </div>
</template>

<script setup lang="ts">
const refreshPage = () => {
    if (import.meta.client) {
        window.navigation.reload({
            info: 'page reloaded',
            state: 'page reloaded'
        })
    }
}

const { adminAuth } = useAuth()

const logout = async () => {
    try {
        const response = await $fetch('/api/logout')
        console.log(response);
        return navigateTo('/admin/auth')

    } catch (error: any) {
        console.log(error.data);

    }
}
</script>