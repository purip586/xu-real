
import PropertyDetail from '@/components/PropertyDetail';

const PropertyDetailsPage = ({ propertyDetails }) => {
  return (
    <div>
      <PropertyDetail propertyDetails={propertyDetails} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  // Fetch data based on the id from MongoDB
  const response = await fetchApi(`/api/property/${id}`);
  const propertyDetails = await response.json();

  return {
    props: {
      propertyDetails,
    },
  };
}

export default PropertyDetailsPage;
