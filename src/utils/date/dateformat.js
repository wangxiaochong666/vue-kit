import dayjs from "dayjs";

export function dateformat(value, fmt = "yyyy年MM月dd日 EEE hh时mm分ss秒S毫秒") {
  return dayjs(value).format(fmt);
}
