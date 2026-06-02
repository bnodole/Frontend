import { FaPhone } from 'react-icons/fa'
import LogoIcon from "../../images/Logo.png";
import { NavbarContent } from "../../constant/NavbarContent";
import { Darkmode } from '../Darkmode';

export const Navbar = () => {
  return (
    <div>
        <div className='bg-yellow-500 flex justify-between items-center text-white'>
            <div className='flex items-center gap-3'>
                <FaPhone />
                <span>+977 9800000000</span>
            </div>
            <div>
                <p>Free Shipping for Shopping over Rs.2000</p>
            </div>
        </div>
        <div className='flex justify-between items-center dark:bg-black dark:text-white container'>
            <div className='h-20 w-20'>
                    <img src={LogoIcon} alt="" />
            </div>
            <div>
                <ul className='flex list-none items-center gap-10'>
                    {
                        NavbarContent.map((item) => (
                            <li key={item.id}>
                                <a href={item.path}>{item.name}</a>
                            </li>
                        ))
                    }
                    <button type="submit" className='primary_btn'>Shop Now</button>
                    <Darkmode/>
                </ul>
            </div>
        </div>
    </div>
  )
}
