import netflix_logo from './img/nav_logo.png'

function Home() {
    return (  
       <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/36c211c8-359e-4c56-93d2-b4737b59f67d/PH-en-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg")]
       w-full h-ful bg-cover bg-center ' >
        <div className='bg-black bg-opacity-60'>
        <nav className="container mx-auto flex justify-between p-3 md:px-28">
            <div>
            <img src={netflix_logo} alt="nav_logo" className='w-40 md:w-44'/>
            </div>
        
            <div className='pt-8'>
            
            <a className='started font-sans text-white text-base  font-medium px-3 py-2 rounded-lg cursor-pointer hover:bg-red-700'>Sign In</a>
            </div>
        
        </nav>

        <div className='container mx-auto p-3 text-center space-y-3 md:space-y-6  md:pt-48 pb-12 md:pb-36'>
            <h1 className='text-white text-3xl md:text-5xl font-extrabold md:px-9'>Unlimited movies, TV shows, and more.</h1>
            <h3 className='text-white text-lg md:text-2xl font-medium'>Watch anywhere. Cancel anytime.</h3>
            <h3 className='text-white text-sm md:text-xl font-medium px-8'>Ready to watch? Enter your email to create or restart your membership.</h3>
           
            <div className='flex flex-col md:flex-row justify-center gap-2 space-y-3'>
                <div>
                <input className='md:w-96 p-3 py-2  md:py-4 rounded-md  border-2 border-gray-500 text-white font-medium bg-black opacity-50' placeholder='Email address'/>
                </div>
                
              <div>
              <a className='started text-white text-xl md:text-2xl font-medium px-6 md:px-3 py-3 rounded-md cursor-pointer hover:bg-red-700'>Get Started  </a>
              </div>
             
             
                
            </div>
        </div>
        </div>
       </div>
    );
}

export default Home;