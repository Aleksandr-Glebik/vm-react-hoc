import React from 'react'


const App = ({list, side}) => {

  const filteredList = list.filter( char => char.side === side)

  return (
    <ul>
      { filteredList.map( (char, index) => {
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


export default App
