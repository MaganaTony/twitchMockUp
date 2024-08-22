import React from "react";

const followedChannels = [
    {
        name: "shroud",
        game: "Black Myth: Wukong",
        viewers: "22.7K",
        live: true,
        image: "https://i.pravatar.cc/50?img=1",
    },
    {
        name: "Markzzy",
        game: "Black Myth: Wukong",
        viewers: "2.1K",
        live: true,
        image: "https://i.pravatar.cc/50?img=2",
    },
    {
        name: "chocoTaco",
        game: "Escape from Tarkov",
        viewers: "9.8K",
        live: false,
        image: "https://i.pravatar.cc/50?img=3",
    },
    {
        name: "DrDisrespect",
        game: "Call of Duty: Warzone",
        viewers: "15.3K",
        live: true,
        image: "https://i.pravatar.cc/50?img=4",
    },
    {
        name: "Asmongold",
        game: "World of Warcraft",
        viewers: "7.2K",
        live: false,
        image: "https://i.pravatar.cc/50?img=5",
    },
    // Add more channels as needed
];

const recommendedChannels = [
    {
        name: "Mau5tink",
        game: "Guild Wars 2",
        viewers: "1.7K",
        live: true,
        image: "https://i.pravatar.cc/50?img=6",
    },
    {
        name: "Flats",
        game: "Overwatch 2",
        viewers: "17.5K",
        live: true,
        image: "https://i.pravatar.cc/50?img=7",
    },
    {
        name: "LIRIK",
        game: "Grand Theft Auto V",
        viewers: "5.3K",
        live: false,
        image: "https://i.pravatar.cc/50?img=8",
    },
    {
        name: "TSM_ImperialHal",
        game: "Apex Legends",
        viewers: "3.8K",
        live: true,
        image: "https://i.pravatar.cc/50?img=9",
    },
    // Add more channels as needed
];

const Aside = () => {
    return (
        <aside className="bg-zinc-800 text-white w-72 py-4 px-2 overflow-y-auto h-screen">
            {/* For You Section */}
            <div className="mb-4 ms-3">
                <div className="flex justify-between">
                <h2 className="text-lg font-semibold text-white">For You</h2>
                <svg className="size-[1.5rem] mt-1" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" role="presentation" aria-hidden="true" focusable="false" ><g><path fill="#FFFFFF" d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g></svg>
                </div>
                <div className="mt-2">
                    <div className="flex items-center mb-2">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Open stories"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="ml-3">
                            <p className="text-sm text-purple-500/80">Open stories</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-t pt-5 pb-2 border-black mb-4 px-1 bg-zinc-900/55 w-auto">
                <div className="flex gap-3 justify-between">
                    <span className='text-black rounded-full mt-[6px] bg-pink-400 w-11 h-5 font-semibold text-[10px] flex items-center justify-center'>
                        NEW
                    </span>

                    <span className="text-white font-bold text-lg mb-4 -ml-16">
                        Sort Options
                    </span>
                    <svg
                        className="size-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <p className="mb-4 text-white/75 text-sm font-medium">Click above to reorder your <br></br> followed channels.</p>
            </div>

            {/* Followed Channels Section */}
            <div className="mb-4 ms-3">
                <h2 className="text-sm font-semibold text-white">FOLLOWED CHANNELS</h2>
                <ul className="mt-2">
                    {followedChannels.map((channel, index) => (
                        <li
                            key={index}
                            className="flex items-center mb-2 hover:bg-gray-800 rounded-lg p-2 cursor-pointer"
                        >
                            <img
                                src={channel.image}
                                alt={`${channel.name} profile`}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="ml-3">
                                <p className="text-sm font-semibold">{channel.name}</p>
                                <p className="text-xs text-gray-400">{channel.game}</p>
                            </div>
                            {channel.live ? (
                                <div className="ml-auto text-sm text-red-600 flex items-center">
                                    {channel.viewers}
                                    <div className="bg-red-600 rounded-full w-2.5 h-2.5 ml-2"></div>
                                </div>
                            ) : (
                                <div className="ml-auto text-sm text-gray-400">Offline</div>
                            )}
                        </li>
                    ))}
                </ul>
                <p className="text-purple-500 text-sm cursor-pointer hover:underline mt-2">
                    Show More
                </p>
            </div>

            {/* Recommended Channels Section */}
            <div className="ms-3">
                <h2 className="text-sm font-semibold text-white">
                    RECOMMENDED CHANNELS
                </h2>
                <ul className="mt-2">
                    {recommendedChannels.map((channel, index) => (
                        <li
                            key={index}
                            className="flex items-center mb-2 hover:bg-gray-800 rounded-lg p-2 cursor-pointer"
                        >
                            <img
                                src={channel.image}
                                alt={`${channel.name} profile`}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="ml-3">
                                <p className="text-sm font-semibold">{channel.name}</p>
                                <p className="text-xs text-gray-400">{channel.game}</p>
                            </div>
                            {channel.live ? (
                                <div className="ml-auto text-sm text-red-600 flex items-center">
                                    {channel.viewers}
                                    <div className="bg-red-600 rounded-full w-2.5 h-2.5 ml-2"></div>
                                </div>
                            ) : (
                                <div className="ml-auto text-sm text-gray-400">Offline</div>
                            )}
                        </li>
                    ))}
                </ul>
                <p className="text-purple-500 text-sm cursor-pointer hover:underline mt-2">
                    Show More
                </p>
            </div>
        </aside>
    );
};

export default Aside;
