import Card from "../shared/Card"
import { Link } from 'react-router-dom'
import { FaChevronCircleLeft } from "react-icons/fa"

function AboutPage() {
    return (
        <Card>
            <div className='container'>
                <div className="about">
                    <Link to='/'> 
                    <p style={{color: "#f6e7d2", textAlign: "center", backgroundColor: "#0a4958", borderRadius: '25px', textDecoration: "inherit"}}>
                        <FaChevronCircleLeft style={{float: "left", color: "#f6e7d2", fontSize: "25px"}} />
                        back to home 
                    </p>
                    </Link>
                    <h1> About this project: </h1>
                    <p> This is a React app to leave feedback for a service or product. </p>
                    <p> Version: 1.0.0 </p>
                </div>
            </div>
        </Card>
    )
}

export default AboutPage
