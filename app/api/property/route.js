import Property from '@/models/property'
import { connectToDB } from '@/utils/database'

export const GET = async (request) => {
    try {
        await connectToDB()

        const properties = await Property.find({})

        return new Response(JSON.stringify(properties), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}
