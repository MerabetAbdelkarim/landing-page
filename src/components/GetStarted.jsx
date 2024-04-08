
function GetStarted() {
    return (
        <section>
            <div className="bg-[#202a3c] rounded-xl p-5 text-center mx-[10px] md:mx-[100px] mt-[100px] -mb-[100px] relative z-20">
                <h2 className="text-white font-bold text-[20px] mb-6">Get early access today</h2>
                <p className="text-white text-[14px] mb-10">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <form action="" className="grid grid-cols-1 md:grid-cols-6   gap-5">
                    <input className=" w-full py-4 pl-10 rounded-full  md:col-start-1 md:col-end-5"  type="text" placeholder="email@example.com" />
                    <a className="btn text-white font-bold   w-full h-fit py-4 rounded-full md:col-start-5 md:col-end-7 " href="">Get Started For Free</a>
                </form>
            </div>
        </section>
    )
}

export default GetStarted