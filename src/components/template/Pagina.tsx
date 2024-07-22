import Header from "./Header"

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className={`w-[1200px] mx-auto  flex-1 ${props.className ?? ''} py-10`}>{props.children}</main>
        </div>
    )
}