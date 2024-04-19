import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [contador, setContador] = useState(0)
  const [photos, setPhotos] = useState([])

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => setPhotos(data))
    .catch(error => console.error("Error: ", error))
  }, [])

  function aumentar(){
    setContador(contador + 1)
    console.log(contador)
  }

  function diminuir(){
    setContador(contador - 1)
    console.log(contador)
  }

  function zerar(){
    setContador(0)
    console.log(contador)
  }

  return (
    <>
      <h1>Coputador</h1>
      <p>{contador}</p>
      <button onClick={aumentar} >aumentar</button>
      <button onClick={diminuir} >diminuir</button>
      <button onClick={zerar} >zerar</button>

      <h1>fotos</h1>

      {photos.map(
        imagem => (
          <img key={imagem.id} src={imagem.url} alt={imagem.title} width={100} />
        )
      )}

    </>
  )
}

export default App
