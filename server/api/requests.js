export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'auth-token')

    try {
        const response = await $fetch('http://localhost:4000/api/admin/allRequests', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.status === 200) {
            return response
        }
    } catch (error) {
        return error?.data?.message || error?.data
    }
})