import { Schema } from 'mongoose';
import { IVacancie } from '../interface/Vacancie';

export const VacancieSchema = new Schema<IVacancie>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  vacancie_method: {
    type: String,
    required: true
  },
  localization: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  requirements_desirable: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  }, 
  benefits: {
    type: String,
    required: true
  },
  remuneration: {
    type: String,
    required: true
  },
  vacancie_test: {
    type: String,
  }
});
