import { Request, Response } from 'express';

import { Answer } from '../database/models/Answer';

class AnswerController {
  async findAll(_request: Request, response: Response) {
    const answers = await Answer.find({});
    if (answers) {
      return response.status(200).json(answers);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Nenhuma resposta encontrada!' });
    }
  }

  async findOne(request: Request, response: Response) {
    const { answerID } = request.params;
    const answer = await Answer.findById(answerID);
    if (answer) {
      return response.status(200).json(answer);
    } else {
      return response.status(200).json({ type: 'Erro', message: 'Resposta não encontrada!' });
    }
  }

  async create(request: Request, response: Response) {
    const { user_id, question_id, answer } = request.body;
    const errors = [];
    if (user_id.length === 0) {
      const error = { type: 'Erro', message: 'O ID do usuário é obrigatório!' };
      errors.push(error);
    }
    if (question_id.length === 0) {
      const error = { type: 'Erro', message: 'O ID da pergunta é obrigatório!' };
      errors.push(error);
    }
    if (answer.length === 0) {
      const error = { type: 'Erro', message: 'A resposta deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (answer.length > 256) {
      const error = { type: 'Erro', message: 'A resposta deve ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }
    const _answer = await Answer.create({
      user_id,
      question_id,
      answer
    });
    if (_answer) {
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Resposta criada com sucesso!' });
    } else {
      return response.status(500).send({ type: 'Erro', message: 'Resposta já cadastrado!' });
    }
  }

  async update(request: Request, response: Response) {
    const { answerID } = request.params;
    const { user_id, question_id, answer } = request.body;
    const errors = [];
    if (user_id.length === 0) {
      const error = { type: 'Erro', message: 'O ID do usuário é obrigatório!' };
      errors.push(error);
    }
    if (question_id.length === 0) {
      const error = { type: 'Erro', message: 'O ID da pergunta é obrigatório!' };
      errors.push(error);
    }
    if (answer.length === 0) {
      const error = { type: 'Erro', message: 'A resposta deve ter no mínimo 1 caractere!' };
      errors.push(error);
    }
    if (answer.length > 256) {
      const error = { type: 'Erro', message: 'A resposta deve ter no máximo 256 caracteres!' };
      errors.push(error);
    }
    if (Object.keys(errors).length) {
      return response.status(400).json({ errors });
    }
    const _answer = await Answer.findByIdAndUpdate(
      answerID,
      {
        user_id,
        question_id,
        answer
      },
      { new: true }
    );
    if (_answer) {
      return response
        .status(201)
        .json({ type: 'Sucesso', message: 'Resposta atualizada com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Resposta não encontrada!' });
    }
  }

  async delete(request: Request, response: Response) {
    const { answerID } = request.params;
    const _answer = await Answer.findByIdAndDelete(answerID);
    if (_answer) {
      return response
        .status(200)
        .json({ type: 'Sucesso', message: 'Resposta deletada com sucesso!' });
    } else {
      return response.status(404).json({ type: 'Erro', message: 'Resposta não encontrada!' });
    }
  }
}

export default new AnswerController();
