import searchIconUrl from '../resources/icon/search-icon.svg';

const SearchBar = () => (
    <div className="px-4 md:(flex bg-white w-full border-gray rounded px-0)">
        <div className="flex justify-center bg-white w-full border-gray rounded">
            <div className="py-2 px-6 flex flex-col text-left flex-1">
                <label className="text-[#333333] opacity-40">地點</label>
                <span>全台灣</span>
            </div>
            <div className="border-l-[#333333] border-l border-opacity-20 my-5px"></div>
            <div className="py-2 px-6 flex flex-col text-left flex-1">
                <label className="text-[#333333] opacity-40">分類</label>
                <span>景點</span>
            </div>
        </div>
        <div className="border-l-[#333333] border-l border-opacity-20 my-5px hidden md:block"></div>
        <div className="flex justify-center bg-white w-full border-gray rounded mt-1 overflow-hidden h-full md:mt-0">
            <input type="text" className="w-full py-2 px-6 text-left" placeholder="試試輸入關鍵字" />
            <button className="bg-[#23BFD4] min-h-55px px-40.6px h-full md:min-h-64px">
                <img src={searchIconUrl} alt="" width="16.42px" height="16.42px" />
            </button>
        </div>
    </div>
);

export default SearchBar;
