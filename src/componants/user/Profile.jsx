import Photos from "./Photos";
import TopCover from "./TopCover";

export default function User(){

    return (
        <div className="p-5 lg:w-8/12 md:w-10/12 m-auto space-y-2 ">
            <TopCover data={userData} />
            <div className="flex  space-x-2">
              <div className="w-5/12 border">
                <Photos />
              </div>
              <div className="w-7/12 border ">right</div>
            </div>
        </div>
    )
}


const userData = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    address: "123 Street, City",
    phone: "123-456-7890",
    cover: 'https://timelinecovers.pro/facebook-cover/download/cute-birds-facebook-cover.jpg',
    avatar: "https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_kiri_16x9_1098_04_39d940d1.jpeg?region=0%2C0%2C1920%2C1080",
    hobbies: ["Reading", "Traveling"],
    friends: [
      {
        id: 2,
        name: "Alice Thompson",
        avatar: "https://example.com/avatar2.jpg"
      },
      {
        id: 3,
        name: "Mark Smith",
        avatar: "https://example.com/avatar3.jpg"
      },
      {
        id: 4,
        name: "Emily Johnson",
        avatar: "https://example.com/avatar4.jpg"
      }
    ],
    posts: [
      {
        id: 1,
        title: "My First Post",
        content: "This is my first post on this platform.",
        timestamp: "May 25, 2024"
      },
      {
        id: 2,
        title: "Travel Memories",
        content: "Sharing some beautiful memories from my recent trip.",
        timestamp: "May 22, 2024"
      },
      // Add more posts as needed
    ],
    albums: [
      {
        id: 1,
        title: "Family Vacation",
        photos: [
          "https://example.com/photo1.jpg",
          "https://example.com/photo2.jpg",
          "https://example.com/photo3.jpg"
        ]
      },
      {
        id: 2,
        title: "Nature's Beauty",
        photos: [
          "https://example.com/photo4.jpg",
          "https://example.com/photo5.jpg",
          "https://example.com/photo6.jpg"
        ]
      },
      // Add more albums as needed
    ],
    socialMedia: {
      facebook: "https://www.facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe"
    },
    bio: "Passionate traveler and avid reader. Always seeking new adventures.",
    education: [
      {
        degree: "Bachelor of Science",
        institution: "University of ABC",
        year: 2015
      },
      {
        degree: "Master of Arts",
        institution: "XYZ University",
        year: 2017
      }
      // Add more education entries as needed
    ],
    workExperience: [
      {
        company: "ABC Corporation",
        position: "Software Engineer",
        startDate: "2017-01-01",
        endDate: "2019-12-31"
      },
      {
        company: "XYZ Inc.",
        position: "Senior Developer",
        startDate: "2020-01-01",
        endDate: null // Ongoing employment
      }
      // Add more work experience entries as needed
    ],
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    interests: ["Photography", "Hiking", "Cooking"],
    website: "https://www.johndoe.com",
    achievements: ["Best Employee of the Year 2018", "Published Author"],
    projects: [
      {
        name: "Project A",
        description: "Developed a web application for managing inventory.",
        url: "https://www.example.com/project-a"
      },
      {
        name: "Project B",
        description: "Created a mobile app for tracking fitness activities.",
        url: "https://www.example.com/project-b"
      }
      // Add more project entries as needed
    ],
    eventAttendance: [
      {
        eventName: "Tech Conference 2023",
        date: "2023-09-15",
        location: "City XYZ"
      },
      {
        eventName: "Startup Summit",
        date: "2024-03-20",
        location: "Town ABC"
      }
      // Add more event attendance entries as needed
    ]
  };
  
  