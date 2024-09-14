import { Route, Routes } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";

import useAxiosFetch from "./hooks/useAxiosFetch";


function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, loading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);
  return (
    <div className="App">
      <Header title="平凡的托马斯" />
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home loading={loading} fetchError={fetchError} />}
        />
        <Route exact path="/post" element={<NewPost />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
