import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="w-full h-screen bg-white pt-20">
        <h1 className="text-center text-blue-700 font-[900] tracking-[-40px] text-[200px]">4<><span className="text-slate-200">0</span></>4</h1>
        <p className="text-center uppercase text-blue-400 text-5xl">Page not found</p>
        <div className=" w-[550px] mt-20 mx-auto">
        <Link className="px-52 text-lg py-2 rounded-md font-[600] tracking-widest uppercase text-white bg-blue-700" to="/">Home page</Link>
        </div>
    </div>
  )
}

export default ErrorPage