import React from 'react'
import SelectionTab from './SelectionTab'

const SelectionBox = ({ selectionEvent, charImages }) => {
  const toFind = charImages.filter(character => !character.found)
  const tab = toFind.map(character => (
    <SelectionTab
      selectionEvent={selectionEvent}
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