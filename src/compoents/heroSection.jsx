import SearchBar from './SearchBar';
import heroBGURL from '../resources/hero-bg.png';

const Hero = () => (
    <div className="h-640px w-full relative">
        <img src={heroBGURL} alt="" className="object-cover w-full h-full absolute z-0" />
        <div className="relative z-10 pt-190px">
            <h1 className="text-white text-shadow-default text-title font-600">和你一起探索台灣</h1>
            <div className="mt-6">
                <SearchBar />
            </div>
        </div>
    </div>
)

export default Hero;
