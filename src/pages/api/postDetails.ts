import type { NextApiRequest, NextApiResponse } from 'next'
import postListMock, { PostT } from "../../data/postsListMock";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostT | undefined>
) {
    if(req.query.slug) {
        const postSlug = req.query.slug;
        const postDetails = postListMock?.find(el => el.slug === postSlug);
        res.status(200).json(postDetails)
        return;
    }
    if(req.query.id) {
        const postId = req.query.id;
        const postDetails = postListMock?.find(el => el.id.toString() === postId);
        res.status(200).json(postDetails)
        return;
    }
    res.status(404);
}
