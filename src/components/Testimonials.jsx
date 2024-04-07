import { useState } from "react"

import userOne from "../assets/users/user-1.jpeg"
import userTwo from "../assets/users/user-2.jpeg"
import userThree from "../assets/users/user-3.jpeg"
import point from "../assets/users/point.png"

function Testimonials() {
    const [card, setCard] = useState([
        {
            disc: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            image: userOne,
            user: 'Satish Patel',
            subDisc: 'Founder & CEO, Huddle'
        },
        {
            disc: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            image: userTwo,
            user: 'Bruce McKenzie',
            subDisc: 'Founder & CEO, Huddle'
        },
        {
            disc: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            image: userThree,
            user: 'Iva Boyd',
            subDisc: 'Founder & CEO, Huddle'
        }
    ])

    return (
        <section className="container relative">
            <div className="w-[24px] absolute -top-[15px]">
                <img src={point} />
            </div>
            <div className=" mt-20  text-white  grid  sm:grid-cols-1 lg:grid-cols-3 gap-[30px] place-content-center relative z-2">
                {
                    card.map((item, index) => (
                        <div key={index} className="bg-[#202a3c] rounded-xl p-10">
                            <div>
                                <p className="text-sm">{item.disc}</p>
                            </div>
                            <div className="mt-10 grid grid-cols-2  gap-0 w-fit items-center">
                                <div className="image w-[40px] ">
                                    <img className="rounded-full" src={item.image} alt="" />
                                </div>
                                <div className="-ml-[40px]">
                                    <h2 className="text-lg font-bold mb-2 ">{item.user}</h2>
                                    <p className="text-[12px]">{item.subDisc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials