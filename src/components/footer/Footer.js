import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../context/ServiceContext';
import './Footer.css'

export const Footer = () => {
    const { loading, footForm, handleFootChange } = useContext(ServiceContext)
    const {
        usuario_id,
        nombres,
        segundo_apellido,
        telefono_laboral,
        password_asterisk,
        usuario_login,
        primer_apellido,
        email_laboral,
        extension_asterisk,
        descripcion_estado
    } = footForm;
    const [enable, setEnable] = useState(false);
    useEffect(()=>{
        setEnable(false);
    },[ usuario_id])
    const handleUpdate = (e) => {
        setEnable(true)
        return handleFootChange(e);
    }
    return (
        <div className="footer-container">
            {
                !loading ?
                    <Fragment>
                        <div className="row">
                            <label>Id:</label>
                            <input value={usuario_id} name="usuario_id" type="text" className="w-100 p-3" disabled/>
                            <label>Nombre:</label>
                            <input value={nombres} name="nombres" type="text" className="w-100 p-3" onChange={handleUpdate} />
                            <label>Segundo Apellido:</label>
                            <input value={segundo_apellido} name="segundo_apellido" type="text" className="w-100 p-3" onChange={handleUpdate} />
                            <label>Telefono Laboral:</label>
                            <input value={telefono_laboral} name="telefono_laboral" type="text" className="w-100 p-3" onChange={handleUpdate} />
                            <label>Contraseña ext:</label>
                            <input value={password_asterisk} name="password_asterisk" type="text" className="w-100 p-3" onChange={handleUpdate} />
                        </div>
                        <div className="row">
                            <label>Login:</label>
                            <input value={usuario_login} name="usuario_login" type="text" className="w-100 p-3" onChange={handleUpdate} />
                            <label>Primer Apellido:</label>
                            <input value={primer_apellido} name="primer_apellido" type="text" className="w-100 p-3" onChange={handleUpdate} />
                            <label>Email Laboral:</label>
                            <input value={email_laboral} name="email_laboral" type="text" className="w-100 p-3" onChange={handleUpdate} />
                            <label>Extensión:</label>
                            <input value={extension_asterisk} name="extension_asterisk" type="text" className="w-100 p-3" onChange={handleUpdate} />
                            <label>Estado:</label> <br />
                            <input value={descripcion_estado} name="descripcion_estado" type="text" className="w-20 p-3" onChange={handleUpdate} />
                            <input onClick={(e)=>{
                                if(enable){
                                    window.confirm('Valores actualizados con éxito');
                                }
                            }} type="submit" value="Actualizar" className={enable ? 'update update-active' : 'update'} />
                        </div>
                    </Fragment>
                    :
                    null
            }

        </div>
    );
}