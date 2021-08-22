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
                        Lirum ipsum lirum ipsum vauvau
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum nunc et
                        <br />
                        ligula dapibus, sit amet egestas ex iaculis. Duis suscipit a lorem in tempor. Vivamus
                    </p>
                    <br />
                </div>
                <div className='btn'><span className="special">Get started for free</span></div>
            </div>
        </div>
    );
}
