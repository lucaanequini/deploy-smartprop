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
        return res
    },
    getLoginParams: async (params: LoginParams) => {
        const res = await api.post('/login', params).catch(error => {
            if (error.response.status !== 200) {
                return error.response
            }
            return error
        })
        if (res.status === 200) {
            localStorage.setItem("smartprop-token", res.data.access_token);
        }
        return res
    },
    checkToken: async (token: string) => {
        const res = await api.get('/verify-token', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => {
            if (error.response.status === 401) {
                return error.response
            }
            return error
        })
        if (res.status === 200) {
            return res.data.valid
        }
    }
}

export default authService