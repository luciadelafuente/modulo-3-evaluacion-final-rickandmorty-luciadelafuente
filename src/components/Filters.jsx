import FilterByName from "./FilterByName"

function Filters({setSearchCharacter}) {
  return (
    <div>
      <FilterByName setSearchCharacter={setSearchCharacter} />
    </div>
  )
}

export default Filters