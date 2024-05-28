const birds = [
  {
    "id": 1,
    "name": "Japanese White Eye",
    "wingspan": "5.1-5.5 inches",
    "weight": "0.3-0.4 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1668198624500-b3a3286d0649?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjB3aGl0ZSUyMGV5ZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 2,
    "name": "Red-crowned Crane",
    "wingspan": "87-100 inches",
    "weight": "17-25 lbs",
    "location": "Hokkaido, Japan",
    "image": "https://plus.unsplash.com/premium_photo-1661899540706-3b8ef14df368?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVkJTIwY3Jvd25lZCUyMGNyYW5lfGVufDB8fDB8fHww"
  },
  {
    "id": 3,
    "name": "Eurasian Sparrowhawk",
    "wingspan": "23-30 inches",
    "weight": "4.9-10.8 oz",
    "location": "Eurasia",
    "image": "https://plus.unsplash.com/premium_photo-1667685540549-576658d923b2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXVyYXNpYW4lMjBzcGFycm93aGF3a3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 4,
    "name": "Japanese Pygmy Woodpecker",
    "wingspan": "10-12 inches",
    "weight": "0.7-1 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1664302729935-962ba55db15a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjBweWdteSUyMHdvb2RwZWNrZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 5,
    "name": "Steller's Sea Eagle",
    "wingspan": "78-96 inches",
    "weight": "11-20 lbs",
    "location": "Northeast Asia",
    "image": "https://plus.unsplash.com/premium_photo-1661876880987-ba2efad30296?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RlbGxlcidzJTIwc2VhJTIwZWFnbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 6,
    "name": "Oriental Stork",
    "wingspan": "83-94 inches",
    "weight": "6-10 lbs",
    "location": "Eastern Asia",
    "image": "https://plus.unsplash.com/premium_photo-1661963709469-90b3a2ee4b38?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JpZW50YWwlMjBzdG9ya3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 7,
    "name": "Black-faced Spoonbill",
    "wingspan": "47-52 inches",
    "weight": "2-3 lbs",
    "location": "Eastern Asia",
    "image": "https://plus.unsplash.com/premium_photo-1675356730958-7344820f6cfa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBmYWNlZCUyMHNwb29uYmlsbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 8,
    "name": "Mandarin Duck",
    "wingspan": "25-28 inches",
    "weight": "1.2-1.8 lbs",
    "location": "East Asia",
    "image": "https://plus.unsplash.com/premium_photo-1700028097815-d42c0267bcae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuZGFyaW4lMjBkdWNrfGVufDB8fDB8fHww"
  },
  {
    "id": 9,
    "name": "Ryukyu Scops Owl",
    "wingspan": "18-21 inches",
    "weight": "3.5-5 oz",
    "location": "Ryukyu Islands, Japan",
    "image": "https://plus.unsplash.com/premium_photo-1664304409780-6d31241e9058?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnl1a3l1JTIwc2NvcHMlMjBvd2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 10,
    "name": "Japanese Paradise Flycatcher",
    "wingspan": "9-10 inches",
    "weight": "0.5-0.7 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1712067481492-ecdcd1d39a18?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjBwYXJhZGlzZSUyMGZseWNhdGNoZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 11,
    "name": "Amami Woodcock",
    "wingspan": "18-20 inches",
    "weight": "5.3-7.4 oz",
    "location": "Amami Islands, Japan",
    "image": "https://plus.unsplash.com/premium_photo-1667238654062-9885fbaf040f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1hbWklMjB3b29kY29ja3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 12,
    "name": "Japanese Grosbeak",
    "wingspan": "10-12 inches",
    "weight": "1.2-1.5 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1667239367785-fe20d7563248?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjBncm9zYmVha3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 13,
    "name": "Blakiston's Fish Owl",
    "wingspan": "78-80 inches",
    "weight": "6-10 lbs",
    "location": "Northeast Asia",
    "image": "https://plus.unsplash.com/premium_photo-1661822963839-f0d269357d09?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ymxha2lzdG9uJ3MlMjBmaXNoJTIwb3dsfGVufDB8fDB8fHww"
  },
  {
    "id": 14,
    "name": "Japanese Robin",
    "wingspan": "7.5-9 inches",
    "weight": "0.6-0.7 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1667239480005-0a2b5a98471b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjByb2JpbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 15,
    "name": "Copper Pheasant",
    "wingspan": "24-27 inches",
    "weight": "2.4-3.3 lbs",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1667239109733-2e21ca044481?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29wcGVyJTIwcGhlYXNhbnR8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 16,
    "name": "Lidth's Jay",
    "wingspan": "15-16 inches",
    "weight": "7-8 oz",
    "location": "Amami Islands, Japan",
    "image": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/319368931/900"
  },
  {
    "id": 17,
    "name": "Japanese Waxwing",
    "wingspan": "12-14 inches",
    "weight": "1.6-1.9 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1676070096479-4460a9ba20d1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjB3YXh3aW5nfGVufDB8fDB8fHww"
  },
  {
    "id": 18,
    "name": "Japanese Green Pigeon",
    "wingspan": "18-20 inches",
    "weight": "8-10 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1667099521652-1e89d8fc7b77?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjBncmVlbiUyMHBpZ2VvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 19,
    "name": "Okinawa Rail",
    "wingspan": "15-17 inches",
    "weight": "12-13 oz",
    "location": "Okinawa, Japan",
    "image": "https://plus.unsplash.com/premium_photo-1668061706967-9e19e3ad5479?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2tpbmF3YSUyMHJhaWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    "id": 20,
    "name": "Fairy Pitta",
    "wingspan": "10-11 inches",
    "weight": "2-2.5 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1710248799422-7896ab07f0bc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFpcnklMjBwaXR0YXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id": 21,
    "name": "Japanese Accentor",
    "wingspan": "8-9 inches",
    "weight": "0.6-0.8 oz",
    "location": "Japan",
    "image": "https://plus.unsplash.com/premium_photo-1670689708070-7cd860ad81a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjBhY2NlbnRvcnxlbnwwfHwwfHx8MA%3D%3D"
  }
];
