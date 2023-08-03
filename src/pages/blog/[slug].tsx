import React, { FC } from "react";
import { GetStaticPropsContext } from "next";
import { Layout } from "../../components/layout";
import { PostT } from "../../data/postsListMock";
import { PostDetails } from "../../components/organisms/postDetails/PostDetails";
import CHead from "src/components/organisms/CHead";

interface BlogPostPropsI {
  postDetails: PostT;
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/postList");
  const postsList: PostT[] = await response.json();

  const paths = postsList.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context: GetStaticPropsContext<{slug: string}>) {
  const slug = context.params?.slug;

  try {
    const response = await fetch(
      `http://localhost:3000/api/postDetails?slug=${slug}`
    );
    const postDetails = await response.json();
    return {
      props: {
        postDetails,
      },
    };
  }
  catch(e) {
    return {
      notFound: true
    }
  }


  
}

const BlogPost: FC<BlogPostPropsI> = ({ postDetails }) => {
  return (
    <>
      <CHead
        meta={{
          description: postDetails.shortDescription,
          image: postDetails.image,
          title: 'Gigaclear - ' + postDetails.title,
        }}
        slug={`blog/${postDetails.slug}`}
      />
      <Layout>
        <PostDetails postDetails={postDetails} />
      </Layout>
    </>
  );
};

export default BlogPost;
