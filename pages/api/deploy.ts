// EXIT PREVIEW MODE /api/preview/exit-preview
export default async (req: any, res: any) => {

  if (req.query.secret !== `${process.env.NEXT_PUBLIC_DEPLOY_TOKEN}`) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  fetch(process.env.DEPLOY_HOOK)
  res.end()
}