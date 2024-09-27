import { Icon } from '@iconify/react/dist/iconify.js'
import OutlineButton from '../ui/OutlineButton'
import { getPendingGoals } from '../../http/getPendingGoals'
import { useQuery } from '@tanstack/react-query'

const PendingGoals = () => {
  const { data } = useQuery(['pending-goals'], getPendingGoals)

  if (!data) return null

  return (
    <div className='flex flex-wrap gap-3'>
      {data.map((goal) => (
        <OutlineButton key={goal.id}>
          <Icon icon='fluent:add-24-regular' />
          Meditar
        </OutlineButton>
      ))}
    </div>
  )
}

export default PendingGoals
