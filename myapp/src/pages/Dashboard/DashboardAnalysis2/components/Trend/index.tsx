import React from 'react';
import styles from './index.less';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
export type TrendType = {
  flag: 'up' | 'down';
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Trend: React.FC<TrendType> = ({ flag, children, style }) => {
  return (
    <div className={styles.trendItem} style={style}>
      <span>{children}</span>
      <span className={styles[flag]}>
        {flag === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
      </span>
    </div>
  );
};

export default Trend;
