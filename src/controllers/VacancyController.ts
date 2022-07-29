import { Request, Response } from 'express';
import { Vacancy } from '../database/models/Vacancy';

class VacancyController {
  async findAll(_request: Request, response: Response) {
    const vacancys = await Vacancy.find({});

    if (vacancys.length > 0) {
      return response.status(200).json(vacancys);
    } else {
      return response.status(204).json({ type: 'Erro', message: 'Nenhuma vaga encontrada!' });
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
      vacancy_method,
      localization,
      requirements,
      requirements_desirable,
      area,
      benefits,
      remuneration,
      vacancy_test
    } = request.body;

    const errors = [];

    if (name.length === 0) {
      const error = { type: 'Erro', message: 'O nome necessita ter no mínimo 1 caractere!' };
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

    if (description.length > 150) {
      const error = { type: 'Erro', message: 'A descrição deve ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (vacancy_method.length === 0) {
      const error = { type: 'Erro', message: 'Metódo da vaga é obrigatório!' };
      errors.push(error);
    }

    if (localization.length === 0) {
      const error = { type: 'Erro', message: 'Localização da vaga é obrigatório!' };
      errors.push(error);
    }

    if (requirements.length === 0) {
      const error = { type: 'Erro', message: 'Os requesitos devem ter no mínimo 1 caractere!' };
      errors.push(error);
    }

    if (requirements.length > 150) {
      const error = { type: 'Erro', messageL: 'Os requesitos devem ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (requirements_desirable.length === 0) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos desejáveis devem ter no mínimo 1 caractere!'
      };
      errors.push(error);
    }

    if (requirements_desirable.length > 150) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos desejáveis devem ter no máximo 150 caractere!'
      };
      errors.push(error);
    }

    if (area.length === 0) {
      const error = { type: 'Erro', message: 'As areas de atuação da vaga são obrigatórias!' };
      errors.push(error);
    }

    if (benefits.length === 0) {
      const error = { type: 'Erro', message: 'Os beneficios devem ter no mínimo 1 caracter!' };
      errors.push(error);
    }

    if (benefits.length > 150) {
      const error = { type: 'Erro', message: 'Os beneficios devem ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (remuneration.length === 0) {
      const error = { type: 'Erro', message: 'Remuneração é obrigatório!' };
      errors.push(error);
    }

    if (vacancy_test.length > 150) {
      const error = { type: 'Erro', message: 'Teste pode ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }

    const vacancy = await Vacancy.create({
      name,
      description,
      vacancy_method,
      localization,
      requirements,
      requirements_desirable,
      area,
      benefits,
      remuneration,
      vacancy_test
    });
    if (vacancy) {
      return response.status(201).json({ type: 'Sucesso', message: 'Vaga criada com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Vaga já existente!' });
    }
  }

  async update(request: Request, response: Response) {
    const { vacancyID } = request.params;
    const {
      name,
      description,
      vacancy_method,
      localization,
      requirements,
      requirements_desirable,
      area,
      benefits,
      remuneration,
      vacancy_test
    } = request.body;

    const errors = [];

    if (name.length === 0) {
      const error = { type: 'Erro', message: 'O nome necessita ter no mínimo 1 caractere!' };
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

    if (description.length > 150) {
      const error = { type: 'Erro', message: 'A descrição deve ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (vacancy_method.length === 0) {
      const error = { type: 'Erro', message: 'Metódo da vaga é obrigatório!' };
      errors.push(error);
    }

    if (localization.length === 0) {
      const error = { type: 'Erro', message: 'Localização da vaga é obrigatório!' };
      errors.push(error);
    }

    if (requirements.length === 0) {
      const error = { type: 'Erro', message: 'Os requesitos devem ter no mínimo 1 caractere!' };
      errors.push(error);
    }

    if (requirements.length > 150) {
      const error = { type: 'Erro', message: 'Os requesitos devem ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (requirements_desirable.length === 0) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos desejáveis devem ter no mínimo 1 caractere!'
      };
      errors.push(error);
    }

    if (requirements_desirable.length > 150) {
      const error = {
        type: 'Erro',
        message: 'Os requesitos desejáveis devem ter no máximo 150 caractere!'
      };
      errors.push(error);
    }

    if (area.length === 0) {
      const error = { type: 'Erro', message: 'As areas de atuação da vaga são obrigatórias!' };
      errors.push(error);
    }

    if (benefits.length === 0) {
      const error = { type: 'Erro', message: 'Os beneficios devem ter no mínimo 1 caracter!' };
      errors.push(error);
    }

    if (benefits.length > 150) {
      const error = { type: 'Erro', message: 'Os beneficios devem ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (remuneration.length === 0) {
      const error = { type: 'Erro', message: 'Remuneração é obrigatório!' };
      errors.push(error);
    }

    if (vacancy_test.length > 150) {
      const error = { type: 'Erro', message: 'Teste pode ter no máximo 150 caracteres!' };
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
        vacancy_method,
        localization,
        requirements,
        requirements_desirable,
        area,
        benefits,
        remuneration,
        vacancy_test
      },
      { new: true }
    );

    if (vacancy) {
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Vaga atualizada com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Vaga não existente!' });
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
