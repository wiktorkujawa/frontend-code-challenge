import React, { FC } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import styles from './PostElement.module.sass';
import { PostT, dateFormat } from "../../../data/postsListMock";
import { PostDescription } from "@/atoms/postDescription/PostDescription";


export const PostElement: FC<PostT> = ({ title, category, author, shortDescription, date, image, slug }) => {
    return (
        <article className={styles.postElement}>
            <Link href={`/blog/${slug}`}>
                <Image src={image} alt={""} width={334} height={229} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.postElementImage} />
                <h2 className={styles.postElementTitle}>{title}</h2>
                <div className={styles.postElementLabelsContainer}>
                <span className={styles.postElementLabel}>
                    {category}
                </span>
                    <span className={styles.postElementLabel}>
                    {author}
                </span>
                    <span className={styles.postElementLabel}>
                    {format(new Date(date), dateFormat)}
                </span>
                </div>
                <PostDescription text={shortDescription} />
            </Link>
        </article>
    )
};