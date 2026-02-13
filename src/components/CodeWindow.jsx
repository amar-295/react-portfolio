import React from 'react';

const CodeWindow = () => {
    return (
        <div className="w-full max-w-sm mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform hover:scale-[1.02] transition-transform duration-500 hover:shadow-accent-dark/10 dark:hover:shadow-accent-teal/20">
            {/* Window Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
                <div className="ml-4 flex-1 text-center pr-12">
                    <span className="text-[10px] text-gray-400 font-mono bg-gray-900/50 px-3 py-1 rounded-md border border-gray-700/50">Developer.jsx</span>
                </div>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto bg-gray-900/95">
                <pre className="font-mono text-xs sm:text-sm leading-loose text-gray-300">
                    <code>
                        <span className="text-purple-400">const</span> <span className="text-yellow-300">Developer</span> <span className="text-purple-400">=</span> <span className="text-blue-400">{"{"}</span>{'\n'}
                        {'  '}<span className="text-red-300">name</span>: <span className="text-green-300">"Amarnath"</span>,{'\n'}
                        {'  '}<span className="text-red-300">role</span>: <span className="text-green-300">"Frontend Dev"</span>,{'\n'}
                        {'  '}<span className="text-red-300">focus</span>: <span className="text-green-300">"UX & Accessibility"</span>,{'\n'}
                        {'  '}<span className="text-red-300">stack</span>: <span className="text-blue-400">[</span>{'\n'}
                        {'    '}<span className="text-green-300">"React"</span>, <span className="text-green-300">"Tailwind"</span>,{'\n'}
                        {'    '}<span className="text-green-300">"Shadcn"</span>, <span className="text-green-300">"Framer"</span>{'\n'}
                        {'  '}<span className="text-blue-400">]</span>,{'\n'}
                        {'  '}<span className="text-red-300">hardWorker</span>: <span className="text-purple-400">true</span>{'\n'}
                        <span className="text-blue-400">{"}"}</span>;
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeWindow;
