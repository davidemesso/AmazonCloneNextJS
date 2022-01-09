import { IoCartOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";

function TopNav({ value: dark, handler: setDark }) {
    const { data: session } = useSession();
    const router = useRouter();
    if (session)
        console.log(session.user);

    return (
        <div className="fixed left-0 top-0 bg-[#232f3e] h-10 flex w-full justify-between items-center text-white py-8 px-4">
            <img className="topnav-button !p-0 !h-14"
                src="https://m.media-amazon.com/images/G/29/gc/designs/livepreview/amazon_squidink_noto_email_v2016_it-main._CB461857165_.png" alt="logo"
                onClick={() => {
                    location.href="/"
                }}></img>
            <p>Ricerca</p>
            <div className="flex items-center justify-evenly">
                <div className="!py-0 topnav-button flex flex-col items-center text-center text-sm"
                    onClick={() => {
                        !session ?
                            signIn() :
                            signOut()
                    }}>
                    {
                        session ?
                            <p className="text-xs">{session.user.name.split(" ")[0]}</p> :
                            <p className="text-xs">Log in</p>
                    }
                    <BsFillPersonLinesFill className="text-2xl" />
                </div>
                <div className="topnav-button">
                    <IoCartOutline className="text-3xl" />
                </div>
                <div className="topnav-button"
                    onClick={() => {
                        if (dark === "dark") { setDark(""); localStorage.setItem("amazon2.0-theme", "light") }
                        else { setDark("dark"); localStorage.setItem("amazon2.0-theme", "dark") }

                    }}>
                    {dark === "dark" ?
                        <BsSun className="text-2xl" /> :
                        <BsMoon className="text-2xl" />}
                </div>

            </div>
        </div >
    );
}

export default TopNav
