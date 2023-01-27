import '../styles.css';
import logo from '../assets/images/logo.svg'
import menuClose from '../assets/images/icon-menu-close.svg'

function NAVBAR(){
    return(
        <div>
            <nav className='flex justify-between'>
                  <a href="#" ><img src={logo} alt="Web news logo" className='w-[44.98px] lg:w-[64.09px] pt-[28px] pl-[16px] lg:mt-[0px] lg:ml-[0px]'/></a>
                    <ul className='text-darkGrayishBlue capitalize flex lg:justify-between lg:w-[431px] lg:flex-row lg:space-y-[0px] lg:py-[0px] lg:h-0 flex-col space-y-[24px] lg:px-[0px] px-[53px] py-[27.3px] w-[256px] bg-primarySoftOrange h-screen z-10 md:z-0'>
                        
                        <li><img src={menuClose} alt="Menu close button"  className='w-[30.41px] float-right mr-[20.79px] mb-[100px] cursor-pointer hover:rotate-90 transition-all ease-linear duration-200'/></li> 
                        <li><a href="#">home</a></li>
                        <li><a href="#">new</a></li>
                        <li><a href="#">popular</a></li>
                        <li><a href="#">trending</a></li>
                        <li><a href="#">categories</a></li>
                    </ul>
            </nav>
        </div> 
    )
}



export default NAVBAR;