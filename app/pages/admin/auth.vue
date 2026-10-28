<template>
    <UContainer>
        <div class="flex justify-center items-center h-screen">
            <div class="rounded-xl md:p-8 p-5 w-full bg-white dark:bg-slate-900 md:w-110 drop-shadow-2xl drop-shadow-slate-300/30 dark:drop-shadow-slate-800/50 flex flex-col justify-center items-center gap-y-2">
                <UIcon name="i-heroicons-shield-check" class="h-17 w-17 bg-linear-60 from-blue-500 to-sky-300" />
                <div>
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                        ورود به پنل مدیریت کافی‌نت
                    </h1>
                    <p class="text-sm text-gray-500 dark:text-gray-400 text-center">
                        لطفاً نام کاربری و رمز عبور خود را وارد کنید
                    </p>
                </div>
                <UForm :schema="Schema" :state="state" @submit.prevent="authentication"
                    class="md:w-[80%] w-full flex flex-col gap-y-3">
                    <UFormField label="نام کاربری" name="username" required class="w-full">
                        <UInput v-model="state.username" variant="soft" color="secondary" icon="i-heroicons-user"
                            trailing class="w-full " placeholder="نام کاربری خود را وارد کنید"
                            :ui="{ base: 'py-3 bg-slate-100  transition duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-3 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white dark:focus:border-blue-400 dark:focus:bg-gray-800' }" />
                    </UFormField>
                    <UFormField label="رمز عبور" name="password" required class="w-full">
                        <UInput v-model="state.password" variant="soft" color="secondary" icon="i-heroicons-lock-closed"
                            trailing class="w-full" placeholder=" رمز عبور خود را وارد کنید"
                            :ui="{ base: 'py-3 bg-slate-100 transition duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-3 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800/50 dark:text-white dark:focus:border-blue-400 dark:focus:bg-gray-800' }" />
                    </UFormField>
                    <ULink class="text-sm" to="/admin/auth">فراموشی رمز عبور</ULink>
                    <UButton type="submit" size="xl" variant="solid"
                        class="place-content-center bg-linear-60 from-blue-500 to-sky-300 hover:cursor-pointer hover:ring-2 transition hover:ring-sky-500/40 hover:ring-offset-2 hover:ring-offset-secondary-700/40">
                        ورود به داشبورد </UButton>
                </UForm>
            </div>
        </div>
    </UContainer>
</template>


<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';

const { adminAuth } = useAuth()
const toast = useToast()

definePageMeta({
    layout: {
        name: 'default',
        props: {
            navbar: false
        }
    }
})

const Schema = z.object({
    username: z.string('نام کاربری الزامیست').min(8, 'حداقل طول نام کاربری 8 کاراکتر است'),
    password: z.string('رمز عبور الزامیست').nonempty()
})

type Schema = z.output<typeof Schema>

const state = reactive<Partial<Schema>>({
    username: undefined,
    password: undefined
})

const authentication = async (event: FormSubmitEvent<Schema>) => {
    const { username, password } = event.data

    try {
        const response = await $fetch('/api/auth', {
            method: 'POST',
            body: {
                username,
                password
            }
        })

        toast.add({
            title: 'عملیات موفق',
            description: 'ورود با موفقیت انجام شد',
            color: 'success'
        })

        adminAuth.value = response?.data ?? null

        return navigateTo('/admin')

    } catch (error: any) {
        toast.add({
            title: 'خطایی رخ داد',
            description: error?.data?.message,
            color: 'error'
        })
        console.log(error.data);

    }


}
</script>