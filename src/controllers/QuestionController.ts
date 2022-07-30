import { Request, Response } from 'express';
import { Question } from '../database/models/Question';

class QuestionController {
  async findAll(_request: Request, response: Response) {
    const questions = await Question.find({});
    if (questions) {
      return response.status(200).json(questions);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Nenhuma questão encontrada!' });
    }
  }

  async findOne(request: Request, response: Response) {
    const { questionID } = request.params;
    const question = await Question.findById(questionID);
    if (question) {
      return response.status(200).json(question);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Questão não encontrada!' });
    }
  }

  async create(request: Request, response: Response) {
    const { test_id, question } = request.body;
    const errors = [];
    if (test_id.length === 0) {
      const error = { type: 'Erro', message: 'O ID do teste é obrigatório!' };
      errors.push(error);
    }
    if (question.length === 0) {
      const error = { type: 'Erro', message: 'A pergunta deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (question.length > 256) {
      const error = { type: 'Erro', message: 'A pergunta deve ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }
    const _question = await Question.create({
      test_id,
      question
    });
    if (_question) {
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Pergunta criada com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Pergunta já cadastrado!' });
    }
  }

  async update(request: Request, response: Response) {
    const { questionID } = request.params;
    const { test_id, question } = request.body;
    const errors = [];
    if (test_id.length === 0) {
      const error = { type: 'Erro', message: 'O ID do teste é obrigatório!' };
      errors.push(error);
    }
    if (question.length === 0) {
      const error = { type: 'Erro', message: 'A pergunta deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (question.length > 256) {
      const error = { type: 'Erro', message: 'A pergunta deve ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }
    const _question = await Question.findByIdAndUpdate(
      questionID,
      {
        test_id,
        question
      },
      { new: true }
    );
    if (_question) {
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Pergunta atualizada com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Pergunta não encontrada!' });
    }
  }

  async delete(request: Request, response: Response) {
    const { questionID } = request.params;
    const _question = await Question.findByIdAndDelete(questionID);
    if (_question) {
      return response
        .status(200)
        .json({ type: 'Sucesso', message: 'Pergunta deletada com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Pergunta não encontrada!' });
    }
  }
}

export default new QuestionController();
