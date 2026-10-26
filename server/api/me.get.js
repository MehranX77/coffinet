export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'auth-token')

    try {
        const result = await $fetch('http://localhost:4000/api/admin/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log('res from server:', result);
        
        if (result.status === 200) {
            return result.data
        }

    } catch (error) {
        return error.data || error?.data?.message
    }
})