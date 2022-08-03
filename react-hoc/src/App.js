import React from 'react'

class App extends React.Component {

  state = {
    starWarsChars: [
      {name: 'Дарк Вайдер', side: 'dark'},
      {name: 'Люк Скайвокер', side: 'light'},
      {name: 'Палпатин', side: 'dark'},
      {name: 'Обиван Кеноби', side: 'light'}
    ]
  }

  render() {

    return (
      <ul>
        { this.state.starWarsChars.map( (char, index) => {
            return (
              <li key={char.name + index}>
                <strong>{char.name}</strong> -&nbsp;
                {char.side}
              </li>
            )
        })}
      </ul>
    )
  }
}

export default App
