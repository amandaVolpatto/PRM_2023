import TopicCardBoby from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import TopicCardActions from "../TopicCardActions";

type TopicCardProps = {
    topic: AnalyserNode
}

function TopicCard({
    topic
}: TopicCardProps) {
    return (
        <div id="topic-card">
            <TopicCardHeader />
            <TopicCardBoby />
            <TopicCardActions />
        </div>
    )
}

export default TopicCard;