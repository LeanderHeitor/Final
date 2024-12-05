import { Link } from 'react-router-dom'
import S from './header.module.scss'
import Logo from "../../assets/Header/Logo.png"
export default function header(){
    return(
        <header className={S.header}>
            <div className={S.header__title}>
                <img src={Logo} alt="" />
                <h1>Livros Vai na Web</h1>
            </div>
            <nav className={S.header__nav}>
                <ul className={S.header__ul}>
                    <Link className={S.header__link} to={"/"}><li>Início</li></Link >
                    <Link className={S.header__link} to={"/livros-doados"}><li>Livros Doados</li></Link>
                    <Link className={S.header__link} to={"quero-doar"}> <li>Quero Doar</li></Link>
                </ul>
            </nav>
            <input className={S.header__input} type="text" placeholder='O que voce procura?'/>
        </header>
    )
}