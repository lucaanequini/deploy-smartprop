import { Navbar } from './home/_components/navbar'

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="bg-slate-50">
                <Navbar />
                {children}
            </body>
        </html>
    );
}