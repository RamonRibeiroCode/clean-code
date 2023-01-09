export const ExampleWrong = () => {
  const names = ['Ramon', 'Heraldo', 'Daniel']

  names.filter((name) => name !== 'Daniel')

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  )
}

export const ExampleCorrect = () => {
  const names = ['Ramon', 'Heraldo', 'Daniel']

  const filteredNames = names.filter((name) => name !== 'Daniel')

  return (
    <ul>
      {filteredNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}
