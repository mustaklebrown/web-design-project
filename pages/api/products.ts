import { NextApiRequest, NextApiResponse } from 'next';
import { data, projects } from '../../data/data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
