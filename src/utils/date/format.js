import dayjs from 'dayjs';

/**
 * 日期格式化
 *
 * @see {@link https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/API-reference.md#%E6%A0%BC%E5%BC%8F%E5%8C%96 | 格式化}
 * @see {@link https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/Plugin.md#customparseformat | Custom Parse Format}
 *
 * @param {number|Date} value 时间
 * @param {string} fmt 格式
 */
export default function dateformat(value, fmt = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(value).format(fmt);
}
