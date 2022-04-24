import reactLogo from "../Images/logo512.png"
export default function Navbar(){
    return (
        <nav>
            <img src={reactLogo} className="react-logo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - project 1</h4>
        </nav>
    )
}