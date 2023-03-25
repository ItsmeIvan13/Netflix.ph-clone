import android_png from './img/mobile_logo.jpg'
import stranger_png from './img/boxshot.png'

function SecondHero() {
    return ( 
        <section className="bg-black text-white md:py-12">
            <div className="container mx-auto p-3 flex flex-col-reverse md:flex-row justify-center items-center md:px-32">
                <div className=''>
                <img src={android_png}/>
                </div>
                <div className='space-y-6 pt-6'>
                <h1 className='font-extrabold text-3xl md:text-5xl text-center md:text-start md:px-0'>Download your shows <br></br> to  watch offline.</h1>
                <p className='font-medium text-md md:text-2xl text-center md:text-left px-6 md:px-0'>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
        </section>
     );
}

export default SecondHero;