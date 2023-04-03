import {Table, TablePaginationConfig} from 'antd';
import {TableRowSelection} from 'antd/lib/table/interface';
import React, {FC, memo, useMemo} from 'react';
import {useLocalStorage} from 'usehooks-ts';

import {pageSizeOptions} from '../../lib/constants';
import {showTotal} from '../../lib/helpers';
import {Post} from '../../models';
import {PostActions} from '../PostActions';

type Props = {
    posts: Post[];
};

const MemoizedPostActions = memo(PostActions);

const rowSelection: TableRowSelection<Post> = {
    type: 'checkbox',
};
const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        sorter: (a: Post, b: Post) => a.title.localeCompare(b.title),
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        sorter: (a: Post, b: Post) =>
            a.description.localeCompare(b.description),
    },
    {
        title: 'Action',
        key: 'action',
        render: (post: Post) => <MemoizedPostActions post={post} />,
    },
];

export const PostsTable: FC<Props> = ({posts}) => {
    const pagination = useMemo(
        () => ({
            pageSizeOptions,
            defaultPageSize: 5,
            total: posts ? posts.length : 0,
            showTotal,
        }),
        [posts],
    );
    const [storedPagination, setPagination] = useLocalStorage(
        'pagination',
        pagination,
    );

    const handlePagination = (pagination: TablePaginationConfig) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setPagination(pagination);
    };

    return (
        <Table
            onChange={handlePagination}
            rowSelection={rowSelection}
            dataSource={posts}
            columns={columns}
            pagination={storedPagination}
        />
    );
};
