<template>
    <div class="mx-auto xl:max-w-[65%] max-w-[95%] mt-5">
        <div class="bg-white dark:bg-slate-800 rounded-xl md:py-6 py-4 px-4 flex flex-col gap-y-3">
            <div class="flex justify-between">
                <p class="font-semibold self-center-safe">جدول درخواست‌های اخیر</p>
                <USelect v-model="selectValue" :items="selectItems" value-key="value" :icon="icon" class="w-40" arrow
                    variant="subtle" color="secondary" />
            </div>
            <UTable :loading="!Tdata?.length" loading-color="secondary" loading-animation="carousel" sticky class="mt-5"
                :columns="columns" :data="Tdata">
                <template #index-cell="{ row }">
                    {{ Number(row?.id) + 1 }}
                </template>

                <template #status-cell="{ row }">
                    <UBadge v-if="row.original.status === '0'" variant="subtle" color="neutral">در انتظار تایید</UBadge>
                    <UBadge v-else-if="row.original.status === '1'" variant="soft" color="warning">در حال بررسی</UBadge>
                    <UBadge v-else-if="row.original.status === '2'" variant="soft" color="success">تکمیل شد</UBadge>
                    <UBadge v-else-if="row.original.status === '3'" variant="soft" color="error">رد شد</UBadge>
                </template>

                <template #actions-cell="{ row }">
                    <UTooltip arrow text="عملیات">
                        <UButton icon="i-solar:pen-linear" variant="ghost" color="secondary"
                            @click="actionHandler(row.original)" />
                    </UTooltip>
                </template>
            </UTable>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { SelectItem } from '@nuxt/ui';
import { LazyAdminActionsModal } from '#components';

const prop = withDefaults(defineProps<{
    data?: any[]
}>(), {
    data: () => []
})

//select
const selectItems = ref([
    {
        label: 'همه وضعیت‌ها',
        value: 0,
        icon: 'i-solar:list-linear'
    },
    {
        label: 'درحال پردازش',
        value: 1,
        icon: 'solar:hourglass-linear'
    },
    {
        label: 'تکمیل شده',
        value: 2,
        icon: 'i-solar:check-read-linear'
    },
    {
        label: 'رد شده / نیاز به بررسی',
        value: 3,
        icon: 'solar:shield-cross-linear'
    },
] satisfies SelectItem[])


const selectValue = ref(selectItems.value[0]?.value)
const icon = computed(() => selectItems.value.find(item => item.value === selectValue.value)?.icon)

const Tdata = computed(() => {
    const allData = prop.data || []

    if (selectValue.value === 0) {
        return allData
    }

    return allData.filter((item: any) => String(item.status) === String(selectValue.value))
})
//table
const columns = [
    { accessorKey: 'index', header: 'شماره' },
    { accessorKey: 'trackingCode', header: 'کد رهگیری' },
    { accessorKey: 'fullname', header: 'نام و نام خانوادگی' },
    { accessorKey: 'phone', header: 'شماره موبایل' },
    { accessorKey: 'body', header: 'متن درخواست' },
    { accessorKey: 'status', header: 'وضعیت' },
    { accessorKey: 'actions', header: 'عملیات' },
]

//action modal code
const overlay = useOverlay()
const actionHandler = async (data: any) => {
    const openModal = overlay.create(LazyAdminActionsModal, {
        props: {
            customerData: data
        }
    })
    await openModal.open()
}



</script>