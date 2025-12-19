"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarGroup5() {
  const users = [
    { name: "Olivia Rhye", image: "https://randomuser.me/api/portraits/women/14.jpg" },
    { name: "Phoenix Baker", image: "https://randomuser.me/api/portraits/men/13.jpg" },
    { name: "Lana Steiner", image: "https://randomuser.me/api/portraits/women/16.jpg" },
    { name: "Natali Craig", image: "https://randomuser.me/api/portraits/men/23.jpg" },
    { name: "Ava Wright", image: "https://randomuser.me/api/portraits/women/18.jpg" },
    { name: "Zaid Schwartz", image: "https://randomuser.me/api/portraits/men/19.jpg" },
    { name: "Additional Users", count: 3 },
  ];

  return (
    <div className="flex items-center -space-x-2 *:ring-3 *:ring-background">
      {users.slice(0, 4).map((user, index) => {
        // pick a background color by index to give each avatar a colorful backdrop
        const bgClasses = [
          "bg-pink-300",
          "bg-amber-300",
          "bg-sky-300",
          "bg-emerald-300",
        ];
        const ringClasses = ["ring-pink-200", "ring-amber-200", "ring-sky-200", "ring-emerald-200"];
        const bg = bgClasses[index % bgClasses.length];
        const ring = ringClasses[index % ringClasses.length];

        return (
          <Avatar key={index} className={`${bg} ${ring} relative`}> 
            <AvatarImage src={user.image} alt={user.name} className="bg-transparent" />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        );
      })}
      {users.length > 4 && (
        <Avatar className="z-10 text-sm font-medium text-muted-foreground bg-gray-200">
          <AvatarFallback>
            +{users.slice(4).reduce((acc, user) => acc + (user.count || 1), 0)}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
