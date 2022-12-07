// De nomes descritivos para funções
// Não se importe com o tamanho dos nomes

const findProductByName = (name: string) => {
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

const getAllCategories = () => {
  return ['Roupas', 'Bolsas', 'Acessórios']
}

// Forma errada
const getStore = (data: boolean) => {
  if (data) return 'Mercado'

  return 'Shopping'
}

// De nomes a condicionais sem sentido por si só
const OrderDetail = () => {
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
