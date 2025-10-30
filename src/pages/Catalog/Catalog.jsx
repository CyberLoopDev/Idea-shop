import Filter from "./Filter/Filter"
import FilteredProducts from "./FilteredProducts/FilteredProducts"


const Catalog = () => {
  return (
    <main style={{ minWidth: '1000px'}}>
      <Filter />
      <FilteredProducts />
    </main>
  )
}

export default Catalog
