import RadioGroup, {
  RadioGroupIndicator,
  RadioGroupItem,
} from "../ui/RadioGroup"

interface WeekRadioGroupProps {
  data: {
    value: number
    label: string
    emoji: string
  }[]
  onChange: any
  value: any
  id: string
}

function WeekRadioGroup({ data, onChange, value, id }: WeekRadioGroupProps) {
  return (
    <RadioGroup
      value={String(value)}
      onValueChange={onChange}
      id={id}
    >
      {data.map((item) => (
        <RadioGroupItem
          key={item.value}
          value={item.value.toString()}
        >
          <RadioGroupIndicator />
          <span className="text-zinc-300 text-sm font-medium leading-none">
            {item.label}
          </span>
          <span className="text-lg leading-none">{item.emoji}</span>
        </RadioGroupItem>
      ))}
    </RadioGroup>
  )
}

export default WeekRadioGroup
