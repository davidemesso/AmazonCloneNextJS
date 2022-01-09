import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SubNav from "../../components/SubNav";
import TopNav from "../../components/TopNav";
import productAtom from "../../recoil/atom"

function ProductPage() {
    const [product, setProduct] = useRecoilState(productAtom);
    const [data, setData] = useState({})
    
    console.log(data)
    console.log(Object.entries(data))

    useEffect(() => {
        setData(product);
    }, [])
    return (
        <div id="scrollable" className="flex flex-col flex-1 h-screen overflow-y-scroll scrollbar-thumb-slate-400 hover:scrollbar-thumb-slate-500 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-[104px] pb-[104px]">
            <div className="bg-emerald-100 dark:bg-[#111827] mx-0 p-0">
                <div className="flex flex-col items-center">
                    {Object.entries(data).map(([key, value]) => {
                        <div key={key} className="flex justify-evenly">
                            <p>{key}</p>
                            <p>{value}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductPage