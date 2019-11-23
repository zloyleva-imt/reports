import React from 'react';
import styles from './formControls.module.css'
import {FormGroup, Col, Label} from "reactstrap";
import { ReactInput, templateFormatter, templateParser, parseDigit } from 'input-format'

export const PhoneInput = props => {
    const { input, meta } = props;
    const { error, touched } = meta;
    const template = 'xxx (xx) xxx-xx-xx';

    return (
        <FormGroup row>
            <Label for={input.id} sm={2}
                   className={styles.label + " " + (error && touched ? styles.error : "")}>Телефон</Label>
            <div className={styles.img}>
                <img alt="UA" src="https://lipis.github.io/flag-icon-css/flags/4x3/ua.svg"/>
            </div>
            <Col sm={8} className={styles.formControlPhone + " " + (error && touched ? styles.error : "")}>
                <div style={{marginLeft: 4}}>
                    <ReactInput
                        format={ templateFormatter(template) }
                        parse={ templateParser(template, parseDigit) }
                        {...input} {...props} />
                    {
                        error && touched && <p>{error}</p>
                    }
                </div>
            </Col>
        </FormGroup>
    );
};