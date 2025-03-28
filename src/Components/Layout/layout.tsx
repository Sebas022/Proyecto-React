import Footer from '../Footer/footer';
import NavBar from '../NavBar/navbar'

interface LayoutProps{
    children: React.ReactNode;
}

export function Layout({children} : LayoutProps){
    return (
        <>
        <NavBar/>
        <main className="max-w-[1110px] mx-auto">{children}</main>
        <Footer/>
        </>
    )
}