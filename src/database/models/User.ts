import { model } from 'mongoose';
import { IUser } from '../interface/User';
import { UserSchema } from '../schema/User';

export const User = model<IUser>('User', UserSchema);
