import { useState, useEffect } from "react"
import "../styles/About.css"

interface Post {
  id: number
  title: string
  body: string
}

const About = () => {
  const [data, setData] = useState<Post[]>([])
  const [visibleItems, setVisibleItems] = useState<number>(12)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json: Post[]) => setData(json))
  }, []);

  const showMoreItems = () => {
    setVisibleItems((prev) => prev + 12)
  };

  return (
    <div className="about-page">
      <h1>Posts</h1>
      <div className="grid-container">
        {data.slice(0, visibleItems).map((item) => (
          <div className="grid-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      {visibleItems < data.length && (
        <button className="show-more-button" onClick={showMoreItems}>
          Show More
        </button>
      )}
    </div>
  );
};

export default About;
