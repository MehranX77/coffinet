<template>
    <div class="hero-section">
        <div class="flex flex-col md:justify-center items-center gap-y-3 h-[60dvh]">
            <UBadge color="primary" variant="subtle" class="md:text-md text-sm md:mt-0 mt-10">چرا آنـی‌سو؟</UBadge>
            <h1 class="lg:text-6xl md:text-3xl text-2xl font-extrabold text-white dark:text-slate-100">خدمات کافی‌نت
                بصورت آنلاین</h1>
            <p class="text-gray-200 lg:text-xl md:text-lg text-sm">بدون نیاز به مراجعه حضوری، در سریع‌ترین زمان ممکن
            </p>
            <div class="flex justify-center flex-wrap  lg:gap-x-4 gap-4 md:mt-10 mt-4">
                <div class="rounded-2xl bg-white/20 dark:bg-blue-900/40 backdrop-blur-sm flex flex-col lg:p-4 md:p-3 p-2 gap-y-1 text-center lg:w-45 lg:h-35 md:w-40 md:h-32 w-20 h-20 justify-center">
                    <UIcon name="solar:bolt-outline"
                        class="mx-auto dark:bg-linear-60 dark:from-blue-700 dark:to-green-500 bg-slate-200/70 lg:text-7xl md:text-5xl text-4xl" />
                    <p class="text-slate-100 dark:text-slate-100 lg:text-lg md:text-md text-xs"> سریع</p>
                    <span class="text-green-400 md:block lg:text-sm text-xs hidden">بررسی در کمترین زمان</span>
                </div>
                <div class="rounded-2xl bg-white/20 dark:bg-blue-900/40 backdrop-blur-sm flex flex-col lg:p-4 md:p-3 p-2 gap-y-1 text-center lg:w-45 lg:h-35 md:w-40 md:h-32 w-20 h-20 justify-center">
                    <UIcon name="solar:shield-check-outline"
                        class="mx-auto dark:bg-linear-60 dark:from-blue-700 dark:to-green-500 bg-slate-200/70 lg:text-7xl md:text-5xl text-4xl" />
                    <p class="text-slate-100 dark:text-slate-100 lg:text-lg md:text-md text-xs">امن</p>
                    <span class="text-green-400 md:block lg:text-sm text-xs hidden">اطلاعات‌ محفوظ است</span>
                </div>
                <div class="rounded-2xl bg-white/20 dark:bg-blue-900/40 backdrop-blur-sm flex flex-col lg:p-4 md:p-3 p-2 gap-y-1 text-center lg:w-45 lg:h-35 md:w-40 md:h-32 w-20 h-20 justify-center">
                    <UIcon name="solar:wallet-2-outline"
                        class="mx-auto dark:bg-linear-60 dark:from-blue-700 dark:to-green-500 bg-slate-200/70 lg:text-7xl md:text-5xl text-4xl" />
                    <p class="text-slate-100 dark:text-slate-100 lg:text-lg md:text-md text-xs">به‌صرفه</p>
                    <span class="text-green-400 md:block lg:text-sm text-xs hidden">ارزانتر از هرجا</span>
                </div>
                <div class="rounded-2xl bg-white/20 dark:bg-blue-900/40 backdrop-blur-sm flex flex-col lg:p-4 md:p-3 p-2 gap-y-1 text-center lg:w-45 lg:h-35 md:w-40 md:h-32 w-20 h-20 justify-center">
                    <UIcon name="solar:smile-circle-outline"
                        class="mx-auto dark:bg-linear-60 dark:from-blue-700 dark:to-green-500 bg-slate-200/70 lg:text-7xl md:text-5xl text-4xl" />
                    <p class="text-slate-100 dark:text-slate-100 lg:text-lg md:text-md text-xs">آسان</p>
                    <span class="text-green-400 md:block lg:text-sm text-xs hidden">بدون پیچیدگی سیستم</span>
                </div>
            </div>
        </div>
        <div
            class="relative rounded-2xl bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl xl:w-[40%] lg:w-[75%] md:w-[95%] w-[98%] h-auto lg:p-4 md:p-3 p-2 md:-top-10 -top-50 right-[50%] translate-x-[50%] flex flex-col gap-y-2 justify-center shadow-lg dark:shadow-none dark:ring dark:ring-slate-800">
            <UTabs :items="items" variant="link" color="secondary" :ui="{ trigger: 'grow' }" class="gap-4 w-full">
                <template #request>
                    <h1 class="lg:text-3xl md:text-2xl text-lg text-center text-blue-900 dark:text-blue-100 mt-3">
                        ثبت
                        درخواست</h1>
                    <p class="text-blue-900/80 dark:text-blue-100/80 lg:text-lg md:text-md text-sm text-center ">
                        برای ثبت درخواست خود، لطفاً اطلاعات مورد نیاز را وارد کنید.</p>
                    <UForm @submit.prevent="submitForm" class="mt-5">
                        <UFormField label="نام و نام خانوادگی" required class="w-full mb-4 md:mb-2" :error="errorList.fullname">
                            <UInput v-model="customerInfo.fullname" variant="soft" size="xl" class="w-full"
                                color="secondary" placeholder="نام و نام خانوادگی خود را وارد کنید"
                                trailing-icon="solar:user-line-duotone" :ui="{ base: 'lg:py-3 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                        </UFormField>
                        <UFormField label="شماره موبایل" required class="w-full mb-4 md:mb-2" :error="errorList.phone">
                            <UInput v-model="customerInfo.phone" v-maska="'####-###-####'" variant="soft" size="xl"
                                class="w-full" color="secondary" placeholder="شماره موبایل خود را وارد کنید"
                                trailing-icon="solar:phone-line-duotone" :ui="{ base: 'lg:py-3 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                        </UFormField>
                        <UFormField label="شرح درخواست" required class="w-full mb-4 md:mb-2" :error="errorList.body">
                            <UTextarea v-model="customerInfo.body" :rows="6" variant="soft" size="xl" class="w-full"
                                color="secondary" placeholder="لطفا درخواست خود را به‌طور کامل توضیح دهید..."
                                :ui="{ base: 'lg:py-3 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                        </UFormField>
                        <UFormField label="بارگذاری مدارک" class="w-full mb-4 md:mb-2">
                            <UFileUpload v-model="customerInfo.files" multiple variant="area" size="xl" class="w-full"
                                color="secondary" label="بارگذاری مدارک"
                                description="لطفا درصورت نیاز مدارک و اسناد خود را بارگذاری کنید"
                                accept="image/*,application/pdf,application/docx,application/doc" />
                        </UFormField>
                        <UButton type="submit" variant="solid" color="secondary" class="w-full place-content-center-safe" size="xl"
                            icon="solar:plane-3-linear">ارسال درخواست </UButton>
                    </UForm>
                </template>
                <template #tracking>
                    <h1 class="lg:text-3xl md:text-2xl text-lg text-center text-blue-900 dark:text-blue-100 mt-3">
                        پیگیری
                        درخواست</h1>
                    <p class="text-blue-900/80 dark:text-blue-100/80 lg:text-lg md:text-md text-sm text-center ">با
                        وارد کردن شماره موبایل و کد پیگیری می‌توانید از آخرین وضعیت درخواستتان مطلع شوید</p>
                    <UForm @submit.prevent="trackRequestHandler" class="mt-5">
                        <UFormField label="کد پیگیری" required class="w-full mb-4 md:mb-2">
                            <UInput v-model="trackingRequest.trackingCode" variant="soft" size="xl" class="w-full"
                                color="secondary" placeholder="کد پیگیری خود را وارد کنید"
                                trailing-icon="solar:user-line-duotone" :ui="{ base: 'lg:py-3 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                        </UFormField>
                        <UFormField label="شماره موبایل" required class="w-full mb-4 md:mb-2">
                            <UInput v-model="trackingRequest.phone" v-maska="'####-###-####'" variant="soft" size="xl"
                                class="w-full" color="secondary" placeholder="شماره موبایل خود را وارد کنید"
                                trailing-icon="solar:phone-line-duotone" :ui="{ base: 'lg:py-3 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                        </UFormField>
                        <UButton type="submit" variant="solid" class="w-full place-content-center-safe" size="xl"
                            color="secondary" icon="solar:magnifier-linear"
                            :ui="{ base: 'lg:py-4 rounded-lg bg-blue-700 hover:bg-blue-700/80' }">
                            مشاهده وضعیت</UButton>
                        <UAlert class="mt-5" color="warning" variant="soft" close
                            description="کد پیگیری به شماره موبایلتان ارسال می‌شود، لطفا در حفظ و نگه‌داری کد کوشا باشید">
                        </UAlert>
                    </UForm>
                </template>
            </UTabs>
        </div>
    </div>
</template>


<style>
.hero-section {
    background:
        linear-gradient(135deg,
            rgba(15, 23, 42, .95) 10%,
            rgba(30, 64, 175, .80) 50%,
            rgba(59, 130, 246, .40) 100%),
        url("/banner.jpg") center center / cover no-repeat;

    height: 85dvh;
}
</style>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { vMaska } from 'maska/vue'
import { LazyTrackingModal } from '#components'

definePageMeta({
    layout: {
        name: 'default',
        props: {
            navbar: true
        }
    }
})

const toast = useToast()
const router = useRouter()
const customerState = useCustomerState()
const overlay = useOverlay()
const items = [
    {
        label: 'ارسال سریع درخواست',
        description: 'Make changes to your account here. Click save when you\'re done.',
        icon: 'solar:file-send-linear',
        slot: 'request' as const
    },
    {
        label: 'پیگیری درخواست',
        description: 'Change your password here. After saving, you\'ll be logged out.',
        icon: 'solar:magnifer-outline',
        slot: 'tracking' as const
    }
] satisfies TabsItem[]

const customerInfo = reactive<Record<string, string> | any>({
    fullname: '',
    phone: '',
    body: '',
    files: []
})

const errorList = reactive({
    fullname: undefined,
    phone: undefined,
    body: undefined
})

const submitForm = async () => {

    errorList.fullname = undefined
    errorList.body = undefined
    errorList.phone = undefined

    const customerFormData = new FormData()
    customerFormData.append('fullname', customerInfo.fullname)
    customerFormData.append('phone', customerInfo.phone);
    customerFormData.append('body', customerInfo.body);
    if (customerInfo.files && Array.isArray(customerInfo.files)) {
        customerInfo.files.forEach((file: any) => {
            customerFormData.append('files', file);
        });
    }
    try {
        const response = await $fetch('/api/customer-request', {
            method: 'POST',
            body: customerFormData
        })

        console.log('response: ', response);

        if (response.status === 201) {
            toast.add({
                icon: 'solar:check-circle-linear',
                color: 'success',
                title: 'عملیات موفق',
                description: response.message
            })
            console.log('customer state in index page: ', customerState.value);
            customerState.value = response
            router.push({
                name: 'success-request',
                query: {
                    status: 'ok'
                }
            })
        }

    } catch (error: any) {

        customerState.value = null

        const errorMessage = error.data?.message || error.data;

        console.log(errorMessage);
        if (errorMessage === 'Bad Gateway') {
            toast.add({
                icon: 'solar:check-error-linear',
                color: 'error',
                title: 'خطایی رخ داد',
                description: 'خطا در برقراری با سرور'
            })
            return
        }

        else if (errorMessage.errors && errorMessage !== undefined) {
            if ('fullname' in errorMessage.errors) {
                errorList.fullname = errorMessage.errors.fullname.message
            }

            if ('phone' in errorMessage.errors) {
                errorList.phone = errorMessage.errors.phone.message
            }

            if ('body' in errorMessage.errors) {
                errorList.body = errorMessage.errors.body.message
            }
        }

    }

}

const trackingRequest = reactive<Record<string, string> | any>({
    phone: undefined,
    trackingCode: undefined
})

const trackRequestHandler = async () => {
    if (trackingRequest.phone === undefined || trackingRequest.trackingCode === undefined) {
        toast.add({
            color: 'warning',
            description: 'ابتدا ورودی های لازم را پر کنید'
        })

        return
    }

    interface responseType {
        status: number,
        message?: string,
        data: any
    }
    try {
        const response = await $fetch<responseType>('http://localhost:4000/api/customer/tracking-request', {
            method: 'POST',
            body: {
                phone: trackingRequest.phone,
                trackingCode: trackingRequest.trackingCode
            }
        })

        if (response?.status === 200) {
            customerState.value = null
            const modal = overlay.create(LazyTrackingModal, {
                props: {
                    customerData: response.data
                }
            })
            await modal.open()
        }
    } catch (error: any) {
        toast.add({
            color: 'error',
            title: 'خطایی رخ داد',
            description: error.data?.message
        })
    }
}
</script>