import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='text-center mt-10'>
            <Player
                autoplay
                loop
                src="https://lottie.host/c7deb792-7660-4a6f-9e18-d553bab15418/WAceyvuvAO.json"
                // style={{ height: '300px', width: '700px' }}
                className='md:w-[700px] '
            >
                {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
            </Player>
            <h2 className='md:text-5xl font-bold'>
                NOT FOUND
            </h2>
            <Link to="/"><button className="btn btn-accent text-white mt-7">Go Home</button></Link>
        </div>
    );
};

export default ErrorElement;