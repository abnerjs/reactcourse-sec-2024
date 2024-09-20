import { db } from '../db'
import { goals } from '../db/schema'

interface CreateGoalRequest {
  title: string
  weeklyFreq: number
}

export async function createGoal({ title, weeklyFreq }: CreateGoalRequest) {
  const result = await db
    .insert(goals)
    .values({
      title,
      weeklyFreq,
    })
    .returning()

  const goal = result[0]

  return {
    goal,
  }
}
