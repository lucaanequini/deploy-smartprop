import api from "./api"

const paymentService = {
    
    createPayment: async (token: string) => {
        const res = await api.post(`/mercadopago/create-payment`, {
            product_id: "001",
            reference: "123456",
            user_id: "315a63a7-3b91-486a-a5a6-d0de42581847"
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).catch(error => {
            console.log(error)
            if (error && error.response) {
                return error.response
            }
        });
        
        if (res && res.status === 201) {
            window.location.href = res.data.payment_link;
        }
    }
}

export default paymentService;
