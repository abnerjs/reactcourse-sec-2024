import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Icon } from '@iconify/react'

function RadioGroup(props: RadioGroupPrimitive.RadioGroupProps) {
  return (
    <RadioGroupPrimitive.RadioGroup
      {...props}
      className='flex flex-col gap-2'
    />
  )
}

export function RadioGroupItem(props: RadioGroupPrimitive.RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.RadioGroupItem
      {...props}
      className='group bg-black border border-zinc-900 rounded-lg px-4 py-2.5 flex items-center justify-between outline-none hover:border-zinc-800 focus-visible:border-yellow-500 focus-visible:ring-4 ring-yellow-500/10 data-[state=checked]:bg-yellow-500/5 data-[state=checked]:border-yellow-500'
    />
  )
}

export function RadioGroupIndicator() {
  return (
    <>
      <Icon
        icon='fluent:radio-button-20-regular'
        className='size-4 text-zinc-600 group-data-[state=checked]:hidden'
      />
      <Icon
        icon='fluent:checkmark-circle-48-regular'
        className='size-4 text-yellow-500 hidden group-data-[state=checked]:inline'
      />
    </>
  )
}

export default RadioGroup
