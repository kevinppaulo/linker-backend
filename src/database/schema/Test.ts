import { Schema } from 'mongoose';
import { ITest } from '../interface/Test';

export const TestSchema = new Schema<ITest>({
  vacancy_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
