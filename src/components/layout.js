import Header from "./header";


export default function Layout({ children, probando }) {
    return (
        <>

        <Header prueba={probando}/>
        <main>{children}</main>


        </>
      
    );

}