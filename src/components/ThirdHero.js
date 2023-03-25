function ThirdHero() {
    return (  
        <section className="bg-black text-white md:py-12">
            <div className="container mx-auto md:px-52 pb-12 md:py-12 text-center md:text-start">
                
                <div className="hidden md:block space-y-3">
                <h1 className="font-extrabold text-5xl">Watch</h1>
                <h1 className="font-extrabold text-5xl">everywhere</h1>
                <p className="text-2xl font-medium ">Stream unlimited movies and TV <br></br>shows on your phone, tablet, laptop,<br></br> and TV.</p>
                </div>
             
                <div className="block md:hidden p-6 space-y-3">
                    <h1 className="text-3xl font-extrabold">Watch everywhere.</h1>
                    <p className="text-md font-medium px-3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                
            </div>
        </section>
    );
}

export default ThirdHero;