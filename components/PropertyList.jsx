import PropertyCard from '@/components/PropertyCard';

const fetchProperty = async () => {
  const response = await fetch('http://localhost:3000/api/property')
  const data = await response.json();

  return data
}

const PropertyList = async () => {

  const property = await fetchProperty();
 return(
    <div>
      <Properties
        data={property}
      />
    </div>
  )
}

const Properties = ({ data }) => {
  return (
    <div className='mt-11 property_layout'>
      {data.map((property) => (
        <PropertyCard
          key={property._id}
          property={property}
        />
      ))}
    </div>
  );
};


export default PropertyList;

