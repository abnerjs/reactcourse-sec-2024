import dayjs from 'dayjs'
import { client, db } from '.'
import { goalCompletion, goals } from './schema'

async function seed() {
  await db.delete(goalCompletion)
  await db.delete(goals)

  const goalsResult = await db
    .insert(goals)
    .values([
      { title: 'Learn to cook', weeklyFreq: 3 },
      { title: 'Read 10 pages', weeklyFreq: 7 },
      { title: 'Exercise', weeklyFreq: 5 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  function getRandomTime() {
    const hour = Math.floor(Math.random() * 3) + 8
    const minute = Math.floor(Math.random() * 60)
    const second = Math.floor(Math.random() * 60)
    return { hour, minute, second }
  }

  function setRandomTime(date: dayjs.Dayjs) {
    const { hour, minute, second } = getRandomTime()
    return date.hour(hour).minute(minute).second(second)
  }

  await db.insert(goalCompletion).values([
    {
      goalId: goalsResult[0].id,
      createdAt: setRandomTime(startOfWeek).toDate(),
    },
    {
      goalId: goalsResult[1].id,
      createdAt: setRandomTime(startOfWeek.add(1, 'day')).toDate(),
    },
  ])
}

seed().finally(() => {
  client.end()
})
