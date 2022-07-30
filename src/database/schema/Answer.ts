import { Schema } from 'mongoose';
import { IAnswer } from '../interface/Answer';

export const AnswerSchema = new Schema<IAnswer>({
  user_id: {
    type: String,
    required: true
  },
  question_id: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});
