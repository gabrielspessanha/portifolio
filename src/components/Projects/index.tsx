import './styles.scss';
import SlideComponent from '../common/slideComponent';
import { Codeflix } from './Codeflix';

export function Projects(){
    return(
        <section className="mb-5">
            <h2>PROJETOS</h2>
            <hr />
            <div className='flex justify-center'>
                <Codeflix />
            </div>

            <div className='flex justify-center'>
                <SlideComponent />
            </div>
            
        </section>
    )
}
