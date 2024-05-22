import CharacterCard from "./CharacterCard"
function CharacterList({listCharacter}) {
 
  const listHtml = listCharacter.map((character)=> <CharacterCard key={character.id} infoCharacter={character} />)
  return (
    <div>
      {listHtml}
    </div>
  )
}

export default CharacterList