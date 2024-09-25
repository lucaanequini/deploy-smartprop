import { Navbar } from './home/_components/navbar'

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>
                <div className='bg-slate-50'>
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}