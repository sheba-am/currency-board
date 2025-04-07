declare module 'jalaali-js' {
    export function toJalaali(
      year: number,
      month: number,
      day: number
    ): { jy: number; jm: number; jd: number };
  
    export function isValidJalaaliDate(
      jy: number,
      jm: number,
      jd: number
    ): boolean;
  
    export function toGregorian(
      jy: number,
      jm: number,
      jd: number
    ): { gy: number; gm: number; gd: number };
  }
  