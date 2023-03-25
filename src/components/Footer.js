
function footer() {
    return ( 
        <footer className="bg-black text-white pb-16">
            <div className="container mx-auto p-3 md:px-36 pt-12">
            <h6 className="foot_text text-left font-medium underline" >Questions? Contact us.</h6>

            <div className="grid md:grid-cols-3 pt-6 font-medium text-base space-y-3">
                <div className="flex-col space-y-2 md:pt-3">
                    <h6 className="foot_text  underline">FAQ</h6>
                    <h6 className="foot_text  underline">Account</h6>
                    <h6 className="foot_text  underline">Jobs</h6>
                    <h6 className="foot_text  underline">Ways to Watch</h6>
                    <h6 className="foot_text  underline">Cookies Preferences</h6>
                    <h6 className="foot_text  underline">Speed Test</h6>
                </div>
                <div className="flex-col space-y-2">
                    <h6 className="foot_text  underline">Gift Card Terms</h6>
                    <h6 className="foot_text  underline">Media Center</h6>
                    <h6 className="foot_text  underline">Redeem Gift Cards</h6>
                    <h6 className="foot_text  underline">Terms of Use</h6>
                    <h6 className="foot_text  underline">Corporate Information</h6>
                    <h6 className="foot_text  underline">Legal Notices</h6>
                </div>
                <div  className="flex-col space-y-2">
                    <h6 className="foot_text  underline">Help Center</h6>
                    <h6 className="foot_text  underline">Investor Relations</h6>
                    <h6 className="foot_text  underline">Buy Gift Cards</h6>
                    <h6 className="foot_text  underline">Privacy</h6>
                    <h6 className="foot_text  underline">Contact Us</h6>
                    <h6 className="foot_text  underline">Only on Netflix</h6>
                </div>
            </div>

            <div className="pt-9">
                
            <select className=" border-2 border-gray-500 px-6  rounded-md font-medium text-lg">
                <option>English</option>
                <option>Filipino</option>
            </select>
            <h6 className="foot_text font-medium  pt-6">Netflix Philippines</h6>
            </div>
            

            </div>
            
        </footer>
     );
}

export default footer;