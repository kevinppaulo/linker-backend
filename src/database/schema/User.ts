import { Schema } from 'mongoose';
import { IUser } from '../interface/User';

export const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  interests: {
    type: String,
    required: true
  },
  certificate: {
    type: String,
    required: false
  }
});
