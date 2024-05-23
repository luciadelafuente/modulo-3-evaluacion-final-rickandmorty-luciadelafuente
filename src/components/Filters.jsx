import FilterByName from "./FilterByName"
import FilterByOrigin from "./FilterByOrigin"
import FilterBySpecie from "./FilterBySpecie"
import FilterByStatus from "./FilterByStatus"

function Filters({setSearchCharacter, setSpecieFilter, specieFilter, planets, changeOriginFilter, statusFilter, setStatusFilter}) {
  return (
    <div>
      <FilterByName setSearchCharacter={setSearchCharacter} />
      <FilterBySpecie setSpecieFilter={setSpecieFilter} specieFilter={specieFilter}/>
      <FilterByOrigin planets={planets} changeOriginFilter={changeOriginFilter} />
      <FilterByStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
    </div>
  )
}

export default Filters