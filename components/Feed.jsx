'use client';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import SearchFilters from './SearchFilters';

import PropertyCard from '@/components/PropertyCard';
import noresult from '@/public/assets/noresult.svg';

import { useState, useEffect } from 'react';

const PropertyList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 property_layout'>
      {data.map((post) => (
        <PropertyCard
          key={post._id}
          property={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/property");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box>
        <Flex
            mt="10" 
            cursor="pointer"
            bg="gray.100"
            borderBottom="1px"
            borderColor="gray.200"
            P="2"
            fontWeight='normal'
            fontSize='sm'
            justifyContent='center'
            alignItems='center'
        >
            <SearchFilters />
        </Flex>
 
        <PropertyList 
          data={allPosts}
          handleTagClick={() => {}} 
        />
    </Box>
  )
}

export default Feed;
