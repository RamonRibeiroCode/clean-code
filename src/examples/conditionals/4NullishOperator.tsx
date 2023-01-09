// Ternários que retornam o próprio valor podem ser refatorados
export const ExampleWrong = () => {
  const name = 'Ramon'

  return <div>Seja bem vindo Ola {name ? name : 'Visitante'}</div>
}

// Utilize o operador de coalescência nula
export const ExampleCorrect = () => {
  const name = 'Ramon'

  return <div>Seja bem vindo Ola {name ?? 'Visitante'}</div>
}
