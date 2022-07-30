import { Schema } from 'mongoose';
import { IQuestion } from '../interface/Question';

export const QuestionSchema = new Schema<IQuestion>({
  test_id: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  }
});
