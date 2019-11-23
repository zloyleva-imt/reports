import {Col, FormGroup, Label} from "reactstrap";
import styles from "./formControls.module.css";
import Select from "react-select";
import React from "react";

export const SelectField = props => {
    const { input, meta, options } = props;
    const hasError = meta.visited && meta.error;
    return (
        <FormGroup row>
            <Label for={input.id} sm={3}
                   className={styles.label + " " + (hasError ? styles.error : "")}>{props.placeholder}</Label>
            <Col sm={8} className={styles.formControlSelect + " " + (hasError ? styles.error : "")}>
                <div>
                    <Select
                        {...input}
                        name={input.name}
                        onChange={value => input.onChange(value)}
                        onBlur={() => input.onBlur}
                        options={options}
                        placeholder={props.placeholder}
                    />
                </div>
                {
                    hasError && <span>{meta.error}</span>
                }
            </Col>
        </FormGroup>
    )
};