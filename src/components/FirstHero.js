import tv_png from './img/tv.png'

function FirstHero() {
    return ( 
        <section className="bg-black text-white md:py-12">
            <div className="container mx-auto p-3 flex flex-col md:flex-row justify-center items-center md:px-44">
                <div className='space-y-6 pt-6'>
                <h1 className='font-extrabold text-3xl md:text-5xl text-center md:text-start'>Enjoy on your TV.</h1>
                <p className='font-medium text-md md:text-2xl text-center md:text-left px-6 md:px-0'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>

                <div>
                <img src={tv_png} className=''/>
                
                </div>
            </div>
        </section>
     );
}

export default FirstHero;