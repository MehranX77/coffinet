<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <UMain>
      <NuxtPwaManifest />
      <div v-show="$pwa?.needRefresh">
        <UAlert class="fixed bottom-4 left-4 right-4 z-9999" color="success" variant="soft" close
          description="نسخه جدید برنامه در دسترس است، لطفا برای بروزرسانی برنامه را مجدد بارگذاری کنید">
          <template #actions>
            <UButton variant="solid" color="warning" @click="$pwa.updateServiceWorker()">
              بروزرسانی
            </UButton>
          </template>
        </UAlert>
      </div>
      <div v-show="$pwa?.showInstallPrompt && !$pwa.isPWAInstalled">
        <UAlert class="fixed bottom-4 left-4 right-4 z-9999" color="success" variant="soft" close
          description="برای تجربه بهتر برنامه، لطفا برنامه را نصب کنید">
          <template #actions>
            <UButton variant="solid" color="warning" @click="$pwa.install()">
              نصب برنامه
            </UButton>
          </template>
        </UAlert>
      </div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>

<script setup>
const { $pwa } = useNuxtApp()
console.log($pwa);

const toast = useToast()

onMounted(() => {
  if ($pwa.offlineReady) {
    toast.add({
      color: 'success',
      description: 'برنامه به حالت آفلاین تغییر وضعیت داده شد'
    })
  }
})

useHeadSafe({
  bodyAttrs: {
    class: 'bg-slate-100 dark:bg-slate-900'
  }
})

</script>
