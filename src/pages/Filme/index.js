import React, { Component } from 'react';
import './filme-info.css';
class Filme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filme: {}
        }
    }

    componentDidMount() {

        const {id} = this.props.match.params;

        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`

        fetch(url).then(response => response.json())
                  .then((filme) => {
                      this.setState({filme: filme});
                  })

    }

    render() {
        return(
            <div className="filme-info">
                <h1> { this.state.filme.nome } </h1>
                <img alt="poster" src={this.state.filme.foto} />
                {this.state.filme.sinopse  && 
                <h3>Sinopse</h3>} 
                {this.state.filme.sinopse}
            </div>
        );
    }

}

export default Filme;