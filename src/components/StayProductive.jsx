import ImgStay from "../assets/images/illustration-stay-productive.png"
import ImgArrow from "../assets/images/icon-arrow.svg"

function StayProductive() {
    return (
        <section className="mt-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center ">
                <div>
                    <img src={ImgStay} alt="stay-productive-img" />
                </div>
                <div className="text-white">
                    <div className="mb-6">
                        <h1>Stay productive, wherever you are</h1>
                    </div>
                    <p className="mb-3">
                        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                    </p>
                    <p className="mb-3">
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                    </p>
                    <a href="/" className="flex gap-4 pb-2   w-fit text-mainColor hover:text-hoverMainColor border-b-2 border-mainColor hover:border-transparent transition-colors duration-200 ">
                        See how Fylo works <img className="animate-arrowR" width={'24px'} height={'24px'} src={ImgArrow} />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default StayProductive