import { model } from 'mongoose';
import { IQuestion } from '../interface/Question';
import { QuestionSchema } from '../schema/Question';

export const Question = model<IQuestion>('Question', QuestionSchema);
