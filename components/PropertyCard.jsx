import Link from "next/link";
import Image from "next/image";
import {Box, Flex, Text} from '@chakra-ui/react';
import {FaBed, FaBath, FaMapMarkerAlt, FaCar } from 'react-icons/fa';

import defaultImage from '@/public/assets/house.jpg';


const PropertyCard = ({property: {_id, coverPhoto, propertyName, price, location, rooms, baths, parking, size, amenities}}) => (
   
    <Link style={{ textDecoration: 'none' }} href={`/property/${_id}`} passHref>
        <Flex className="property_tag" flexDir='column' w="360px" p="5" mb="4" paddingTop="0" justifyContent="center" cursor="pointer">
            <Box>
                <Image src={ defaultImage} width={360} height={260} alt="house" />
            </Box>

            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Text fontWeight="bold" fontSize="lg">{propertyName}</Text>
                    <Text fontSize="sm">JPY {price.toLocaleString('en-US')}</Text>
                </Flex>
                <Flex alignItems="center" color="blue.500" gap="1">
                    <FaMapMarkerAlt /><Text fontSize="sm">{location}</Text>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.500">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {parking} <FaCar/> | {size} sqm
                </Flex>
                <Text fontSize="sm">
                    {amenities?.length > 50 ? `${amenities.substring(0, 50)}...` : amenities}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default PropertyCard;


