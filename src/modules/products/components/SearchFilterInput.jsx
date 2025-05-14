import { useState } from "react";
import Select from "react-select";
import { products } from "../data/products";


export const SearchFilterInput = ({handleAddedProducts}) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (newValue) => {
    const options = products.map((product) => ({
      value: product,
      label: product.nombre,
    }));


    setInputValue(newValue);

    setOptions(options);
  };

  const addProducts = () => {
    handleAddedProducts(selectedOption)
  };

  return (
    <>
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        onInputChange={handleInputChange}
        options={options}
        inputValue={inputValue}
        placeholder="Escribe para buscar..."
        isSearchable
        loadingMessage={() => "Buscando..."}
      />

      <button className="bg-green-600 shadow-md text-white rounded px-3 py-2 mt-2" onClick={addProducts}>AGREGAR ITEM</button>
    </>
  );
};
