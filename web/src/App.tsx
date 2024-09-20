import TaPago from './components/TaPago'
import illustration from './assets/illustration.svg'
import { Icon } from '@iconify/react'

function App() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-8'>
      <TaPago text />
      <img src={illustration} alt='Illustration' className='h-72' />
      <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <button
        type='button'
        className='flex items-center text-small font-medium tracking-tight gap-2 px-4 py-2.5 rounded-lg bg-green-500 text-green-50 hover:bg-green-600'
      >
        <Icon icon='fluent:add-12-regular' className='w-4 h-4' />
        Cadastrar meta
      </button>
    </div>
  )
}

export default App
