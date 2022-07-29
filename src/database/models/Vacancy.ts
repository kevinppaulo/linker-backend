import { model } from 'mongoose';
import { IVacancy } from '../interface/Vacancy';
import { VacancySchema } from '../schema/Vacancy';

export const Vacancy = model<IVacancy>('Vacancy', VacancySchema);
