<template>
    <UModal :ui="{overlay:'bg-slate-100/40 backdrop-blur-lg'}">
        <template #title>تغییر رمز عبور</template>
        <template #body>
            <UForm @submit.prevent="changePassword" class="flex flex-col gap-y-5">
               <UFormField required label="رمزعبور فعلی">
                <UInput variant="outline" placeholder="رمزعبور فعلی خود را وارد کنید" size="xl" class="w-full" color="secondary" :ui="{base:'py-3'}"/>
               </UFormField>
               <UFormField required label="رمزعبور جدید">
                <UInput variant="outline" placeholder="رمزعبور جدید خود را وارد کنید" size="xl" class="w-full" color="secondary" :ui="{base:'py-3'}"/>
               </UFormField>
               <UButton variant="subtle" color="neutral" size="xl" :ui="{base:'py-3'}" class="place-content-center" icon="solar:password-minimalistic-input-broken">تغییر رمز</UButton>
            </UForm>
        </template>
    </UModal>
</template>

<script setup lang="ts">
const emit = defineEmits < { close: [boolean] } > ()

const changePassword = async () => {

}
</script>