import React from "react";



const Login = () => {
    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                        <div className="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Hotel</span></p>
                            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Tours</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                    <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                        <form className="login100-form validate-form flex-sb flex-w">
                            <span className="login100-form-title p-b-53">
                                Sign In With
                            </span>
                            <a href="#" className="btn-face m-b-20">
                                <i className="fa fa-facebook-official" />
                                Facebook
                            </a>
                            <a href="#" className="btn-google m-b-20">
                                <img src="images/icons/icon-google.png" alt="GOOGLE" />
                                Google
                            </a>
                            <div className="p-t-31 p-b-9">
                                <span className="txt1">
                                    Username
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Username is required">
                                <input className="input100" type="text" name="username" />
                                <span className="focus-input100" />
                            </div>
                            <div className="p-t-13 p-b-9">
                                <span className="txt1">
                                    Password
                                </span>
                                <a href="#" className="txt2 bo1 m-l-5">
                                    Forgot?
                                </a>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" />
                                <span className="focus-input100" />
                            </div>
                            <div className="container-login100-form-btn m-t-17">
                                <button className="login100-form-btn">
                                    Sign In
                                </button>
                            </div>
                            <div className="w-full text-center p-t-55">
                                <span className="txt2">
                                    Not a member?
                                </span>
                                <a href="#" className="txt2 bo1">
                                    Sign up now
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="dropDownSelect1" />
        </div>

    );
}
export default Login;