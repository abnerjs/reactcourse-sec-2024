import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')

const firstDayOfWeek = dayjs().startOf('week').format('D')
const fdowMonth = dayjs().startOf('week').format('MMMM')
const lastDayOfWeek = dayjs().endOf('week').format('D')
const ldowMonth = dayjs().endOf('week').format('MMMM')

export const weekFormatted = () => {
  if (fdowMonth === ldowMonth) {
    return `${firstDayOfWeek} a ${lastDayOfWeek} de ${fdowMonth}`.toString()
  } else {
    return `${firstDayOfWeek} de ${fdowMonth} a ${lastDayOfWeek} de ${ldowMonth}`.toString()
  }
}
