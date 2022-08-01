import theIcon from '../resources/icon/THE.svg';
import taiwanIcon from '../resources/icon/taiwan.svg';

const Heading = () => (
    <div className="absolute w-full py-17px px-21px flex space-x-8px">
        <img src={theIcon} alt="" />
        <img src={taiwanIcon} alt="" />
    </div>
);

export default Heading;
