import {Button, Form, Input, Space, notification} from 'antd';
import {useForm} from 'antd/lib/form/Form';
import {useCallback, useEffect, useMemo, useState} from 'react';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';

import {
    ButtonsWrapperCol,
    formLabelCol,
    formWrapperCol,
} from '../../lib/constants';
import {EditPostPayload, Post} from '../../models';
import {postEditStart, singlePostFetchStart} from '../../redux/actions/posts';
import {getSinglePost} from '../../redux/selectors/posts';

const validationRules = {
    title: [{required: true, message: 'Title can not be Empty.'}],
    description: [{required: true, message: 'Description can not be Empty.'}],
};

export const EditPost = () => {
    const {postKey} = useParams();
    const post = useSelector(getSinglePost) as Post;
    const initialFormValues = useMemo(
        () => ({title: post.title, description: post?.description}),
        [post],
    );
    const [submitting, setSubmitting] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = useForm();

    useEffect(() => {
        if (!postKey) return;
        dispatch(singlePostFetchStart(+postKey));
    }, [postKey, dispatch]);
    if (!postKey) {
        return null;
    }
    const handleEditPost = useCallback(
        (values: EditPostPayload) => {
            setSubmitting(true);
            dispatch(
                postEditStart(
                    +postKey,
                    values,
                    () => {
                        setSubmitting(false);
                        notification.success({
                            message: 'Post edited successfully',
                            description:
                                'Post has been edited successfully but it is not saved to the backend as ' +
                                'JSONPlaceHolder is just a dummy api. Check the network tab to inspect the request.',
                        });
                        navigate('/');
                    },
                    () => {
                        setSubmitting(false);
                        notification.error({
                            message: 'Error happened, Please try again later.',
                        });
                    },
                ),
            );
        },
        [postKey, dispatch, navigate],
    );

    const handleCancel = useCallback(() => {
        navigate('/');
    }, [navigate]);

    if (!post) return null;

    return (
        <Form
            initialValues={initialFormValues}
            onFinish={handleEditPost}
            form={form}
            labelCol={formLabelCol}
            wrapperCol={formWrapperCol}
        >
            <Form.Item label="Title" name="title" rules={validationRules.title}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={validationRules.description}
            >
                <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item wrapperCol={ButtonsWrapperCol} shouldUpdate>
                {({getFieldsValue}) => {
                    const {title, description} = getFieldsValue();
                    const isFormDirty =
                        post.title !== title ||
                        post.description !== description;

                    const isFormValid = !!title && !!description;

                    return (
                        <Space>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={submitting}
                                disabled={!isFormValid || !isFormDirty}
                            >
                                Submit
                            </Button>

                            <Button htmlType="button" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Space>
                    );
                }}
            </Form.Item>
        </Form>
    );
};
