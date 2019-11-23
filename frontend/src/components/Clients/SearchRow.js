import React from 'react'
import { DebounceInput } from "react-debounce-input";

const SearchRow = ({handleSearchEvent, modalTranslate}) =>(
  <tr className="alert alert-secondary">
    <td colSpan="2" className="alert-dark text-center">{modalTranslate.label.filters}:</td>
    <td>
      <DebounceInput type="text" name="name" className="px-2" autocomplete="off"
                     style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                     debounceTimeout={1000} placeholder={modalTranslate.label.name}
                     onChange={handleSearchEvent} />
    </td>
    <td>
      <DebounceInput type="text" name="address" className="px-2" autocomplete="off"
                     style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                     debounceTimeout={1000} placeholder={modalTranslate.label.address}
                     onChange={handleSearchEvent} />
    </td>
    <td>
      <DebounceInput type="text" name="phone" className="px-2" autocomplete="off"
                     style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                     debounceTimeout={1000} placeholder={modalTranslate.label.phone}
                     onChange={handleSearchEvent} />
    </td>
    <td>
      <DebounceInput type="text" name="email" className="px-2" autocomplete="off"
                     style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                     debounceTimeout={1000} placeholder={modalTranslate.label.email}
                     onChange={handleSearchEvent} />
    </td>
    <td></td>
  </tr>
)

export default SearchRow;