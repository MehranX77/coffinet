import { z } from 'zod'

const adminSchema = z.object({
    username: z.string('لطفا نام کاربری معتبر وارد کنید').nonempty(),
    password: z.string('فیلد رمزعبور اجباری است').nonempty(),
})

export default defineEventHandler(async (event) => {
    const body = await readValidatedBody(event, body => adminSchema.safeParse(body))

    if (!body.success) {
        throw body.error.issues
    }

    try {
        const result = await $fetch('http://localhost:4000/api/admin/auth', {
            method: 'POST',
            body: {
                username: body.data.username,
                password: body.data.password
            }
        })
        
        if (result.status === 200) {
            setCookie(event, 'auth-token', result.data.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite:'lax',
                path:'/',
                maxAge:3*24*60*60
            })
        }
        return {result: result.status, data: result.data.result}

    } catch (error) {
        throw createError({
            statusCode: 500,
            message: error?.data?.message || error.data
        })
    }
})