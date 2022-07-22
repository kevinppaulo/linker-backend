import { Request, Response } from 'express';
import { Vacancie } from '../database/models/Vacancie';

class VacancieController {
  async findAll(_request: Request, response: Response) {
    const vacancies = await Vacancie.find({});
    if (vacancies.length > 0) {
      return response.status(200).json(vacancies);
    } else {
      return response.status(204).json({ type: 'Erro', message: 'Nenhuma vaga encontrada!' });
    }
  }

  async findOne(request: Request, response: Response) {
    const { vacancieID } = request.params;
    const vacancie = await Vacancie.findById(vacancieID);
    if (vacancie) {
      return response.status(200).json(vacancie);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Vaga não encontrada!' });
    }
  }

  async create(request: Request, response: Response) {
    const {
      name,
      description,
      vacancie_method,
      localization,
      requirements,
      requirements_desirable,
      area,
      benefits,
      remuneration,
      vacancie_test
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

    if (vacancie_method.length === 0) {
      const error = { type: 'Erro', message: 'Metódo da vaga é obritgatório!' };
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
      const error = {};
      errors.push(error);
    }

    if (area.length === 0) {
      const error = { type: 'Erro', message: 'As areas de atuação da vaga são obrigatótias!' };
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

    if (vacancie_test.length > 150) {
      const error = { type: 'Erro', message: 'Teste pode ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }

    const vacancie = await Vacancie.create({
      name,
      description,
      vacancie_method,
      localization,
      requirements,
      requirements_desirable,
      area,
      benefits,
      remuneration,
      vacancie_test
    });
    if (vacancie) {
      return response.status(201).json({ type: 'Sucesso', message: 'Vaga criada com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Vaga já existente!' });
    }
  }

  async update(request: Request, response: Response) {
    const { vacancieID } = request.params;
    const {
      name,
      description,
      vacancie_method,
      localization,
      requirements,
      requirements_desirable,
      area,
      benefits,
      remuneration,
      vacancie_test
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

    if (vacancie_method.length === 0) {
      const error = { type: 'Erro', message: 'Metódo da vaga é obritgatório!' };
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
      const error = {};
      errors.push(error);
    }

    if (area.length === 0) {
      const error = { type: 'Erro', message: 'As areas de atuação da vaga são obrigatótias!' };
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

    if (vacancie_test.length > 150) {
      const error = { type: 'Erro', message: 'Teste pode ter no máximo 150 caracteres!' };
      errors.push(error);
    }

    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }

    const vacancie = await Vacancie.findByIdAndUpdate(
      vacancieID,
      {
        name,
        description,
        vacancie_method,
        localization,
        requirements,
        requirements_desirable,
        area,
        benefits,
        remuneration,
        vacancie_test
      },
      { new: true }
    );

    if (vacancie) {
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Vaga atualizada com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Vaga não existente!' });
    }
  }

  async delete(request: Request, response: Response) {
    const { vacancieID } = request.params;
    const vacancie = await Vacancie.findByIdAndDelete(vacancieID);
    if (vacancie) {
      return response.status(200).json({ type: 'Sucesso', message: 'Vaga deletada com sucesso' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Vaga não encontrada!' });
    }
  }
}

export default new VacancieController();
