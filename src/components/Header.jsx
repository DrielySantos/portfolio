function Header(){
    return(
        <header className="header">
            <a href="#">
                <h1 className="logo">DS</h1>
            </a>
            <nav className="menu">
                <ul>
                    <li><a href="#info-sobre">+ sobre mim</a></li>
                    <li><a href="#formacoes">Formações</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li className="menu__sobre-mim"><a href="#info-sobre">+ sobre mim</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;