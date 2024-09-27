import { Icon } from '@iconify/react/dist/iconify.js'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from './ui/Button'
import TaPago from './ui/TaPago'
import illustration from '@assets/illustration.svg'

const EmptyGoals = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-8'>
      <TaPago text />
      <img src={illustration} alt='Illustration' className='h-72' />
      <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
        Você ainda não cadastrou nenhuma meta, que tal&nbsp;
        <span className='underline'>cadastrar uma</span> agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Icon icon='fluent:add-12-regular' className='w-4 h-4' />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}

export default EmptyGoals
