// Ternários que não retornam nada no else não fazem sentido
export const ExampleWrong = () => {
  const name = 'Ramon'
  const isLoggedIn = true

  return (
    <div>
      Seja bem vindo
      {isLoggedIn ? `Ola ${name}` : null}
    </div>
  )
}

// Utilize o operador && que aprendemos
export const ExampleCorrect = () => {
  const name = 'Ramon'
  const isLoggedIn = true

  return (
    <div>
      Seja bem vindo
      {isLoggedIn && `Ola ${name}`}
    </div>
  )
}
