import Header from '../componentes/Header/Header.js'
import Categoria from '../componentes/Categoria/Categoria.js'


const temas = [
    {
        titulo:"Judo",
        colorPrimario:"green",
        colorSecundario:"#28b463",
    },
    {
        titulo:"Brazilian Jiu jitsu",
        colorPrimario:"blue",
        colorSecundario:" #2e86c1 ",
    },
    {
        titulo:"Wrestling",
        colorPrimario:"orange",
        colorSecundario:"#e67e22",
    }
];

const Home = () => {
    return (
      <main>
  {
temas.map( (tema) => {
return <Categoria datos={tema} key={tema.titulo}/>
      })
  }
      </main>
    )
  }
  
  export default Home