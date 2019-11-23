import React from "react";
import {connect} from "react-redux";

const Image = (props) => {

    const {image} = props;
    if (image) {
        let src = '';
        if (image.thumbnail.substr(0, 4) === 'http') {
            src = image.thumbnail;
        } else {
            src = `http://${window.location.hostname}${image.image}`;
        }
        return <img src={src} width={60} height={60} alt=""/>;
    }
    return <img width={60} height={60} alt=""/>;
}
export default connect()(Image);