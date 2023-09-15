import RecentStories from "./RecentStories/Index";
import FeaturedStory from "./FeaturedStory/Index";
import styles from './featuredrecentstory.module.scss';

const Index = () => {
    return <div className={styles.featuredrecentstory}>
        <div className={styles.featuredstory}>
            <FeaturedStory />
        </div>
        <div className={styles.recenthistories}>
            <RecentStories />
        </div>

    </div> 

}

export default Index;