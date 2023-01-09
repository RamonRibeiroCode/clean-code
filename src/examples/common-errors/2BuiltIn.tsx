// Desconhecimento de features built in
export const formatInt = (number: number) => {
  if (number >= 10) {
    return String(number)
  }

  return `0${number}`
}

const itemsOnCart = 3

itemsOnCart.toString().padStart(2, '0') // "03"
