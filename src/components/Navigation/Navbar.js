import React from 'react'
import logo from '../../quora.png'
import NavigationBar from './NavigationBar'
import ExtraNav from './ExtraNav'
import './Navbar.css'

export default function Navbar() {
    const [mobile, setMobile] = React.useState(false);
    function handleResize(){
        if(window.innerWidth <= 768){
            setMobile(true)
        }
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        mobile ? <nav className="shadow">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <NavigationBar />
                    <ExtraNav />
                </nav> : <nav>
                            something
                        </nav>
    )
}
