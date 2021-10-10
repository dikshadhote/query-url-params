
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Nested Routes:
1.Display content without changing view or url
2.Discussions>DiscussionThread
3. use const {path,url}= useRouteMatch() for nested page routing
4. pass variable to another file using <Route path={`${path}/:discussionTopic`}>
5. Use variable in another file using const {discussionTopic}= useParams();

API
import axios : import axios from 'axios';
Two ways > local and setting remote URL
1.using url

axios.get('https://jsonplaceholder.typicode.com/todos').then().catch();
2. local path
 axios.get('http://localhost:3004/comments').then( ).catch();