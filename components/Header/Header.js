import logo from '../../public/logo512.png'

export default function MastHead() {
    return (
        <header id="masthead" className="app-header">
            <h2>
                <img src={logo} className="app-logo" alt="logo" />
                Sticky Note Board
            </h2>
        </header>
    )
}
