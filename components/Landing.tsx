import Image from 'next/image';
import image from '../public/taxi-884.svg';
import imgSources from '../services/imgSources';
export default function Landing() {
    return (
        <div className='container'>
            <div className='main'>
                <div className='text-container'>
                    <h1>
                        your <span className='special'>secure</span> and <span className='special'>free</span>{' '}
                        budgeting application.
                    </h1>
                    <p>
                        First open-source budgeting app launch made by two teen developers. <br />
                        Everything is <span className='special'>encrypted</span> as it should be. <br />
                        This application uses{' '}
                        <span className='special'>Typescript, nodejs, graphql and mongodb to work</span>.
                    </p>
                    <br />
                    <div className='btn'>Learn more</div>
                </div>
                <div className='image'>
                    <img className='picture' src={imgSources.landing} alt='picture' />
                </div>
            </div>
        </div>
    );
}
