import Navbar from "../../components/Navbar";
import SponsorUs from "../../components/SponsorUs";
import Footer from "../../components/Footer";
import Head from "next/head";
import Button from "../../components/Button";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function Events() {
    return (
        <>
            <Head>
                <title>Events | HackDuke</title>
            </Head>
            <Navbar color="#36c69b" />
            <section className="section is-small bg-[#36c69b] min-h-screen pt-40">
                <div className="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column font-sans text-black">
                            <div className="font-semibold text-[3rem] mb-8">
                                Events
                            </div>
                            <div className="text-[1.25rem] mb-2 leading-tight">
                                Each year, our teams organize two conferences
                                that attract participants all over the country:
                                Code for Good and Ideate. You might have heard
                                about them :)
                            </div>
                            <img
                                className="w-4/5 mt-[10%] ml-[10%]"
                                src="/graphics/building.svg"
                            />
                        </div>
                        <div className="column">
                            <div className="border-4 border-dashed border-white rounded-[1rem] p-[1rem] my-[2rem] font-sans text-black text-center">
                                <div className="font-semibold text-[1.5rem] mb-[1rem]">
                                    Code for Good 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            264
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            Participants
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            35
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            Hacks
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            $3300
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-4 border-dashed border-white rounded-[1rem] p-[1rem] my-[2rem] font-sans text-black text-center">
                                <div className="font-semibold text-[1.5rem] mb-[1rem]">
                                    Ideate 2022
                                </div>
                                <div className="columns is-desktop is-vcentered">
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            234
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            Registrants
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            18
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            Pitches
                                        </div>
                                    </div>
                                    <div className="column mb-[0.5rem]">
                                        <div className="font-semibold text-[3rem]">
                                            $1500
                                        </div>
                                        <div className="font-normal text-[1.5rem] mt-[0.5rem]">
                                            In Prizes
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column font-sans">
                            <div className="font-normal text-[2rem] text-[#0042c6] mb-[0.5rem]">Feb 18 Speaker Event</div>
                            <div className="text-[1.25rem] text-black mb-2 leading-tight">
                                <p>
                                    We&apos;re excited to welcome Robert Vila, a
                                    Director @ IBM to speak about his experience
                                    in the technical and business requirements
                                    for successful SaaS. The event is{" "}
                                    <b>
                                        Feb 18, 2023 from 1-2pm in Wilkinson 136
                                    </b>
                                    .
                                    <br />
                                    <br />
                                    Chick-fil-A catering will be served and we
                                    hope to see you there!
                                </p>
                            </div>

                            <Button 
                                text="See the event"
                                color="#0042c6"
                                link="https://www.linkedin.com/feed/update/urn:li:activity:7032811883829051392"
                                arrow={true}
                            />

                        </div>
                        <div className="column">
                            <img
                                className="rounded-2xl"
                                src="/images/RobertVilaTalk.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column font-sans">
                            <div className="font-normal text-[2rem] text-[#0042c6] mb-[0.5rem]">
                                Code For Good
                            </div>
                            <div className="text-black text-[1.25rem] mb-2 leading-tight">
                                Code for Good is the nation’s premier hackathon
                                for tech and social good. We unite students that
                                are passionate about changing the intention and
                                narrative behind how technology is used today to
                                create meaningful hacks in a 24-hour sprint. Our
                                goal is to facilitate an environment where
                                students can create meaningful technical
                                projects or learn the skills to get there.
                            </div>

                            <Button 
                                text="Code For Good 2022"
                                color="#0042c6"
                                link="https://2022.hackduke.org"
                                arrow={true}
                            />

                        </div>
                        <div className="column">
                            <img
                                className="rounded-2xl"
                                src="/images/cfg-2022-3.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="px-[5vw]">
                    <div className="columns is-desktop is-vcentered">
                        <div className="column">
                            <img
                                className="rounded-2xl w-[70%]"
                                src="/images/ideate-2018-1.png"
                            />
                            <img
                                className="rounded-2xl w-[70%] ml-[30%]"
                                src="/images/ideate-2018-2.png"
                            />
                        </div>
                        <div className="column font-sans">
                            <div className="font-normal text-[2rem] text-[#0042c6] mb-[0.5rem]">Ideate</div>
                            <div className="text-black text-[1.25rem] mb-2 leading-tight">
                                Ideate is a two-day conference filled with
                                awesome speakers and workshops to explore how
                                design and innovation interact. The designathon
                                aims to observe how design thinking can be
                                applied across fields, and is open to design
                                aficionados, curious newcomers, and everyone in
                                between!
                            </div>

                            <Button 
                                text="Ideate 2022"
                                color="#0042c6"
                                link="https://ideate.hackduke.org"
                                arrow={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <SponsorUs />
            <Footer />
        </>
    );
}
