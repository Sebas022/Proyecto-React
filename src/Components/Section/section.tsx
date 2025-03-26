import '../Section/section.css'


export default function Section(){
    return(
        <>

        <main className='main-section'>
        <h1 className=''>BROWSE BY DRESS STYLE</h1>
        <section id="layout" className="grid grid-cols-2 gap-4">
        <div className="caja casual relative">
            <h4 className="absolute top-3 left-3 text-black font-bold text-lg">Casual</h4>
        </div>
        <div className="caja formal relative">
            <h4 className="absolute top-3 left-3 text-black font-bold text-lg">Formal</h4>
        </div>
        <div className="caja party relative">
            <h4 className="absolute top-3 left-3 text-black font-bold text-lg">Party</h4>
        </div>
        <div className="caja gym relative">
            <h4 className="absolute top-3 left-3 text-black font-bold text-lg">Gym</h4>
        </div>
    </section>
        </main>

        </>
    );
}
