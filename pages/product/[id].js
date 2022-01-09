import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import productAtom from "../../recoil/atom"
import Footer from "../../components/Footer"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

function ProductPage() {
    const [product, setProduct] = useRecoilState(productAtom);
    const [data, setData] = useState({})
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        const localStoragePath = "amazon2.0-product" + router.query.id;
        if (typeof window !== 'undefined' && Object.keys(product).length !== 0) {
            localStorage.setItem(localStoragePath, JSON.stringify(product));
        }

        setData(JSON.parse(localStorage.getItem(localStoragePath)))

    }, [router.query])

    return (
        <div>
            <div id="scrollable" className="flex flex-col flex-1 h-screen overflow-y-scroll scrollbar-thumb-slate-400 hover:scrollbar-thumb-slate-500 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-[104px] pb-[104px]">
                <div className="bg-emerald-100 dark:bg-[#111827] mx-0 p-0">
                    <div className="flex flex-col w-full h-screen">
                        <div className="flex-col sm:flex-row flex w-full sm:justify-between p-8">
                            <div className="flex h-fit">

                                <img className="h-[70%] w-[40%] shadow-lg" src={data?.imageUrl}></img>
                                <p className="text-left w-full dark:text-white pl-8 font-semibold text-xl md:text-2xl">{data?.title}</p>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 shadow-lg mx-4 my-8 h-min sm:my-0">
                                <p className="dark:text-white my-2 h-min">
                                    {data?.price}
                                </p>
                                <p className="dark:text-white">
                                    {data?.isPrimeEligible === "1" ? "Prime" : "Non Prime"}
                                </p>
                                <div className={"w-max bg-slate-300 p-4 rounded-xl mt-4 shadow-lg cursor-" + (session ? "pointer" : "not-allowed")}>
                                    Add to cart
                                </div>
                            </div>
                        </div>
                        <div className="dark:text-white mx-12 font-semibold">
                            <p> Rating: {data?.rating} ⭐ </p>
                            <p> {data?.totalReviews} reviews</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ProductPage