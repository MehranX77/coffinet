export default defineNuxtPlugin(async (NuxtApp) => {
    const { adminAuth } = useAuth()
    try {
        const response = await $fetch('/api/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${useCookie('auth-token')}`
            }
        })
        adminAuth.value = response
    } catch (error: any) {
        console.log(error.data);

    }

})