export default defineEventHandler(async (event) => {
    try {
        const token = getCookie(event, 'auth-token')
        const result = await $fetch('http://localhost:4000/api/admin/logout', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (result.status === 200) {
            deleteCookie(event, 'auth-token', {
                path:'/',
                httpOnly: true,
                expires: new Date(1998)
            })
            return result

        }

    } catch (error) {
        return error
    }
})