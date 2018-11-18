import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Products from './Product';
import { ROW_ITEMS_3, PRODUCT_STRINGS } from './constants';

const { rowItems, flex, center } = PRODUCT_STRINGS;
/*this the third on component anotherlist.js */
export default class Row3 extends Component {
    render() {
        return (
            <Row type={flex} justify={center}>
                {
                    ROW_ITEMS_3.map(item =>
                        <Col span={5} className={rowItems} key={item.name}>
                            <Products
                                title={item.name}
                                pix={item.pix}
                                tag={item.cost}
                            />
                        </Col>
                    )
                }
            </Row>
        );
    }
}

Row3.PropTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    pix: PropTypes.string,
    tag: PropTypes.string,
};
