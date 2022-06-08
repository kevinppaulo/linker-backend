import { Schema } from 'mongoose';
import { ICompany } from '../interface/Company';

export const CompanySchema = new Schema<ICompany>({
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
  site: {
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
  }
});
