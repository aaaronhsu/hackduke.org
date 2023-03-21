import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./Button";

function JoinUs(props) {
    return (
        <>
            <section className="section is-small" id="join-us">
                <div className="container">
                    <div className="title">Join the team!</div>
                    <div className="subtitle">
                        Sound like something you want to be a part of? More
                        information on spring recruitment will be released soon!
                        Join our mailing list to get notified when applications
                        are released.
                    </div>

                    <Button 
                        text="Join our team"
                        color="#0042c6"
                        link="/join"
                        arrow={true}
                    />

                </div>
            </section>
        </>
    );
}

export default JoinUs;
