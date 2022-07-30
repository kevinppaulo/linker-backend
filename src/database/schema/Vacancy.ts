import { Schema } from 'mongoose';
import { IVacancy } from '../interface/Vacancy';

export const VacancySchema = new Schema<IVacancy>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  localization: {
    type: String,
    required: true
  },
  mandatory_requirements: {
    type: String,
    required: true
  },
  desirable_requirements: {
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
  salary: {
    type: String,
    required: true
  },
  negotiable_salary: {
    type: Boolean,
    required: true
  },
  test_id: {
    type: String
  }
});
