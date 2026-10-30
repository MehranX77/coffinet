<template>
    <UContainer class="max-w-420 mt-5 relative h-[calc(100dvh-64px)]">
        <div
            class="blur-3xl w-[100rem] -z-50 h-80 absolute -left-30 top-0 bg-linear-60 from-sky-400/20 via-85% via-violet-50 to-rose-300/20 to-70% dark:hidden" />
        <div class="flex justify-between">
            <h1
                class="text-transparent bg-clip-text bg-linear-60 from-120% from-blue-500 to-45% to-sky-500 font-black text-4xl">
                آنـی‌سو</h1>
            <UColorModeButton color="secondary" />
        </div>

        <div class="grid md:grid-cols-12 grid-cols-1 md:gap-x-8 gap-y-4 mt-10">
            <div class="lg:col-span-6 col-span-12 flex flex-col self-center gap-y-4">
                <UBadge class="md:self-start self-center-safe text-sm md:p-2" variant="soft" color="info" size="xl"
                    icon="solar:clock-circle-line-duotone">پاسخگویی سریع تنها در چند دقیقه!</UBadge>
                <h1 class="lg:text-3xl md:text-2xl text-xl md:text-start text-center font-bold">ثبت‌نام، پیگیری و خدمات
                    آنلاین،
                    سریع و مطمئن در آنـی‌سو</h1>
                <p class="text-muted md:text-start text-center text-sm">با خیال راحت درخواست‌های خود را ثبت کنید؛ ما در
                    سریع‌ترین زمان ممکن به آن‌ها رسیدگی می‌کنیم.</p>
                <div class="flex md:flex-row lg:flex-col xl:flex-row flex-col justify-center md:gap-2 gap-4">
                    <div
                        class="border-2 border-slate-300/50 dark:border-slate-50/10 dark:backdrop-blur-lg dark:border rounded-xl p-4 flex flex-col gap-y-3 md:flex-1 bg-white/10 dark:bg-slate-800/60 dark:hover:border-sky-500 hover:border-sky-400 transition-all">
                        <div class="bg-sky-100/80 dark:bg-slate-700/30 p-4 flex rounded-2xl self-start">
                            <UIcon name="solar:clock-circle-linear" class="text-2xl text-black dark:text-slate-50/70" />
                        </div>
                        <p class="font-bold text-regular">اطلاع‌رسانی آنی</p>
                        <span class="text-muted text-sm">به محض تغییر وضعیت درخواست یا آماده‌شدن نتیجه، از طریق پیامک به
                            شما اطلاع داده می‌شود.</span>
                    </div>
                    <div
                        class="border-2 border-slate-300/50 dark:border-slate-50/10 dark:backdrop-blur-lg dark:border rounded-xl p-4 flex flex-col gap-y-3 md:flex-1 bg-white/10 dark:bg-slate-800/60 dark:hover:border-sky-500 hover:border-sky-400 transition-all">
                        <div class="bg-sky-100/80 dark:bg-slate-700/30 p-4 flex rounded-2xl self-start">
                            <UIcon name="solar:shield-check-linear" class="text-2xl text-black dark:text-slate-50/70" />
                        </div>
                        <p class="font-bold text-regular">پردازش و نگهداری امن</p>
                        <span class="text-muted text-sm">مدارک و اطلاعات شما کاملاً محرمانه بوده و تنها کارشناسان مربوطه
                            به آن دسترسی دارند.</span>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-6 col-span-12 flex flex-col gap-y-4">
                <div
                    class="rounded-2xl md:p-6 p-4 flex flex-col gap-y-12 bg-white/40 backdrop-blur-lg dark:backdrop-blur-2xl dark:bg-slate-800/10 z-50 shadow-2xl shadow-slate-400/20 dark:shadow-none dark:border dark:border-slate-700">

                    <div class="flex justify-between">
                        <div class="flex flex-col gap-y-2">
                            <span class="text-green-500 text-sm font-semibold">ایجاد درخواست جدید</span>
                            <p class="text-xl font-bold">درخواست خود را ارسال نمایید</p>
                            <span class="text-muted text-sm">فیلدهایی که با ستاره مشخص شده‌اند الزامی
                                هستند</span>
                        </div>
                        <div
                            class="bg-sky-200/40 dark:bg-sky-200/10 rounded-2xl p-4 flex justify-center items-center self-center">
                            <UIcon name="solar:chat-round-call-line-duotone" class="text-2xl" />
                        </div>
                    </div>
                    <UForm @submit.prevent="submitForm"
                        class="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5">
                        <UFormField label="نام و نام خانوادگی" required
                            class="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-2" :error="errorList.fullname">
                            <UInput v-model="customerInfo.fullname" trailing-icon="solar:user-line-duotone"
                                variant="subtle" color="info" size="xl" :ui="{ base: 'md:py-3 rounded-lg ' }"
                                placeholder="مثال: علی احمدی" class="w-full" />
                        </UFormField>
                        <UFormField label="شماره موبایل" required
                            class="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-2" :error="errorList.phone">
                            <UInput v-model="customerInfo.phone" v-maska="'####-###-####'"
                                trailing-icon="solar:phone-line-duotone" variant="subtle" color="info" size="xl"
                                :ui="{ base: 'md:py-3 rounded-lg ' }" placeholder="مثال:09181234567" class="w-full" />
                        </UFormField>
                        <UFormField label="شرح درخواست" required class="col-span-2" :error="errorList.body">
                            <UTextarea v-model="customerInfo.body" variant="subtle" :rows="5" size="xl" color="info"
                                :ui="{ base: 'rounded-lg ' }" placeholder="لطفا درخواست خود را بطور کامل بنویسید"
                                class="w-full" />
                        </UFormField>
                        <UFormField label="بارگذاری مدارک" class="col-span-2">
                            <UFileUpload layout="list" v-model="customerInfo.files" multiple variant="area" size="xl" class="w-full"
                                :ui="{ base: 'bg-transparent dark:border dark:border-slate-600' }" color="secondary"
                                label="بارگذاری مدارک" description="لطفا درصورت نیاز مدارک و اسناد خود را بارگذاری کنید"
                                accept="image/*,application/pdf,application/docx,application/doc" />
                        </UFormField>
                        <UButton type="submit" variant="outline" color="secondary"
                            class="col-span-2 place-content-center-safe lg:py-4" size="xl" icon="solar:plane-3-linear">
                            ارسال درخواست </UButton>

                        <UDrawer inset :ui="{ overlay: 'bg-slate-400/20 backdrop-blur-lg', content: 'md:w-3/6 md:mx-auto w-full' }">
                            <UButton variant="subtle" icon="solar:card-search-outline" color="neutral" size="xl"
                                class="place-content-center col-span-2 lg:py-4">پیگیری درخواست</UButton>
                            <template #content>
                                <div class="flex flex-col gap-y-4 justify-center p-4">
                                    <UForm @submit.prevent="trackRequestHandler" class="mt-5">
                                        <UFormField label="کد پیگیری" required class="w-full mb-4 md:mb-2">
                                            <UInput v-model="trackingRequest.trackingCode" variant="soft" size="xl"
                                                class="w-full" color="secondary"
                                                placeholder="کد پیگیری خود را وارد کنید"
                                                trailing-icon="solar:user-line-duotone"
                                                :ui="{ base: 'lg:py-4 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                                        </UFormField>
                                        <UFormField label="شماره موبایل" required class="w-full mb-4 md:mb-2">
                                            <UInput v-model="trackingRequest.phone" v-maska="'####-###-####'"
                                                variant="soft" size="xl" class="w-full" color="secondary"
                                                placeholder="شماره موبایل خود را وارد کنید"
                                                trailing-icon="solar:phone-line-duotone"
                                                :ui="{ base: 'lg:py-4 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                                        </UFormField>
                                        <UButton type="submit" variant="solid" class="w-full place-content-center-safe"
                                            size="xl" color="secondary" icon="solar:magnifier-linear"
                                            :ui="{ base: 'lg:py-4 rounded-lg bg-blue-700 hover:bg-blue-700/80' }">
                                            مشاهده وضعیت</UButton>
                                        <UAlert class="mt-5" color="warning" variant="soft" close
                                            description="کد پیگیری به شماره موبایلتان ارسال می‌شود، لطفا در حفظ و نگه‌داری کد کوشا باشید">
                                        </UAlert>
                                    </UForm>
                                </div>
                            </template>
                        </UDrawer>
                    </UForm>
                </div>
            </div>
        </div>
    </UContainer>


    <!-- <div
            class="rounded-2xl bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl xl:w-[40%] lg:w-[75%] md:w-[95%] w-[98%] h-auto lg:p-4 md:p-3 p-2 flex flex-col gap-y-2 justify-center shadow-lg dark:shadow-none dark:ring dark:ring-slate-800">
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
                                trailing-icon="solar:user-line-duotone" :ui="{ base: 'lg:py-4 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                        </UFormField>
                        <UFormField label="شماره موبایل" required class="w-full mb-4 md:mb-2" :error="errorList.phone">
                            <UInput v-model="customerInfo.phone" v-maska="'####-###-####'" variant="soft" size="xl"
                                class="w-full" color="secondary" placeholder="شماره موبایل خود را وارد کنید"
                                trailing-icon="solar:phone-line-duotone" :ui="{ base: 'lg:py-4 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
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
                        <UButton type="submit" variant="solid" color="secondary" class="w-full place-content-center-safe lg:py-4" size="xl"
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
                                trailing-icon="solar:user-line-duotone" :ui="{ base: 'lg:py-4 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
                        </UFormField>
                        <UFormField label="شماره موبایل" required class="w-full mb-4 md:mb-2">
                            <UInput v-model="trackingRequest.phone" v-maska="'####-###-####'" variant="soft" size="xl"
                                class="w-full" color="secondary" placeholder="شماره موبایل خود را وارد کنید"
                                trailing-icon="solar:phone-line-duotone" :ui="{ base: 'lg:py-4 rounded-lg placeholder:text-sm md:placeholder:text-base' }" />
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
</div> -->
</template>

<style>
h1 {
    font-family: var(--ziba);
}
</style>
<script setup lang="ts">
import { vMaska } from 'maska/vue'
import { LazyTrackingModal, UContainer } from '#components'

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