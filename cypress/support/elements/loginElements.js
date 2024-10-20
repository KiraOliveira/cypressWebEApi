
class loginElements {

    logoSwag = () => { return '.login_logo' }
    telaLogin = () => { return '.login_wrapper-inner' }

    fiedlUsername = () => { return '[data-test="username"]' }
    fielPassword = () => { return '[data-test="password"]' }
    buttonLogin = () => { return '[data-test="login-button"]' }
}

export default new loginElements();
