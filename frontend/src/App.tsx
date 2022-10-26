import Header from "./components/Header";
import Post from "./components/Post";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { PostProps, PostResponse } from "./interfaces/post";

function App() {
  const HomePage = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const navigate = useNavigate();
    const { signed } = useAuth();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get<PostResponse>(
            "http://localhost:8000/api/posts/"
          );

          setPosts(data.results);
        } catch (error) {
          console.log(error);
        }
      };

      if (!signed) {
        navigate("/login");
      }

      fetchData();
    }, [signed]);

    return (
      <Wrapper>
        <Header />
        {posts.map((post) => (
          <Post {...post} key={post.created_at} />
        ))}
      </Wrapper>
    );
  };

  const { signed } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
