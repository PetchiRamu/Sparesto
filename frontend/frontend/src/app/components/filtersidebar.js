// components/FilterSidebar.jsx

const FilterOption = ({ type, label, name, checked }) => (
  <div className="flex items-center mb-2">
    <input
      id={name}
      name={name}
      type={type}
      className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
      defaultChecked={checked}
    />
    <label htmlFor={name} className="ml-2 text-sm text-gray-700">
      {label}
    </label>
  </div>
);

const FilterSidebar = () => {
  return (
    <div className="p-6 bg-white border-r border-gray-200">
      <h2 className="text-xl font-bold mb-6 text-gray-800">FILTERS</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-600 mb-3">Category</h3>
        <FilterOption type="checkbox" label="Main Components" name="main-components" />
        <FilterOption type="checkbox" label="Wearing Parts" name="wearing-parts" />
        <FilterOption type="checkbox" label="Electrical Components" name="electrical-components" />
      </div>

      {/* Turbine Model Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-600 mb-3">Turbine Model</h3>
        <FilterOption type="radio" label="Model 1" name="turbine-model" />
        <FilterOption type="radio" label="Model 2" name="turbine-model" />
        <FilterOption type="radio" label="Model 3" name="turbine-model" />
        <FilterOption type="radio" label="Model 4" name="turbine-model" checked={true} />
      </div>

      {/* Condition Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-600 mb-3">Condition</h3>
        <FilterOption type="radio" label="New" name="condition" checked={true} />
        <FilterOption type="radio" label="Refurbished" name="condition" />
      </div>

      {/* Availability Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-600 mb-3">Availability</h3>
        <FilterOption type="checkbox" label="In Stock" name="in-stock" checked={true} />
        <FilterOption type="checkbox" label="Out Of Stock" name="out-of-stock" />
      </div>
    </div>
  );
};

export default FilterSidebar;