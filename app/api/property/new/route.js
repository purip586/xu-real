import Property from "@/models/property";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { propertyName, price, location, coverPhoto } = await request.json();

    try {
        await connectToDB();
        const newProperty = new Property({ propertyName, price, location, coverPhoto });

        await newProperty.save();
        return new Response(JSON.stringify(newProperty), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new property", { status: 500 });
    }
}
