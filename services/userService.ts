import { useRouter } from "next/navigation"
import api from "./api"
import { headers } from "next/headers"

const userService = {
    getUserInfo: async (userId: string, token: string) => {
        const res = await api.get(`/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => {
            if (error.response.status !== 200) {
                return error.response
            }
            return error
        })
        if (res.status === 200) {
            return res
        }
    },
    getUserExams: async (userId: string, token: string) => {
        const res = await api.get(`/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => {
            if (error.response.status !== 200) {
                return error.response
            }
            return error
        })
        if (res.status === 200) {
            return res
        }
    },
    setDateExam: async (purchaseId:string, token: string) => {
        const res = await api.post(`/start-package`, {
            id: purchaseId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).catch(error => {
            if (error.response.status !== 200) {
                return error.response
            }
            return error
        })
        console.log(res)
        if (res.status === 200) {
            return res
        }
    }
}

export default userService