import "../Styles/style.css"
import Fridge from '../assets/fridge-icon.png'

export default function Nav() {

    return (<header>
        <nav className="nav-bar">
            <div className="nav-bar__wrap" >
                <h1 className="nav-bar__title">CheckYourFridge-recipes </h1>
                <img className="nav-bar__img" src={Fridge} alt="" />
            </div>
        </nav>
    </header>);
}