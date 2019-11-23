import React from "react";
import {connect} from "react-redux";
import {Col, Input, ListGroup, ListGroupItem} from "reactstrap";

const InputSearch = (props) => {

    const { filterList, getCategoryList } = props;
    return <Col sm={8}>
        <Input type="text" name="category" id="searchCategory"
               placeholder="Category name" className="inputGrup"
               autocomplete="off"
               style={{border: '1px solid #959595'}}
               onChange={filterList}/>
        {/*{*/}
        {/*    !pasteValue ? (*/}
        {/*        <Input type="text" name="category" id="searchCategory"*/}
        {/*               placeholder="Category name" className="inputGrup"*/}
        {/*               autocomplete="off" value={this.state.username}*/}
        {/*               onChange={this.filterList}/>*/}
        {/*    ) : (*/}
        {/*        <input*/}
        {/*            type="text" name="category" id="searchCategory"*/}
        {/*            className="inputGrup form-control" placeholder="Category name"*/}
        {/*            autocomplete="off" onChange={this.handleSearchEvent}/>*/}
        {/*    )*/}
        {/*}*/}

        {
            this.state.result &&
            <div className='listOver'>
                <ListGroup className='listGrup'>
                    {
                        this.state.result.length > 0 && this.state.result.map((item, index) => (
                            <ListGroupItem key={index} id={item.id} action
                                           onClick={getCategoryList}>{item.name}</ListGroupItem>))
                    }
                </ListGroup>
            </div>
        }
    </Col>
}
export default connect()(InputSearch);