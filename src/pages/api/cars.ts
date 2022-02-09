import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  const isAGetMethod = request.method === 'GET'

  if (isAGetMethod) {
    const currentWorkingDirectory = process.cwd()
    const filePath = path.resolve(
      currentWorkingDirectory,
      'database',
      'cars.json'
    )
    const data = fs.readFileSync(filePath, 'utf-8')

    return response.status(200).json(data)
  }
}

export default handler
