
import './menu-item.styling.scss'
import {withRouter} from 'react-router-dom'


const MenuItem=({title,imageUrl,size,LinkUrl,history,match})=>{

console.log(match.url);
    return(
    <div style={{
        backgroundImage:`url(${imageUrl})`

}} className={`${size} menu-item `} 
onClick={()=>history.push(`${match.url}${LinkUrl}`)}>

    {/* inside menu-item there is html content */}

    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>

)
}

export default withRouter(MenuItem);