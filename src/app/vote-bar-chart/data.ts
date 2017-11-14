
// ローカルで試す用のサンプルデータ型
export interface Stock {
  date: Date;
  value: number;
}

// ローカルで試す用のサンプルデータ
export const Stocks: Stock[] = [
  {date: new Date('2010-01-01T13:12:00+09:00'), value: 210.73},
  {date: new Date('2010-01-01T14:12:00+09:00'), value: 210.73},
  {date: new Date('2010-01-01T15:12:00+09:00'), value: 210.73},
  {date: new Date('2010-01-01T16:12:00+09:00'), value: 210.73},
  {date: new Date('2010-01-04T13:12:00+09:00'), value: 214.01},
  {date: new Date('2010-01-05T13:12:00+09:00'), value: 214.38},
  {date: new Date('2010-01-06T13:12:00+09:00'), value: 210.97},
  {date: new Date('2010-01-07T13:12:00+09:00'), value: 210.58},
  {date: new Date('2010-01-08T13:12:00+09:00'), value: 211.98},
  {date: new Date('2010-01-11T13:12:00+09:00'), value: 210.11},
  {date: new Date('2010-01-12T13:12:00+09:00'), value: 207.72},
  {date: new Date('2010-01-13T13:12:00+09:00'), value: 210.65},
  {date: new Date('2010-01-14T13:12:00+09:00'), value: 209.43},
  {date: new Date('2010-01-15T13:12:00+09:00'), value: 205.93},
  {date: new Date('2010-01-18T13:12:00+09:00'), value: 205.93},
  {date: new Date('2010-01-19T13:12:00+09:00'), value: 215.04},
  {date: new Date('2010-01-20T13:12:00+09:00'), value: 211.72},
  {date: new Date('2010-01-21T13:12:00+09:00'), value: 208.07},
  {date: new Date('2010-01-22T13:12:00+09:00'), value: 197.75},
  {date: new Date('2010-01-25T13:12:00+09:00'), value: 203.08},
  {date: new Date('2010-01-26T13:12:00+09:00'), value: 205.94},
  {date: new Date('2010-01-27T13:12:00+09:00'), value: 207.88},
  {date: new Date('2010-01-28T13:12:00+09:00'), value: 199.29}
];

export interface Vote {
  voteDate: string;
  value: number;
}
