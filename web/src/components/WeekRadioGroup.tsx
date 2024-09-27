import RadioGroup, {
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/RadioGroup'

interface WeekRadioGroupProps {
  data: {
    value: string
    label: string
    emoji: string
  }[]
}

function WeekRadioGroup({ data }: WeekRadioGroupProps) {
  return (
    <RadioGroup>
      {data.map((item) => (
        <RadioGroupItem key={item.value} value={item.value}>
          <RadioGroupIndicator />
          <span className='text-zinc-300 text-sm font-medium leading-none'>
            {item.label}
          </span>
          <span className='text-lg leading-none'>{item.emoji}</span>
        </RadioGroupItem>
      ))}
    </RadioGroup>
  )
}

export default WeekRadioGroup
