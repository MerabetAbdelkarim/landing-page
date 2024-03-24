import { useEffect, useRef, useState } from "react"
import LogoNav from "../assets/images/logo.svg"

function NavBar() {
  const [links, setLinks] = useState(["Features", "Team", "SignIn"])
  const headerRef  = useRef()

  useEffect(() => {
window.addEventListener("scroll",()=>{
  if (window.scrollY > 100) {
    headerRef.current.style.background = "#0c1524ba"
    headerRef.current.style.padding = "20px 0"

  }else{
    headerRef.current.style.background = "transparent"
    headerRef.current.style.padding = "30px 0"
  }
})
  }, [])
  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0  w-full  z-50 transition-all duration-300 backdrop-blur-sm">
        <div className="container mx-auto flex  justify-between items-center gap-3">
          <a href="/">
            <img src={LogoNav} />
          </a>

          <nav className="flex gap-5">
            {
              links.map((links) => (
                <ul key={links} className=" text-white opacity-80 hover:opacity-100  hover:underline   ease-in duration-200">
                  <li>{links}</li>
                </ul>
              ))
            }

          </nav>
        </div>
      </header>

    </>
  )
}

export default NavBar