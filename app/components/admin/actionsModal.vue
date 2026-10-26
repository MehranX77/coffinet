<template>
    <UModal :ui="{ overlay: 'backdrop-blur-lg bg-slate-500/10' }">
        <template #title>
            جزئیات سفارش
        </template>
        <template #body>
            <div class="flex flex-col w-full gap-2">
                <USeparator label="مشخصات کاربر" class="my-3" />
                <div class="flex gap-x-2">
                    <UInput readonly size="xl" variant="soft" v-model="fullname" leading-icon="solar-user-linear" />
                    <UInput readonly size="xl" variant="soft" v-model="phone" leading-icon="solar-phone-linear" />
                </div>
                <USeparator label="جزئیات سفارش" class="my-3" />
                <div class="bg-slate-100 dark:bg-slate-800 p-2 border-r-4 border-r-green-500 rounded-l-md">
                    <div class="flex justify-between">
                        <p class="text-base text-wrap">{{ prop.customerData.body }}</p>
                    </div>
                </div>
                <div class="flex justify-center gap-x-3 w-full mt-3">
                    <UBadge size="xl" color="success" variant="outline" icon="i-solar:calendar-linear" class="flex-1"
                        :ui="{ base: 'py-2' }">تاریخ ثبت:
                        <NuxtTime :datetime="prop.customerData.createdAt" locale="fa-IR" />
                    </UBadge>
                    <UBadge size="xl" color="secondary" variant="outline" icon="i-solar:clock-circle-linear"
                        class="flex-1" :ui="{ base: 'py-2' }">زمان ثبت:
                        <NuxtTime :datetime="prop.customerData.createdAt" locale="fa-IR"  hour="2-digit" minute="2-digit" second="2-digit"/>
                    </UBadge>
                </div>
                <USeparator label="وضعیت سفارش" class="my-3" />
                <USelect variant="soft" size="xl" placeholder="یک مورد را انتخاب کنید" v-model="selectedStatus"
                    :items="selectItems" />
                <USeparator label="ثبت یادداشت" class="my-3" />
                <UForm>
                    <UTextarea variant="soft" class="w-full" :rows="3"
                        placeholder="یادداشت خود را ثبت کنید" />
                </UForm>
                <USeparator label="پیوست‌ها و مدارک" class="my-3" />
                <div v-if="prop.customerData.files.length > 0" class="flex items-center gap-2 flex-wrap">
                    <!-- فایل دوم: مدارک تکمیلی PDF -->
                    <UButton v-for="file in customerFiles" :key="file._id" :to="`http://localhost:4000/uploads/${file.filename}`" target="_blank" external icon="i-solar:file-text-linear" color="neutral" variant="subtle" size="lg" :label="file.filename" />
                </div>
                <UAlert v-else title="پیوستی وجود ندارد یا بارگذاری نشده است" variant="outline" color="warning" close />
            </div>
        </template>
        <template #footer>
            <div class="flex justify-between w-full">
                <div class="flex gap-x-2">
                    <UButton icon="i-solar:diskette-linear" size="xl">ذخیره تغییرات</UButton>
                    <UButton icon="i-solar:phone-linear" size="xl" color="secondary">تماس با مشتری</UButton>
                </div>
                <UButton size="xl" variant="subtle" color="neutral">بستن</UButton>
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui';

const prop = defineProps<{
    customerData?: any
}>()

const customerFiles = computed(() => {
    return prop.customerData?.files || []
})

console.log(prop.customerData);


const fullname = ref<string>(prop.customerData.fullname)
const phone = ref<number>(prop.customerData.phone)
const selectedStatus = ref<number>()
const selectItems = ref<SelectItem[]>([
    {
        label: 'دریافت درخواست',
        value: 0
    },
    {
        label: 'درحال پردازش',
        value: 1
    },
    {
        label: 'تکمیل شده',
        value: 2
    },
    {
        label: 'رد / نیاز به بررسی',
        value: 3
    },
])

</script>