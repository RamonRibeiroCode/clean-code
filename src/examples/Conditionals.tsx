// Entenda como o if funciona, não faz sentido comparar valores com true, false, null ou undefined
const Example0 = (isLoggedIn: boolean, name?: string) => {
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

// Ternários simples são aceitos
const Example1 = () => {
  const name = 'Ramon'
  const isLoggedIn = true

  return <h1>Ola {isLoggedIn ? name : 'Visitante'}</h1>
}

// Evite ternários com complexida alta
const Example2 = () => {
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
const Example3 = () => {
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
const Example4 = () => {
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

// Ternários que não retornam nada no else não fazem sentido
const Example5 = () => {
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
const Example7 = () => {
  const name = 'Ramon'
  const isLoggedIn = true

  return (
    <div>
      Seja bem vindo
      {isLoggedIn && `Ola ${name}`}
    </div>
  )
}

// Ternários que retornam o próprio valor podem ser refatorados
const Example8 = () => {
  const name = 'Ramon'

  return <div>Seja bem vindo Ola {name ? name : 'Visitante'}</div>
}

// Utilize o operador de coalescência nula
const Example9 = () => {
  const name = 'Ramon'

  return <div>Seja bem vindo Ola {name ?? 'Visitante'}</div>
}

// Centralize o que precisa ser gerado condicionalmente
const Example10 = () => {
  const name = 'Ramon'
  const isLoggedIn = true

  return (
    <div>
      {isLoggedIn ? (
        <>
          <header>
            <div>Logo do Site</div>
            <div>
              <h1>Ola, sejá bem vindo</h1>
            </div>
          </header>

          <main>Logado como: {name}</main>

          <footer>
            <a href="/instagram">Instagram</a>
          </footer>
        </>
      ) : (
        <>
          <header>
            <div>Logo do Site</div>
            <div>
              <h1>Ola, sejá bem vindo</h1>
            </div>
          </header>

          <main>Ola Visitante</main>

          <footer>
            <a href="/instagram">Instagram</a>
          </footer>
        </>
      )}
    </div>
  )
}

// Centralize o que precisa ser gerado condicionalmente
const Example11 = () => {
  const name = 'Ramon'
  const isLoggedIn = true

  return (
    <div>
      <header>
        <div>Logo do Site</div>
        <div>
          <h1>Ola, sejá bem vindo</h1>
        </div>
      </header>

      <main>{isLoggedIn ? `Logado como: ${name}` : `Ola visitante`}</main>

      <footer>
        <a href="/instagram">Instagram</a>
      </footer>
    </div>
  )
}
