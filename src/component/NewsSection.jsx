import newsimg1 from "../assets/newsimg1.jpg";
import newsimg2 from "../assets/newsimg2.jpg";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      date: "January 07, 2025",
      source: "Mongabay",
      title: "Conservation Corridors for Cats",
      description: `Latin America's cats are losing their habitat and becoming trapped in small patches. For jaguars, "corridors are an important resource because parks on their own aren't enough," says WCS's Esteban Payán.`,
      image: newsimg1,
    },
    {
      id: 2,
      date: "December 10, 2024",
      source: "The Conversation",
      title: "Goals Into Actions",
      description: "With Canada's unique natural assets come unique responsibilities, says WCS Canada's Justina Ray. The country stands at an important crossroads.",
      image: newsimg2,
    },
  ];

  return (
    <div className="news-section container my-5">
      <h6 className="text-center mb-5 color_primary">IN THE NEWS</h6>

      <div className="row gap-5 justify-content-center">
        {newsItems.map((item) => (
          <div key={item.id} className="col-12 col-md-5">
            <div className="news-card">
              <div className="news-image-wrapper">
                <img src={item.image} alt="" className="news-image" />
              </div>
              <div className="news-content">
                <div className="news-meta">
                  {item.date} | <span className="source">{item.source}</span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
                <button className="read-more-btn">READ THE STORY</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="read-more-news-btn">READ MORE NEWS</button>
      </div>
    </div>
  );
};

export default NewsSection;
