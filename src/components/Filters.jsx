import FilterByName from "./FilterByName"
import FilterByOrigin from "./FilterByOrigin"
import FilterBySpecie from "./FilterBySpecie"
import FilterByStatus from "./FilterByStatus"

function Filters({setSearchCharacter, searchCharacter, setSpecieFilter, specieFilter, planets, changeOriginFilter, statusFilter, setStatusFilter}) {
  return (
    <div className="filters">
      <FilterByName setSearchCharacter={setSearchCharacter} searchCharacter={searchCharacter}/>
      <FilterBySpecie setSpecieFilter={setSpecieFilter} specieFilter={specieFilter}/>
      <FilterByOrigin planets={planets} changeOriginFilter={changeOriginFilter} />
      <FilterByStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
    </div>
  )
}

export default Filters