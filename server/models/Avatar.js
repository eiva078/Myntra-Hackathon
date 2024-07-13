import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  stars: { type: Number, required: true },
  count: { type: Number, required: true }
});

const avatarSchema = new Schema({
  id: { type: String, required: true },
  image: { type: String, required: true },
  company: { type: String, required: true },
  imgPath: { type: String, required: true },
  item_name: { type: String, required: true },
  original_price: { type: Number, required: true },
  current_price: { type: Number, required: true },
  discount_percentage: { type: Number, required: true },
  rating: { type:  RatingSchema, required: true }
});

const Avatar = mongoose.model('Avatar', avatarSchema);
export default Avatar;
