import React, { FC } from "react";
import styles from './PostDetails.module.sass'
import { PostT , dateFormat} from "../../../data/postsListMock";
import { Header } from "@/atoms/header/Header";
import { PostDescription } from "@/atoms/postDescription/PostDescription";
import Image from "next/image";
import { format } from 'date-fns';

interface PostDetailsPropsI {
    postDetails: PostT;
}

export const PostDetails: FC<PostDetailsPropsI> = ({ postDetails: { title, shortDescription, image, date, text}}) => {
    return (
        <section>
            <Header text={title} type="center" />
            <PostDescription text={shortDescription} type="center" extraStyle={styles.postDescriptionExtraStyle}/>
            <span className={styles.postDetailsDate}>
                {format(new Date(date), dateFormat)}
            </span>
            <Image loading="eager" src={image} alt={""} width={1020} height={703} className={styles.postDetailsImage} />
            <PostDescription text={text} extraStyle={styles.postTextExtraStyle}/>
        </section>
    )
}