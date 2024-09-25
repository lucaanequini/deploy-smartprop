import { AccountForm } from "./_components/account-form"

const AccountPage = () => {
    return (
        <div className="w-full h-full sm:h-screen my-5 flex flex-col gap-y-5 items-center justify-center">
            <div>
                <img src="/logo.png" alt="Logo" className="w-20 h-13" />
            </div>
            <AccountForm />
        </div>
    )
}

export default AccountPage