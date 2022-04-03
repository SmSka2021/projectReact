import React from 'react';
import s from './Header.module.css'
import 'antd/dist/antd.css';
import { Spin, Space } from 'antd';

export const Header = () => {
    return (
        <header className={s.header}>
            <Space size="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
            </Space>
            <h1 className={s.h1}>КУЛИНАРНАЯ КНИГА</h1>
            <Space size="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
            </Space>

        </header>
    )
}