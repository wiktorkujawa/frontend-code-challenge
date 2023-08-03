import { NextApiRequest, NextApiResponse } from "next";
import { PostT } from "src/data/postsListMock";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token'});
  }

  try {
    res.revalidate('/');

    const response = await fetch(
      `http://localhost:3000/api/postDetails?id=${req.query.id}`
    );
    const postDetails: PostT = await response.json();

    res.revalidate(`/blog/${postDetails.slug}`)

  }
  catch(e) {
    return res.status(500).send('Error revalidating');
  }

}