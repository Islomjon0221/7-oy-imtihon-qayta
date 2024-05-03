import Header from "../components/Header";
import logo from "../assets/Logo2.svg"
import W from "../assets/W.svg"
import twitter from "../assets/Twitter.svg"
import Facebook from "../assets/free-icon-facebook-2111392 1.svg"

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="w-4/5 mx-auto mb-[100px] font-sans">{children}</div>
      <div className="footer  font-sans">
        <div className="f-top pt-16 py-14 bg-[#F2F8FF]">
          <div className="insides w-[748px] mx-auto">
            <h2 className="text-center text-[#161C24] leading-[62px] font-semibold text-[44px]">Мы Вам перезвоним</h2>
            <p className="text-[#454F5B] w-[518px] mx-auto text-center text-[16px] my-6 leading-[26px]">Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</p>
            <div className="flex items-center justify-between">
              <input className="bg-[#161C240A] w-[240px] h-[50px] pl-[16px]" type="text" placeholder="Ваше имя" />
              <input className="bg-[#161C240A] w-[240px] h-[50px] pl-[16px]" type="email" placeholder="Ваш Email" />
              <button className="bg-[#4295E4] text-white text-[16px] leading-[26px] font-medium w-[240px] h-[50px] pl-[16px]">Отправить</button>
            </div>
          </div>
        </div>
        <div className="f-bottom pt-[55px] bg-[#0D2436] pb-[25px]">
          <div className="w-[1259px] mx-auto flex justify-between items-start">
            <div className="logos flex flex-col gap-[144px]">
              <img src={logo} width={105} height={88} alt="" />
              <div className="flex items-center gap-6">
                <img className="cursor-pointer" width={26} height={26} src={W} alt="" />
                <img className="cursor-pointer" width={26} height={26} src={twitter} alt="" />
                <img className="cursor-pointer" width={26} height={26} src={Facebook} alt="" />
              </div>
            </div>
            <div className="nav-bars text-white flex gap-[97px] items-start">
              <div className="flex flex-col ">
                <h3 className="font-medium text-[18px] leading-[28px] mb-6">Навигация</h3>
                <div className="flex flex-col gap-4">                
                  <h2 className="font-[300] text-4 leading-[26px]">Главная</h2>
                  <h2 className="font-[300] text-4 leading-[26px]">Каталог</h2>
                  <h2 className="font-[300] text-4 leading-[26px]">Оптовая продажа</h2>
                  <h2 className="font-[300] text-4 leading-[26px]">О нас</h2>
                </div>
              </div>
              <div className="flex flex-col ">
                <h3 className="font-medium text-[18px] leading-[28px] mb-6">Наши контакты</h3>
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="font-[300] text-[#C4CDD5] text-[14px] leading-[24px] mb-4">Телефоны</h2>
                    <h2 className="font-[300] text-4 leading-[26px] mb-3">+7 (988) 565 00 38</h2>
                    <h2 className="font-[300] text-4 leading-[26px]">+375 33 662 82 56</h2>
                  </div>

                  <div>
                    <h2 className="font-[300] text-[#C4CDD5] text-[14px] leading-[24px] mb-4">Email</h2>
                    <h2 className="font-[300] text-4 leading-[26px] mb-3">vladpertcev@mail.ru</h2>
                    <h2 className="font-[300] text-4 leading-[26px]">korobko416@gmail.com</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <h3 className="font-medium text-[18px] leading-[28px] mb-6">Наш адрес</h3>
                <div className="flex flex-col gap-4">                
                  <h2 className="font-[300] text-4 leading-[26px]">Россия,<br /> Ростов-на-Дону ул<div className="br"></div> Богачева, 16</h2>
                </div>
              </div>
              <div className="flex flex-col ">
                <h3 className="font-medium text-[18px] leading-[28px] capitalize mb-6">информация</h3>
                <div className="flex flex-col gap-4">                
                  <h2 className="font-[300] text-4 leading-[26px]">Доставка и оплата</h2>
                  <h2 className="font-[300] text-4 leading-[26px]">Гарантии</h2>
                  <h2 className="font-[300] text-4 leading-[26px]">Возврат товара</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
