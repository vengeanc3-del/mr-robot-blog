// Mr. Robot Archive prank

const scream = new Audio("assets/calming-sound.mp3");

scream.preload = "auto";
scream.volume = 1.0;

let prankTriggered = false;

document.addEventListener("click", async (event) => {
    const target = event.target.closest("a, button");

    // Ignore clicks that aren't links or buttons.
    if (!target || prankTriggered) {
        return;
    }

    prankTriggered = true;

    // Stop the link from navigating away.
    if (target.tagName === "A") {
        event.preventDefault();
    }

    // Enter fullscreen.
    try {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
        }
    } catch (error) {
        console.log("Fullscreen was blocked by the browser.");
    }

    // Play the scream.
    try {
        scream.currentTime = 0;
        await scream.play();
    } catch (error) {
        console.log("Audio playback was blocked by the browser.");
    }
});