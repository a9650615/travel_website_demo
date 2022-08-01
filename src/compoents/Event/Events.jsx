import Container from "../Container";
import EventItem from './EventItem';
import arrowSVGUrl from '../../resources/icon/arrow.svg';
import leftArrSVGUrl from '../../resources/icon/left-arr.svg';
import rightArrSVGUrl from '../../resources/icon/right-arr.svg';

const Events = ({ titleName, items = [] }) => {
    return (
        <Container>
            <div className="mt-10 md:mt-24">
                <div className="flex space-x-2">
                    <div className="bg-[#23BFD4] w-3 h-24px my-auto"></div>
                    <div className="flex w-full">
                        <h2 className="font-600 text-title text-left flex-1 md:text-28px">{titleName}</h2>
                        <div className="flex justify-center items-center space-x-2 md:hidden">
                            <a href="#" className="text-sm text-gray-600">瀏覽更多</a>
                            <img src={arrowSVGUrl} alt="" className="w-15px" />
                        </div>
                        <div className="flex justify-center items-center space-x-6 hidden md:block">
                           <button className="bg-[#333] bg-opacity-20 px-12px py-9px">
                                <img src={leftArrSVGUrl} alt="" className="w-10px" />
                           </button>
                           <button className="bg-[#333] bg-opacity-20 px-12px py-9px">
                                <img src={rightArrSVGUrl} alt="" className="w-10px" />
                           </button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto md:overflow-x-hidden">
                    <div className="flex space-x-4 mt-6 md:space-x-30px">
                        {
                            items.map((item, index) => (
                                <EventItem key={index} title={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="justify-center items-center space-x-6 hidden md:block float-right border-b-[#333] border-b py-2">
                    <a href="#" className="text-sm text-gray-600 flex-1 inline-block">瀏覽更多</a>
                    <img src={arrowSVGUrl} alt="" className="w-15px inline-block" />
                </div>
            </div>
        </Container>
    );
}

export default Events;
