import * as jalaali from 'jalaali-js';

export function ConvertDatetToPerisan(dateString: string): string {
  const date = new Date(dateString);
  //console.log('georgian:', date.getFullYear(), date.getMonth() + 1, date.getDate());
  //console.log('test', jalaali.toJalaali(2025, 4, 7))
  const {jy, jm, jd} = jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
  // padded zeros
  const paddedMonth = jm.toString().padStart(2, '0');
  const paddedDay = jd.toString().padStart(2, '0');
  return `${jy}/${paddedMonth}/${paddedDay}`;
}
