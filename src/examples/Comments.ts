// No geral, não vamos precisar comentar no código, pois com ele limpo já é o suficiente
// Mas em algumas situações comentários podem ser uteis

// Faça comentários em helpers
const priceFormatter = (price: number) => {
  // INPUT 2500
  // OUTPUT 'R$ 2.500,00'

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatter.format(price)
}

// Faça comentários em horário
const COUNTDOWN_IN_SECONDS = 25 * 60 // 25 minutos
