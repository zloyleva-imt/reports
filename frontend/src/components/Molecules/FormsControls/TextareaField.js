import {Col, FormGroup, Label} from "reactstrap";
import styles from "./formControls.module.css";
import React from "react";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <FormGroup row>
            <Label for={input.id} sm={3}
                   className={styles.label + " " + (hasError ? styles.error : "")}>{props.placeholder}</Label>
            <Col sm={9} className={styles.formControlArea + " " + (hasError ? styles.error : "")}>
                <div>
                    <textarea {...input} {...props} />
                </div>
                {
                    hasError && <span>{meta.error}</span>
                }
            </Col>
        </FormGroup>
    )
};