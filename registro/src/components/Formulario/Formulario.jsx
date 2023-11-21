import React, { useState } from 'react';

const Formulario = () => {
    const [mensaje, setMensaje] = useState('');

    const handleChange = (event) => {
        setMensaje(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Formulario enviado por: ' + mensaje);
    };

    return (
        <>
            <section className = "row">
                <h1>Formulario de Registro</h1>
                <form onSubmit={handleSubmit} className="row g-3 bg-light-subtle rounded border border-secondary" >
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label" >Nombre</label>
                        <input type="text" value = {mensaje} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="teleefono" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" id="telefono" required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="pass" className="form-label">
                        Password
                        </label>
                        <input type="password" className="form-control" id="pass" required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="passw" className="form-label">
                        Confirmar Password
                        </label>
                        <input type="password" className="form-control" id="passw" required />
                    </div>
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Registrarme
                        </button>
                    </div>
                </form>

            </section>
        </>

    );
}

export default Formulario;
