import { Request, Response } from 'express';
import { Company } from '../database/models/Company';

class CompanyController {
  async findAll(_request: Request, response: Response) {
    const users = await Company.find({});
    if (users) {
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
    const errors = [];
    if (name.length === 0) {
      const error = { type: 'Erro', message: 'O nome da empresa deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (name.length > 64) {
      const error = {
        type: 'Erro',
        message: 'O nome da empresa deve ter no máximo 64 caracteres!'
      };
      errors.push(error);
    }
    if (phone.length != 11 && phone.length != 10) {
      const error = { type: 'Erro', message: 'O telefone deve ter 11 ou 10 digitos!' };
      errors.push(error);
    }
    if (photo.length === 0) {
      const error = { type: 'Erro', message: 'A foto é obrigatória!' };
      errors.push(error);
    }
    if (about.length === 0) {
      const error = { type: 'Erro', message: 'O sobre a empresa deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (about.length > 124) {
      const error = {
        type: 'Erro',
        message: 'O sobre a empresa deve ter no máximo 124 caracteres!'
      };
      errors.push(error);
    }
    if (site.length === 0) {
      const error = { type: 'Erro', message: 'O site é obrigatório!' };
      errors.push(error);
    }
    if (state.length === 0) {
      const error = { type: 'Erro', message: 'O estado é obrigatória!' };
      errors.push(error);
    }
    if (city.length === 0) {
      const error = { type: 'Erro', message: 'A cidade é obrigatória!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
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
    const errors = [];
    if (name.length === 0) {
      const error = { type: 'Erro', message: 'O nome da empresa deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (name.length > 64) {
      const error = {
        type: 'Erro',
        message: 'O nome da empresa deve ter no máximo 64 caracteres!'
      };
      errors.push(error);
    }
    if (phone.length != 11 && phone.length != 10) {
      const error = { type: 'Erro', message: 'O telefone deve ter 11 ou 10 digitos!' };
      errors.push(error);
    }
    if (photo.length === 0) {
      const error = { type: 'Erro', message: 'A foto é obrigatória!' };
      errors.push(error);
    }
    if (about.length === 0) {
      const error = { type: 'Erro', message: 'O sobre a empresa deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (about.length > 124) {
      const error = {
        type: 'Erro',
        message: 'O sobre a empresa deve ter no máximo 124 caracteres!'
      };
      errors.push(error);
    }
    if (site.length === 0) {
      const error = { type: 'Erro', message: 'O site é obrigatório!' };
      errors.push(error);
    }
    if (state.length === 0) {
      const error = { type: 'Erro', message: 'O estado é obrigatória!' };
      errors.push(error);
    }
    if (city.length === 0) {
      const error = { type: 'Erro', message: 'A cidade é obrigatória!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }
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
