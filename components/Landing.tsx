import Image from 'next/image';
import image from '../public/taxi-884.svg';
import imgSources from '../services/imgSources';
import Menu from './Menu';

export default function Landing() {
    return (
        <div className='container'>
            <Menu />

            <div className='main'>
                <div className='text-container'>
                    <h1>
                        your <span className='special'>secure</span> and <span className='special'>free</span>{' '}
                        budgeting.
                    </h1>
                    <p>
                        First open-source budgeting app launch made by two teen developers. <br />
                        Everything is <span className='special'>encrypted</span> as it should be. <br />
                        BudgetGenix is made with
                        <span className='special'> Typescript, Nodejs, GraphQL and MongoDB</span>.
                        <br />
                        It's free forever, if you want so.
                    </p>
                    <br />
                    <div className='btn'>Register</div>
                </div>
            </div>
        </div>
    );
}
