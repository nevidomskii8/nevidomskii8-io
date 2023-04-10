import {DeleteFilled, EditFilled, EyeFilled} from '@ant-design/icons';
import {Modal, Space, notification} from 'antd';
import * as React from 'react';
import {FC, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {Post} from '../../models';
import {postDeleteStart} from '../../redux/actions/posts';
import {PostDetails} from '../PostDetails';

type Props = {
    post: Post;
};

export const PostActions: FC<Props> = ({post}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenViewModal = useCallback(() => {
        Modal.info({
            title: 'Post details',
            content: <PostDetails post={post} />,
        });
    }, [post]);

    const handleNavigateToEditPage = useCallback(
        () => navigate(`/posts/${post.key}/edit`),
        [post.key, navigate],
    );

    const handleOpenDeleteModal = useCallback(() => {
        Modal.confirm({
            title: 'Do you want to delete this post?',
            content: 'When clicked the OK button, this post will be deleted.',
            onOk() {
                return new Promise((resolve, reject) => {
                    dispatch(
                        postDeleteStart(
                            post.key,
                            () => {
                                resolve(0);
                                notification.success({
                                    message: 'Post deleted successfully',
                                });
                            },
                            () => {
                                reject();
                                notification.error({
                                    message:
                                        'Error happened, Please try again later.',
                                });
                            },
                        ),
                    );
                });
            },
        });
    }, [post.key, dispatch]);

    return (
        <Space>
            <EyeFilled onClick={handleOpenViewModal} />
            <EditFilled onClick={handleNavigateToEditPage} />
            <DeleteFilled onClick={handleOpenDeleteModal} />
        </Space>
    );
};
