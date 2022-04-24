import reactLogo from "../Images/logo512.png"

const element = (
    <nav className="nav">
        <img src={reactLogo} className="nav-logo" />
        {/* <h1>Bob's Bistro</h1> */}
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

function Challenge1(){
    return element;
}

export default Challenge1;