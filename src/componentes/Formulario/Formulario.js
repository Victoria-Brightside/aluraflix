import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () => {

const manejarEnvio = (evento) =>{
    evento.preventDefault()
}
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h1> NUEVO VIDEO </h1>
            <h3> COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>
            <h2>Crear Tarjeta</h2>
            <CampoTexto titulo="Título" placeholder="Ingrese título" required/>
            <ListaOpciones titulo="Categoría" placeholder="Seleccione una categoría" required />
            <CampoTexto titulo="Video" placeholder="Ingrese el enlace del video" required/>
            <Boton texto="Enviar"/>
            <Boton texto="Limpiar"/>
        </form>
    </section>
}

export default Formulario