import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { FaBed, FaBath } from 'react-icons/fa';
import ImageScrollbar from '@/components/ImageScrollbar';

const PropertyDetail = ({ propertyDetails: {id, photos, category, buildStatus, propertyName, price, location, commute1, commute2, rooms, baths, parking, size, landArea, builtYear, builtOf, amenities } }) => (
    <Box maxWidth='1000px' margin='auto' p='4'>
      {photos && <ImageScrollbar data={photos} />}
      <Box w='full' p='6'>
        <Flex paddingTop='2' alignItems='center'>
          <Text fontWeight='bold' fontSize='lg'>
            JPY {price.toLocaleString('en-US')}
          </Text>
          <Spacer />
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.900'>
          {rooms} <FaBed /> | {baths} <FaBath /> | {parking} <FaCar/> | {area} sqm      
        </Flex>
      </Box>
      <Box marginTop='2'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{propertyName}</Text>
        <Text lineHeight='2' color='gray.600'>{amenities}</Text>
      </Box>
      <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
          <Text>Type</Text>
          <Text fontWeight='bold'>{type}</Text>
        </Flex>
  
      </Flex>
      <Box>
        {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
          <Flex flexWrap='wrap'>
            {amenities?.map((item) => (
                item?.amenities?.map((amenity) => (
                  <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                    {amenity.text}
                  </Text>
                ))
            ))}
          </Flex>
      </Box>
    </Box>
  );

export default PropertyDetail;