import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../functions/create-goal'

export const createGoalRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: z.string(),
          weeklyFreq: z.number().int().min(1).max(7),
        }),
      },
    },
    async (request) => {
      const { title, weeklyFreq } = request.body as {
        title: string
        weeklyFreq: number
      }

      await createGoal({
        title,
        weeklyFreq,
      })
    }
  )
}
