import "./hero.css"
var n=0
const Hero = () => {
    return (
        < >

            <div className="herocontainer">
                <div className="hero">
                    <h1 className="intro">Hi! I'm <div>Sarfaraj Ansari</div></h1>
                    <hr className="hr-text" data-content="AND" />
                    <div className="label" style={{textAlign:"center"}}><h2>I <div className="sol"></div> solutions to <div className="apps"></div> web application</h2></div>
                </div>
            
                <svg viewBox="0 0 1320 500">
                <path fillOpacity="1" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 500
                    L0 500
                    " fill=" #e6dee9" />
                {/* <path fillOpacity="0.7" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 500
                    L0 500
                    " fill="#fff" /> */}
                {/* <path fillOpacity="0.7" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 500
                    L0 500
                    " fill="#ee5253" />
                <path fillOpacity="0.7" d="
                    M0,192
                    C220,100,440,100,660,192
                    C880,290,1100,290,1320,192
                    L1320 500
                    L0 500
                    " fill="#00d2d3" /> */}
                </svg>
            </div>
            
        </>

    );
}

export default Hero;
