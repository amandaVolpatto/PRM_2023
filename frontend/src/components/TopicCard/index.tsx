import TopicCardBoby from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import TopicCardActions from "../TopicCardActions";


function TopicCard() {
    return (
        <div id="topic-card">
            <TopicCardHeader/>
            <TopicCardBoby/>
            <TopicCardActions/>
        </div>
    )    
}

export default TopicCard;