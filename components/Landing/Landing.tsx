import Menu from './modules/Menu';
import Link from 'next/link'

export default function Landing() {
    return (
        <div className='container'>
            <Menu />

            <div className='main'>
                <div className='text-container'>
                    <h1>
                        your <span className='special'>secure</span> and <span className='special'>simplified</span>{' '}
                        budgeting.
                    </h1>
                    <p>
                        Want to keep track of your daily income, budgets and expenses and everything between?
                        <br />
                        Try it. It's free, and you can even host it&nbsp;
                        <Link href="https://github.com/budjetgenix">yourself</Link>.
                        <br />
                        Your data is safe with us. If you got any problems or questions, you can open an issue on&nbsp;
                        <Link href="https://github.com/budjetgenix/">Github</Link>.
                    </p>
                    <br />
                </div>
                <div className='btn'><span className="special">Get started for free</span></div>
            </div>
        </div>
    );
}
