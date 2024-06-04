export default function Notifications(){

    return (
        <>
            <div>
                <h1>Notifications</h1>
                <div className="">
                    <ul className="space-y-2 px-5">
                        {notificationsData.map((notif)=>(
                            <li className= {`${notif.read === false ? 'bg-gray-200' : 'bg-white'} px-3 py-2 cursor-pointer`}>
                                <h1 className="text-xs font-bold">{notif.title}</h1>
                                <h1 className="text-lg">{notif.message}</h1>
                                <h1 className="text-gray-500 text-xs ">{notif.timestamp}</h1>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}



const notificationsData = [
    {
      id: 1,
      title: "New Message",
      message: "You have received a new message from John Doe.",
      timestamp: "May 25, 2024",
      read: false,
    },
    {
      id: 2,
      title: "Friend Request",
      message: "You have a pending friend request from Alice Thompson.",
      timestamp: "May 24, 2024",
      read : false
    },
    {
      id: 3,
      title: "Payment Received",
      message: "You have received a payment of $50.00.",
      timestamp: "May 23, 2024"
    },
    {
      id: 4,
      title: "New Task",
      message: "A new task has been assigned to you.",
      timestamp: "May 22, 2024",
      read: false,
    },
    {
      id: 5,
      title: "Product Update",
      message: "One of your products has been updated. Check the details.",
      timestamp: "May 21, 2024"
    },
    {
      id: 6,
      title: "Event Reminder",
      message: "Reminder: You have an event tomorrow at 5 PM.",
      timestamp: "May 20, 2024"
    },
    {
      id: 7,
      title: "New Order",
      message: "You have received a new order. Process it soon.",
      timestamp: "May 19, 2024"
    },
    {
      id: 8,
      title: "Account Verification",
      message: "Please verify your account to access additional features.",
      timestamp: "May 18, 2024"
    },
    {
      id: 9,
      title: "System Maintenance",
      message: "Scheduled maintenance will occur on May 17, 2024.",
      timestamp: "May 17, 2024"
    },
    {
      id: 10,
      title: "New Comment",
      message: "Someone commented on your post. Check it out.",
      timestamp: "May 16, 2024"
    },
    {
      id: 11,
      title: "Account Expiration",
      message: "Your account will expire in 3 days. Renew now.",
      timestamp: "May 15, 2024"
    },
    {
      id: 12,
      title: "Discount Offer",
      message: "Get 20% off on your next purchase with the code 'SUMMER20'.",
      timestamp: "May 14, 2024"
    },
    {
      id: 13,
      title: "New Subscriber",
      message: "You have a new subscriber to your newsletter.",
      timestamp: "May 13, 2024"
    },
    {
      id: 14,
      title: "Shipping Update",
      message: "Your order has been shipped. Track the package.",
      timestamp: "May 12, 2024"
    },
    {
      id: 15,
      title: "Event Cancellation",
      message: "The upcoming event has been canceled due to unforeseen circumstances.",
      timestamp: "May 11, 2024"
    },
    {
      id: 16,
      title: "Server Downtime",
      message: "There will be a scheduled server downtime on May 10, 2024.",
      timestamp: "May 10, 2024"
    },
    {
      id: 17,
      title: "Product Review",
      message: "A customer has left a review for your product.",
      timestamp: "May 9, 2024"
    },
    {
      id: 18,
      title: "New Event",
      message: "A new event has been scheduled for next week.",
      timestamp: "May 8, 2024"
    },
    {
      id: 19,
      title: "Account Update",
      message: "Your account information has been updated successfully.",
      timestamp: "May 7, 2024"
    },
    {
      id: 20,
      title: "Product Sale",
      message: "One of your products has been sold. Check the details.",
      timestamp: "May 6, 2024"
    }
  ];