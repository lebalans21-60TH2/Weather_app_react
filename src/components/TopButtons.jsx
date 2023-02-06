import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Ho Chi Minh",
      name: "TP.Hồ Chí Minh"
    },
    {
      id: 2,
      title: "Hoi An",
      name: "Hội An"
    },
    {
      id: 3,
      title: "Da Nang",
      name: "Đà Nẵng"
    },
    {
      id: 4,
      title: "Ha Noi",
      name: "Hà Nội"
    },
    {
      id: 5,
      title: "Quang Tri",
      name: "Quảng Trị"
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
