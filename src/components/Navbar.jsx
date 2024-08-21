import React from "react";


export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
            {/* Left section: Logo and navigation */}
            <div className="flex items-center space-x-4">
                <img
                    src="https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png"
                    alt="Twitch Logo"
                    className="w-10 h-10"
                />
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="hover:text-purple-400">Following</a>
                    <a href="/" className="hover:text-purple-400">Browse</a>
                    <a href="/" className="hover:text-purple-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                    </a>
                </div>
            </div>

            {/* Middle section: Search bar */}
            <div className="flex-grow max-w-md mx-4 flex">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 border py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <div className="bg-gray-700 flex items-center justify-center flex-grow w-9 rounded-br-lg rounded-tr-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </div>
            </div>

            {/* Right section: Profile and other actions */}
            <div className="flex items-center space-x-4">
                <a href=""><svg width="20" height="20" viewBox="0 0 20 20" focusable="false" aria-hidden="true" role="presentation"><path fill="#FFFFFF" fill-rule="evenodd" d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z" clip-rule="evenodd"></path></svg></a>
                <a href=""><svg width="20" height="20" viewBox="0 0 20 20" focusable="false" aria-hidden="true" role="presentation"><path fill="#FFFFFF" fill-rule="evenodd" d="M4 3h12l2 4v10H2V7l2-4zm.236 4H8v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7h3.764l-1-2H5.236l-1 2zM16 9h-2.17A3.001 3.001 0 0 1 11 11H9a3.001 3.001 0 0 1-2.83-2H4v6h12V9z" clip-rule="evenodd"></path></svg></a>
                <a href=""><svg width="20" height="20" viewBox="0 0 20 20" focusable="false" aria-hidden="true" role="presentation"><path fill="#FFFFFF" fill-rule="evenodd" d="M7.828 13 10 15.172 12.172 13H15V5H5v8h2.828zM10 18l-3-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2l-3 3z" clip-rule="evenodd"></path></svg></a>
                <a href=""><svg width="100%" height="20" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" role="presentation" aria-hidden="true" focusable="false" class="ScIconSVG-sc-1q25cff-1 jpczqG"><path fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd" d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"></path></svg></a>
                <button className="flex bg-gray-600 rounded-md h-8 w-48 justify-center items-center"><svg className="me-2 mt-[2.5px]" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path fill="#FFFFFF" d="M10.114 9.622 11 7 7.175 9.323a.382.382 0 0 0 .013.65l.698.405L7 13l3.825-2.323a.382.382 0 0 0-.012-.65l-.699-.405z"></path><path fill="#FFFFFF" fill-rule="evenodd" d="M18 7h-2V4H2v12h14v-3h2V7zm-4-1v3h2v2h-2v3H4V6h10z" clip-rule="evenodd"></path></svg><div>Go Ad-Free for Free</div></button>
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/30"
                        alt="Profile"
                        className="w-8 h-8 rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </nav>
    );
};

