import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

function Label(props: ComponentProps<'label'>) {
  return (
    <label
      {...props}
      className={twMerge(
        'font-medium text-sm tracking-tight leading-normal',
        props.className
      )}
    />
  )
}

export default Label
