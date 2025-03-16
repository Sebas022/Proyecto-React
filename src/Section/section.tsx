import '../Section/section.css'


export default function Section(){
    return(
        <>

        <main className='main-section'>
        <h1 className='title'>BROWSE BY DRESS STYLE</h1>
        <section id="layout">    
        <div className="caja casual">
            <h4>Casual</h4>
            </div>
        <div className="caja formal">
        <h4>Formal</h4>
            </div>
        <div className="caja party">
        <h4>Party</h4>
            </div>
        <div className="caja gym">
        <h4>Gym</h4>
            </div>
         </section>
        </main>

        </>
    );
}
