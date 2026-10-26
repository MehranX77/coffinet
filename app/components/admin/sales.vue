<template>
    <div class="mx-auto xl:max-w-[65%] max-w-[95%] mt-10">
        <div class="flex flex-col gap-y-1">
            <h1 class="text-start text-2xl font-black">آمار عملکرد و وضعیت درخواست‌ها</h1>
            <span class="text-muted text-sm">روند درخواست‌ها بر اساس هر ماه</span>
        </div>
        <UChart type="bar" y-label="براساس تعداد" x-label="بر اساس ماه" :data="data" index="month" :categories="[
            {
                key: 'requests',
                label: 'درخواست‌ها'
            },
            {
                key: 'complited',
                label: 'درخواست‌های تکمیل شده'
            },
            {
                key: 'rejected',
                label: 'درخواست‌های رد شده'
            }
        ]" />
    </div>
</template>

<script setup lang="ts">
import type { ChartData } from '@nuxt/ui'

const data = ref<ChartData[]>([
    {
        month: 'فروردین',
        requests: 186,
        complited: 80,
        rejected: 80
    },
    {
        month: 'اردیبهشت',
        requests: 186,
        complited: 80,
        rejected: 80
    },
    {
        month: 'خرداد',
        requests: 186,
        complited: 80,
        rejected: 80
    },
    {
        month: 'تیر',
        requests: 186,
        complited: 80,
        rejected: 80
    },
    {
        month: 'مرداد',
        requests: 186,
        complited: 80,
        rejected: 80
    },
])
</script>
