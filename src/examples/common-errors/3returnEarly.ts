// Return Early
export const canRideABikeWrong = (raining: boolean, fullTire: boolean) => {
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
export const canRideABikeCorrect = (raining: boolean, fullTire: boolean) => {
  return !raining && fullTire
}

// Bad execution
export const handleErrorWrong = (err: unknown): AppError => {
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
export const handleErrorCorrect = (err: unknown): AppError => {
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
