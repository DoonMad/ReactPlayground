import Card from './components/Card'

function App() {
  return (
    <div className='bg-zinc-900 min-h-screen min-w-screen'>
      <div className="min-h-screen min-w-[320px] flex flex-col items-center justify-center font-sans text-white px-8 max-w-[1280px] mx-auto text-center">
        <h1 className="text-3xl font-bold underline bg-red-700 text-black p-4 rounded-2xl">
          Hello world!
        </h1>

        <div className="flex gap-10 mt-5">
          <Card title="Title" btn="Read ?" />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
