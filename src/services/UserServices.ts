import http from "axios";

const axios = http.create({
    baseURL: 'https://zuka-app.herokuapp.com',
    url: 'https://zuka-app.herokuapp.com',
    onUploadProgress: () => {
        console.log('Process....');
    }
})

interface IUser {
    id_user: string;
    name: string;
    dataBirthday: Date;
    natural: string;
    genere: string;
}

interface ILogin {
    email: string;
    password: string;
    confirmPassword: string;
    telephone: string;
}

interface IUserRequest {
    name: string;
    dataBirthday: Date;
    genere: string;
    city: string,
    country: string;
    natural: string;
    email: string;
}

export default class UserServices {

    async saveUser({ email, name, genere, dataBirthday, natural, city, country }: IUserRequest): Promise<object | undefined> {
        console.log(email, name, genere, dataBirthday, natural, city, country)
        const response = await (await axios.post(`/user`, {
            email,
            dataBirthday,
            genere,
            name,
            natural,
            city,
            country
        })).data;

        if (response instanceof Object)
            return response;
    }

    async saveLogin({ email, password, confirmPassword, telephone }: ILogin): Promise<ILogin | undefined> {
        const response = await (await axios.post(`/login`, {
            email,
            password,
            confirmPassword,
            telephone
        })).data;

        if (response instanceof Object)
            return response;
    }

    async executeOne(id_login: string): Promise<IUser | undefined> {
        const response = await (await axios.get(`/user/${id_login}`)).data;

        if (response instanceof Object)
            return response;
    }
}