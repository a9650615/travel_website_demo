import eventBGUrl from '../../resources/event-bg.png';
import locationSVGUrl from '../../resources/icon/location.svg';
import calendarSVGUrl from '../../resources/icon/calendar.svg';

const EventItem = ({ title }) => {
    return (
        <div className="min-w-201px text-left">
            <img src={eventBGUrl} alt="event img" className="rounded" />
            <div className="px-10px pb-12px">
                <div className="mt-4 text-12px font-400 text-left">
                    <img src={calendarSVGUrl} alt="" className="w-13px inline-block align-middle" />
                    <span className="text-[#333] opacity-60 ml-1 align-middle">2021/02/10 ~ 2021/02/28</span>
                </div>
                <h3 className="mt-2 font-600 text-base">{title}</h3>
                <div className="mt-1 text-12px font-400 text-left">
                    <img src={locationSVGUrl} alt="" className="w-12px inline-block align-middle" />
                    <span className="text-[#23BFD4] opacity-60 ml-1 align-middle font-400">宜蘭縣</span>
                </div>
                <div className="text-[#333] bg-[#333] bg-opacity-5 inline-block rounded-100px text-12px py-1 px-2 mt-3">
                    年度活動
                </div>
            </div>
        </div>
    );
}

export default EventItem;
