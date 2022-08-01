import Container from "./Container";

import tainanURL from '../resources/tainan.png';
import hualienURL from '../resources/hualien.png';
import taipeiURL from '../resources/taipei.png';
import taichungURL from '../resources/taichung.png';


const PopulateCities = () => (
    <Container>
        <div className="mt-11">
            <div className="flex space-x-2">
                <div className="bg-[#23BFD4] w-3 h-24px my-auto"></div>
                <div className="flex w-full">
                    <h2 className="font-600 text-title text-left flex-1">熱門城市</h2>
                </div>
            </div>
            <div className="md:(flex w-full space-x-30px justify-center items-center)">
                <div className="flex space-x-4 md:space-x-30px">
                    <div className="flex-1 flex relative justify-center items-center">
                        <h3 className="text-white font-600 font-20px z-10 text-xl absolute">台南</h3>
                        <img src={tainanURL} alt="" className="rounded w-full md:w-255px" />
                    </div>
                    <div className="flex-1 flex relative justify-center items-center">
                        <h3 className="text-white font-600 font-20px z-10 text-xl absolute">台北</h3>
                        <img src={taipeiURL} alt="" className="rounded w-full md:w-255px" />
                    </div>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0 md:space-x-30px">
                    <div className="flex-1 flex relative justify-center items-center">
                        <h3 className="text-white font-600 font-20px z-10 text-xl absolute">花蓮</h3>
                        <img src={hualienURL} alt="" className="rounded w-full md:w-255px" />
                    </div>
                    <div className="flex-1 flex relative justify-center items-center">
                        <h3 className="text-white font-600 font-20px z-10 text-xl absolute">台中</h3>
                        <img src={taichungURL} alt="" className="rounded w-full md:w-255px" />
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

export default PopulateCities;
