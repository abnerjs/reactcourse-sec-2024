export const getPendingGoals = async (): Promise<PendingGoalsResponse> => {
  const response = await fetch('http://localhost:3000/pending-goals')
  const data = await response.json()
  return data.pendingGoals
}

export type PendingGoalsResponse = {
  id: string
  title: string
  weeklyFreq: number
  completionCount: number
}[]
