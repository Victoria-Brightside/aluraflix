import "./ListaOpciones.css"

const ListaOpciones = () => {

    const temas = ["Judo", "Brazilian Jiu jitsu", "Wrestling"];
    return <div className="opciones">
        <label>Categoría</label>
        <select>
        {temas.map((tema, index) => <option key={index}> {tema} </option>
            )}
        </select>
    </div >
}

export default ListaOpciones