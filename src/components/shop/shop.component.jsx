import React from 'react'

import SHOP_DATA from './shop.data.js'
import PreviewCollection from '../previem-collection/preview-collection-component'

class ShopPage extends React.Component{

    constructor(){
        super();

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections} =this.state;

        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...CollectionProps})=>
                    <PreviewCollection key={id} {...CollectionProps} />)
                }
            </div>
        )
    }

}

export default ShopPage;