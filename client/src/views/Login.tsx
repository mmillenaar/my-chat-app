import Form, { FormAction, FormMethod } from "../components/Form/Form"
import { loginText } from "../utils/constants"
import msnLogo from '../assets/icons/MSN-messenger-icon.webp'
import { ReactComponent as MicrosoftNetIcon } from '../assets/icons/microsoft-net.svg'
import '../styles/views/Login.scss'

const Login = () => {

    return (
        <div className="login">
            <div className="login__wrapper window">
                <div className="login__window-title title-bar">.NET Messenger Service</div>
                <div className="login__window-content">
                    <div className="login__img-wrapper">
                        <img className="login__img-image" src={ msnLogo } alt="MSN logo" />
                        <p className="login__img-text">{loginText}</p>
                    </div>
                    <div className="login__form">
                        <Form action={FormAction.LOGIN} method={FormMethod.POST} />
                    </div>
                    <div className="login__microsoft-net-logo">
                        <p className="login__microsoft-net-logo-text">Passport</p>
                        <MicrosoftNetIcon />
                    </div>
                    <div className="login__helpers">
                        <div className="login__helpers-link-wrapper">
                            <a className="login__helpers-link" href="/register">Get a .NET Passport</a>
                            <a className="login__helpers-link" href="/help">Help</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login