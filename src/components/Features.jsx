import { useState } from "react"
import ImgBox1 from "../assets/images/icon-access-anywhere.svg"
import ImgBox2 from "../assets/images/icon-security.svg"
import ImgBox3 from "../assets/images/icon-collaboration.svg"
import ImgBox4 from "../assets/images/icon-any-file.svg"
import FeaturesBox from "./UI/FeaturesBox"

function Features() {
    const [card, setCard] = useState([
        {
            icon: ImgBox1,
            title: "Access your files, anywhere",
            desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        },
        {
            icon: ImgBox2,
            title: "Security you can trust",
            desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        },
        {
            icon: ImgBox3,
            title: "Real-time collaboration",
            desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        },
        {
            icon: ImgBox4,
            title: "Store any type of file",
            desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        },
    ])
    return (
        <section className="container element-center text-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] max-w-full md:w-[800px] mx-auto   ">
                {
                    card.map((item, index) => (
                        <div key={index}>
                            <FeaturesBox icon={item.icon} title={item.title} desc={item.desc} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Features