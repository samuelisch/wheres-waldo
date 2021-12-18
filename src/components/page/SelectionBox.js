import React from 'react'
import characterImages from '../images/characterImages'
import SelectionTab from './SelectionTab'

const SelectionBox = () => {
  const toFind = characterImages.filter(character => !character.found)
  const tab = toFind.map(character => (
    <SelectionTab
      key={character.id} 
      name={character.name}
    />
  ))

  return (
    <div>
      {tab}
    </div>
  )
}

export default SelectionBox