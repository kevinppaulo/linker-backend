import { Request, Response } from 'express';
import { Company } from '../database/models/Company';

class CompanyController {
  async findAll(_request: Request, response: Response) {
    const users = await Company.find({});
    if (users.length > 0) {
      return response.status(200).json(users);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Nenhum usuário encontrado!' });
    }
  }

  async findOne(request: Request, response: Response) {
    const { companyID } = request.params;
    const user = await Company.findById(companyID);
    if (user) {
      return response.status(200).json(user);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Usuário não encontrado!' });
    }
  }

  async create(request: Request, response: Response) {
    const { name, phone, photo, about, site, state, city } = request.body;
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
    if (site.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O site é obrigatório!' });
    }
    if (state.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O estado é obrigatória!' });
    }
    if (city.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'A cidade é obrigatória!' });
    }
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
      return response.status(201).json({ type: 'Sucesso', message: 'Usuário criado com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Usuário já cadastrado!' });
    }
  }

  async update(request: Request, response: Response) {
    const { companyID } = request.params;
    const { name, phone, photo, about, site, state, city } = request.body;
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
    if (site.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O site é obrigatório!' });
    }
    if (state.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'O estado é obrigatória!' });
    }
    if (city.length === 0) {
      return response.status(400).json({ type: 'Erro', message: 'A cidade é obrigatória!' });
    }
    //if (companyID != auth0.user.sub) {
    //  return response.status(401).json({ type: 'Alerta', message: 'Usuário não autorizado!' });
    //}
    const user = await Company.findByIdAndUpdate(
      companyID,
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
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Usuário atualizado com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Usuário não encontrado!' });
    }
  }
  async delete(request: Request, response: Response) {
    const { companyID } = request.params;
    //if (companyID != auth0.user.sub) {
    //  return response.status(401).json({ type: 'Alerta', message: 'Usuário não autorizado!' });
    //}
    const user = await Company.findByIdAndDelete(companyID);
    if (user) {
      return response
        .status(200)
        .json({ type: 'Sucesso', message: 'Usuário deletado com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Usuário não encontrado!' });
    }
  }
}

export default new CompanyController();
