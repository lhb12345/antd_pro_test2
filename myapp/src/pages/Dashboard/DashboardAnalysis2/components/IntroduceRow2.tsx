import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import { DataItem } from '../data';
import Yuan from '../utils/Yuan';
import { ChartCards, Field } from './Charts';
import Trend from './Trend';
import numeral from 'numeral';
import styles from '../index.less';
import { TinyArea, TinyColumn, Progress } from '@ant-design/charts';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};
const IntroduceRow2 = ({
  loading,
  visitData = [],
}: {
  loading?: boolean;
  visitData: DataItem[];
}) => {
  console.log(visitData);
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCards
          title="总销售额"
          bordered={false}
          loading={loading}
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={() => <Yuan>126560</Yuan>}
          contentHeight={46}
          footer={<Field label="日销售额" value={`￥${numeral(12423).format('0,0')}`} />}
        >
          <Trend flag="up" style={{ marginRight: 16 }}>
            周同比<span className={styles.trendText}>12%</span>
          </Trend>
          <Trend flag="down">
            日同比<span className={styles.trendText}>10%</span>
          </Trend>
        </ChartCards>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCards
          bordered={false}
          loading={loading}
          title="访问量"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(8846).format('0,0')}
          footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
          contentHeight={46}
        >
          <TinyArea
            height={46}
            autoFit
            smooth
            areaStyle={{
              fill: 'l(270) 0:rgb(151 95 228 / 10%) 0.5:rgb(151 95 228 / 60%) 1:rgb(151 95 228)',
            }}
            line={{
              color: '#975FE4',
            }}
            data={visitData.map((item) => item.y)}
          />
        </ChartCards>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCards
          bordered={false}
          loading={loading}
          title="支付笔数"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(6560).format('0,0')}
          footer={<Field label="转化率" value="60%" />}
          contentHeight={46}
        >
          <TinyColumn height={46} autoFit data={visitData.map((item) => item.y)} />
        </ChartCards>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCards
          loading={loading}
          bordered={false}
          title="运营活动效果"
          action={
            <Tooltip title="指标说明">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total="78%"
          footer={
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
              <Trend flag="up" style={{ marginRight: 16 }}>
                周同比
                <span className={styles.trendText}>12%</span>
              </Trend>
              <Trend flag="down">
                日同比
                <span className={styles.trendText}>11%</span>
              </Trend>
            </div>
          }
          contentHeight={46}
        >
          <Progress
            height={46}
            padding={[15, 0]}
            percent={0.78}
            color="#13C2C2"
            autoFit
            annotations={[
              {
                type: 'line',
                start: ['80%', '0%'],
                end: ['80%', '100%'],
                style: {
                  stroke: '#13C2C2',
                },
              },
            ]}
          />
        </ChartCards>
      </Col>
    </Row>
  );
};

export default IntroduceRow2;
