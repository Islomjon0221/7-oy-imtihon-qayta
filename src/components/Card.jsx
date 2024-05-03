import Start from '../assets/start.svg'
import noStar from "../assets/no-star.svg"
import { useNavigate } from "react-router-dom";


function Card(props) {
    const data = props.data
    const id = props.id
    const navigate = useNavigate();
    function handleRedurect() {
      navigate(`/product/${id}`)
    }
    return (
        <div onClick={handleRedurect}>
            <div className=" card-compact w-[288px] mb-10 h-[453px] bg-base-100 shadow-xl">
                    <img src={data.img} width={288} height={320} alt="" />
                <div className="card-body py-[10px] pl-3">
                    <div className='flex'>
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={Start} alt="" />
                    <img src={noStar} alt="" />
                    <img src={noStar} alt="" />
                    <p className='ml-2 text-[#454F5B] text-[13px] leading-[21px]'>(12) отзывов</p>
                    </div>
                    <p className='font-normal w-[220px] text-[#454F5B] text-4 leading-[26px]'>{data.name}</p>
                    <div className="flex justify-start">
                     <div className="price flex gap-2">
                     <p className='text-4 font-semibold	text-[#161C24]'>{data.price}₽</p><del className='text-[#454F5B]'>{data.sale}₽</del>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card