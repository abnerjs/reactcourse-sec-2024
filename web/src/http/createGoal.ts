export interface CreateGoalRequest {
  title: string
  weeklyFreq: number
}

export async function createGoal({
  title,
  weeklyFreq,
}: CreateGoalRequest): Promise<void> {
  const response = await fetch("http://localhost:3000/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      weeklyFreq,
    }),
  })

  if (!response.ok) {
    throw new Error("Error while creating the goal")
  }
}
