export default defineNuxtRouteMiddleware((from, to) => {
    const { adminAuth } = useAuth()
    if (to.path === '/admin' && (!adminAuth.value || adminAuth.value === null)) return navigateTo('/admin/auth', { redirectCode: 401 })
})