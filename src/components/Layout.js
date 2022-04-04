import React from "react";
import Opcion from "./Opcion";
import Recordatorio from "./Recordatorio";
import data from './data.json';


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            historial: [],
            seleccionPrevia: "",
        }

    }



    avanzarPagina = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}
                </h1>
                <Opcion opcionA={data[this.state.contador].opciones.a} opcionB={data[this.state.contador].opciones.b} avanzarPagina={this.avanzarPagina} />
                <Recordatorio historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia} />
            </div>
        )
    }
}

export default Layout;