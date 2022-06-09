import http from "axios";
import { DocumentPickerResponse } from "react-native-document-picker";

const axios = http.create({
    baseURL: 'https://zuka-app.herokuapp.com',
    url: 'https://zuka-app.herokuapp.com',
})

interface IData {
    banco: string;
    nome: string;
    operacao: string;
    destinatario: string;
    data: string
    valor: number

}
export default class AccountServices {

    async createAccount(id_user: string, coin: string, type: string, documentType: string, ficheiro: DocumentPickerResponse) {

        const formData = new FormData();
        formData.append("type", documentType);
        formData.append("documento", ficheiro);
        const document = await (await axios.post(`/account/document`, formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            }
        )).data;

        if (document instanceof Error)
            return new Error('Account was not created, error in document');

        console.log(document.id_document)
        const response = await (await axios.post(`/account`, {
            id_user,
            coin: "AOA",
            type,
            id_document: document.id_document as string
        })).data;

        if (response instanceof Object)
            return response;

        return new Error('Account was not create');
    }

    async executeOne(id_user: string) {
        const response = await (await axios.get(`/account/${id_user}`)).data;

        if (response instanceof Object)
            return response;

        return new Error('Account does not exist');

    }

    async depositByCard(id_login: string, amount: number, currency: string) {
        const response = await (await axios.post(`/api/card/payment/${id_login}`, {
            amount,
            currency
        })).data;

        if (response instanceof Object)
            return response;
    }

    async generatePDF(id_acount: string, data: IData) {
        const response = await (await axios.post(`/account/generate/${id_acount}`, {
            banco: data.banco,
            data: data.data,
            destinatario: data.destinatario,
            nome: data.nome,
            operacao: data.operacao,
            valor: data.valor
        })).data;

        if (response instanceof Object)
            return response;
    }
}