import {Col, FormGroup, Label} from "reactstrap";
import styles from "./formControls.module.css";
import React from "react";

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        // const progressBar = document.getElementById("progress");
        let size = document.getElementById('size');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {resolve(reader.result);};
        reader.onerror = error => reject(error);
        reader.onprogress = function(data) {
            if (data.lengthComputable) {
                let progress = parseInt( ((data.loaded / data.total) * 100), 10 );
                let progressBar = document.getElementById('progress');
                if (progress <= 100) {
                    // progressBar.style.width = progress + '%';
                    // progressBar.textContent = progress +
                    let x = parseInt(((data.total / 1024)*100)/100);
                    let y = (x/1000).toFixed(2)
                    size.textContent = `${x > 1000 ? y : x}` + `${x > 1000 ? ' Mb' : ' Kb'}`;
                    if( parseInt(data.total / 1024) > 4096) {
                        progressBar.classList.add("createdBarError");
                    } else {
                        progressBar.classList.add("createdBar");
                        progressBar.classList.remove("createdBarError");
                    }
                }
            }
        }
    });
};

const adaptFileEventToValue = delegate => async e => {
    delegate(e.target.files[0]);
    const targetFile = e.target.files[0];
    let imageParent = document.getElementById("imgWrap");
    // let fileUpload = document.getElementById('file-upload');
    let fileSelectName = document.getElementById('noFile');
    let percent = document.getElementById('percent');
    if(targetFile) percent.textContent = '100%';


    if (targetFile) {
        fileSelectName.textContent = targetFile.name;
        const val = await getBase64(targetFile);
        if(imageParent.firstChild) {
            imageParent.removeChild(imageParent.firstChild)
        }
        let image = document.createElement("img");
        image.id = "img";
        image.src = val;
        imageParent.classList.add("created");
        imageParent.appendChild(image);
    } else {

    }
};

export const FileInput = ({input, type, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const hasWarning = meta.touched && meta.warning;
    const mimeType = {
        mimeType: "image/jpeg, image/png",
    };
    return (
        <FormGroup row>
            <Label for={input.id} sm={3}
                   className={styles.label + " " + (hasError || hasWarning ? styles.error : "")}>{props.placeholder}</Label>
            <Col sm={9} className={styles.formControlFile + " " + (hasError || hasWarning ? styles.error : "")}>
                <div className={"file-upload" + " " + (hasError || hasWarning ? "error" : "")} id="file-upload">
                    <div className="file-select">
                        <div className="file-select-button" id="fileName">Выбрать</div>
                        <div className="file-select-name" id="noFile">Файл не выбран...</div>
                        <input
                            name={input.name}
                            type={type}
                            accept={mimeType}
                            onChange={adaptFileEventToValue(input.onChange)}
                            onBlur={adaptFileEventToValue(input.onBlur)}
                            {...props}
                        />
                    </div>
                </div>
                {
                    meta.touched && meta.warning && <p>{meta.warning}</p>
                }
                {
                    hasError && <span>{meta.error}</span>
                }
            </Col>

            <div className="wrapperImg">
                <div className="imgWrap" id='imgWrap'></div>
                <div className="progressWrap">
                    <div className="text">
                        <span id="size" className={"size" + " " + (hasError || meta.warning ? "error" : "")}></span>
                        <span id="percent" className="percent"></span>
                    </div>
                    <div id="progress" className="progress"></div>
                </div>
            </div>
        </FormGroup>
    );
};