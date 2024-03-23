import './Header.css'

const Header = () => {
    return(
    <header className='cabecalho'>
        <img className='logo' src="../img/cat1.png" alt="logo gatinho de cabeça para baixo"/>
        <nav className='Nav-bar'>
        
        <a className='link-nav' href='#' ><strong>Login</strong></a>
        <a className='link-nav' href='#'><strong>Registrar</strong></a>
        </nav>
    </header>
    )
}

export default Header;