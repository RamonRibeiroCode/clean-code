// Tentar reduzir demais o código
const Gallery = () => {
  const limitPrice = 2

  const products = [
    {
      name: 'Banana',
      price: 2.5,
    },
    {
      name: 'Maça',
      price: 1.5,
    },
    {
      name: 'Pera',
      price: 3,
    },
  ]

  const productsBelowTheLimitPrice = products.filter(
    (product) => product.price <= limitPrice
  )

  return (
    <div>
      {productsBelowTheLimitPrice.map((product) => {
        return (
          <div>
            <h1>{product.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

// Desconhecimento de features built in

const formatInt = (number: number) => {
  if (number >= 10) {
    return String(number)
  }

  return `0${number}`
}

const itemsOnCart = 3

const formattedPrice = itemsOnCart.toString().padStart(5, '0')
formattedPrice // "03"

// Return Early
// Bad execution
const canRideABike = (raining: boolean, fullTire: boolean) => {
  if (raining) {
    return false
  } else {
    if (fullTire) {
      return true
    } else {
      return false
    }
  }
}

// Good execution
const canRideABike = (raining: boolean, fullTire: boolean) => {
  if (raining || !fullTire) {
    return false
  }

  return true
}

// Bad execution
export const handleError = (err: unknown): AppError => {
  if (err instanceof AxiosError) {
    if (err.response?.data.message) {
      return {
        message: err.response.data.message,
        code: err.response.status,
      }
    }

    return {
      message: 'Erro inesperado, tente novamente',
      code: 500,
    }
  } else {
    return {
      message: 'Erro inesperado, tente novamente',
      code: 500,
    }
  }
}

// Good execution
export const handleError = (err: unknown): AppError => {
  if (err instanceof AxiosError && err.response?.data.message) {
    return {
      message: err.response.data.message,
      code: err.response.status,
    }
  }

  return {
    message: 'Erro inesperado, tente novamente',
    code: 500,
  }
}
