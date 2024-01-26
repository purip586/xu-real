'use client'

import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';

const Properties = ({ data }) => {
  console.log(data);
  return (
    <div className='mt-11 property_layout'>
      {data.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
};

const PropertyList = () => {

  const [property, setProperty] = useState([]);

  useEffect(() => {
      const fetchProperty = async () => {
        const response = await fetch('/api/property')
        const data = await response.json();

        setProperty(data);
      }
      fetchProperty();
  }, []);

  return(
    <div>
      <Properties
        data = {property}
      />
    </div>
  )
}

export default PropertyList;

