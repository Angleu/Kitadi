import http from 'axios';

const axios = http.create({
    baseURL: 'https://zuka-app.herokuapp.com',
    url: 'https://zuka-app.herokuapp.com'
})

export type ILogin = {
    id_login: string,
    email: string;
    telephone: string;
}
export default class LoginServices {


    async login(email: string, password: string): Promise<ILogin | Error> {
        const response = await (await axios.post('/user/login', { email, password })).data;

        if (response instanceof Object)
            return response;

        return response as Error
    }
}