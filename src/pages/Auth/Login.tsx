
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logo, welcome } from '../../assets/images';
import '../../styles/Auth/login.scss';
import '../../styles/Auth/login_responsiveness.scss';
const Login = () =>
{
    useEffect(() =>
    {
        document.title = "Lendsqr - Login"
    });
    return (
        <div className='login__container'>
            <div className="lendsqr_login__logo">
                <Link to="/dashboard/users"><img src={logo} alt="lendsqr_logo" /></Link>
            </div>
            <div className='login__content'>
                <div className='row'>
                    <div className='col_6 col_12'>
                        <img className='login__content__welcome_img' src={welcome} alt="Welcome_Img"></img>
                    </div>
                    <div className='col_6 col_12 login_form'>
                        <div className='login__content__header'>
                            <h1 className="login__content__header__title">Welcome!</h1>
                            <span className="login__content__header__subtitle">Enter details to login</span>
                        </div>
                        <div className='login__content__body'>
                            <div className='login__content__body__form'>
                                <div className='login__content__body__form__input'>
                                    <input type="text" placeholder='Email' />
                                </div>
                                <div className='login__content__body__form__input'>
                                    <input type="password" placeholder='Password' id="login__content__body__password__input" />
                                    <i id="togglePassword">Show</i>
                                </div>
                            </div>
                            <div className='login__content__body__forgot__links'>
                                <Link to='/forgot-password'>Forgot password?</Link>
                            </div>

                        </div>
                        <Link to='/'>
                            <button onClick={
                                () =>
                                {
                                    window.location.href = '/users'
                                }
                            } className="login__button">Log in</button>
                        </Link>
                    </div>
                </div>



            </div>
        </div >
    );
}

export default Login;
