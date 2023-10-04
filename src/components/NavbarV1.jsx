import './Navbar.css';

const Navbar = () => {

    const aStyles = {
        color : 'white',
        fontSize : '1.3rem',
        textDecoration : 'none'
    }

    return(
        
        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>Navbar</h1>
            </div>
            {/**Comentarios :D */}
            <div className='navbar--links'>
                <div className='navbar--link'>
                    <a href="/" style={aStyles}>Home</a>
                </div>
                <div className='navbar--link'>
                    <a href="/">about</a>
                </div>
                <div className='navbar--link'>
                    <a  
                        style={{
                            color:'white',
                            fontSize: '1.3rem',
                            textDecoration: 'none', 
                        }} 
                    href="/z">Astros</a>
                </div>
            </div>
        </div>
    )

}
export default Navbar