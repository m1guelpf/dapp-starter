import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ name: 'hello, world!' })
}

export default handler
