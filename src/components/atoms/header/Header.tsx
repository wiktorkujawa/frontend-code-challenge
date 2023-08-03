import React, { FC } from "react";
import cx from 'classnames';
import styles from './Header.module.sass';

interface HeaderPropsI {
    text: string;
    type?: 'normal' | 'center';
}

export const Header: FC<HeaderPropsI> = ({ text, type }) => {
    const headerClassName = cx(styles.header, {
        [styles.headerCenter] : type === 'center',
    });

    return (
        <h1 className={headerClassName}>
            {text}
        </h1>
    )
}