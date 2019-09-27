import React, { Component } from 'react';

import Input from './Input'
import Button from './Button'

import './Main.css'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            palavraUsuario: '',
            palavraSecreta: [],
            palavraOculta: [],
            letrasErradas: []
        }
    }

    pegaValorInput = (evento) => {
        const palavraUsuario = evento.target.value.toUpperCase()

        return this.setState({ palavraUsuario })
    }

    limpar = () => this.setState({ palavraUsuario: ''})

    salvarPalavra = () => {
        const palavraUsuario = [ ...this.state.palavraUsuario.split('') ]

        return this.setState({ palavraSecreta: palavraUsuario })

    }
    ocultarPalavra = () => {
        const palavraOculta = [ ...this.state.palavraSecreta ]
        
        for(var i = 0; i < palavraOculta.length; i++) {
            palavraOculta[i] = '_'
        }

        this.limpar()

        return this.setState({ palavraOculta }) // imprimi para o usuario !
        
    }
    verificarPalavra = () => {
        const state = { ...this.state }

        for(var indice = 0; indice < state.palavraSecreta.length; indice++) {
            if(state.palavraSecreta[indice] === state.palavraUsuario) {
                state.palavraOculta[indice] = state.palavraUsuario
                this.setState({ 
                    palavraUsuario: '',
                    palavraOculta: state.palavraOculta
                })
            }
        }
        
        if(!state.palavraSecreta.includes(state.palavraUsuario)) {
            state.letrasErradas.push(state.palavraUsuario)
            this.setState({ 
                palavraUsuario: '',
                letrasErradas: state.letrasErradas
            })
        }
    }
    
    render() {
    return (
        <div className='container'>
            <div className="letrasErradas">
                { this.state.letrasErradas.map((letras, indice) => (
                    <div key={indice}>
                        { letras }
                    </div>
                ))}
            </div>
            <div className='input'>
                <Input 
                    onChange={(evento) => this.pegaValorInput(evento) }
                    value={this.state.palavraUsuario}
                    placeholder='Insira uma palavra...'
                    />
            </div>
            <div className="botoes">
                <Button 
                    onClick={() => this.salvarPalavra()}
                    value='SALVAR'
                    className='primeiro'
                    />
                <Button 
                    onClick={() => this.ocultarPalavra()}
                    value='OCULTAR'
                    className='segundo'
                    />
                <Button 
                    onClick={() => this.verificarPalavra()} 
                    value='VERIFICAR'
                    className='terceiro'
                    />
            </div>
            <div className='letras'>
                {this.state.palavraOculta.map((letras, indice) => (
                    <div key={indice}>
                        {letras} 
                    </div>
                ))}
            </div>

        </div>
    )
  }
}
