import Container from './Container';
import theIcon from '../resources/icon/THE.svg';
import taiwanIcon from '../resources/icon/taiwan.svg';

const Heading = () => (
    <Container>
        <div className="absolute w-full py-17px px-21px flex space-x-8px z-30">
            <img src={theIcon} alt="" />
            <img src={taiwanIcon} alt="" />
        </div>
    </Container>
);

export default Heading;
