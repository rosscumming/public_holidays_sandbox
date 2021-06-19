import * as dayjs from 'dayjs';

export const formatFullDate = date => {
  return dayjs(date).format('dddd, D MMMM, YYYY');
};

export const formatYear = date => {
  return dayjs(date).format('YYYY');
};
