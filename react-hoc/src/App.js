import React from 'react'

const App = ({list}) => {
  return (
    <ul>
      { list.map( (char, index) => {
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

const withFilteredProps = Component => ({list, side}) => {
  const filteredList = list.filter( char => char.side === side)
  return <Component list={filteredList}/>
}

const FilteredList = withFilteredProps(App)

export default FilteredList
