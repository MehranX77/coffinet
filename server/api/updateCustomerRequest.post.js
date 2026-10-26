export default defineEventHandler(async (event) => {
    try {
        const token = getCookie(event, 'auth-token')
        const { id, statusId } = await readBody(event)
        const result = await $fetch(`http://localhost:4000/api/admin/updateRequest/${id}/${statusId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (result.status === 201) {
            return result
        }
    } catch (error) {
        return error?.data?.message || error?.data
    }
})