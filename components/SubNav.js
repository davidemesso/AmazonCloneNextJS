import { BsList } from "react-icons/bs";

function SubNav() {
    return (
        <div className="fixed left-0 top-16 bg-[#3d4958] h-10 flex w-full justify-between items-center px-2 text-white">
            <div className="flex items-center justify-evenly ">
                <p className="subnav-button"> <BsList className="mr-2"/> All</p>
                <p className="subnav-button"> Today's Deals</p>
                <p className="subnav-button"> Buy Again</p>
                <p className="subnav-button"> Customer Service</p>
                <p className="subnav-button"> Browsing History</p>
                <p className="subnav-button"> Gift Cards</p>
                <p className="subnav-button"> Registry</p>
                <p className="subnav-button"> Sell</p>
            </div>
        </div >
    );
}

export default SubNav
