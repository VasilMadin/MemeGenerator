import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
             <h1 className="display-4 text-center" id='heading'>MemeGenerator</h1>
             <p className="lead text-center paragraph">Simple Project  using React and Bootstrap</p>
             <h2 className="text-center" id="h2">How to use it :</h2>
             <p className="text-center" id="h2">1.Enter top text and bottom text.</p>
             <p className="text-center" id="h2">2.Click Generate.</p>
             <p className="text-center" id="h2">3.Screenshot it.</p>
             <p className="text-center" id="h2">4.Crop it.</p>
        </div>
</div>
        </div>
    )
}

export default Header
