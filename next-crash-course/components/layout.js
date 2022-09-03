import Nav from './nav'
import Header from './header'
import styles from "../styles/Nav.module.css"
const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className = {styles.container}>
            <main className = {styles.main}>
            <Header />
            {children}
            </main>            
        </div>
        </>
    )   
} 
export default Layout