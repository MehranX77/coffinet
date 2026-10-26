<template>
  <UModal>
    <template #title>
      جزئیات و وضعیت درخواست
    </template>
    <template #body>
      <!-- ردیف نوع درخواست -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-sm">
        <div class="flex items-center gap-2 text-gray-500">
          <UIcon name="i-solar:document-text-linear" class="text-lg" />
          <span>نام خدمات:</span>
        </div>
        <span class="font-medium text-gray-900 dark:text-gray-100">{{ customerData?.body }}</span>
      </div>

      <!-- ردیف کد پیگیری -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-sm">
        <div class="flex items-center gap-2 text-gray-500">
          <UIcon name="i-solar:clipboard-linear" class="text-lg" />
          <span>کد پیگیری:</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-mono font-bold text-primary">{{ customerData?.trackingCode }}</span>
        </div>
      </div>

      <!-- ردیف تاریخ ثبت -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-sm">
        <div class="flex items-center gap-2 text-gray-500">
          <UIcon name="i-solar:calendar-linear" class="text-lg" />
          <span>تاریخ ثبت:</span>
        </div>
        <span class="font-medium text-gray-900 dark:text-gray-100">
          <NuxtTime :datetime="customerData?.createdAt || 1998" locale="fa-IR" />
        </span>
      </div>

      <!-- ردیف شماره موبایل -->
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-sm">
        <div class="flex items-center gap-2 text-gray-500">
          <UIcon name="i-solar:phone-linear" class="text-lg" />
          <span>شماره موبایل:</span>
        </div>
        <span dir="ltr" class="font-mono font-medium text-gray-900 dark:text-gray-100">{{ customerData?.phone }}</span>
      </div>

      <!-- ردیف نام مشتری -->
      <div class="flex items-center justify-between px-4 py-3 text-sm">
        <div class="flex items-center gap-2 text-gray-500">
          <UIcon name="i-solar:user-linear" class="text-lg" />
          <span>نام مشتری:</span>
        </div>
        <span class="font-medium text-gray-900 dark:text-gray-100">{{ customerData?.fullname }}</span>
      </div>
      <UTimeline orientation="horizontal" :default-value="Number(customerData?.status || undefined)" :items="items" size="2xl"
        class="w-full mt-10" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui';
const emit = defineEmits<{ close: [boolean] }>()

const props = defineProps({
  customerData:{
    type: Object,
    default: null
  }
})

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