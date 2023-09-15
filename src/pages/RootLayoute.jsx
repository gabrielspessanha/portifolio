import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export default function RootLayoute() {
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                Criado por Gabriel
            </footer>
        </>
        
    )
}