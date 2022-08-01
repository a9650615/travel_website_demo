import SearchBar from './SearchBar';
import heroBGURL from '../resources/hero-bg.png';
import Container from './Container';

const Hero = () => (
    <div className="h-640px w-full relative">
        <img src={heroBGURL} alt="" className="object-cover w-full h-full absolute z-0" />
        <Container>
            <div className="relative z-10 pt-190px md:pt-28">
                <h1 className="text-white text-shadow-default text-title font-600 md:text-36px">和你一起探索台灣</h1>
                <div className="mt-6 md:mt-12">
                    <SearchBar />
                </div>
            </div>
        </Container>
    </div>
)

export default Hero;
