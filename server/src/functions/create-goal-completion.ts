import { and, count, eq, gte, lte } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletion, goals } from '../db/schema'
import dayjs from 'dayjs'
import { sql } from 'drizzle-orm'

interface CreateGoalCompletionRequest {
  goalId: string
}

export async function createGoalCompletion({
  goalId,
}: CreateGoalCompletionRequest) {
  const firstDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfWeek = dayjs().endOf('week').toDate()

  const goalCompletionCounts = db.$with('goal_completion_counts').as(
    db
      .select({
        goalId: goalCompletion.goalId,
        completionCount: count(goalCompletion.id).as('completionCount'),
      })
      .from(goalCompletion)
      .where(
        and(
          gte(goalCompletion.createdAt, firstDayOfWeek),
          lte(goalCompletion.createdAt, lastDayOfWeek),
          eq(goalCompletion.goalId, goalId)
        )
      )
      .groupBy(goalCompletion.goalId)
  )

  const result = await db
    .with(goalCompletionCounts)
    .select({
      weeklyFreq: goals.weeklyFreq,
      completionCount: sql/*sql*/ `
        COALESCE(${goalCompletionCounts.completionCount}, 0)
      `.mapWith(Number),
    })
    .from(goals)
    .leftJoin(goalCompletionCounts, eq(goalCompletionCounts.goalId, goals.id))
    .where(eq(goals.id, goalId))
    .limit(1)

  const { completionCount, weeklyFreq: weeklyFreq } = result[0]

  if (completionCount >= weeklyFreq) {
    throw new Error('Goal already completed this week!')
  }

  const insertResult = await db
    .insert(goalCompletion)
    .values({ goalId })
    .returning()
  const newGoalCompletion = insertResult[0]

  return {
    goalCompletion,
  }
}
