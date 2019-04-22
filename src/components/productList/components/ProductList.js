import React from 'react';
import { List } from 'antd';

import Product from './Product';
import { PRODUCT_LIST_CLASSNAME } from '../constants';

// React Component used to render the list of product items

class ProductList extends React.Component {

    state = {
        productList: [],
    }

    async componentDidMount() {
        const response = await fetch('/product/findallwithproduct', { method: 'post' });
        const json = await response.json();

        this.setState({ productList: json.data });
    } 

    render() {
        return(
            <List
                bordered
                className={PRODUCT_LIST_CLASSNAME}
                dataSource={this.state.productList}
                loading={!this.state.productList[1] && true}
                pagination={{ pageSize:12 }}
                grid={{ gutter: 9, lg: 3, md: 3, sm: 2, xs: 1, xxl: 3 }}
                renderItem={item => (
                    <List.Item>
                        <Product data={item} />
                    </List.Item>
                )}
            />
        );
    }
}

export default ProductList;
