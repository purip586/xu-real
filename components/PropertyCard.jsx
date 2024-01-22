import Link from "next/link";
import Image from "next/image";
import {Box, Flex, Text} from '@chakra-ui/react';
import {FaBed, FaBath, FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import millify from "millify";
import { useParams } from "next/navigation";

import defaultImage from '@/public/assets/house.jpg';



const PropertyCard = ({property: {_id, coverPhoto, propertyName, price, location, rooms, baths, parking, area, desc}}) => (
   
    <Link style={{ textDecoration: 'none' }} href={`/property/${_id}`} passHref>
        <Flex className="property_tag" flexDir='column' w="400px" p="5" paddingTop="0" justifyContent="center" cursor="pointer">
            <Box>
                <Image src={ defaultImage} width={400} height={260} alt="house" />
            </Box>

            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Text fontWeight="bold" fontSize="lg">{propertyName}</Text>
                    <Text fontSize="sm">JPY {price.toLocaleString('en-US', {style:'currency', currency:'JPY'})}</Text>
                </Flex>
                <Flex alignItems="center">
                    <FaMapMarkerAlt /><Text fontSize="sm">{location}</Text>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {parking} <FaCar/> | {millify(area)} sqm
                </Flex>
                <Text fontSize="lg">
                    {desc?.length > 30 ? `${desc.substring(0, 30)}...` : desc}
                </Text>
            </Box>
        </Flex>
    </Link>
);

export default PropertyCard;