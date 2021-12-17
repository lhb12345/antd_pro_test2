import React, { Suspense, useState } from 'react';
import { useRequest } from 'umi';
import { GridContent } from '@ant-design/pro-layout';
import { fakeChartData } from './service';
import IntroduceRow2 from './components/IntroduceRow2';
import PageLoading from './components/PageLoading';

const DashboardAnalysis2: React.FC = () => {
  const { loading, data } = useRequest(fakeChartData)
  return (
    <GridContent>
      {/* 第一排的统计数据 */}
      <Suspense fallback={<PageLoading />}>
        <IntroduceRow2 loading={loading} visitData={data?.visitData || []} />
      </Suspense>
    </GridContent>
  )
}

export default DashboardAnalysis2
