import React from 'react';

const categories = [
    { name: 'Games', icon: 'gaming.svg' },
    { name: 'IRL', icon: 'irl.svg' },
    { name: 'Music & DJs', icon: 'music.svg' },
    { name: 'Creative', icon: 'creative.svg' },
    { name: 'Esports', icon: 'esports.svg' }
];

const games = [
    { title: 'Overwatch 2', viewers: '75.3K', tags: ['FPS', 'Shooter', 'Action'], image: 'overwatch2.png' },
    { title: 'Just Chatting', viewers: '322K', tags: ['IRL'], image: 'justchatting.jpg' },
    { title: 'Minecraft', viewers: '230K', tags: ['Simulation'], image: 'minecraft.jpg' },
    { title: 'Spectre Divide', viewers: '630', tags: ['FPS', 'Shooter', 'Action'], image: 'spectredivide.jpg' },
    { title: 'Black Myth: Wukong', viewers: '122K', tags: ['RPG', 'Adventure Game'], image: 'wukong.jpg', new: true },
    { title: 'Special Events', viewers: '10.4K', tags: ['IRL'], image: 'specialevents.jpg' },
    { title: 'Marvel Rivals', viewers: '3.4K', tags: ['Shooter', 'Strategy'], image: 'marvelrivals.jpg', new: true },
    { title: 'ELDEN RING', viewers: '12.3K', tags: ['RPG', 'Adventure Game'], image: 'eldenring.jpg' },
    { title: 'VALORANT', viewers: '55.5K', tags: ['FPS', 'Shooter', 'Action'], image: 'valorant.png' },
    { title: 'Hunt: Showdown', viewers: '24.7K', tags: ['FPS', 'Shooter', 'Action'], image: 'huntshowdown.jpg' },
    { title: 'League of Legends', viewers: '84.1K', tags: ['RPG', 'Strategy', 'MOBA'], image: 'lol.png' },
    { title: 'Fortnite', viewers: '61.5K', tags: ['Shooter', 'Action'], image: 'fortnite.jpg' }
];

export default function Body() {
    return (
        <div className="bg-zinc-900 text-white p-4 w-full flex-grow">
            {/* Header */}
            <h1 className="text-4xl font-bold mb-6">Browse</h1>

            {/* Tabs */}
            <div className="lg:grid  hidden lg:grid-cols-5 mb-6 justify-evenly ">
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center px-4 py-2 rounded-md bg-[#5c16c5] cursor-pointer h-12 w-44">
                        <span className='font-bold'>{category.name}</span>
                        <img className="m-8" src={category.icon} alt="" />
                    </div>
                ))}
            </div>

            {/* Categories Section */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                    <span className="cursor-pointer text-gray-400">Categories</span>
                    <span className="cursor-pointer text-gray-400">Live Channels</span>
                </div>
                <div className="flex space-x-4">
                    <input 
                        type="text" 
                        placeholder="Search Category Tags" 
                        className="px-4 py-2 rounded-md bg-zinc-800 text-white outline-none" 
                    />
                    <div className="relative">
                        <select className="px-4 py-2 rounded-md bg-zinc-800 text-white cursor-pointer">
                            <option>Recommended For You</option>
                            <option>Most Viewed</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map((game, index) => (
                    <div key={index} className="relative">
                        <img 
                            src={`/${game.image}`} 
                            alt={game.title} 
                            className="rounded-md w-full object-cover"
                        />
                        {game.new && (
                            <span className="absolute top-2 right-2 text-xs text-black rounded-full bg-pink-400 px-2 py-0.5 font-semibold">
                                NEW
                            </span>
                        )}
                        <div className="mt-2">
                            <h3 className="text-sm font-bold">{game.title}</h3>
                            <p className="text-xs text-gray-400">{game.viewers} viewers</p>
                            <div className="flex space-x-1 mt-1">
                                {game.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-zinc-800 text-xs rounded-md px-2 py-0.5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

