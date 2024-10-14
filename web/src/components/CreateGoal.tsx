import { Icon } from "@iconify/react/dist/iconify.js"
import {
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "./ui/Dialog"
import { Button } from "./ui/Button"
import Input from "./ui/Input"
import Label from "./ui/Label"
import WeekRadioGroup from "./create-goal/WeekRadioGroup"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { createGoal } from "../http/createGoal"
import { useQueryClient } from "@tanstack/react-query"

const radioGroupData = [
  {
    value: 1,
    label: "1x na semana",
    emoji: "🥱",
  },
  {
    value: 2,
    label: "2x na semana",
    emoji: "🙂",
  },
  {
    value: 3,
    label: "3x na semana",
    emoji: "😎",
  },
  {
    value: 4,
    label: "4x na semana",
    emoji: "😜",
  },
  {
    value: 5,
    label: "5x na semana",
    emoji: "🤨",
  },
  {
    value: 6,
    label: "6x na semana",
    emoji: "🤯",
  },
  {
    value: 7,
    label: "Todos os dias da semana",
    emoji: "🔥",
  },
]

type CreateGoalSchema = z.infer<typeof createGoalSchema>

const createGoalSchema = z.object({
  title: z.string().min(1, "Informe a atividade que deseja realizar"),
  weeklyFreq: z.coerce.number().min(1).max(7),
})

const CreateGoal = () => {
  const queryClient = useQueryClient()
  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalSchema>({
      resolver: zodResolver(createGoalSchema),
    })

  async function handleCreateGoal(data: CreateGoalSchema) {
    await createGoal({
      title: data.title,
      weeklyFreq: data.weeklyFreq,
    })

    queryClient.invalidateQueries({ queryKey: ["summary"] })
    queryClient.invalidateQueries({ queryKey: ["pending-goals"] })

    reset()
  }
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose asChild>
              <Button
                variant="rounded"
                onClick={() => reset()}
              >
                <Icon icon="fluent:dismiss-12-regular" />
              </Button>
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>
        <form
          id="create-goal-form"
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-3 pb-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                autoFocus
                id="title"
                type="text"
                placeholder="Praticar exercícios, correr, etc"
                {...register("title")}
              />
              {formState.errors.title && (
                <p className="text-xs text-red-500">
                  {formState.errors.title.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="weeklyFreq">Quantas vezes na semana?</Label>

              <Controller
                control={control}
                name="weeklyFreq"
                defaultValue={1}
                render={({ field }) => {
                  return (
                    <WeekRadioGroup
                      id="weeklyFreq"
                      onChange={field.onChange}
                      value={field.value}
                      data={radioGroupData}
                    />
                  )
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button
                type="button"
                className="flex-1"
                variant="secondary"
                onClick={() => reset()}
              >
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}

export default CreateGoal
