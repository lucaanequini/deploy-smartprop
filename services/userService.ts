import { useRouter } from "next/navigation"
import api from "./api"

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
    }
}

export default userService