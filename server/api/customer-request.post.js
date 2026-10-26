export default defineEventHandler(async (event) => {
    try {
        const result = await proxyRequest(event, 'http://localhost:4000/api/customer/send-request')
        return result
    } catch (error) {
        return error
    }
})