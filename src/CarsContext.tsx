import {
  createContext,
  useState,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
} from 'react'

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

interface IContext {
  featuredCars: ICar[]
  setFeaturedCars: Dispatch<SetStateAction<ICar[]>>
}

interface ICarsProvider {
  children: ReactNode | ReactNode[]
}

export const CarsContext = createContext<IContext>({} as IContext)

export const CarsProvider = ({ children }: ICarsProvider) => {
  const [featuredCars, setFeaturedCars] = useState<ICar[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/cars')
      .then(response => response.json())
      .then(setFeaturedCars)
  }, [])

  return (
    <CarsContext.Provider value={{ featuredCars, setFeaturedCars }}>
      {children}
    </CarsContext.Provider>
  )
}
