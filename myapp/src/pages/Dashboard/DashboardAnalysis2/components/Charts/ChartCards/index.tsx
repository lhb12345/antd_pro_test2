import React from 'react';
import { Card } from 'antd';
import type { CardProps } from 'antd/es/card';
import styles from './index.less';

export type ChartCardProps = {
  children?: React.ReactNode;
  loading?: boolean;
  title?: string;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  contentHeight?: number;
  total?: React.ReactNode | number | (() => React.ReactNode | number);
} & CardProps;

type totalType = () => React.ReactNode;

// 渲染总数
const renderTotal = (total?: number | totalType | React.ReactNode) => {
  if (!total && total !== 0) {
    return null;
  }
  let totalDom;
  switch (typeof total) {
    case 'undefined':
      totalDom = null;
      break;
    case 'function':
      totalDom = <div className={styles.total}>{total()}</div>;
      break;
    default:
      totalDom = <div className={styles.total}>{total}</div>;
  }
  return totalDom;
};

const ChartCards: React.FC<ChartCardProps> = (props) => {
  const { children, loading, title, total, action, footer, contentHeight, ...rest } = props;
  // 渲染内容区域
  const renderContent = () => {
    return (
      <div className={styles.chart_card}>
        <div className={styles.meta_wrapper}>
          <div className={styles.meta}>
            <span className={styles.title}>{title}</span>
            <span className={styles.action}>{action}</span>
          </div>
          {renderTotal(total)}
        </div>
        {children && (
          <div
            className={styles.content}
            style={{ height: contentHeight ? contentHeight : 'auto' }}
          >
            <div className={contentHeight && styles.contentFixed}>{children}</div>
          </div>
        )}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    );
  };
  return (
    <Card bodyStyle={{ padding: '20px 24px 8px 24px' }} {...rest}>
      {renderContent()}
    </Card>
  );
};

export default ChartCards;
