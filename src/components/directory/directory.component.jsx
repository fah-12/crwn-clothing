
import React from 'react'

import MenuItem from '../menu-item/menu-item.component'
class Directory extends React.Component{
constructor(){
    super();

this.state={
     sections : [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          LinkUrl:'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          LinkUrl:''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          LinkUrl:''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          LinkUrl:''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          LinkUrl:''
        }]
      
}

}

render(){
    return(
        <div className='directory-menu'>
{
    this.state.sections.map(({title,imageUrl,id,size,LinkUrl})=>
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} LinkUrl={LinkUrl}  />
    )
}

        </div>
    )
}
}

export default Directory;