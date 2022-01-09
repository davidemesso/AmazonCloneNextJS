import { useEffect, useState } from "react";
import { useRecoilState } from "recoil"
import productAtom from "../recoil/atom"
import { Router, useRouter } from 'next/router';

function Slider() {
    const [products, setProducts] = useState([])
    const [data, setData] = useRecoilState(productAtom);
    const router = useRouter();

    useEffect(() => {
        setProducts(JSON.parse(`[{"ASIN":"B09JKZWF2G","title":"HP 24 All-in-One Desktop, AMD Athlon Silver 3050U Processor, AMD Radeon Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (24-dd0210, Snow White)","price":"$529.99","listPrice":"","imageUrl":"https://m.media-amazon.com/images/I/31q8VuQus1L._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/B09JKZWF2G","rating":"4.7","totalReviews":"1348","subtitle":"","isPrimeEligible":"1"},{"ASIN":"B07G4LVZQZ","title":"lenovo ThinkCentre M93P Tiny Mini Business Desktop Computer, Intel Dual-Core i5-4570T Processor up to 3.60 GHz, 8GB RAM, 240GB SSD, WiFi, Windows 10 Pro (Renewed)","price":"$179.79","listPrice":"","imageUrl":"https://m.media-amazon.com/images/I/31waB8HE3UL._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/B07G4LVZQZ","rating":"4.4","totalReviews":"425","subtitle":"","isPrimeEligible":"0"},{"ASIN":"B00X4SCCFG","title":"Amazon Basics Adjustable Computer Monitor Riser Desk Stand","price":"$18.85","listPrice":"$22.49","imageUrl":"https://m.media-amazon.com/images/I/317W4jfbroS._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/B00X4SCCFG","rating":"4.7","totalReviews":"15210","subtitle":"","isPrimeEligible":"1"},{"ASIN":"1441908765","title":"The Apollo Guidance Computer: Architecture and Operation (Springer Praxis Books)","price":"$49.99","listPrice":"","imageUrl":"https://m.media-amazon.com/images/I/51PHDlU2p4L._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/1441908765","rating":"4.8","totalReviews":"204","subtitle":"O'Brien, Frank (Paperback)","isPrimeEligible":"1"},{"ASIN":"B083QJG28Y","title":"Modern Computer Architecture and Organization: Learn x86, ARM, and RISC-V architectures and the design of smartphones, PCs, and cloud servers","price":"$15.24","listPrice":"","imageUrl":"https://m.media-amazon.com/images/I/41EZcfxOiBL._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/B083QJG28Y","rating":"4.7","totalReviews":"79","subtitle":"","isPrimeEligible":"0"},{"ASIN":"B0100PGME2","title":"Apple iMac MF883LL/A 21.5-Inch 500GB Desktop (Renewed)","price":"$294.99","listPrice":"$309.99","imageUrl":"https://m.media-amazon.com/images/I/41oxq4Bx5SL._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/B0100PGME2","rating":"4.2","totalReviews":"261","subtitle":"","isPrimeEligible":"0"},{"ASIN":"B09D75CP9F","title":"Dell Inspiron 3891 Compact Tower Desktop - Intel Core i5, 16GB DDR4 RAM, 256GB SSD, 1TB SATA HDD, Intel UHD Graphics 630, 2Yr OnSite, 6 Months Dell Migrate Services, Windows 11 Home (Latest Model)","price":"$697.98","listPrice":"","imageUrl":"https://m.media-amazon.com/images/I/31UIJ6Z6dtL._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/B09D75CP9F","rating":"","totalReviews":"","subtitle":"","isPrimeEligible":"1"},{"ASIN":"1591264499","title":"PPI FE Electrical and Computer Review Manual – Comprehensive FE Book for the FE Electrical and Computer Exam","price":"$148.99","listPrice":"$256.00","imageUrl":"https://m.media-amazon.com/images/I/51dp6SKnuQS._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/1591264499","rating":"4.5","totalReviews":"297","subtitle":"Michael R. Lindeburg PE (Paperback)","isPrimeEligible":"1"},{"ASIN":"B089DQ1GVG","title":"Seele","price":"$1.29","listPrice":"","imageUrl":"https://m.media-amazon.com/images/I/415sjVyF4pL._SL160_.jpg","detailPageURL":"https://www.amazon.com/dp/B089DQ1GVG","rating":"","totalReviews":"","subtitle":"","isPrimeEligible":"0"},{"ASIN":"B01LX7NPW2","title":"Computer Creativity","price":"$0.00","listPrice":"","imageUrl":"https://m.media-amazon.com/images/I/61y2wv3sAPL._SL160_.png","detailPageURL":"https://www.amazon.com/dp/B01LX7NPW2","rating":"5.0","totalReviews":"1","subtitle":"","isPrimeEligible":"0"}]`));

    }, [])
    return (
        <div className="p-6 pr-10" >
            <div className="w-full bg-slate-100 dark:bg-slate-800 shadow-lg rounded-lg p-4 m-2 mt-0">
                <h1 className="text-xl font-bold dark:text-white">More items to explore</h1>
                <div className="flex overflow-hidden overflow-x-scroll scrollbar-thumb-slate-400 hover:scrollbar-thumb-slate-500 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    {products?.map((item) => (
                        <img key={item.ASIN} className="my-6 cursor-pointer mx-3 shadow-lg border-gray-100 border-2"
                            onClick={() => {
                                setData(item);
                                router.push('/product/' + item?.ASIN);
                            }}
                            src={item.imageUrl}></img>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider
