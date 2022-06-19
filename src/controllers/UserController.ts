import { Request, Response } from 'express';
import { User } from '../database/models/User';

class UserController {
  async findAll(_request: Request, response: Response) {
    const users = await User.find({});
    if (users.length > 0) {
      return response.status(200).json(users);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Nenhum usuário encontrado!' });
    }
  }

  async findOne(request: Request, response: Response) {
    const { userID } = request.params;
    const user = await User.findById(userID);
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Usuário não encontrado!' });
    }
  }

  async create(request: Request, response: Response) {
    const { name, phone, photo, about, linkedin, github, state, city, interests } = request.body;
    if (name.length === 0) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O nome deve ter no mínimo 1 caractere!' });
    }
    if (name.length > 64) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O nome deve ter no máximo 64 caracteres!' });
    }
    if (phone.length != 11) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O telefone deve ter 11 digitos!' });
    }
    if (photo.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'A foto é obrigatória!' });
    }
    if (about.length === 0) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O nome deve ter no mínimo 1 caractere!' });
    }
    if (about.length > 124) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O nome deve ter no máximo 124 caracteres!' });
    }
    if (linkedin.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O LinkedIn é obrigatório!' });
    }
    if (github.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O GitHub é obrigatório!' });
    }
    if (state.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O estado é obrigatória!' });
    }
    if (city.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'A cidade é obrigatória!' });
    }
    if (interests.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'Os interesses são obrigatório!' });
    }
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
      return response.status(201).json({ type: 'Sucesso', message: 'Usuário criado com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Usuário já cadastrado!' });
    }
  }

  async update(request: Request, response: Response) {
    const { userID } = request.params;
    const { name, phone, photo, about, linkedin, github, state, city, interests } = request.body;
    if (name.length === 0) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O nome deve ter no mínimo 1 caractere!' });
    }
    if (name.length > 64) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O nome deve ter no máximo 64 caracteres!' });
    }
    if (phone.length != 11) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O telefone deve ter 11 digitos!' });
    }
    if (photo.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'A foto é obrigatória!' });
    }
    if (about.length === 0) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O nome deve ter no mínimo 1 caractere!' });
    }
    if (about.length > 124) {
      return response
        .status(400)
        .json({ type: 'Erro', message: 'O nome deve ter no máximo 124 caracteres!' });
    }
    if (linkedin.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O LinkedIn é obrigatório!' });
    }
    if (github.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O GitHub é obrigatório!' });
    }
    if (state.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O estado é obrigatória!' });
    }
    if (city.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'A cidade é obrigatória!' });
    }
    if (interests.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'Os interesses são obrigatório!' });
    }
    //if (userID != auth0.user.sub) {
    //  return response.status(401).json({ type: 'Alerta', message: 'Usuário não autorizado!' });
    //}
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
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Usuário atualizado com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Usuário não encontrado!' });
    }
  }

  async delete(request: Request, response: Response) {
    const { userID } = request.params;
    //if (userID != auth0.user.sub) {
    //  return response.status(401).json({ type: 'Alerta', message: 'Usuário não autorizado!' });
    //}
    const user = await User.findByIdAndDelete(userID);
    if (user) {
      return response
        .status(200)
        .json({ type: 'Sucesso', message: 'Usuário deletado com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Usuário não encontrado!' });
    }
  }
}

export default new UserController();
