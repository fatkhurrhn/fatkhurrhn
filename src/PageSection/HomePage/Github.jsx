import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Page() {
    return (
        <div>
            <div className="flex justify-between items-center w-full">
                <h2 className="text-[18px] font-bold text-[#d4d4d4]">📊 GitHub Activity</h2>
                <a href="https://github.com/fatkhurrhn" className="text-xs text-zinc-500">
                    View more
                </a>
            </div> <br />
            <div className="bg-gray-100 bg-zinc-900 text-[#d4d4d4] border border-[#252529] p-5 rounded-[11px] max-w-full overflow-x-auto">
                <GitHubCalendar
                    username="fatkhurrhn"
                    blockSize={11.4}
                    colorScheme="dark"
                />
            </div>
        </div>
    );
}
