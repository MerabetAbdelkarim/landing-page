import ImgLanding from "../assets/images/illustration-intro.png"
import Img1 from "../assets/images/bg-curvy-desktop.svg"

function Landing() {
    return (
        <section className="bg-[#1c2431]">
            <div className="container element-center  text-center  pt-[130px] text-white">
                <div className="img element-center w-full md:w-[650px] mb-3">
                    <img src={ImgLanding} />
                </div>
                <h1 className="mb-10">All your files in one secure location,
                    <br />
                    accessible anywhere.
                </h1>
                <p className=" w-full md:max-w-[650px] mb-5">Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.
                </p>
                <a className="btn px-10 py-2 font-semibold" href="/">Get Started</a>
            </div>
            <div >
                <img src={Img1}   alt="" />
            </div>
        </section>
    )
}

export default Landing