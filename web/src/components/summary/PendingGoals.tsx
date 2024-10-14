import { Icon } from '@iconify/react/dist/iconify.js'
import OutlineButton from '../ui/OutlineButton'
import { getPendingGoals } from '../../http/getPendingGoals'
import { useQuery } from '@tanstack/react-query'
import createGoalCompletion from '../../http/createGoalCompletion'

const PendingGoals = () => {
  const { data } = useQuery(['pending-goals'], getPendingGoals)

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId)
  }

  if (!data) return null

  return (
    <div className='flex flex-wrap gap-3'>
      {data.map((goal) => (
        <OutlineButton
          key={goal.id}
          disabled={goal.completionCount >= goal.weeklyFreq}
          onClick={() => handleCompleteGoal(goal.id)}
        >
          <Icon icon='fluent:add-24-regular' />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}

export default PendingGoals
