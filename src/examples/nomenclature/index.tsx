// De nomes descritivos para funções
// Não se importe com o tamanho dos nomes

export const findProductByName = (name: string) => {
  const products = [
    {
      name: 'Cola',
    },
    {
      name: 'Borracha',
    },
    {
      name: 'Lapiseira',
    },
  ]

  return products.find((product) => product.name === name)
}

export const getAllCategories = () => {
  return ['Roupas', 'Bolsas', 'Acessórios']
}

// Forma errada
export const getStore = (data: boolean) => {
  if (data) return 'Mercado'

  return 'Shopping'
}

// De nomes a condicionais sem sentido por si só
export const OrderDetail = () => {
  const order = {
    origin: 'Janis',
    isPickUp: true,
    friendlyNamePickupPoint: 'Mercado Guarulhos',
  }

  const isSupermarket = origin === 'Janis'

  if (isSupermarket && order.isPickUp) {
    return <h1>Retire seu pedido em {order.friendlyNamePickupPoint}</h1>
  }

  return <h1>Ola</h1>
}
