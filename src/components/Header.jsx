import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import like from "../assets/Frame.svg"
import phone from "../assets/phone-call 1.svg"
import cart from "../assets/Frame-1.svg"
function Header() {

  return (
    <header className=" font-sans">
      <div className="header-top bg-[#454F5B]">
        <div className="w-[90%]">
        <div className="w-2/3 ml-auto py-2 flex justify-between">
          <h3 className="text-sm cursor-pointer text-white">
          Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
          </h3>
          <h3
            className="text-sm cursor-pointer text-white underline"
          >
            Обратный звонок
          </h3>
        </div>
        </div>
      </div>
      <div className="header-main bg-primary-content">
        <div className="w-4/5 mx-auto">
          <div className="flex justify-between py-5 items-center">
            <div className="gap-[100px] flex items-center">
              <Link
                to="/"
                className={`cursor-pointer`}
              >
                <img src={logo} width={50} height={42} alt="" />
              </Link>
              <ul className="flex gap-8">
                <li>
                  <Link className='text-[#161C24]' to="/">Главная</Link>
                </li>

                <li>
                  <select className='text-[#161C24] focus:outline-none'>
                    <option value={null}>Каталог</option>
                    <option value="Офис">Офис</option>
                    <option value="Отеля">Отеля</option>
                  </select>
                </li>

                <li>
                  <Link className='text-[#161C24]'>Оптовая продажа</Link>
                </li>

                <li>
                  <Link className='text-[#161C24]'>О нас</Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-[30px]">
                <div className="flex items-center cursor-pointer gap-2">
                    <img src={phone} alt="" />
                    <h3 className="text-[18px] text-[#454F5B] leading-[21.48px]">+7 (966) 55 88 499</h3>
                </div>
              <div className="flex items-center gap-6 ">
              <Link to="/cart">
                <img src={cart} width={32} height={32} alt="" />
              </Link>
              
                <img className="cursor-pointer" width={32} height={32} src={like} alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
