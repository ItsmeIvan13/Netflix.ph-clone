import kids_png from './img/kids.png'

function FourthHero() {
    return (  
        <section className="bg-black text-white">
            <div className="container mx-auto p-3 py-12 flex flex-col-reverse md:flex-row justify-center items-center">
                <div>
                <img src={kids_png}/>
                </div>
                <div className='text-center md:text-start space-y-3 '>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>Create profiles for <br></br> kids.</h1>
                    <p className='font-medium text-sm md:text-2xl px-3 md:px-0'>Send kids on adventures with their favorite <br></br> characters in a space made just for them—free <br></br> with your membership.</p>
                </div>
            </div>
        </section>
    );
}

export default FourthHero;