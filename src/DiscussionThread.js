//type rch to iport funtional componenet

import { useParams } from "react-router-dom"
const DiscussionThread = () => {
    const {discussionTopic}= useParams();
    return <div>current topic of discussion {discussionTopic}</div>
}

//json-server --watch db.json --port 6700 

export default DiscussionThread