import numeral from 'numeral';
import ChartCards from './ChartCards';
import Field from './Field';

const yuan = (val: number | string) => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
  yuan,
  ChartCards,
  Field,
};

export { Charts as default, yuan, ChartCards, Field };
