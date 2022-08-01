import Events from '../compoents/Event/Events';
import Heading from '../compoents/heading';
import HeroSection from '../compoents/heroSection';
import PopulateCities from '../compoents/PopulateCities';
import Footer from '../compoents/Footer';

const Landing = () => (
    <div>
        <Heading />
        <HeroSection />
        <Events titleName="近期活動" items={['2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...']} />
        <Events titleName="熱門景點" items={['九份老街', '不厭亭', '十分瀑布', '象山登山步道', '野柳地質公園']} />
        <Events titleName="熱門活動" items={['2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...']} />
        <PopulateCities />
        <Events titleName="熱門美食" items={['海洋城活海鮮餐廳', '金山藷童瑤', '清逸軒庭園風味餐廳', '瑪姿餐飲店']} />
        <Events titleName="熱門住宿" items={['晶華酒店', '凱薩飯店', '福田居民宿', '菁華河畔民宿']}/>
        <Footer />
    </div>
);

export default Landing;
