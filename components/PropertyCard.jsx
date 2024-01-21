import Link from "next/link";
import Image from "next/image";
import {Box, Flex, Text} from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import millify from "millify";
import { useParams } from "next/navigation";

import defaultImage from '@/public/assets/house.jpg';

const params = useParams()
const id = params._id;

const PropertyCard = ({property: {coverPhoto, propertyName, price, location, rooms, desc, baths, area, id}}) => (
   
    <Link style={{ textDecoration: 'none' }} href={`/property/:_id`} passHref>
        <Flex className="property_tag" flexDir='column' w="400px" p="5" paddingTop="0" justifyContent="center" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? {coverPhoto} : defaultImage} width={400} height={260} alt="house" />
            </Box>

            <Box w="full">
                <p>{id}</p>
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Text fontWeight="bold" fontSize="lg">{propertyName}</Text>
                    <Text fontSize="sm">JPY {price}</Text>
                </Flex>
                <Flex alignItems="center">
                    <Text fontSize="sm">{location}</Text>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqm
                </Flex>
                {/* <Text fontSize="lg">
                    {title?.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Text> */}
            </Box>
        </Flex>
    </Link>
);

export default PropertyCard;