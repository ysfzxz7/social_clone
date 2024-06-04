export default function Photos() {

  return (
    <div className="p-5 space-y-2 bg-white">
      <div className="flex justify-between items-center  ">
        <h1>Photos</h1>
        <h1 className="text-xs">See More Photos</h1>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-1">
          {userPhotos.map((photos) => (
            <li className="" key={photos.id}>
              <img className="  object-cover h-28 w-24 hover:object-right-top transition-all duration-500" src={photos.url} alt={photos.description} srcset="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


const userPhotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1525381098317-fc5822b4c483?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A beautiful sunset',
    tags: ['nature', 'sunset']
  },
  {
    id: 2,
    url: 'https://plus.unsplash.com/premium_photo-1661952525120-a01282212dfc?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A cute puppy',
    tags: ['animals', 'pets']
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1634587653129-2a96ebef737b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'City skyline at night',
    tags: ['city', 'night']
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Vibrant flower garden',
    tags: ['nature', 'flowers']
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Adventurous mountain hike',
    tags: ['nature', 'mountains', 'hiking']
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Delicious food platter',
    tags: ['food', 'cuisine']
  },
  {
    id: 7,
    url: 'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Colorful street art',
    tags: ['art', 'street']
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Serenity by the beach',
    tags: ['nature', 'beach']
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Stunning architectural marvel',
    tags: ['architecture', 'design']
  }
];