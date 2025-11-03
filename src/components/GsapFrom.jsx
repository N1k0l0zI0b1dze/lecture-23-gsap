import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const GsapFrom = () => {
    const container = useRef();

    const [playbackSpeed, setPlaybackSpeed] = useState(1);

    const handleSpeedChange = (speed) => {
        setPlaybackSpeed(speed);
        tl5.current.timeScale(speed);
    };

    const handlePlay = () => tl5.current.play();
    const handlePause = () => tl5.current.pause();
    const handleReverse = () => tl5.current.reverse();
    const handleRestart = () => tl5.current.restart();



    const tl1 = useRef();

    const tl5 = useRef();


    useGSAP(() => {

        tl1.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });

        tl1.current
            .to(".seq-box1", { x: 200, duration: 1, backgroundColor: "#ef4444", })
            .to(".seq-box2", { x: 200, duration: 1, backgroundColor: "#f59e0b", })
            .to(".seq-box3", { x: 200, duration: 1, backgroundColor: "#10b981", })
            .to(".seq-box4", { x: 200, duration: 1, backgroundColor: "#10b981", })
    }, { container });

    // EXAMPLE 3: Interactive Controllable Timeline
    useGSAP(
        () => {
            tl5.current = gsap.timeline({ paused: true, repeat: -1 });

            tl5.current
                .to(".ctrl-box1", {
                    x: 100,
                    rotation: 180,
                    duration: 2,
                    ease: "power2.inOut",
                })
                .to(
                    ".ctrl-box2",
                    { x: 100, scale: 1.3, duration: 2, ease: "back.out(1.7)" },
                    "-=0.5"
                )
                .to(
                    ".ctrl-box3",
                    { x: 100, y: -30, duration: 2, ease: "elastic.out(1, 0.3)" },
                    "-=0.5"
                )
                .to(".ctrl-box1, .ctrl-box2, .ctrl-box3", {
                    backgroundColor: "#22c55e",
                    duration: 0.5,
                });
        },
        { scope: container }
    );


    return (
        <div
            ref={container}
            className="min-h-dvh bg-linear-to-br from-blue-400 to-purple-500 p-8"
        >
            {/* Example 1: Sequential */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-2">
                    1️⃣ Sequential Timeline
                </h2>
                <p className="text-purple-200 mb-6">
                    Animations play <strong>one after another</strong> (default
                    behavior)
                </p>
                <div className="bg-slate-800/50 rounded-2xl p-6 h-43 space-y-3">
                    <div className="seq-box1 w-20 h-6 bg-blue-500 rounded-lg"></div>
                    <div className="seq-box2 w-20 h-6 bg-blue-500 rounded-lg"></div>
                    <div className="seq-box3 w-20 h-6 bg-blue-500 rounded-lg"></div>
                    <div className="seq-box4 w-20 h-6 bg-blue-500 rounded-lg"></div>
                </div>
            </div>


            <div className="bg-linear-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 border-green-400/50">
                <h2 className="text-3xl font-bold text-white mb-2">
                    5️⃣ Interactive Timeline Control
                </h2>
                <p className="text-purple-200 mb-6">
                    Control the timeline with buttons and speed!
                </p>

                {/* Animation Area */}
                <div className="bg-slate-800/50 rounded-2xl p-6 h-32 space-y-3 mb-6">
                    <div className="ctrl-box1 w-20 h-6 bg-orange-500 rounded-lg"></div>
                    <div className="ctrl-box2 w-20 h-6 bg-orange-500 rounded-lg"></div>
                    <div className="ctrl-box3 w-20 h-6 bg-orange-500 rounded-lg"></div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <button onClick={handlePlay} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
                        ▶️ Play
                    </button>
                    <button onClick={handlePause} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
                        ⏸️ Pause
                    </button>
                    <button onClick={handleReverse} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
                        ⏪ Reverse
                    </button>
                    <button onClick={handleRestart} className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
                        🔄 Restart
                    </button>
                </div>

                {/* Speed Control */}
                <div className="bg-slate-800/30 p-4 rounded-xl">
                    <h3 className="text-white font-bold mb-3">Speed Control:</h3>
                    <div className="flex gap-2">
                        {[0.25, 0.5, 1, 2, 3].map((speed) => (
                            <button
                                key={speed}
                                onClick={() => handleSpeedChange(speed)}
                                className={`px-4 py-2 rounded-lg font-bold transition-all ${playbackSpeed === speed
                                    ? "bg-blue-500 text-white"
                                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                                    }`}
                            >
                                {speed}x
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GsapFrom
