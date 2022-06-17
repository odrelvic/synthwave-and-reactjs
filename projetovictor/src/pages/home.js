import React from 'react'



class Home extends React.Component {
    render() {
        return (
            <div>
                <div class="main-login">
                    <div class="left-login">
                        <h1>Faça login na plataforma.</h1>

                    </div>
                    <div class="right-login">
                        <div class="card-login">
                            <h1>LOGIN</h1>
                            <div class="textfield">
                                <label for="Usuário">Usuário</label>
                                <input type="text" name="usuario" placeholder="Usuário" />
                            </div>
                            <div class="textfield">
                                <label for="Senha">Senha</label>
                                <input type="password" name="Senha" placeholder="Senha" />
                            </div>
                            <button class="btn-login">Login</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Home;