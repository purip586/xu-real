import { Schema, model, models } from 'mongoose';

const PropertySchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'PropertyId'
  },
  photos: {
    type: String,
  },
  coverPhoto:{
    type: String,
    required: true
  },
  category: {
    type: String,
  },
  buildStatus: {
    type: String,
  },
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
  commute1: {
    type: String,
  },
  commute2: {
    type: String,
  },
  rooms: {
    type: Number,
  },
  baths: {
    type: Number,
  },
  parking: {
    type: Number,
  },
  size: {
    type: String,
  },
  landArea:{
    type: String,
  },
  builtYear: {
    type: String,
  },
  builtOf: {
    type: String,
  },
  amenities:{
    type: String,
  },

});

const Property = models.Property || model('Property', PropertySchema);

export default Property;