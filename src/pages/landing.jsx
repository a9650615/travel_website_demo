import Events from '../compoents/Event/Events';
import Heading from '../compoents/heading';
import HeroSection from '../compoents/HeroSection';
import PopulateCities from '../compoents/PopulateCities';

const Landing = () => (
    <div>
        <Heading />
        <HeroSection />
        <Events titleName="近期活動" items={['2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...']} />
        <Events titleName="熱門景點" items={['九份老街', '不厭亭', '十分瀑布']} />
        <Events titleName="熱門活動" items={['2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...', '2021金崙溫泉季聖誕點...']} />
        <PopulateCities />
        <Events titleName="熱門美食" items={['海洋城活海鮮餐廳', '海洋城活海鮮餐廳', '海洋城活海鮮餐廳']} />
        <Events titleName="熱門住宿" items={['晶華酒店', '凱薩飯店', '福田居民宿']}/>
    </div>
);

export default Landing;
