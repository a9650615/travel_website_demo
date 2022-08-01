import Container from "../Container";
import EventItem from './EventItem';
import arrowSVGUrl from '../../resources/icon/arrow.svg';

const Events = ({ titleName, items = [] }) => {
    return (
        <Container>
            <div className="mt-10">
                <div className="flex space-x-2">
                    <div className="bg-[#23BFD4] w-3 h-24px my-auto"></div>
                    <div className="flex w-full">
                        <h2 className="font-600 text-title text-left flex-1">{titleName}</h2>
                        <div className="flex justify-center items-center space-x-2">
                            <a href="#" className="text-sm text-gray-600">瀏覽更多</a>
                            <img src={arrowSVGUrl} alt="" className="w-15px" />
                        </div>
                    </div>
                </div>
                <div className="overflow-y-auto">
                    <div className="flex space-x-4 mt-6">
                        {
                            items.map((item, index) => (
                                <EventItem key={index} title={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Events;
