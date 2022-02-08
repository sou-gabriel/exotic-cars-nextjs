import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

interface ICar {
  id: number
  city: string
  brand: {
    name: string
    logo: string
  }
  model: string
  thumbnail: string
  price: {
    amount: number
    period: string
  }
  colors: {
    color: string
    image: string
  }[]
}

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const cityName = decodeURI(request.url?.split('/').pop() || '')
    const filePath = path.resolve(process.cwd(), 'database', 'cars.json')
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')).filter(
      (car: ICar) => {
        return car.city.toLowerCase().includes(cityName)
      }
    )

    return response.status(200).json(data)
  }
}

export default handler
