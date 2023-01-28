import "../styles.css";
import web3ImageDesktop from "../assets/images/image-web-3-desktop.jpg";
import web3ImageMobile from "../assets/images/image-web-3-mobile.jpg";

function NEWS() {
  return (
    <main className="lg:mt-[55.1px] mt-[35px] px-[16px] lg:px-0 lg:grid lg:grid-cols-3 gap-4 ">
      <article className="col-span-2 mb-[64px] lg:mb-[0]">
        <img
          src={web3ImageDesktop}
          alt="Web 3 image"
          className="hidden lg:block "
        />
        <img
          src={web3ImageMobile}
          alt="Web 3 image"
          className="lg:hidden w-full"
        />
        <div className="mt-[28px] lg:flex justify-between">
          <h1 className="text-veryDarkBlue text-[56px] font-extrabold w-[350px] leading-[58px] mb-[16px] lg:mb-0 align-text-top">
            The Bright Future of Web 3.0?
          </h1>
          <div className="lg:w-[350px]">
            <p className="text-darkGrayishBlue mb-[29px]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="w-[185px] uppercase text-offWhite bg-primarySoftRed h-[48px] hover:text-white hover:bg-veryDarkBlue transition-all ease-linear duration-200">
              read more
            </button>
          </div>
        </div>
      </article>
      <figure className="bg-veryDarkBlue text-offWhite col-span-1 px-[27px] pt-[30px] ">
        <h2 className="text-primarySoftOrange text-[40px] capitalize mb-[20px]">
          new
        </h2>
        <div className="border-b-2 border-darkGrayishBlue  cursor-pointer">
          <h3 className="capitalize text-white text-[20px] mb-[8px]  hover:text-primarySoftOrange transition-all ease-linear duration-200">
            hydrogen vs electric cars
          </h3>
          <p className="text-grayishBlue mb-[30px]">
            Will hydrogen-fueled cars ever catch up to Evs
          </p>
        </div>
        <div className="border-b-2 border-darkGrayishBlue  mt-[25px] cursor-pointer">
          <h3 className="capitalize text-white text-[20px] mb-[8px] hover:text-primarySoftOrange transition-all ease-linear duration-200">
            the downsides of ai artistry
          </h3>
          <p className="text-grayishBlue mb-[30px] cursor-pointer">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className=" cursor-pointer">
          <h3 className="capitalize text-white text-[20px] mb-[8px]  mt-[25px] hover:text-primarySoftOrange transition-all ease-linear duration-200">
            is VC funding drying up?
          </h3>
          <p className="text-grayishBlue mb-[30px] pb-[30px] lg:pb-[0px]">
            Private funding by VC firms is down 50% YOY. W take a look at what
            that means.
          </p>
        </div>
      </figure>
    </main>
  );
}

export default NEWS;
