import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h1> NUEVO VIDEO </h1>
            <h3> COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>
<<<<<<< Updated upstream
        <h2>Crear Tarjeta</h2>
        <CampoTexto titulo="Título" placeholder="Ingrese título"/>
        <ListaOpciones titulo="Categoría" placeholder="Seleccione una categoría"/>
        <CampoTexto titulo="Video" placeholder="Ingrese el enlace del video"/>
 
=======
            <h2>Crear Tarjeta</h2>
            <CampoTexto titulo="Título" placeholder="Ingrese título" />
            <ListaOpciones titulo="Categoría" placeholder="Seleccione una categoría" />
            <CampoTexto titulo="Video" placeholder="Ingrese el enlace del video" />
            <Boton />
>>>>>>> Stashed changes
        </form>
    </section>
}

export default Formulario