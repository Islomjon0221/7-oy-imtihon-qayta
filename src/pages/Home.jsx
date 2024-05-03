import { useEffect, useState } from "react"
import Card from "../components/Card"
import { SimpleAccordion } from "../components/SimpleAccordion"

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
  return (<div className="flex">
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
  )
}

export default Home