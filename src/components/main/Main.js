import React, { useContext } from 'react';
import { ServiceContext } from '../../context/ServiceContext';
import './Main.css'

export const Main = () => {
    const { data, loading, forceFoot } = useContext(ServiceContext);
    return (
        <div className="grid-container">
            <table className="grid">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Login</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Estado</th>
                        <th>Actualización</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ?
                            null
                            :
                            data.map((registro,index) => {
                                return (
                                    <tr 
                                        key={index}
                                        onClick={()=>{return forceFoot(registro)}}
                                    >
                                        <td className={((index%2)!==0)? 'gray-style': ''}>{registro.usuario_id}</td>
                                        <td className={((index%2)!==0)? 'gray-style': ''}>{registro.usuario_login}</td>
                                        <td className={((index%2)!==0)? 'gray-style': ''}>{registro.nombres}</td>
                                        <td className={((index%2)!==0)? 'gray-style': ''}>{`${registro.primer_apellido? registro.primer_apellido: ''} ${registro.segundo_apellido? registro.segundo_apellido: ''}`}</td>
                                        <td className={((index%2)!==0)? 'gray-style': ''}>{registro.descripcion_estado}</td>
                                        <td className={((index%2)!==0)? 'gray-style': ''}>{registro.fecha_actualizacion}</td>
                                    </tr>
                                );
                            })
                    }

                </tbody>
            </table>
        </div>
    );
}