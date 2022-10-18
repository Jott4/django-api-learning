import Header from "./components/Header";
import Post, { PostProps } from "./components/Post";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
function App() {
  const posts: PostProps[] = [
    {
      user: {
        username: "loremipsum",
        avatar: "https://picsum.photos/200",
      },
      post: {
        createdAt: "01/01/1970",
        location: "Lorem ipsum",
        description: "Lorem ipsum",
      },
      images: ["https://picsum.photos/1080/1920"],
    },
  ];

  return (
    // <Wrapper>
    //   <Header />
    //   {posts.map((post) => (
    //     <Post {...post} key={post.post.createdAt} />
    //   ))}
    // </Wrapper>
    <Login />
  );
}

export default App;
