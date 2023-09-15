import React from 'react'

const Body = ({ search, isPlaying, handlePlayClick }) => {
    return (
        <section className='px-6 py-4 min-h-screen'>
            <div className='flex justify-between items-center' >
                <div>
                    <h1 className='font-Bree text-2xl ' >{search?.word}</h1>
                    <p className='font-Ibm text-purple-500 py-2' >{search?.phonetic}</p>
                </div>
                <div className='w-[50px] aspect-square rounded-full flex justify-center items-center  bg-purple-200 animate-pulse' >
                    <i className={`bx ${isPlaying ? 'bx-pause-circle' : 'bx-play-circle'} text-purple-500
                    text-3xl`}
                        onClick={handlePlayClick}></i>
                    <audio id='audio' src={
                        search ?
                            search?.phonetics[0]?.audio
                            :
                                search?.phonetics[1]?.audio
                                
                    }
                        controls={false} autoPlay={isPlaying} >
                    </audio>
                </div>
            </div>

            <section>
                <h4 className='font-bold py-4 font-Ibm text-[20px] ' >{search?.meanings[0].partOfSpeech}</h4>
                <h3 className='font-Bree text-slate-400 pb-3 text-[19px] ' >Meaning</h3>
                <ul className='grid gap-4 font-Bree text-slate-600 list-disc px-4 marker:text-purple-500 '>
                    <li className=' ' >{search?.meanings[0].definitions[0]?.definition}</li>
                    <li>{search?.meanings[0].definitions[1]?.definition}</li>
                    <li>{search?.meanings[0].definitions[2]?.definition}</li>
                </ul>
            </section>

            <section className='py-4 flex gap-4 items-center text-[17px]'>
                <h3 className='font-Ibm text-slate-500 ' >Synonyms</h3>
                <h3 className='text-purple-500 font-bold ' >{search?.meanings[0].synonyms[0]}</h3>
            </section>

            <section className=''>
                <h3 className='py-6 font-bold font-Ibm'>Verb</h3>
                <h3 className='text-slate-400 font-Bree text-[18px]  '>Meaning</h3>
                <ul className='list-disc marker:text-purple-500 px-4 '>
                    <li>{search?.meanings[1]?.definitions[0].definition}</li>
                </ul>
                <p className='p-4 text-slate-400 font-Ibm'>"{search?.meanings[1]?.definitions[0].example}"</p>

                <hr className='py-3 ' />
                <div className='h-[340px]  flex items-end  justify-center'>
                <footer className='bg-yellow-100 w-[90%] flex flex-col items-center '>
                    <h3 className='text-slate-400 font-Bree  '>Source</h3>
                    <div className='flex items-center font-Ibm text-slate-500 '>
                        <a target='_blank' href={search?.sourceUrls[0]}>{search?.sourceUrls[0]}</a>
                        <i className='bx bx-navigation bx-tada'></i>
                    </div>
                </footer>
                </div>
            </section>

        </section >
    )
}

export default Body