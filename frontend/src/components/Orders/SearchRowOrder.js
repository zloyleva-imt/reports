import React from 'react'
import { DebounceInput } from "react-debounce-input";
import Select from "react-select";

const SearchRowOrder = ({handleSearchEvent, handleInputChange, options, modalTranslate}) =>(
    <tr className="alert-secondary">
        <td colSpan="2" className="text-center alert-dark">{modalTranslate.label.filters}:</td>
        <td className="">
            <DebounceInput type="text" name="client_name" className="px-2"
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           autocomplete="off"
                           debounceTimeout={1000}
                           placeholder={modalTranslate.label.customer}
                           onChange={handleSearchEvent}/>
        </td>
        <td>
            <DebounceInput type="text"
                           name="date"
                           className="px-2"
                           autocomplete="off"
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           debounceTimeout={1000}
                           placeholder={modalTranslate.label.date}
                           onChange={handleSearchEvent}/>
        </td>
        <td>
            <DebounceInput type="text"
                           name="price"
                           className="px-2"
                           autocomplete="off"
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           debounceTimeout={1000}
                           placeholder={modalTranslate.label.total}
                           onChange={handleSearchEvent}/>
        </td>
        <td>
            <DebounceInput type="text"
                           name="client.phone"
                           className="px-2"
                           autocomplete="off"
                           style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}
                           debounceTimeout={1000}
                           placeholder={modalTranslate.label.phone}
                           onChange={handleSearchEvent}/>
        </td>
        <td style={{width: 180}}>
            {/*<DebounceInput type="text"*/}
            {/*               name="status"*/}
            {/*               className="px-2"*/}
            {/*               autocomplete="off"*/}
            {/*               style={{width: "100%", height: 38, border: "1px solid hsl(0,0%,80%)"}}*/}
            {/*               debounceTimeout={1000}*/}
            {/*               placeholder={modalTranslate.label.status}*/}
            {/*               onChange={handleSearchEvent}/>*/}
            <Select
                type="text" name="status" onChange={handleInputChange}
                options={options} placeholder={modalTranslate.label.status}
            />
        </td>
        <td></td>
    </tr>
)

export default SearchRowOrder;