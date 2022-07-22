import { model } from 'mongoose';
import { ICompany } from '../interface/Company';
import { CompanySchema } from '../schema/Company';

export const Company = model<ICompany>('Company', CompanySchema);
