import { model } from 'mongoose';
import { ITest } from '../interface/Test';
import { TestSchema } from '../schema/Test';

export const Test = model<ITest>('Test', TestSchema);
