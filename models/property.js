import { Schema, model, models } from 'mongoose';

const PropertySchema = new Schema({

  propertyName: {
    type: String,
    required: [true, 'Property Name is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required.'],
  },
  location: {
    type: String,
    required: true
  },
  coverPhoto:{
    type: String,
    required: true
  }
});

const Property = models.Property || model('Property', PropertySchema);

export default Property;