// Centralize o que precisa ser gerado condicionalmente
export const ExampleWrong = () => {
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
export const ExampleCorrect = () => {
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
