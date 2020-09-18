import React, { memo, useCallback } from 'react';
import { Skeleton, DatePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import locale from 'antd/es/locale/zh_CN';

const { RangePicker } = DatePicker;

export const Home = memo( (): any => {
    const handleOnChange = useCallback((dates, dateStrings) => {
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1], dates);
    }, []);
    return (
        <>
            <Skeleton active />
            <ConfigProvider locale={locale}>
                <RangePicker                
                    ranges={{
                        Today: [moment(), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                    }}
                    showTime
                    format="YYYY/MM/DD HH:mm:ss"
                    onChange={handleOnChange}
                />
            </ConfigProvider>
            
           
        </>
    );
});