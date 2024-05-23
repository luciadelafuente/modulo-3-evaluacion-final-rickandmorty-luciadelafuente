import FilterByName from "./FilterByName";
import FilterByOrigin from "./FilterByOrigin";
import FilterBySpecie from "./FilterBySpecie";
import FilterByStatus from "./FilterByStatus";
import PropTypes from "prop-types";

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

Filters.propTypes = {
  searchCharacter: PropTypes.string,
  setSearchCharacter: PropTypes.func,
  specieFilter: PropTypes.string,
  setSpecieFilter: PropTypes.func,
  planets: PropTypes.array,
  changeOriginFilter: PropTypes.func,
  statusFilter: PropTypes.string,
  setStatusFilter: PropTypes.func,
};

export default Filters