import http from 'axios';
import { DocumentPickerResponse } from 'react-native-document-picker';
// import fs from 'fs';
const axios = http.create({
    baseURL: "https://api-bank-verification.herokuapp.com",
    url: "https://api-bank-verification.herokuapp.com",
    headers: {
        "Content-Type": "multipart/form-data"
    },
    onUploadProgress: () => {
        console.log("Progresss......")
    }

})
export default class APICompravativoServices {
    async execute(pathArquive: DocumentPickerResponse) {
        const formData = new FormData();
        formData.append("comprovativo-express", pathArquive);
        const result = await axios.post("/api/comprovativo/validacao/multicaixa-express", formData
        )

        return result;
    }
}