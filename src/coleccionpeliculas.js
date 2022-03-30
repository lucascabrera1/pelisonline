import React from 'react'
import Pelicula from './pelicula'

class ColeccionPeliculas extends React.Component {
    state = {peliculas: []}
    componentDidMount(){
        fetch('./peliculas.json')
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({peliculas : data});
        })
    }
    render() {
        console.log(this.state.peliculas);
        let pelis = this.state.peliculas;
        let html = <table>{pelis.map((elem) => <tr key={elem.id}>
            <td><Pelicula 
                nombre={elem.nombre} 
                año={elem.año} 
                genero={elem.genero}
                precio = {elem.precio}>
            </Pelicula></td></tr>)}</table>
        return html;
    }
}

export default ColeccionPeliculas;