import { AccountForm } from "./_components/account-form"

const AccountPage = () => {
    return (
        <div className="w-full h-full sm:h-screen my-5 flex flex-col gap-y-5 items-center justify-center">
            <div>
                <img src="/logoRoboBranco.svg" alt="Logo" className="w-24 h-20" />
            </div>
            <AccountForm />
        </div>
    )
}

export default AccountPage