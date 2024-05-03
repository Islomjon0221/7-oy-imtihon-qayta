import { useState } from "react"
import { useEffect } from "react"
import x from "../assets/x.svg"
import { useSelector } from "react-redux"
import trash from "../assets/trash.svg"
import { Link, useNavigate } from "react-router-dom"

function Cart() {
  const dataId = useSelector(state => state.id.value)
  const [data, setData] = useState([])
  const [numb, setNumb] = useState(1)
  const [off, setOff] = useState(false)
  const navigate = useNavigate
  useEffect(() => {
    console.log(11, dataId);
    fetch(`http://localhost:3000/data`)
      .then(res => res.json())
      .then(arr => {
        
          setData(arr.filter((el) => {
            return el.id == dataId
          }))
          console.log(data);
        }
      )
      .catch(err => {
        console.log(err);
      })
  }, [])
  function handleDecrement(e) {
    e.preventDefault()
    if(numb != 1) {
      setNumb(numb - 1)
    }
  }
  function handleImg(e) {
    e.preventDefault()
    navigate(`product/${dataId}`)
  }
  function handleIncrement(e) {
    e.preventDefault()
    if(numb != 5) {
      setNumb(numb + 1)
    }
  }
  // console.log(dataID.id);
  console.log(data);
  return (
    <div className="w-[836px] h-[394px] mx-auto shadow-lg bg-[#ffffff]">
      <div className=" mx-auto">
        <div className="w-5/6 mx-auto py-4 flex items-center justify-between">
          <h3 className="text-5 leading-[34px] text-[#161C24]">Корзина</h3>
          <Link to = {`/product/${dataId}`}><img src={x} alt="" /></Link>
         
        </div>
        <hr className="mb-6" />

        {
          data.map((res, i) => {
            return (
              <div key={i} className={off == true ? "hidden" : "block"}>
                <div className="ml-10 gap-3 top-hero flex ">
                  <div className="1-col">
                    <img src={res.atributes.img} className="mb-8" width={136} height={120} alt="" />
                  </div>
                  <div className="2-col">
                    <h2 className="text-[#161C24] text-4 mb-1">{res.atributes.name}</h2>
                    <h3 className="">+ Подарок: <span className="text-[#4295E4] mb-[34px] underline">“Приложение к замкам Golden Service”</span></h3>
                    <div className="flex mt-[34px] items-center">
                      <button disabled={numb == 1 ? true : false}  onClick={handleDecrement} className={`text-black disabled:text-[#C4CDD5] pr-2 cursor-pointer  text-[26px]`}>-</button>
                      <div className="border px-[22px] py-[5px]">
                        {numb}
                      </div>
                      <button onClick={handleIncrement} disabled={numb == 5 ? true : false} className="text-[#181818]  disabled:text-[#C4CDD5]  cursor-pointer pl-2 text-[26px]">+</button>
                    </div>
                  </div>
                  <div className="3-col ml-28  flex flex-col justify-between items-end">
                    <button className="gap-3 hover:opacity-70 flex transition duration-300  text-[#4295E4] font-medium"><img src={trash} alt="" /> Удалить</button>
                    <h3 className="text-4 text-[#161C24]">{res.atributes.sale}₽</h3>
                  </div>
                </div>
                <div className="ml-10 bottom-hero">
                <h3 className="text-[#161C24] mb-2 text-4"> Итого: <span className="font-medium text-5">{res.atributes.sale*numb}₽</span></h3>
                    <button onClick={() => {setOff(true)}} className="mr-[261px] bg-[#4295E4] w-[249px] h-[44px] border border-[#4295E4] text-white transition duration-300 py-[9px] px-1 hover:bg-white hover:text-[#4295E4]">Оформить заказ</button>
                <Link to="/" className="hover:bg-[#4295E4] w-[249px] h-[46px]  border hover:border-[#4295E4] hover:text-white transition duration-300 py-[9px] px-1 bg-white text-[#4295E4]">Продолжить покупки</Link>
                </div>

              </div>

            )
          })
        }

      </div>
    </div>
  )
}

export default Cart