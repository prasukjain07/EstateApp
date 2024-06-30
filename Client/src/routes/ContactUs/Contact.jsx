import "./contact.scss"

function Contact(){
    return(
        <div className="contacts">
            <div className="left">
                <div className="wrapper">

                    <h1>Contact Us</h1>
                    <div className="contact">
                        <img src="pin.png"/>
                        <p>221B Baker Street,
                            London NW1 6XE,
                            United Kingdom
                        </p>
                    </div>
                    <div className="contact">
                        <img src="chat.png"/>
                        <p>lamaestate@gmail.com
                        </p>
                    </div>
                    <div className="contact">
                        <img src="telephone.png"/>
                        <p>+14 5689461391
                        </p>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="bg.png"/>
            </div>
        </div>
    )
}

export default Contact