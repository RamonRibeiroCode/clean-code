// Ternários simples são aceitos
export const SimpleExample = () => {
  const name = 'Ramon'
  const isLoggedIn = true

  return <h1>Ola {isLoggedIn ? name : 'Visitante'}</h1>
}

// Evite ternários com complexida alta
export const ExampleWrong = () => {
  const isLoggedIn = true
  const isOwner = true

  return (
    <div>
      {!isLoggedIn ? (
        <span>Faça login por favor</span>
      ) : isOwner ? (
        <div>
          <button>Acessar area de Dono</button>
        </div>
      ) : (
        <div>Area Comum aos Usuarios</div>
      )}
    </div>
  )
}

// Refatore para condicionais com &&
export const ExampleCorrect = () => {
  const isLoggedIn = true
  const isOwner = true

  return (
    <div>
      {!isLoggedIn && <span>Faça login por favor</span>}

      {isLoggedIn && (
        <div>
          {isOwner && <button>Acessar area de Dono</button>}

          {!isOwner && <div>Area Comum aos Usuarios</div>}
        </div>
      )}
    </div>
  )
}

// Ou refatore para condicionais com variaveis
export const Example3OtherCorrect = () => {
  const isLoggedIn = true
  const isOwner = true

  let pageContent = <span>Faça login por favor</span>

  if (isLoggedIn) {
    pageContent = <div>Area Comum aos Usuarios</div>
  }

  if (isOwner) {
    pageContent = <button>Acessar area de Dono</button>
  }

  return <div>{pageContent}</div>
}
