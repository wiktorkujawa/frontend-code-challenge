import React, { FC, CSSProperties } from "react";
import cx from 'classnames';
import styles from './PostDescription.module.sass';
import renderHTML from 'react-render-html';

interface PostDescriptionPropsI {
    text: string;
    type?: 'normal' | 'center';
    extraStyle?: CSSProperties | string;
}

export const PostDescription: FC<PostDescriptionPropsI> = ({ text, type , extraStyle}) => {
    const postDescriptionClassName = cx(styles.postDescription, {
        [styles.postDescriptionCenter] : type === 'center',
        [`${extraStyle}`]: extraStyle,
    });

    return (
        <p className={postDescriptionClassName}>
            {renderHTML(text)}
        </p>
    )
}