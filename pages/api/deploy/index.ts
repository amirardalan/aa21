// DEPLOY /api/deploy

const deployUrl = process.env.NEXT_PUBLIC_DEPLOY_HOOK

export default async (req: any, res: any) => {

  if (req.query.secret !== `${process.env.NEXT_PUBLIC_DEPLOY_TOKEN}`) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  return res.json()
}