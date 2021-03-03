import './homepage-styling.scss';
const Homepage=()=>(
    // outside container (homepage)
    <div className='homepage'> 
    {/* inside container there will be 2 components (conatiner for the menu and the actual menu item) */}
        <div className='directory-menu'>
            <div className='menu-item'>
                {/* inside menu-item there is html content */}
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>


            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

        </div>
    </div>
)

export default Homepage;