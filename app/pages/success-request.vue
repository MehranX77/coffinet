<template>
    <div class="absolute md:w-[30%] w-[90%] mx-auto bg-white dark:bg-slate-800 p-4 rounded-xl top-27 right-1/2 translate-x-1/2 3xl:top-1/2 3xl:-translate-y-1/2 flex flex-col  items-center h-[calc(90dvh-64px)] 3xl:h-[calc(65dvh-64px)]">
        <div class="relative flex items-center justify-center p-6 mt-14">

            <!-- حلقه‌های کم‌رنگ پس‌زمینه -->
            <div class="absolute inset-0 bg-green-300/20 rounded-full scale-127 -z-10 animate-pulse"></div>
            <div class="absolute inset-0 bg-green-300/30 rounded-full scale-95 -z-10 animate-pulse delay-500"></div>

            <!-- نقطه‌های تزئینی سمت راست -->
            <div
                class="absolute w-2.5 h-2.5 rounded-full bg-green-600 top-1 -right-8 animate-pulse delay-100 duration-100">
            </div>
            <div
                class="absolute w-3.5 h-3.5 rounded-full bg-green-600/30 top-12 -right-16 animate-pulse delay-150 duration-150">
            </div>
            <div
                class="absolute w-2.5 h-2.5 rounded-full bg-green-600/50 top-24 -right-8 animate-pulse delay-200 duration-200">
            </div>

            <!-- دایره سبز مرکزی با آیکون تیک -->
            <div class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <UIcon name="i-solar:check-linear" class="text-white text-3xl" />
            </div>

            <!-- نقطه‌های تزئینی سمت چپ -->
            <div
                class="absolute w-2.5 h-2.5 rounded-full bg-green-600 top-1 -left-8 animate-pulse delay-100 duration-100">
            </div>
            <div
                class="absolute w-3.5 h-3.5 rounded-full bg-green-600/30 top-12 -left-16 animate-pulse delay-150 duration-150">
            </div>
            <div
                class="absolute w-2.5 h-2.5 rounded-full bg-green-600/50 top-24 -left-8 animate-pulse delay-200 duration-200">
            </div>

        </div>

        <h1 class="text-center text-3xl text-green-700 mt-15">درخواست شما با موفقیت ثبت شد</h1>
        <span class="text-base mt-2">از اعتماد شما سپاگزاریم.</span>
        <span class="text-muted"> به‌زودی با شما تماس خواهیم گرفت</span>
        <div class="dark:bg-slate-900 bg-slate-100 p-4 rounded-xl mt-5 w-full flex flex-col items-center gap-y-3">
            <h1 class="text-xl text-slate-600 dark:text-slate-300">کد پیگیری شما</h1>
            <div class="flex justify-center gap-x-1">
                <UTooltip text="ذخیره کدپیگیری" arrow>
                    <UButton variant="ghost" color="secondary" size="xl" icon="solar:clipboard-linear" @click="useClipboard(customerState?.trackCode) && toast.add({color:'success', title:'عملیات موفق' , description: 'کد رهگیری در حافظه ذخیره شد'})"/>
                </UTooltip>
                <h1 class="text-3xl text-sky-600 dark:text-slate-300 self-center">{{ customerState?.trackCode}}</h1>
            </div>
            <span class="text-muted">لطفا این کد را برای پیگیری درخواست خود نگهدارید</span>
        </div>
        <USeparator label="قدم بعدی چیست؟" class="mt-7" :ui="{ label: 'font-bold' }" />
            <UTimeline orientation="horizontal" :default-value="Number(customerState?.data?.status)" :items="items" size="2xl" class="w-full mt-10" />
    </div>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';
const customerState = useCustomerState()
const toast = useToast()
console.log('customer state in su page: ', customerState.value);

const items = ref<TimelineItem[]>([
    {
        title: 'دریافت درخواست',
        description: 'درخواست شما باموفقیت دریافت شد',
        icon: 'solar:file-download-linear'
    },
    {
        title: 'پردازش درخواست',
        description: 'درخواست شما درحال بررسی است',
        icon: 'solar:file-text-linear'
    },
    {
        title: 'اتمام پردازش',
        description: 'درخواست شما با موفقیت انجام شد',
        icon: 'solar:check-square-linear'
    },
])

</script>