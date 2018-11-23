import React, { Component } from 'react';
import HeaderComponent from 'components/HeaderComponent';
import BiddingComponent from '../components/BiddingComponent';
import OverviewComponent from '../components/OverviewComponent';
import AddComponent from '../components/AddComponent';
import './style.css';

class CreatePage extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="row container-fluid">
                    <div className="col-lg-4">
                        <OverviewComponent />
                        <BiddingComponent  biddings={[{
                            name : 'ob',
                            title : 'Obra'
                        },{
                            name : 'ta',
                            title : 'Tarea'
                        ,},{
                            name : 'ma',
                            title : 'Material'
                        },{
                            name : 'mo',
                            title : 'Mano de obra'
                        },{
                            name : 'eq',
                            title : 'Equipo'
                        },{
                            name : 'vi',
                            title : 'Viaticos'
                        }]}/>
                    </div>
                    <div className="col-lg-8">
                    <AddComponent adds ={[{
                        name : 'dg',
                        title : 'Desripción general',
                        content : 'Esto es una descripción general',
                      },{
                        name : 'ma',
                        title : 'Materiales',
                        content : 'Esto es un material',
                      },{
                        name : 'in',
                        title : 'Insumos',
                        content : 'Esto es un insumo',
                      },{
                        name : 'mo',
                        title : 'Mano de obra',
                        content : 'Esto es una mano de obra',
                      },{
                        name : 'mq',
                        title : 'Maquinaria',
                        content : 'Esto es una maquinaria'
                      },{
                        name : 'gg',
                        title : 'Gastos generales',
                        content : 'Esto es un gasto general'
                    }]}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreatePage;