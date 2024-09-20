import api from "./api"

interface RegisterParams {
    nome: string
    sobrenome: string
    cpf: string
    telefone: string
    email: string
    cep: string
    senha: string
    validateSenha: string
    username: string
}

interface LoginParams {
    username: string
    email?: string
    senha: string
}

const authService = {
    getRegisterParams: async (params: RegisterParams) => {
        const res = await api.post('/account', params).catch(error => {
            if (error.response && error.response.status !== 201) {
                return error.response
            }
            return error
        })
        console.log(res)
        console.log(params)
        return res
    },
    getLoginParams: async (params: LoginParams) => {
        const res = await api.post('/login', params).catch(error => {
            if (error.response.status !== 201) {
                return error.response
            }
            return error
        })
        if (res.status === 200) {
            sessionStorage.setItem("smartprop-token", res.data.token);
        }
        return res
    }   
}

export default authService