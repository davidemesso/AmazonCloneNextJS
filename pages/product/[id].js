import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SubNav from "../../components/SubNav";
import TopNav from "../../components/TopNav";
import productAtom from "../../recoil/atom"
import Footer from "../../components/Footer"

function ProductPage() {
    const [product, setProduct] = useRecoilState(productAtom);
    const [data, setData] = useState({})

    console.log(data)
    console.log(Object.entries(data))

    useEffect(() => {
        setData(product);
    }, [])

    return (
        <div>
            <div id="scrollable" className="flex flex-col flex-1 h-screen overflow-y-scroll scrollbar-thumb-slate-400 hover:scrollbar-thumb-slate-500 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-[104px] pb-[104px]">
                <div className="bg-emerald-100 dark:bg-[#111827] mx-0 p-0">
                    <div className="flex flex-col w-full h-screen">
                        <div className="flex-col sm:flex-row flex w-full sm:justify-evenly p-8">
                            <div className="flex h-fit">

                                <img className="h-[70%] w-[40%]" src={product?.imageUrl}></img>
                                <p className="text-left w-full dark:text-white pl-8 font-semibold text-xl md:text-2xl">{product?.title}</p>
                            </div>
                            <div className="dark:bg-">
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 shadow-lg mx-4 my-8 sm:my-0">
                                    <p className="dark:text-white my-2 h-min">
                                        {product.price}
                                    </p>
                                    <p className="dark:text-white">
                                        {product.isPrimeEligible === "1" ? "Prime" : "Non Prime"}
                                    </p>
                                    <div className="w-max bg-slate-300 p-4 rounded-xl cursor-pointer mt-4">
                                        Add to cart
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-white mx-12 font-semibold">
                            <p> Rating: {product.rating} ⭐ </p>
                            <p> {product.totalReviews} reviews</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ProductPage