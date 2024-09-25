import api from "./api"

const paymentService = {
    createPayment: async (token: string) => {
        const res = await api.post(`/create-payment`,'001', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(error => {
            console.log(error)
            if (error && error.response !== 200) {
                return error.response
            }
            return error
        })
        if (res.status === 201) {
            return res
        }
    }
}

export default paymentService