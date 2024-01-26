import Property from "@/models/property";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
    const { id, photos, coverPhoto, category, buildStatus, propertyName, price, location, commute1, commute2, rooms, baths, parking, size, landArea, builtYear, builtOf, amenities } = await request.json();

    try {
        await connectToDB();
        const newProperty = new Property({ id, photos, coverPhoto, category, buildStatus, propertyName, price, location, commute1, commute2, rooms, baths, parking, size, landArea, builtYear, builtOf, amenities });

        await newProperty.save();
        return new Response(JSON.stringify(newProperty), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new property", { status: 500 });
    }
}
