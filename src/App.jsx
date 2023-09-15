import axios from 'axios';
import './App.css'
import { useState } from 'react';
import Body from './components/Body';

function App() {
  const [word, setWord] = useState("")
  const [search, setSearch] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const changeInput = (e) => {
    const searchWord = e.target.value
    if (searchWord.length === 0) { 
      setWord(searchWord)     
      setSearch(null)
      console.log(searchWord)
    } else {
      setWord(searchWord)
      console.log(searchWord)
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`      
      axios
        .get(url)
        .then(({ data }) => setSearch(data[0]))
        .catch((err) => console.log(err))
    }
  }

  const handlePlayClick = () => {
    const elementAudio = document.getElementById('audio');
    if (elementAudio) {
      setIsPlaying(!isPlaying)
      if (!isPlaying) {
        elementAudio.play();
      } else {
        elementAudio.pause();
      }
    }
  }


  return (
    <main className=' min-h-screen sm:m-auto p-4 grid 
    bg-yellow-50  '>
      {/* //rounded-2xl sm:max-w-[700px] lg:max-w-[850px] border-2 border-slate-600 bg-yellow-500 */}
      <section className=' bg-yellow-100/80 w-[min(100%,320px)]       
      grid m-auto  rounded-2xl grid-cols-1 grid-rows-[1fr_auto] border border-slate-300
      shadow-lg 
      sm:w-[min(100%,700px)] 
      lg:w-[min(100%,850px)] '> 
        <div className='' >
          <div>
            <p id='Message' className=''></p>
          </div>
          <div className='flex items-center justify-between ' >
            <div>
              <i className='p-6 text-4xl bx bx-book-alt'></i>
            </div>
            <div>
              <select className='items-center' name="" id="">
                <option value="">Serif</option>
              </select>
              <i className='p-6 text-3xl bx bx-moon'></i>
            </div>
          </div>
          <div className='flex justify-center mx-auto relative '>
            <input
              className='border-2 py-2 w-[90%]  p-2  justify-center rounded-2xl 
                bg-yellow-50 outline-none text-center'
              type="text"
              placeholder='Search a word...'
              id='search'
              onChange={changeInput}
              value={word}
            />
            <div className='absolute flex right-6 top-1 sm:right-10 '>
              <i className='text-3xl text-purple-600 m-auto
            bx bx-search-alt-2'></i>
            </div>
          </div>
          <Body search={search} isPlaying={isPlaying} handlePlayClick={handlePlayClick} />
        </div>
      </section>
    </main>
  )
}

export default App
