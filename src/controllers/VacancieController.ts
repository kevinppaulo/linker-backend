import { Request, Response } from  'express';
import { Vacancie } from '../database/models/Vacancie';

class VacancieController { 
    async findAll(_request: Request, response: Response) {
        const vacancies = await Vacancie.find({});
        if (vacancies.length > 0) {
            return response.status(200).json(vacancies);
        } else {
            return response.status(200).json({ type: 'Erro', message: 'Nenhuma vaga encontrada!'})
        }
    }

    async findOne(request: Request, response: Response) {
        const { vacancieID } = request.params;
        const vacancie = await Vacancie.findById(vacancieID);
        if (vacancie) {
            return response.status(200).json(vacancie);
        } else {
            return response.status(200).json({ type: 'Erro', message: 'Vaga não encontrada!'})
        }
    }

    async create(request: Request, response: Response) {
        const { name, description, vacancie_method, localization, requirements, requirements_desirable, area, benefits, remuneration, vacancie_test } = request.body;
        if (name.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'O nome necessita ter no mínimo 1 caractere!'});
        }

        if (name.lenght > 64) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'O nome deve ter no máximo 64 caracteres!'});
        }

        if (description.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Sua descrição deve ter no mínimo 1 caractere!'});
        }

        if (description.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'A descrição deve ter no máximo 150 caracteres!'});
        }

        if (vacancie_method.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Metódo da vaga é obritgatório!'})
        }

        if (localization.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Localização da vaga é obrigatório!'})
        }

        if (requirements.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os requesitos devem ter no mínimo 1 caractere!'})
        }

        if (requirements.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', messageL: 'Os requesitos devem ter no máximo 150 caracteres!'})
        }

        if (requirements_desirable.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os requesitos desejáveis devem ter no mínimo 1 caractere!'})
        }

        if (requirements_desirable.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os requesitos desejáveis devem ter no máximo 150 caracteres!'})
        }

        if (area.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'As areas de atuação da vaga são obrigatótias!'})
        }

        if (benefits.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os beneficios devem ter no mínimo 1 caracter!'})
        }

        if (benefits.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os beneficios devem ter no máximo 150 caracteres!'})
        }

        if (remuneration.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Remuneração é obrigatório!'})
        }

        if (vacancie_test.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Teste pode ter no máximo 150 caracteres!'})
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
            return response
            .status(201)
            .json({ type: 'Sucesso', message: 'Vaga criada com sucesso!'})
        } else {
            return response
            .status(500)
            .send({ type: 'Erro', message: 'Vaga já existente!'})
        }

    }

    async update(request: Request, response: Response) {
        const { vacancieID } = request.params;
        const { name, description, vacancie_method, localization, requirements, requirements_desirable, area, benefits, remuneration, vacancie_test } = request.body;

        if (name.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'O nome necessita ter no mínimo 1 caractere!'});
        }

        if (name.lenght > 64) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'O nome deve ter no máximo 64 caracteres!'});
        }

        if (description.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Sua descrição deve ter no mínimo 1 caractere!'});
        }

        if (description.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'A descrição deve ter no máximo 150 caracteres!'});
        }

        if (vacancie_method.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Metódo da vaga é obritgatório!'})
        }

        if (localization.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Localização da vaga é obrigatório!'})
        }

        if (requirements.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os requesitos devem ter no mínimo 1 caractere!'})
        }

        if (requirements.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', messageL: 'Os requesitos devem ter no máximo 150 caracteres!'})
        }

        if (requirements_desirable.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os requesitos desejáveis devem ter no mínimo 1 caractere!'})
        }

        if (requirements_desirable.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os requesitos desejáveis devem ter no máximo 150 caracteres!'})
        }

        if (area.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'As areas de atuação da vaga são obrigatótias!'})
        }

        if (benefits.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os beneficios devem ter no mínimo 1 caracter!'})
        }

        if (benefits.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Os beneficios devem ter no máximo 150 caracteres!'})
        }

        if (remuneration.lenght === 0) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Remuneração é obrigatório!'})
        }

        if (vacancie_test.lenght > 150) {
            return response
            .status(400)
            .json({ type: 'Erro', message: 'Teste pode ter no máximo 150 caracteres!'})
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
            .json({ type: 'Sucesso', message: 'Vaga atualizada com sucesso!'})
        } else {
            return response
            .status(500)
            .send({ type: 'Erro', message: 'Vaga não existente!'})
        }
    }

    async delete(request: Request, response: Response) {
        const { vacancieID } = request.params;
        const vacancie = await Vacancie.findByIdAndDelete(vacancieID);
        if (vacancie) {
            return response
            .status(200)
            .json({ type: 'Sucesso', message: 'Vaga deletada com sucesso'})
        } else {
            return response
            .status(404)
            .json({ type: 'Erro', message: 'Vaga não encontrada!' })
        }
    }
}

export default new VacancieController();