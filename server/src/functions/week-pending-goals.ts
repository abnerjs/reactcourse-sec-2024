import dayjs from 'dayjs'
import { db } from '../db'
import { goalCompletion, goals } from '../db/schema'
import { count, gte, lte, and, eq, sql } from 'drizzle-orm'

export async function getWeekPendingGoals() {
  const firstDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfWeek = dayjs().endOf('week').toDate()

  const goalsCreatedUpToWeek = db.$with('goals_created_up_to_week').as(
    db
      .select({
        id: goals.id,
        title: goals.title,
        weeklyFreq: goals.weeklyFreq,
        createdAt: goals.createdAt,
      })
      .from(goals)
      .where(lte(goals.createdAt, lastDayOfWeek))
  )

  const goalsCompletionCount = db.$with('goals_completion_count').as(
    db
      .select({
        goalId: goalCompletion.goalId,
        completionCount: count(goalCompletion.id).as('completionCount'),
      })
      .from(goalCompletion)
      .where(
        and(
          gte(goalCompletion.createdAt, firstDayOfWeek),
          lte(goalCompletion.createdAt, firstDayOfWeek)
        )
      )
      .groupBy(goalCompletion.goalId)
  )

  const pendingGoals = await db
    .with(goalsCreatedUpToWeek, goalsCompletionCount)
    .select({
      id: goalsCreatedUpToWeek.id,
      title: goalsCreatedUpToWeek.title,
      weeklyFreq: goalsCreatedUpToWeek.weeklyFreq,
      completionCount: sql/*sql*/ `
          COALESCE(${goalsCompletionCount.completionCount}, 0)
        `.mapWith(Number),
    })
    .from(goalsCreatedUpToWeek)
    .leftJoin(
      goalsCompletionCount,
      eq(goalsCreatedUpToWeek.id, goalsCompletionCount.goalId)
    )

  return {
    pendingGoals,
  }
}
