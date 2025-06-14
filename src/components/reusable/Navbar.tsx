import { ModeToggle } from "../mode-toggle"
import Logo from "../../assets/Logo.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  ">
     <img src={Logo} alt='Password Generator logo' width={80} />
     <ModeToggle />
    </div>
  )
}

export default Navbar
