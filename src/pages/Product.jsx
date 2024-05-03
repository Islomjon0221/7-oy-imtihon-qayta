import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { ADD_ID } from "../redux/idSlice";

function Product() {
  const dispatch = useDispatch()
  const params = useParams()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/data`)
      .then(res => res.json())
      .then(arr => {
        setData(arr.filter((el) => {
          return el.id == Number(params.id)
        }))
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  function hadleSubmit(e) {
    e.preventDefault()
    dispatch(ADD_ID(data[0].id))
    navigate("/cart")
  }
  return (
    <div className='mx-auto   '>
      {
        data.length ? <div className="flex justify-center items-center gap-10">
        <div className="">
          <img src={data[0].atributes.img}  alt="Rasm topilmadi" />
        </div>
        <div className="flex flex-col mt-[100px] ">
          <h1 className='font-semibold text-[28px] mb-7 '>
            {data[0].atributes.name}
          </h1>
          <p className='text-[#454F5B] text-[16px] font-normal w-[400px] mb-5 '>
            {data[0].atributes.description}
          </p>
          <p className='text-[#454F5B] text-[16px] font-normal w-[400px] mb-8 '>
            {data[0].atributes.howUse}
          </p>
          <h3>Цена</h3>
          <div className="flex gap-2 mb-4">
            <p className='text-[20px] font-bold 	text-[#161C24]'>33 000₽</p>
            <h3 className='text-[#454F5B] line-through text-[20px] '>39 000₽</h3>
          </div>
          <button 
          onClick={hadleSubmit}
          className='bg-[#4295E4] scroll-py-4 scroll-px-16 w-[220px] h-[50px] text-white text-[16px]	font-medium	mb-[100px] hover:bg-[#4296e4b0] '>КОРЗИНКА</button>
        </div>
      </div> : <h1>Topilmadi</h1>
}
    </div>
  )
}
export default Product