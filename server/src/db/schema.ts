import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const goals = pgTable('goals', {
  id: text('id').primaryKey().$defaultFn(createId),
  title: text('title').notNull(),
  weekFreq: integer('week_freq').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export const goalCompletion = pgTable('goal_completion', {
  id: text('id').primaryKey().$defaultFn(createId),
  goalId: text('goal_id')
    .notNull()
    .references(() => goals.id),
  createdAt: timestamp('createdAt', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
