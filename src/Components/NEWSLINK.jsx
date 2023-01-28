import "../styles.css";
import figureLogo1 from "../assets/images/image-retro-pcs.jpg";
import figureLogo2 from "../assets/images/image-top-laptops.jpg";
import figureLogo3 from "../assets/images/image-gaming-growth.jpg";

function NEWSLINK() {
  return (
    <footer className="px-[16px] lg:px-0 lg:mt-[30px] grid lg:grid-cols-3 pb-[30px] lg:pb-[0px] gap-[32px] lg:gap-[22px]">
      <figure className="w-[343px] h-[129px] flex cursor-pointer">
        <img
          src={figureLogo1}
          alt="Retro pc"
          className="object-cover"
          width={100}
          height={129}
        />
        <div className="ml-[26px] align-text-top">
          <p className="text-[32px] text-grayishBlue font-bold">01</p>
          <h4 className="text-veryDarkBlue text-[18px] font-bold capitalize hover:text-primarySoftRed">
            reviving retro PCs
          </h4>
          <p className="text-darkGrayishBlue text-[15px]">
            What happens when old PCs are given modern upgrades
          </p>
        </div>
      </figure>
      <figure className="w-[343px] h-[129px] flex cursor-pointer">
        <img
          src={figureLogo2}
          alt="Retro pc"
          className="object-cover"
          width={100}
          height={129}
        />
        <div className="ml-[26px] align-text-top">
          <p className="text-[32px] text-grayishBlue font-bold">01</p>
          <h4 className="text-veryDarkBlue text-[18px] font-bold capitalize hover:text-primarySoftRed">
            tp 10 laptops of 2023
          </h4>
          <p className="text-darkGrayishBlue text-[15px]">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </figure>
      <figure className="w-[343px] h-[129px] flex cursor-pointer">
        <img
          src={figureLogo3}
          alt="Retro pc"
          className="object-cover"
          width={100}
          height={129}
        />
        <div className="ml-[26px] align-text-top">
          <p className="text-[32px] text-grayishBlue font-bold">01</p>
          <h4 className="text-veryDarkBlue text-[18px] font-bold capitalize hover:text-primarySoftRed">
            the growth of gaming
          </h4>
          <p className="text-darkGrayishBlue text-[15px]">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </figure>
    </footer>
  );
}

export default NEWSLINK;
