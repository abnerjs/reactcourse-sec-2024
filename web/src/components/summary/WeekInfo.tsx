/// <reference types="vite/client" />
import { SummaryResponse } from "../../http/getSummary"
import dayjs from "dayjs"
import { Icon } from "@iconify/react/dist/iconify.js"

interface Props {
  data?: SummaryResponse
}

const WeekInfo = ({ data }: Props) => {
  if (!data) return null

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium">Sua semana</h2>

      {data.goalsPerDay &&
        Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekday = dayjs(date).format("dddd")
          const formattedDate = dayjs(date).format("D [de] MMMM")

          return (
            <div
              key={date}
              className="flex flex-col gap-4"
            >
              <h3 className="font-medium">
                <span className="capitalize">{weekday + " "}</span>
                <span className="text-zinc-400 text-xs">({formattedDate})</span>
              </h3>

              <ul className="flex flex-col gap-3">
                {goals.map((goal) => {
                  const time = dayjs(goal.completedAt).format("HH:mm")

                  return (
                    <li
                      key={goal.id}
                      className="flex items-center gap-2"
                    >
                      <Icon
                        icon="fluent:checkmark-circle-48-regular"
                        className="size-4 text-yellow-500"
                      />
                      <span className="text-small text-zinc-400">
                        Você completou "
                        <span className="text-zinc-100">{goal.title}</span>" às{" "}
                        {time}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
    </div>
  )
}

export default WeekInfo
