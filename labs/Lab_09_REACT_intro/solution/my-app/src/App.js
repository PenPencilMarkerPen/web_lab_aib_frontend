import Counter from "./component/ZadOne/zadanieOne";
import Post from "./component/ZadTwo/zadanieTwo";
import PostFour from "./component/zadFour/zadanieTwo";
function App() {
  return (
    <div className="App">
      {/* Первое задание */}
      <Counter />
      {/* Второе задание и третье вместе */}
      {/* <Post /> */}
      {/* Четвертое задание */}
      <PostFour />
    </div>
  );
}

export default App;
