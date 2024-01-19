import Property from "@/models/property";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const property = await Property.findById(params.id)
        if (!property) return new Response("Property Not Found", { status: 404 });

        return new Response(JSON.stringify(property), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { coverPhoto, propertyName, price, location } = await request.json();

    try {
        await connectToDB();

        // Find the existing property by ID
        const existingProperty = await Property.findById(params.id);

        if (!existingProperty) {
            return new Response("Property not found", { status: 404 });
        }

        // Update the property with new data
        existingProperty.coverPhoto= coverPhoto;
        existingProperty.propertyName = propertyName;
        existingProperty.price = price;
        existingProperty.location = location;

        await existingProperty.save();

        return new Response("Successfully updated the Property", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Property", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the property by ID and remove it
        await Property.findByIdAndRemove(params.id);

        return new Response("Property deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting property", { status: 500 });
    }
};
