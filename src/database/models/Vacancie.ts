import { model } from 'mongoose';
import { IVacancie } from '../interface/Vacancie';
import { VacancieSchema } from '../schema/Vacancie';

export const Vacancie = model<IVacancie>('Vacancie', VacancieSchema);