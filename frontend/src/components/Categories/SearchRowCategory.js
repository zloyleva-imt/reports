import React from 'react'
import { DebounceInput } from "react-debounce-input";

const SearchRowCategory = ({handleSearchEvent, modalTranslate}) =>(
    <tr className="alert alert-secondary">
        <td className="alert-dark"></td>
        <td className="alert-dark text-center">{modalTranslate.label.filters}:</td>
        <td></td>
        <td>
            <DebounceInput type="text" name="name" autocomplete="off"
                           className="px-2" debounceTimeout={1000}
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           placeholder={modalTranslate.label.name}
                           onChange={handleSearchEvent}/>
        </td>
        <td>
            <DebounceInput type="text" name="description" autocomplete="off"
                           className="px-2" debounceTimeout={1000}
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           placeholder={modalTranslate.label.description}
                           onChange={handleSearchEvent}/>
        </td>
        <td></td>
    </tr>
)

export default SearchRowCategory;