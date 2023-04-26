import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';

async function handler(req: NextApiRequest, res:NextApiResponse) {
    const { email, phone } = req.body();
    const user = await client.user.upsert({
        where: {
            ...(phone && { phone: +phone }),
            ...(email && { email })
        },
        create: {
            name: "Anonymous",
            ...(phone && { phone: +phone }),
            ...(email && { email }) 
        },
        update:{},
    });

    return res.status(200).end();
}

export default withHandler("POST", handler);