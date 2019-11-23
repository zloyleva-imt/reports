import React from 'react'
import { DebounceInput } from "react-debounce-input";
import Select from 'react-select';

const SearchRowOrder = ({handleSearchEvent, handleInputChange, options, modalTranslate}) =>(
    <tr className="alert-secondary">
        <td colSpan="2" className="text-center alert-dark">{modalTranslate.label.filters}:</td>
        <td></td>
        <td style={{width: 160}}>
            <DebounceInput type="text" name="name" className="px-2" autoComplete="off"
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           debounceTimeout={1000} onChange={handleSearchEvent} placeholder={modalTranslate.label.name}/>
        </td>
        <td style={{width: 260}}>
            <Select
                type="text" name="category" onChange={handleInputChange}
                options={options} placeholder={modalTranslate.label.category}
            />
        </td>
        <td style={{width: 160}}>
            <DebounceInput type="text" name="price" className="px-2" autoComplete="off"
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           debounceTimeout={1000} onChange={handleSearchEvent} placeholder={modalTranslate.label.price}/>
        </td>
        <td>
            <DebounceInput type="text" name="description" className="px-2" autoComplete="off"
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           debounceTimeout={1000} onChange={handleSearchEvent} placeholder={modalTranslate.label.description}/>
        </td>
        <td></td>

    </tr>
)

export default SearchRowOrder;