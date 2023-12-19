import './styles.scss';
import SlideComponent from '../common/slideComponent';
import { Codeflix } from './Codeflix';

export function Projects(){
    return(
        <section className="mb-5">
            <h2 className='font-black'>PROJETOS</h2>
            <hr />
            <div className='flex justify-center flex-col items-center'>
                <h2>DESTAQUE</h2>
                <Codeflix />
            </div>

            <div className='flex justify-center flex-col items-center'>
                <h2 className='my-5'>OUTROS PROJETOS</h2>
                <SlideComponent />
            </div>
            
        </section>
    )
}
