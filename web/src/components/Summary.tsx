import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from './ui/Button'
import { DialogTrigger } from './ui/Dialog'
import TaPago from './ui/TaPago'
import Progress, { ProgressIndicator } from './ui/ProgressBar'
import Separator from './ui/Separator'
import OutlineButton from './ui/OutlineButton'

const Summary = () => {
  return (
    <div className='py-10 max-w-lg px-5 mx-auto flex flex-col gap-6'>
      <div className='flex item-center justify-between'>
        <div className='flex items-center gap-3'>
          <TaPago />
          <span className='text-lg font-semibold'>5 a 10 de agosto</span>
        </div>

        <DialogTrigger asChild>
          <Button size='sm'>
            <Icon icon='fluent:add-12-regular' className='w-4 h-4' />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className='flex flex-col gap-3'>
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: 200 }} />
        </Progress>

        <div className='flex items-center justify-between text-xs text-zinc-400'>
          <span>
            Você completou <span className='text-zinc-100'>8</span> de{' '}
            <span className='text-zinc-100'>15</span> metas nessa semana.
          </span>
        </div>
      </div>

      <Separator />

      <div className='flex flex-wrap gap-3'>
        <OutlineButton>
          <Icon icon='fluent:add-24-regular' />
          Meditar
        </OutlineButton>
        <OutlineButton>
          <Icon icon='fluent:add-24-regular' />
          Praticar exercícios
        </OutlineButton>
        <OutlineButton>
          <Icon icon='fluent:add-24-regular' />
          Me alimentar bem
        </OutlineButton>
        <OutlineButton>
          <Icon icon='fluent:add-24-regular' />
          Acordar cedo
        </OutlineButton>
        <OutlineButton>
          <Icon icon='fluent:add-24-regular' />
          Nadar
        </OutlineButton>
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-medium'>Sua semana</h2>

        <div className='flex flex-col gap-4'>
          <h3 className='font-medium'>
            Domingo{' '}
            <span className='text-zinc-400 text-xs'>(13 de outubro)</span>
          </h3>

          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <Icon
                icon='fluent:checkmark-circle-48-regular'
                className='size-4 text-yellow-500'
              />
              <span className='text-small text-zinc-400'>
                Você completou "{' '}
                <span className='text-zinc-100'>Acordar cedo</span>" às 08:13
              </span>
            </li>
            <li className='flex items-center gap-2'>
              <Icon
                icon='fluent:checkmark-circle-48-regular'
                className='size-4 text-yellow-500'
              />
              <span className='text-small text-zinc-400'>
                Você completou "{' '}
                <span className='text-zinc-100'>Acordar cedo</span>" às 08:13
              </span>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-medium'>
            Domingo{' '}
            <span className='text-zinc-400 text-xs'>(13 de outubro)</span>
          </h3>

          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <Icon
                icon='fluent:checkmark-circle-48-regular'
                className='size-4 text-yellow-500'
              />
              <span className='text-small text-zinc-400'>
                Você completou "{' '}
                <span className='text-zinc-100'>Acordar cedo</span>" às 08:13
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Summary
