import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends React.Component{
    render(){
        return(
            <div>
                <div className="form-group">
                    <label for="carnet" className="col-sm-2 col-form-label">Ingrese el carnet:</label>
                    <br></br>
                    <input className="form-control" type="text" name="carnet" id="carnet_field"></input>
                </div>
                <div className="form-group">
                    <label for="schedule">Seleccione el horario:</label>
                    <select name="schedule" className="form-control" id="schedule_field">
                        <option>Lunes de 9:00 a 11.00</option>
                        <option>Martes de 13:30 a 15:30</option>
                        <option>Miércoles de 9:00 a 11.00</option>
                        <option>Jueves de 13:30 a 15:30</option>
                        <option>Viernes de 9:00 a 11.00</option>
                        <option>Viernes de 15:30 a 17:30</option>
                    </select>
                </div>
            
                <div className="form-group">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="late_switch"></input>
                        <label className="custom-control-label" for="late_switch">Llegó tarde?</label>
                    </div>
                </div>

                <div class="form-group">
                    <button type="button" className="btn btn-danger" id="submit_btn" disabled>Ingresar</button>
                </div>
            </div>
        );
    }
}

class List extends React.Component{
    render(){
        //return();
    }
}

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <br></br>
                <div className="jumbotron">
                    <h1>
                        Registro de laboratorio
                    </h1>
                    <div className="app-input">
                        <Input />
                    </div>
                </div>
                <hr></hr>
                <section>
                    <div className="app-list">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Carnet</th>
                                <th scope="col">Horario de laboratorio</th>
                                <th scope="col">Hora de ingreso</th>
                                <th scope="col">Tarde?</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody id="table_body">
                            <List />
                        </tbody>
                    </table>
                    </div>
                </section>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

