import { Icon } from '@iconify/react/dist/iconify.js'
import {
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from './ui/Dialog'
import { Button } from './ui/Button'
import Input from './ui/Input'
import Label from './ui/Label'
import WeekRadioGroup from './create-goal/WeekRadioGroup'

const radioGroupData = [
  {
    value: '1',
    label: '1x na semana',
    emoji: '🥱',
  },
  {
    value: '2',
    label: '2x na semana',
    emoji: '🙂',
  },
  {
    value: '3',
    label: '3x na semana',
    emoji: '😎',
  },
  {
    value: '4',
    label: '4x na semana',
    emoji: '😜',
  },
  {
    value: '5',
    label: '5x na semana',
    emoji: '🤨',
  },
  {
    value: '6',
    label: '6x na semana',
    emoji: '🤯',
  },
  {
    value: '7',
    label: 'Todos os dias da semana',
    emoji: '🔥',
  },
]

const CreateGoal = () => {
  return (
    <DialogContent>
      <div className='flex flex-col gap-6 h-full'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose asChild>
              <Button variant='rounded'>
                <Icon icon='fluent:dismiss-12-regular' />
              </Button>
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>
        <form action='' className='flex-1 flex flex-col justify-between'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='title'>Qual a atividade?</Label>
              <Input
                autoFocus
                id='title'
                type='text'
                placeholder='Praticar exercícios, correr, etc'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='week'>Quantas vezes na semana?</Label>
              <WeekRadioGroup data={radioGroupData} />
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <DialogClose asChild>
              <Button type='button' className='flex-1' variant='secondary'>
                Fechar
              </Button>
            </DialogClose>
            <Button className='flex-1'>Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}

export default CreateGoal
