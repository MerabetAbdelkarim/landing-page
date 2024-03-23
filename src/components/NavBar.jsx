import { useState } from "react"
import LogoNav from "../assets/images/logo.svg"

function NavBar() {
  const [links, setLinks] = useState(["Features", "Team", "Sign In"])
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={LogoNav} />
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
    </>
  )
}

export default NavBar