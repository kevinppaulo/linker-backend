import { Request, Response } from 'express';
import { Vacancy } from '../database/models/Vacancy';

class VacancyController {
  async findAll(_request: Request, response: Response) {
    const vacancies = await Vacancy.find({});
    if (vacancies) {
      return response.status(200).json(vacancies);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Nenhuma vaga encontrada!' });
    }
  }

  async findOne(request: Request, response: Response) {
    const { vacancyID } = request.params;
    const vacancy = await Vacancy.findById(vacancyID);
    if (vacancy) {
      return response.status(200).json(vacancy);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Vaga não encontrada!' });
    }
  }

  async create(request: Request, response: Response) {
    const {
      name,
      description,
      type,
      localization,
      mandatory_requirements,
      desirable_requirements,
      area,
      benefits,
      salary,
      negotiable_salary
    } = request.body;
    const errors = [];
    if (name.length === 0) {
      const error = { type: 'Erro', message: 'O nome deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (name.length > 64) {
      const error = { type: 'Erro', message: 'O nome deve ter no máximo 64 caracteres!' };
      errors.push(error);
    }
    if (description.length === 0) {
      const error = { type: 'Erro', message: 'Sua descrição deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (description.length > 256) {
      const error = { type: 'Erro', message: 'A descrição deve ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (type.length === 0) {
      const error = { type: 'Erro', message: 'Tipo da vaga é obrigatório!' };
      errors.push(error);
    }
    if (localization.length === 0) {
      const error = { type: 'Erro', message: 'Localização da vaga é obrigatório!' };
      errors.push(error);
    }
    if (mandatory_requirements.length === 0) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos obrigatórios devem ter no mínimo 1 caractere!'
      };
      errors.push(error);
    }
    if (mandatory_requirements.length > 256) {
      const error = {
        type: 'Erro',
        messageL: 'Os requesitos obrigatórios devem ter no máximo 256 caracteres!'
      };
      errors.push(error);
    }
    if (desirable_requirements.length === 0) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos desejáveis devem ter no mínimo 1 caractere!'
      };
      errors.push(error);
    }
    if (desirable_requirements.length > 256) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos desejáveis devem ter no máximo 256 caractere!'
      };
      errors.push(error);
    }
    if (area.length === 0) {
      const error = { type: 'Erro', message: 'As áreas de atuação da vaga são obrigatórias!' };
      errors.push(error);
    }
    if (benefits.length === 0) {
      const error = { type: 'Erro', message: 'Os benefícios devem ter no mínimo 1 caracter!' };
      errors.push(error);
    }
    if (benefits.length > 256) {
      const error = { type: 'Erro', message: 'Os benefícios devem ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (salary.length === 0) {
      const error = { type: 'Erro', message: 'O salário é obrigatório!' };
      errors.push(error);
    }
    if (negotiable_salary != true && negotiable_salary != false) {
      const error = { type: 'Erro', message: 'O salário negociável é obrigatório!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }
    const vacancy = await Vacancy.create({
      name,
      description,
      type,
      localization,
      mandatory_requirements,
      desirable_requirements,
      area,
      benefits,
      salary,
      negotiable_salary
    });
    if (vacancy) {
      return response.status(201).json({ type: 'Sucesso', message: 'Vaga criada com sucesso!' });
    } else {
      return response.status(404).send({ type: 'Erro', message: 'Vaga já cadastrada!' });
    }
  }

  async update(request: Request, response: Response) {
    const { vacancyID } = request.params;
    const {
      name,
      description,
      type,
      localization,
      mandatory_requirements,
      desirable_requirements,
      area,
      benefits,
      salary,
      negotiable_salary
    } = request.body;
    const errors = [];
    if (name.length === 0) {
      const error = { type: 'Erro', message: 'O nome deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (name.length > 64) {
      const error = { type: 'Erro', message: 'O nome deve ter no máximo 64 caracteres!' };
      errors.push(error);
    }
    if (description.length === 0) {
      const error = { type: 'Erro', message: 'Sua descrição deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (description.length > 256) {
      const error = { type: 'Erro', message: 'A descrição deve ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (type.length === 0) {
      const error = { type: 'Erro', message: 'Tipo da vaga é obrigatório!' };
      errors.push(error);
    }
    if (localization.length === 0) {
      const error = { type: 'Erro', message: 'Localização da vaga é obrigatório!' };
      errors.push(error);
    }
    if (mandatory_requirements.length === 0) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos obrigatórios devem ter no mínimo 1 caractere!'
      };
      errors.push(error);
    }
    if (mandatory_requirements.length > 256) {
      const error = {
        type: 'Erro',
        messageL: 'Os requesitos obrigatórios devem ter no máximo 256 caracteres!'
      };
      errors.push(error);
    }
    if (desirable_requirements.length === 0) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos desejáveis devem ter no mínimo 1 caractere!'
      };
      errors.push(error);
    }
    if (desirable_requirements.length > 256) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos desejáveis devem ter no máximo 256 caractere!'
      };
      errors.push(error);
    }
    if (area.length === 0) {
      const error = { type: 'Erro', message: 'As áreas de atuação da vaga são obrigatórias!' };
      errors.push(error);
    }
    if (benefits.length === 0) {
      const error = { type: 'Erro', message: 'Os benefícios devem ter no mínimo 1 caracter!' };
      errors.push(error);
    }
    if (benefits.length > 256) {
      const error = { type: 'Erro', message: 'Os benefícios devem ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (salary.length === 0) {
      const error = { type: 'Erro', message: 'O salário é obrigatório!' };
      errors.push(error);
    }
    if (negotiable_salary != true && negotiable_salary != false) {
      const error = { type: 'Erro', message: 'O salário negociável é obrigatório!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }

    const vacancy = await Vacancy.findByIdAndUpdate(
      vacancyID,
      {
        name,
        description,
        type,
        localization,
        mandatory_requirements,
        desirable_requirements,
        area,
        benefits,
        salary,
        negotiable_salary
      },
      { new: true }
    );
    if (vacancy) {
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Vaga atualizada com sucesso!' });
    } else {
      return response.status(404).send({ type: 'Erro', message: 'Vaga não encontrada!' });
    }
  }

  async delete(request: Request, response: Response) {
    const { vacancyID } = request.params;
    const vacancy = await Vacancy.findByIdAndDelete(vacancyID);
    if (vacancy) {
      return response.status(200).json({ type: 'Sucesso', message: 'Vaga deletada com sucesso' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Vaga não encontrada!' });
    }
  }
}

export default new VacancyController();
