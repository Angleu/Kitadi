import http from "axios";
import { DocumentPickerResponse } from "react-native-document-picker";
import APICompravativoServices from "./APICompravativoServices";

const axios = http.create({
    baseURL: 'https://zuka-app.herokuapp.com',
    url: 'https://zuka-app.herokuapp.com'
})

export interface ITransations {
    Transation_id_transation: string;
    Transation_created_at: Date;
    Transation_to_user: string;
    Transation_from_user: string;
    Transation_amount: number;
    Transation_coin: string;
    Transation_type: string;
    Transation_email: string;
    description: string;
}

export interface ITransation {
    amount: number;
    description: string;
    to_user: string;
    coin: string;
    email?: string;
    type?: string;
}
export default class TransationServices {

    async getAll(id_account: string): Promise<ITransations[]> {
        const response = await (await axios.get(`/account/transation/${id_account}`)).data

        if (response instanceof Object)
            return response;

        return [];

    }

    async deposit(data: ITransation) {
        const response = await (await axios.post('/account/transation/deposit', data)).data

        if (response instanceof Object)
            return response;

        return new Error('Transation does not possible');

    }

    async save(data: ITransation) {
        const response = await (await axios.post('/account/transation', data)).data

        if (response instanceof Object)
            return response;

        return new Error('Transation does not possible');

    }
    async savePayment(data: ITransation) {
        const response = await (await axios.post('/account/transation', data)).data
        console.log(response)
        if (response instanceof Object)
            return response;

        return new Error('Transation does not possible');

    }
}