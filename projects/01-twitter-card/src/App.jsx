import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {
  const addAt = (userName) => `@${userName}`;

  return (
    <div className="App">
      <TwitterFollowCard
        formatUserName={addAt}
        isFollowing
        userName="camilohreina"
        name="Camilo Hernández"
      />
      <TwitterFollowCard
        formatUserName={addAt}
        isFollowing={false}
        userName="elonmusk"
        name="Elon Musk"
      />
      <TwitterFollowCard
        formatUserName={addAt}
        isFollowing
        userName="billgates"
        name="Bill Gates"
      />
      );
    </div>
  );
}
