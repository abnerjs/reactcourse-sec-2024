import tapago from '../assets/tapago.svg'

interface TaPagoProps {
  text?: boolean
}

const TaPago = (props: TaPagoProps) => {
  return (
    <div className='flex items-end gap-4 h-9'>
      <img src={tapago} alt='TaPago Logo' className='h-7' />
      {props.text && <h1 className='text-xl'>#tapago</h1>}
    </div>
  )
}

export default TaPago
