import { model } from 'mongoose';
import { IAnswer } from '../interface/Answer';
import { AnswerSchema } from '../schema/Answer';

export const Answer = model<IAnswer>('Answer', AnswerSchema);
