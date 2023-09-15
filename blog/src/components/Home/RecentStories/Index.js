import Stories from './data.json'
import StoryListItem from './StoryListItem/Index'
import styles from './recentstories.module.scss';

const RecentStories = () => {

    return <div className={styles.recentstories}>
       { Stories.map(story => <StoryListItem featuredImage="https://s3.amazonaws.com/www-inside-design/uploads/2023/03/Frame-1-810x810.jpg" title={story.title} authorType="Collaborator" description={story.description} />) }
    </div>
}

export default RecentStories;