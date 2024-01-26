import PropertyDetail from "@/components/PropertyDetail";

const fetchProperty = async (id) => {
  const res = await fetch(`http://localhost:3000/api/property/${id}`)
  const property = await res.json()

  return property
}

const PropertyDetailsPage = async ({params}) => { 

  const { id } = params
const propertyDetails = await fetchProperty(id)

  return (
    <div>
      PropertyDetailsPage
      <PropertyDetail propertyDetails={propertyDetails} />
    </div>
  );
};



export default PropertyDetailsPage;
