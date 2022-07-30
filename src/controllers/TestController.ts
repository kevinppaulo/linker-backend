import { Request, Response } from 'express';
import { Test } from '../database/models/Test';

class TestController {
  async findAll(_request: Request, response: Response) {
    const tests = await Test.find({});
    if (tests) {
      return response.status(200).json(tests);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Nenhum teste encontrado!' });
    }
  }

  async findOne(request: Request, response: Response) {
    const { testID } = request.params;
    const test = await Test.findById(testID);
    if (test) {
      return response.status(200).json(test);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Teste não encontrado!' });
    }
  }

  async create(request: Request, response: Response) {
    const { vacancy_id, name, description } = request.body;
    const errors = [];
    if (vacancy_id.length === 0) {
      const error = { type: 'Erro', message: 'O ID da vaga é obrigatória!' };
      errors.push(error);
    }
    if (name.length === 0) {
      const error = { type: 'Erro', message: 'O nome do teste deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (name.length > 64) {
      const error = { type: 'Erro', message: 'O nome do teste deve ter no máximo 64 caracteres!' };
      errors.push(error);
    }
    if (description.length === 0) {
      const error = { type: 'Erro', message: 'A descrição deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (description.length > 256) {
      const error = { type: 'Erro', message: 'A descrição deve ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }
    const test = await Test.create({
      vacancy_id,
      name,
      description
    });
    if (test) {
      return response.status(201).json({ type: 'Sucesso', message: 'Teste criado com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Teste já cadastrado!' });
    }
  }

  async update(request: Request, response: Response) {
    const { testID } = request.params;
    const { vacancy_id, name, description } = request.body;
    const errors = [];
    if (vacancy_id.length === 0) {
      const error = { type: 'Erro', message: 'O ID da vaga é obrigatória!' };
      errors.push(error);
    }
    if (name.length === 0) {
      const error = { type: 'Erro', message: 'O nome do teste deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (name.length > 64) {
      const error = { type: 'Erro', message: 'O nome do teste deve ter no máximo 64 caracteres!' };
      errors.push(error);
    }
    if (description.length === 0) {
      const error = { type: 'Erro', message: 'A descrição deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (description.length > 256) {
      const error = { type: 'Erro', message: 'A descrição deve ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }
    const test = await Test.findByIdAndUpdate(
      testID,
      {
        vacancy_id,
        name,
        description
      },
      { new: true }
    );
    if (test) {
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Teste atualizado com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Teste não encontrado!' });
    }
  }

  async delete(request: Request, response: Response) {
    const { testID } = request.params;
    const test = await Test.findByIdAndDelete(testID);
    if (test) {
      return response.status(200).json({ type: 'Sucesso', message: 'Teste deletado com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Teste não encontrado!' });
    }
  }
}

export default new TestController();
