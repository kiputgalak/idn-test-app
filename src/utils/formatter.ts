import formatDate from 'date-fns/format'
import { id } from 'date-fns/locale'

/**
 *
 * @param date string date
 * @param format desired format, default is d LLLL yyyy, kk:mm
 * @returns return string formatted date
 */
export const dateFormatter = (date: string, format = 'd LLLL yyyy, kk:mm') => {
  return formatDate(new Date(date), format, { locale: id })
}

/**
 *
 * @param num number to format
 * @returns If number > 9999 and <= 999999 return formatted number with prefix rb (eg: 10.2rb)
 * If number > 999999 return formatted number with prefix jt (eg: 3jt)
 *
 */
export const numberFormatter = (num: number) => {
  const val = Math.sign(num) * Math.abs(num)
  if (num > 9999 && num <= 999999) {
    return `${(val / 1000).toFixed(1)}rb`
  } else if (num > 999999) {
    return `${(val / 1000000).toFixed(2)}jt`
  }

  return new Intl.NumberFormat('id-ID').format(val)
}
