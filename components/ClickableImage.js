import { useRecoilState } from "recoil"
import productAtom from "../recoil/atom"
import { Router, useRouter } from 'next/router';

function ClickableImage({ product }) {
    const [data, setData] = useRecoilState(productAtom);
    const router = useRouter();

    return (
        <img className="m-2 cursor-pointer mx-auto py-2 shadow-lg border-gray-100 dark:border-none border-2 h-[12rem] w-auto"
            src={product?.imageUrl}
            onClick={() => {
                setData(product);
                router.push('/product/' + product?.ASIN);
            }}
        />
    )
}

export default ClickableImage
