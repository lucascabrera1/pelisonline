import React from 'react'

class Pelicula extends React.Component {
    state = {disponible:this.state}

  cambiaEstado = () =>{
    this.setState({disponible: !this.state.disponible})
  }

  render() { 
      if (this.state.disponible) {
        return <div className='peliculadisponible'> <hr />
        Nombre: {this.props.nombre} <br />
        Año: {this.props.año} <br/>
        Genero: {this.props.genero} <hr/>
        <button onClick={this.cambiaEstado}>COMPRAR</button>
      </div>
      }
      else {
        return <div className='peliculacomprada'> <hr />
        Nombre: {this.props.nombre} <br />
        Año: {this.props.año} <br/>
        Genero: {this.props.genero} <br/>
        PELÍCULA YA ADQUIRIDA
        <button onClick={this.cambiaEstado}>ANULAR</button>
      </div>
    }
  }
}

export default Pelicula;