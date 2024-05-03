import { useEffect, useState } from "react"
import Card from "../components/Card"
import { SimpleAccordion } from "../components/SimpleAccordion"
import { Link } from "react-router-dom"

function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then(data => {
      setData(data);
      
    }).catch(err => {
      console.log(err);
    })
  }, [])  
  return (<>
  <Link className="mt-[10px] mb-[40px]" to = "/">Главная / Каталог</Link>
  <h1 className="font-bold text-[28px]">Накладные электронные замки (854)</h1>
  <div className="flex items-center justify-between">
    <div className="one-group flex items-center">
      <button className="text-[#161C24] border border-[#ADD7FF] transition duration-300 my-8 mr-[31px] text-4 leading-[26px] hover:bg-[#ADD7FF] py-[7px] px-[72px]">Сбросить фильтры</button>
      <h3 className="text-[14px] leading-6 text-[#161C24]">Электронные кодовые замки <span className="text-[#E44286] w-[9.33px] h-[9.33px]">X</span></h3>
    </div>
    <select className='text-[#161C24] border py-[7px] px-4 focus:outline-none'>
                    <option value={null}>Популярности</option>
                    <option value="Офис">1 Популярность </option>
                    <option value="Отеля">Популярность на 2 месте</option>
                  </select>

  </div>
  <div className="flex">
      <div className="flex h-full flex-col p-6 border border-[#C4CDD5]">
      <SimpleAccordion name='Цена' price={true} color={false} material={false} size={false}></SimpleAccordion>
      <SimpleAccordion name='Особенности' price={false} color={false} material={false} size={false}></SimpleAccordion>
      <SimpleAccordion name='Цвет' price={false} color={true} material={false} size={false}></SimpleAccordion>
      <SimpleAccordion name="Материал" price={false} material={true} color={false} size={false}></SimpleAccordion>
      <SimpleAccordion name="Размеры" price={false} material={false} color={false} size={true}></SimpleAccordion>
    </div>
    <div className="flex items-center justify-between flex-wrap">
 

      {
        data.map((res, i) => {
          return(
            <Card key={i} id={res.id} data={res.atributes}></Card>
          )
        })
      }
      
    </div>
    </div>
    </>
  )
}

export default Home