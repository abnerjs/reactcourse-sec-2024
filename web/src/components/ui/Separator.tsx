import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

function Separator(props: ComponentProps<'div'>) {
  return (
    <div {...props} className={twMerge('h-px bg-zinc-900', props.className)} />
  )
}

export default Separator
