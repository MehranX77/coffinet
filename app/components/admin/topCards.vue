<template>
    <div class="mx-auto xl:max-w-[65%] max-w-[95%] mt-5">
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <!-- resolved requests -->
            <div
                class="bg-white dark:bg-slate-800 md:py-6 py-4 px-4 rounded-xl flex justify-between  hover:bg-blue-400/10  transition">
                <div class="flex flex-col gap-y-2">
                    <UBadge variant="soft" color="secondary" size="xl" class="self-start">امروز</UBadge>
                    <span class="text-muted text-sm">مجموع درخواست‌های ثبت شده</span>
                    <p class="font-black lg:text-3xl md:text-2xl text-slate-600 dark:text-slate-100 text-lg self-start">
                        {{ requestState.all }}</p>
                </div>
                <div class="bg-blue-500/10 self-center-safe p-3 rounded-xl flex">
                    <UIcon name="solar:document-text-linear" class="text-3xl bg-blue-500" />
                </div>
            </div>
            <div
                class="bg-white dark:bg-slate-800 md:py-6 py-4 px-4 rounded-xl flex justify-between  hover:bg-yellow-400/10  transition">
                <div class="flex flex-col gap-y-2">
                    <UBadge variant="soft" color="warning" size="xl" class="self-start">پردازش</UBadge>
                    <span class="text-muted text-sm"> درخواست‌های در حال پردازش</span>
                    <p class="font-black lg:text-3xl md:text-2xl text-slate-600 dark:text-slate-100 text-lg self-start">
                        {{ requestState.process }}</p>
                </div>
                <div class="bg-yellow-500/10 self-center-safe p-3 rounded-xl flex">
                    <UIcon name="solar:hourglass-linear" class="text-3xl bg-yellow-500" />
                </div>
            </div>
            <!-- ended requests -->
            <div
                class="bg-white dark:bg-slate-800 md:py-6 py-4 px-4 rounded-xl flex justify-between  hover:bg-green-400/10  transition">
                <div class="flex flex-col gap-y-2">
                    <UBadge variant="soft" color="success" size="xl" class="self-start">تکمیل شده</UBadge>
                    <span class="text-muted text-sm">سفارش‌های انجام شده موفق</span>
                    <p class="font-black lg:text-3xl md:text-2xl text-slate-600 dark:text-slate-100 text-lg self-start">
                        {{ requestState.complited }}</p>
                </div>
                <div class="bg-green-500/10 self-center-safe p-3 rounded-xl flex">
                    <UIcon name="solar:check-circle-linear" class="text-3xl bg-green-500" />
                </div>
            </div>
            <!-- rejected requests -->
            <div
                class="bg-white dark:bg-slate-800 md:py-6 py-4 px-4 rounded-xl flex justify-between  hover:bg-red-400/10 lg:col-span-3 xl:col-span-1  transition ">
                <div class="flex flex-col gap-y-2">
                    <UBadge variant="soft" color="error" size="xl" class="self-start">نیازمند پیگیری / رد</UBadge>
                    <span class="text-muted text-sm">درخواست‌های مسترد شده</span>
                    <p class="font-black lg:text-3xl md:text-2xl text-slate-600 dark:text-slate-100 text-lg self-start">
                        {{ requestState.rejected }}</p>
                </div>
                <div class="bg-red-500/10 self-center-safe p-3 rounded-xl flex">
                    <UIcon name="solar:shield-cross-linear" class="text-3xl bg-red-500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const prop = withDefaults(defineProps<{
    data?: any[]
}>(), {
    data: () => []
})

const requestState = computed(() => {
    return prop.data?.reduce((state, item) => {
        if (item) state.all++;
        if (item.status === '1') state.process++;
        if (item.status === '2') state.complited++;
        if (item.status === '3') state.rejected++;
        return state;
    }, {
        complited: 0,
        rejected: 0,
        process:0,
        all: 0
    })
})


console.log(prop.data);

</script>