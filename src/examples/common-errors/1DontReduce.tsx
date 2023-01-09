// Tentar reduzir demais o código
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

export const GalleryWrong = () => {
  return (
    <div>
      {products
        .filter((product) => product.price <= 2)
        .map((product) => (
          <h1 key={product.name}>{product.name}</h1>
        ))}
    </div>
  )
}

export const GalleryCorrect = () => {
  const LIMIT_PRICE = 2

  const productsBelowTheLimitPrice = products.filter(
    (product) => product.price <= LIMIT_PRICE
  )

  return (
    <div>
      {productsBelowTheLimitPrice.map((product) => (
        <h1 key={product.name}>{product.name}</h1>
      ))}
    </div>
  )
}
