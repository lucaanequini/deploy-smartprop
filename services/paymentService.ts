import api from "./api"

const paymentService = {
    createPayment: async (token: string, userId: string, product:string, coupon?: string) => {
        const res = await api.post(`/mercadopago/create-payment`, {
            product_id: product,
            user_id: userId,
            coupon_code: coupon
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
            console.log(res)
            return res;
        }
    },
    checkCoupon: async (token: string, coupon: string) => {
        const res = await api.post('/verify-coupon',{
            coupon_code: coupon
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

        if (res && res.status === 200) {
            return res;
        }
    }
}

export default paymentService;
