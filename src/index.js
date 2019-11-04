import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends React.Component{
    render(){
        return(
        <form onSubmit={(e)=>this.props.onClick(e)}>
            <div>
                <div className="form-group">
                    <label htmlFor="carnet" className="col-sm-2 col-form-label">Ingrese el carnet:</label>
                    <br></br>
                    <input className="form-control" type="text" name="carnet" id="carnet_field"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="schedule">Seleccione el horario:</label>
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
                        <input type="checkbox" className="custom-control-input" id="late_switch" name="late_switch"></input>
                        <label className="custom-control-label" htmlFor="late_switch">Llegó tarde?</label>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-danger" id="submit_btn" >Ingresar</button>
                </div>
            </div>
        </form>
        );
    }
}

function Rows (props){
    return(
        props.list.map((current)=>{
            return (<tr key={current.id}>
            <td>{current.carnet}</td>
            <td>{current.schedule}</td>
            <td>{current.date.toLocaleString()}</td>
            <td>{current.late}</td>
            <td><button className="btn btn-danger" onClick={()=> props.onClick(current.id)}>Eliminar</button></td>
        </tr>);
        })
    );
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            studentList: [],
            id:0
        }
    }

    add(e){
        e.preventDefault();
        const students = this.state.studentList.slice();
        const tarde = e.target.elements["late_switch"].checked?'Tarde':'Temprano';
        const carnet_regex= new RegExp('^[0-9]{8}$');

        if(carnet_regex.test(e.target.elements["carnet"].value)){
            students.push({
                carnet:e.target.elements["carnet"].value,
                schedule: e.target.elements["schedule"].value,
                date: new Date(),
                late:tarde,
                id: this.state.id
            })
            this.setState({
                studentList: students, 
                id: this.state.id +1
            })
        }else{
            alert("Formato de carnet no valido");
        }  
    }

    delete(id){
        const students = this.state.studentList.slice();
        const studentList = students.filter((current)=>{
            return current.id !== id;
        })

        this.setState({studentList});
    }

    render(){
        return(
            <div className="app">
                <br></br>
                <div className="jumbotron">
                    <h1>
                        Registro de laboratorio
                    </h1>
                    <div className="app-input">
                        <Input onClick={(e)=>this.add(e)}/>
                    </div>
                </div>
                <hr></hr>
                <section>
                    <div className="app-row">
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
                            <Rows list={this.state.studentList} onClick={(id)=>{this.delete(id)}}/>
                        </tbody>
                    </table>
                    </div>
                </section>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

