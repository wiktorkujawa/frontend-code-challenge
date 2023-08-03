import React, { FC } from "react";
import styles from "./PostsList.module.sass";
import { PostListT } from "../../../data/postsListMock";
import { Header } from "@/atoms/header/Header";
import { PostElement } from "@/molecules/postElement/PostElement";

interface PostsListPropsI {
  header: string;
  postsList: PostListT;
}

export const PostList: FC<PostsListPropsI> = ({ header, postsList }) => {
  const renderPostsList = () =>
    postsList.map((content) => (
      <PostElement key={content.id} {...content} />
    ));

  return (
    <section>
      <Header text={header} />
      <div className={styles.postList}>{renderPostsList()}</div>
    </section>
  );
};
