import style from './header.module.css';


type HeaderProps = {
    heading: string;
}

const Header = ({heading}:HeaderProps) =>{
    return(
        <>
        <h1 className={style.header}>{heading}</h1>
        </>
    )
}
export default Header;
