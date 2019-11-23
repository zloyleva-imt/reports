import {Col, FormGroup, Label} from "reactstrap";
import styles from "./formControls.module.css";
import React from "react";

export const InputField = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const hasWarning = meta.touched && meta.warning;
    return (
        <FormGroup row>
            <Label for={props.id} sm={3} className={styles.label + " " + (hasError || hasWarning ? styles.error : "")}>{props.placeholder}</Label>
            <Col sm={9} className={styles.formControl + " " + (hasError || hasWarning ? styles.error : "")}>
                <div>
                    <input {...input} {...props} />
                </div>
                {
                    hasWarning && <p>{meta.warning}</p>
                }
                {
                    hasError && <span>{meta.error}</span>
                }
            </Col>
        </FormGroup>

    )
};