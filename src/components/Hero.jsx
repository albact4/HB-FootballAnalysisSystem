import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='honeyball_logo' className='w-28 object-contain' />
            <button 
            type="button"
            onClick={() => window.open('https://github.com/albact4/AI-Scouting-Report')}
            className='black_btn'
            >
                GitHub
            </button>

        </nav>
        <h1 className='head_text'>
            Get any Player Scouting Report with <br className='max-md:hidden' />
            <span className='orange_gradient'> Honeyball</span>
        </h1>
        <h2 className='desc'>
            Get instant insights and recommendations of a player and see if it can fit your team with our AI-powered scouting report.
        </h2>
    
    </header>
  )
}

export default Hero 