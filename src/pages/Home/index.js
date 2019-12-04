import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css';

class Home extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            filmes: []
        }

        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount() {
        this.loadFilmes();
    }

    loadFilmes() {
        //Url da Api: https://sujeitoprogramador.com/r-api/?api=filmes/
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({filmes: json});
            })
    }

    render() {
        return(

            <div className="container">
                <div className="lista-filmes">
                    {this.state.filmes.map((filme) => {
                        return(
                            <article>
                                <strong> {filme.nome} </strong>
                                <img alt="" src={filme.foto}></img>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default Home;