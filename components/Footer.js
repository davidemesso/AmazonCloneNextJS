function Footer() {
    return (
        <>
            <div className="bg-slate-500 h-full mb-0 text-white">
                <a onClick={() => document.getElementById("scrollable").scrollTo(0, 0)} className="flex items-center justify-around">
                    <p className="w-auto cursor-pointer py-4">
                        Back to top
                </p>
                </a>
            </div>
            <div className="flex flex-wrap flex-1 bg-slate-800 p-4 text-white justify-around">
                <div >
                    <h1 className="font-semibold">Get to Know Us</h1>
                    <p className="footer-button">Careers</p>
                    <p className="footer-button">Blog</p>
                    <p className="footer-button">About Amazon</p>
                    <p className="footer-button">Investor Relations</p>
                    <p className="footer-button">Amazon Devices</p>
                </div>
                <div>
                    <h1 className="font-semibold">Let Us Help You</h1>
                    <p className="footer-button">Your Account</p>
                    <p className="footer-button">Your Orders</p>
                    <p className="footer-button">Returns & Replacements</p>
                    <p className="footer-button">Amazon Assistant</p>
                    <p className="footer-button">Help</p>
                </div>
            </div>
        </>
    )
}

export default Footer
