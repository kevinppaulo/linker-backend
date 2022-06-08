import { Request, Response } from 'express';
import { Company } from '../database/models/Company';

class CompanyController {
  async findAll(_request: Request, response: Response) {
    const users = await Company.find({});
    if (users.length > 0) {
      return response.status(200).json(users);
    } else {
      return response.status(204).json(users);
    }
  }
  async findOne(request: Request, response: Response) {
    const { userID } = request.params;
    const user = await Company.findById(userID);
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(204).json(user);
    }
  }
  async create(request: Request, response: Response) {
    const { name, phone, photo, about, site, state, city } = request.body;
    const user = await Company.create({
      name,
      phone,
      photo,
      about,
      site,
      state,
      city
    });
    if (user) {
      return response.status(201).json(user);
    } else {
      return response.status(400).json(user);
    }
  }
  async update(request: Request, response: Response) {
    const { userID } = request.params;
    const { name, phone, photo, about, site, state, city } = request.body;
    const user = await Company.findByIdAndUpdate(
      userID,
      {
        name,
        phone,
        photo,
        about,
        site,
        state,
        city
      },
      { new: true }
    );
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(400).json(user);
    }
  }
  async delete(request: Request, response: Response) {
    const { userID } = request.params;
    const user = await Company.findByIdAndDelete(userID);
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(400).json(user);
    }
  }
}

export default new CompanyController();
