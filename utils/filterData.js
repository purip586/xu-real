export const filterData = [
  {
    items: [
      { name: 'No min limit', value: '0' },
      { name: '10,000,000', value: '10000000' },
      { name: '20,000,000', value: '20000000' },
      { name: '30,000,000', value: '30000000' },
      { name: '40,000,000', value: '40000000' },
      { name: '50,000,000', value: '50000000' },
      { name: '60,000,000', value: '60000000' },
      { name: '70,000,000', value: '70000000' },
      { name: '80,000,000', value: '80000000' },
      { name: '90,000,000', value: '90000000' },
      { name: '100,000,000', value: '100000000' },
      { name: '200,000,000', value: '200000000' },
      { name: '300,000,000', value: '300000000' },
      { name: '400,000,000', value: '400000000' },
      { name: '500,000,000', value: '500000000' },
    ],
    placeholder: 'Min Price(JPY)',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: '20,000,000', value: '20000000' },
      { name: '30,000,000', value: '30000000' },
      { name: '40,000,000', value: '40000000' },
      { name: '50,000,000', value: '50000000' },
      { name: '60,000,000', value: '60000000' },
      { name: '70,000,000', value: '70000000' },
      { name: '80,000,000', value: '80000000' },
      { name: '90,000,000', value: '90000000' },
      { name: '100,000,000', value: '100000000' },
      { name: '200,000,000', value: '200000000' },
      { name: '300,000,000', value: '300000000' },
      { name: '400,000,000', value: '400000000' },
      { name: '500,000,000', value: '500000000' },
      { name: 'No max limit', value: '' },
 
    ],
    placeholder: 'Max Price(JPY)',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: 'Lowest Price', value: 'price-asc' },
      { name: 'Highest Price', value: 'price-des' },
      { name: 'Newest', value: 'date-asc' },
    ],
    placeholder: 'Sort',
    queryName: 'sort',
  },
  {
    items: [
      { name: '30', value: '30' },
      { name: '40', value: '40' },
      { name: '50', value: '50' },
      { name: '60', value: '60' },
      { name: '70', value: '70' },
      { name: '80', value: '80' },
      { name: '90', value: '90' },
      { name: '100+', value: '' },
    ],
    placeholder: 'Min Area(sqm)',
    queryName: 'areaMin',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6+', value: '' },
  
    ],
    placeholder: 'Min Bedrooms',
    queryName: 'roomsMin',
  },
 
  {
    items: [
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    placeholder: 'Parking',
    queryName: 'parkingStatus',
  },
  {
    items: [
      { name: 'Detached Home', value: '1' },
      { name: 'Investment Property, Apartment, Mansion', value: '2' },
      { name: 'Mansion Unit, Condominium', value: '3' },
      { name: 'Penthouses', value: '4' }
    ],
    placeholder: 'Property Type',
    queryName: 'categoryID',
  },
];

export const getFilterValues = (filterValues) => {
  const {
    categoryID,
    minPrice,
    maxPrice,
    roomsMin,
    sort,
    locationExternalIDs,
  } = filterValues;

  const values = [
    {
      name: 'minPrice',
      value: minPrice,
    },
    {
      name: 'maxPrice',
      value: maxPrice,
    },
    {
      name: 'roomsMin',
      value: roomsMin,
    },
    {
      name: 'sort',
      value: sort,
    },
    {
      name: 'locationExternalIDs',
      value: locationExternalIDs,
    },
    {
      name: 'categoryID',
      value: categoryID,
    },
  ];

  return values;
};
