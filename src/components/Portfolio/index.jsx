
import './styles.scss'


export function Portfolio(){
    return(
        <div className="container">
            <header>
                <h1>PORTFOLIOS</h1>
                <hr />
            </header>

            <div className="portfolio-container">
                <div className='card'>Item 1</div>
                <div className='card'>Item 2</div>
                <div className='card'>Item 3</div>
                <div className='card'>Item 4</div>

            </div>
        </div>
    )
}