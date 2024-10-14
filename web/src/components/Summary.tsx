import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from './ui/Button'
import { DialogTrigger } from './ui/Dialog'
import TaPago from './ui/TaPago'
import Progress, { ProgressIndicator } from './ui/ProgressBar'
import Separator from './ui/Separator'
import { SummaryResponse } from '../http/getSummary'
import WeekInfo from './summary/WeekInfo'
import PendingGoals from './summary/PendingGoals'
import { weekFormatted } from '../utils/date'

interface Props {
  data?: SummaryResponse
}

const Summary = ({ data }: Props) => {
  if (!data) return null

  return (
    <div className='py-10 max-w-lg px-5 mx-auto flex flex-col gap-6'>
      <div className='flex item-center justify-between'>
        <div className='flex items-center gap-3'>
          <TaPago />
          <span className='text-lg font-semibold'>{weekFormatted()}</span>
        </div>

        <DialogTrigger asChild>
          <Button size='sm'>
            <Icon icon='fluent:add-12-regular' className='w-4 h-4' />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className='flex flex-col gap-3'>
        <Progress value={data?.completed} max={data?.total}>
          <ProgressIndicator
            style={{ width: `${(data?.completed / data?.total) * 100}%` }}
          />
        </Progress>

        <div className='flex items-center justify-between text-xs text-zinc-400'>
          <span>
            Você completou{' '}
            <span className='text-zinc-100'>{data?.completed}</span> de{' '}
            <span className='text-zinc-100'>{data?.total}</span> metas nessa
            semana.
          </span>
          <span>{((data?.completed / data?.total) * 100).toFixed(0)}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals />

      <WeekInfo data={data} />
    </div>
  )
}

export default Summary
