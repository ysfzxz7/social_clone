import { FcLike } from "react-icons/fc";

export default function Feeds(){
    return(
        <>
            <ul className=" space-y-5">
            <h1 className="font-bold text-xl">This is the feeds page</h1>
                {
                    realData.map((feed)=>(
                        <li className="bg-gray-200 p-3 hover:bg-gray-300 cursor-pointer">
                            <h1 className="font-bold">{feed.author}</h1>
                            <div className="flex justify-between">
                                <p>{feed.title}</p>
                                <span className="text-gray-600 text-xs">{feed.timestamp}</span>
                            </div>
                            <p className="text-sm">{feed.content}</p>
                            <div className="flex cursor-pointer  w-1/12 p-2 ">
                                <FcLike size={20} />
                                <h3>{feed.likes}</h3>
                            </div>
                                <h1 className="text-sm mt-5">Comments</h1>
                            <ul className="space-y-5">
                            {feed.comments && feed.comments.map((comm)=>(
                                <li className="bg-fuchsia-100 rounded-lg p-3">
                                    <h1 className="font-bold text-sm">{comm.author}</h1>
                                    <h1 className="text-xs">{comm.content}</h1>
                                </li>
                            ))}
                            </ul>
                        </li>
                        
                    ))
                }
            </ul>
            
        </>
    )
}

const realData = [
    {
      id: 1,
      title: "Exploring the Outdoors",
      content: "Spent the weekend hiking in the mountains. The views were breathtaking!",
      author: "John Doe",
      timestamp: "May 25, 2024",
      likes: 32,
      comments: [
        {
          id: 1,
          author: "Jane Smith",
          content: "Looks amazing! I need to plan a hiking trip soon."
        },
        {
          id: 2,
          author: "David Johnson",
          content: "Great photos! Which trails did you explore?"
        }
      ]
    },
    {
      id: 2,
      title: "Delicious Food Adventure",
      content: "Tried out a new restaurant last night. The food was absolutely divine!",
      author: "Alice Thompson",
      timestamp: "May 26, 2024",
      likes: 45,
      comments: [
        {
          id: 1,
          author: "Robert Davis",
          content: "I've heard great things about that place. What did you order?"
        },
        {
          id: 2,
          author: "Emily Wilson",
          content: "The desserts there are to die for! Did you try any?"
        }
      ]
    },
    {
      id: 3,
      title: "Tech Conference Highlights",
      content: "Attended an amazing tech conference this week. Learned so much!",
      author: "Mark Johnson",
      timestamp: "May 27, 2024",
      likes: 78,
      comments: [
        {
          id: 1,
          author: "Sarah Adams",
          content: "Which speakers did you find most inspiring?"
        },
        {
          id: 2,
          author: "Alexandra Lee",
          content: "I wish I could have been there. Any key takeaways to share?"
        }
      ]
    },
    {
      id: 4,
      title: "Beach Day Fun",
      content: "Spent the whole day at the beach. Perfect weather for sunbathing!",
      author: "Jennifer Brown",
      timestamp: "May 28, 2024",
      likes: 52,
      comments: [
        {
          id: 1,
          author: "Michael Wilson",
          content: "I love the beach! Which beach did you go to?"
        },
        {
          id: 2,
          author: "Jessica Thompson",
          content: "Did you try any water activities like surfing or snorkeling?"
        }
      ]
    },
    {
        id: 1,
        title: "Exploring the Outdoors",
        content: "Spent the weekend hiking in the mountains. The views were breathtaking!",
        author: "John Doe",
        timestamp: "May 25, 2024",
        likes: 32,
        comments: [
          {
            id: 1,
            author: "Jane Smith",
            content: "Looks amazing! I need to plan a hiking trip soon."
          },
          {
            id: 2,
            author: "David Johnson",
            content: "Great photos! Which trails did you explore?"
          }
        ]
      },
      {
        id: 2,
        title: "Delicious Food Adventure",
        content: "Tried out a new restaurant last night. The food was absolutely divine!",
        author: "Alice Thompson",
        timestamp: "May 26, 2024",
        likes: 45,
        comments: [
          {
            id: 1,
            author: "Robert Davis",
            content: "I've heard great things about that place. What did you order?"
          },
          {
            id: 2,
            author: "Emily Wilson",
            content: "The desserts there are to die for! Did you try any?"
          }
        ]
      }
    // Add more realistic data as needed
  ];