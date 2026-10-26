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

const prop = withDefaults(defineProps<{
    data?: any[]
}>(), {
    data: () => []
})

const data = computed<ChartData[]>(() => {

const months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
    
    const stats = (prop.data || []).reduce((acc: any, item: any) => {
        if (!item.createdAt) return acc
        const m = new Intl.DateTimeFormat('fa-IR', { calendar: 'persian', month: 'long' }).format(new Date(item.createdAt))
        
        if (!acc[m]) acc[m] = { requests: 0, complited: 0, rejected: 0 }
        
        acc[m].requests++
        if (String(item.status) === '2') acc[m].complited++
        if (String(item.status) === '3') acc[m].rejected++
        
        return acc
    }, {})

    return months.map(month => ({
        month,
        requests: stats[month]?.requests || 0,
        complited: stats[month]?.complited || 0,
        rejected: stats[month]?.rejected || 0,
    }))
})
</script>
