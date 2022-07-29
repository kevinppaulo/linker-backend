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
  vacancy_method: {
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
  vacancy_test: {
    type: String
  }
});
