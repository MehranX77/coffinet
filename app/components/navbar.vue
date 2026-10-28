<template>
  <div>
    <!-- desktop mode -->
    <div
      class="fixed  w-full dark:bg-slate-900/50 bg-slate-100 border-b border-b-slate-200 dark:border-none backdrop-blur-lg py-4 px-6 z-50 md:flex md:justify-between hidden">
      <div class="logo">
        <NuxtLink to="/" class="lg:text-3xl font-bold md:text-xl text-lg b-ziba text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-green-500 to-blue-600">آنـی‌سو</NuxtLink>
      </div>
      <div class="md:flex md:justify-center md:gap-x-2 hidden">
        <UButton to="/" icon="solar:info-circle-broken" color="neutral" variant="link" class="self-center">پشتیبانی
        </UButton>
        <UButton to="/" icon="solar:wallet-2-linear" color="neutral" variant="link" class="self-center">تعرفه</UButton>
        <UButton to="/" icon="solar:map-point-linear" color="neutral" variant="link" class="self-center">آدرس ما
        </UButton>
      </div>
        <UColorModeSelect arrow />
    </div>
    <!-- mobile mode -->
    <div
      class="w-full dark:bg-slate-900/50 bg-slate-100  border-b border-b-slate-200 dark:border-none backdrop-blur-lg py-3 px-6 z-50 flex justify-between md:hidden">
      <USlideover side="right" inset>
         <UButton icon="solar:hamburger-menu-linear" color="neutral" variant="subtle" />
        <template #body>
          <div class="flex flex-col  gap-y-2">
            <UButton to="/" icon="solar:info-circle-broken" color="neutral" variant="link">پشتیبانی
            </UButton>
            <UButton to="/" icon="solar:wallet-2-linear" color="neutral" variant="link">تعرفه
            </UButton>
            <UButton to="/" icon="solar:map-point-linear" color="neutral" variant="link">آدرس ما
            </UButton>
          </div>
        </template>
      </USlideover>
      <UColorModeButton />
    </div>
  </div>
</template>

<style scoped>
.b-ziba {
  font-family: "ziba"
}
</style>