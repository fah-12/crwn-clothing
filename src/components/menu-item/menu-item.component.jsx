
import './menu-item.styling.scss'


const MenuItem=({title,imageUrl,size})=>(

    <div style={{
        backgroundImage:`url(${imageUrl})`

    }} className={`${size} menu-item `}>

    {/* inside menu-item there is html content */}

    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>

)

export default MenuItem;