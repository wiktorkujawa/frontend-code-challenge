import React, { FC } from "react";
import { Layout } from "../components/layout";
import { PostList } from "../components/organisms/postsList/PostsList";
import { PostListT, postListTitle } from "../data/postsListMock";
import CHead from "src/components/organisms/CHead";
import placeholder from "../../public/assets/placeholder.jpg";

interface HomePropsI {
  postsList: PostListT;
}

const Home: FC<HomePropsI> = ({ postsList }) => {
  return (
    <>
      <CHead
        meta={{
          description: postListTitle,
          image: placeholder.src,
          title: `Gigaclear - ${postListTitle}`,
        }}
        slug=""
      />
      <Layout>
        <PostList header={postListTitle} postsList={postsList} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/postList");
  const postsList = await response.json();

  return {
    props: {
      postsList,
    },
  };
}

export default Home;
