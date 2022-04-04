import React from 'react';

class Recordatorio extends React.Component {
    render(){
        return (
            <div className='recordatorio'>
                <h3>Seleccion anterior {this.props.historial}</h3>
                <h4>Historial de opciones elegidas: {this.seleccionPrevia}</h4>
                <ul></ul>
            </div>
        )
    }
}

export default Recordatorio;