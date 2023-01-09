// Entenda como o if funciona, não faz sentido comparar valores com true, false, null ou undefined
export const ExampleWrong = (isLoggedIn: boolean, name?: string) => {
  if (name === 'Ramon') {
    return <h1>Ola dono do código</h1>
  }

  if (name) {
    return (
      <h1>
        Ola {name} {isLoggedIn === true && ' : Logado'}
      </h1>
    )
  }

  return <h1>Ola</h1>
}

// Entenda como o if funciona, não faz sentido comparar valores com true, false, null ou undefined
export const ExampleCorrect = (isLoggedIn: boolean, name?: string) => {
  if (name === 'Ramon') {
    return <h1>Ola dono do código</h1>
  }

  if (name) {
    return (
      <h1>
        Ola {name} {isLoggedIn && ' : Logado'}
      </h1>
    )
  }

  return <h1>Ola</h1>
}
