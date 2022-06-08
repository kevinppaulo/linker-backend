import { Request, Response } from 'express';
import { User } from '../database/models/User';

class UserController {
  async findAll(_request: Request, response: Response) {
    const users = await User.find({});
    if (users.length > 0) {
      return response.status(200).json(users);
    } else {
      return response.status(204).json(users);
    }
  }
  async findOne(request: Request, response: Response) {
    const { userID } = request.params;
    const user = await User.findById(userID);
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(204).json(user);
    }
  }
  async create(request: Request, response: Response) {
    const {
      name,
      phone,
      photo,
      about,
      linkedin,
      github,
      state,
      city,
      interests
    } = request.body;
    const user = await User.create({
      name,
      phone,
      photo,
      about,
      linkedin,
      github,
      state,
      city,
      interests
    });
    if (user) {
      return response.status(201).json(user);
    } else {
      return response.status(400).json(user);
    }
  }
  async update(request: Request, response: Response) {
    const { userID } = request.params;
    const {
      name,
      phone,
      photo,
      about,
      linkedin,
      github,
      state,
      city,
      interests
    } = request.body;
    const user = await User.findByIdAndUpdate(
      userID,
      {
        name,
        phone,
        photo,
        about,
        linkedin,
        github,
        state,
        city,
        interests
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
    const user = await User.findByIdAndDelete(userID);
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(400).json(user);
    }
  }
}

export default new UserController();
