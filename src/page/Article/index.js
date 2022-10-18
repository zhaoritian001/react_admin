/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */

import { Card, Form, Breadcrumb, Radio, Table, Select, DatePicker, Button, Space } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'

import { Link } from 'react-router-dom'
import img404 from '../../assets/error.png'
import {useEffect, useState} from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import {request} from "../../utils";
import { useStore } from "../../store";
import {observer} from "mobx-react-lite";

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
    const { channelStore } = useStore()
    // const [channelList, setChannelList] = useState([])
    // const loadChannel = async () => {
    //     const res = await request.get('/channels')
    //     setChannelList(res.data.channels)
    // }
    useEffect(() => {
        // loadChannel()
        channelStore.getChannelList()
    }, [channelStore])

    const onFinish = (values) => {
        const { channel_id, date, status } = values
        // 数据处理
        const _params = {}
        // 格式化status
        _params.status = status

        // 初始化频道
        if (channel_id) {
            _params.channel_id = channel_id
        }
        // 初始化时间
        if (date) {
            _params.begin_pubdate = date[0].format('YYYY-MM-DD')
            _params.end_pubdate = date[1].format('YYYY-MM-DD')
        }
        // 修改params数据 引起接口的重新发送 对象的合并是一个整体覆盖 改了对象的整体引用
        setParams({
            ...params,
            ..._params
        })

    }

    // 文章列表管理 统一管理数据 将来修改给setArticleData传对象
    const [articleData, setArticleData] = useState({
        list: [],// 文章列表
        count: 0 // 文章数量
    })

    // 文章参数管理
    const [params, setParams] = useState({
        page: 1,
        per_page: 10
    })
    // 获取文章列表
    useEffect(() => {
        const loadList = async () => {
            const res = await request.get('/mp/articles', { params })
            const { results, total_count } = res.data
            setArticleData({
                list: results,
                count: total_count
            })
        }
        loadList()
    }, [params])

    const columns = [
        {
            title: '封面',
            dataIndex: 'cover',
            width: 120,
            render: cover => {
                return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
            }
        },
        {
            title: '标题',
            dataIndex: 'title',
            width: 220
        },
        {
            title: '状态',
            dataIndex: 'status',
            // render: data => formatStatus(data)
        },
        {
            title: '发布时间',
            dataIndex: 'pubdate'
        },
        {
            title: '阅读数',
            dataIndex: 'read_count'
        },
        {
            title: '评论数',
            dataIndex: 'comment_count'
        },
        {
            title: '点赞数',
            dataIndex: 'like_count'
        },
        {
            title: '操作',
            render: data => {
                return (
                    <Space size="middle">
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<EditOutlined />}
                            onClick={() => goPublish(data)} />
                        <Button
                            type="primary"
                            danger
                            shape="circle"
                            icon={<DeleteOutlined />}
                            onClick={() => delArticle(data)}
                        />
                    </Space>
                )
            },
            fixed: 'right'
        }
    ]
    
    const goPublish = () => {
      
    }

    const delArticle = () => {
      
    }

    // 翻页实现
    const pageChange = (page) => {
        setParams({
            ...params,
            page
        })
    }

    return(
        <div>
            {/* 筛选区域 */}
            <Card
                title={
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>
                            <Link to="/">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>内容管理</Breadcrumb.Item>
                    </Breadcrumb>
                }
                style={{ marginBottom: 20 }}
            >
                <Form
                    onFinish={onFinish}
                    initialValues={{ status: null }}>
                    <Form.Item label="状态" name="status">
                        <Radio.Group>
                            <Radio value={null}>全部</Radio>
                            <Radio value={0}>草稿</Radio>
                            <Radio value={1}>待审核</Radio>
                            <Radio value={2}>审核通过</Radio>
                            <Radio value={3}>审核失败</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="频道" name="channel_id">
                        <Select
                            placeholder="请选择文章频道"
                            style={{ width: 120 }}
                        >
                            {channelStore.channelList.map(channel =>
                                <Option key={channel.id} value={channel.id}>{channel.name}</Option>)
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item label="日期" name="date">
                        {/* 传入locale属性 控制中文显示*/}
                        <RangePicker locale={locale}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
                            筛选
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            {/* 文章列表区域 */}
            <Card
                title={`根据筛选条件共查询到 ${articleData.count} 条结果：`}
            >
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={articleData.list}
                    pagination={
                        {
                            pageSize: params.per_page,
                            total: articleData.count,
                            onChange: pageChange,
                            current: params.page
                        }
                    }
                    bordered
                />
            </Card>
        </div>
    )
}

export default observer(Article)