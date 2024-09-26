import { CartForm } from "./_components/cart-form";

const ChartPage = ({
    params
}: { params: { userId: string } }) => {
    return (
        <CartForm userId={params.userId} />
    )
}

export default ChartPage;