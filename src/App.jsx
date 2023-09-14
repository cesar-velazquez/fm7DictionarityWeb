import axios from 'axios';
import './App.css'

function App() {
  
  const word = "teclado";
  const BASE_URL = `https://es.wiktionary.org/wiki/${word}`
  axios 
    .get(BASE_URL)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err))


  return (
    <main className='bg-teal-950 min-h-screen'>
      <h1 className='text-center' >Hola</h1>
    </main>
  )
}

export default App
