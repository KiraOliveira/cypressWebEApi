class loginElements {

    logoSwag = () => { return '.login_logo' }
    telaLogin = () => { return '.login_wrapper-inner' }

    fiedlUsername = () => { return '[data-test="username"]' }
    fielPassword = () => { return '[data-test="password"]' }
    buttonLogin = () => { return '[data-test="login-button"]' }

    // Validando que o Login foi realizado
    loginSucess = () => { return '.title' }

    // Mensagem error
    mensageError = () => { return '[data-test="error"]' }
}

export default new loginElements();
