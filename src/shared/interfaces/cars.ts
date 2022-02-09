interface IBrand {
  name: string
  logo: string
}

interface IPrice {
  amount: number
  period: string
}

export interface IColor {
  color: string
  image: string
}

export interface ICar {
  id: number
  brand: IBrand
  model: string
  thumbnail: string
  price: IPrice
  colors: IColor[]
}
