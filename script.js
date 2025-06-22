// Cookie Banner Hell - Progressive Absurdity System
class CookieBannerHell {
    constructor() {
        this.currentLevel = 0;
        this.maxLevel = 10;
        this.overlay = document.getElementById('cookie-overlay');
        this.container = document.getElementById('cookie-banner-container');
        this.activeBanners = [];
        
        // Cookie banner data - each level gets more ridiculous
        this.bannerData = [
            {
                title: "Cookie Notice",
                text: "We use cookies to enhance your browsing experience and analyze site traffic. By clicking 'Accept', you consent to our use of cookies.",
                acceptText: "Accept",
                declineText: "Decline"
            },
            {
                title: "Enhanced Data Experience",
                text: "Our sophisticated algorithms require additional data points to optimize your user journey. By proceeding, you acknowledge our right to collect metadata about your digital preferences.",
                acceptText: "Proceed",
                declineText: "Reconsider"
            },
            {
                title: "⚠️ Data Acquisition Protocol",
                text: "WARNING: Continued usage implies consent to our comprehensive behavioral analysis. We may need to examine your browser history, typing patterns, and general life choices.",
                acceptText: "I Consent",
                declineText: "Escape"
            },
            {
                title: "🍪 SUPER IMPORTANT COOKIE ALERT! 🍪",
                text: "HEY THERE BUDDY!!! We REALLY need to know EVERYTHING about you! Like, what's your favorite color? Do you prefer cats or dogs? What did you have for breakfast? This is TOTALLY normal and NOT weird at all!",
                acceptText: "SURE THING!",
                declineText: "NO WAY!"
            },
            {
                title: "🌈 RAINBOW COOKIE EXTRAVAGANZA 🌈",
                text: "✨ MAGICAL COOKIES ✨ need your permission to sprinkle digital fairy dust on your browser! We promise to only use your data for summoning unicorns and creating internet rainbows! 🦄🌈✨",
                acceptText: "✨ SPARKLE YES ✨",
                declineText: "😢 Sad No"
            },
            {
                title: "> MATRIX_COOKIES.EXE",
                text: "> Initiating cookie protocol...\n> Accessing user data streams...\n> WARNING: Reality may be compromised\n> Do you wish to proceed with the red pill?",
                acceptText: "> EXECUTE",
                declineText: "> ABORT"
            },
            {
                title: "Cookie Error",
                text: "A fatal exception 0xCOOKIE has occurred at 0028:C00K1E5. The current application will be terminated.\n\n* Press any key to continue\n* Press CTRL+ALT+DEL to restart your computer\n* Press Accept to ignore this error",
                acceptText: "Accept",
                declineText: "CTRL+ALT+DEL"
            },
            {
                title: "G̴L̷I̸T̵C̴H̷E̶D̸ ̴C̷O̸O̵K̶I̷E̴S̵",
                text: "W̶E̷ ̸N̴E̶E̷D̵ ̵Y̸O̶U̴R̷ ̸S̵O̶U̷L̴.̷.̸.̶ ̵I̸ ̴M̷E̸A̵N̶ ̷C̴O̵O̶K̸I̶E̵ ̸C̶O̷N̴S̷E̵N̶T̸!̴ ̷T̵H̸E̴ ̸D̵I̶G̶I̸T̵A̴L̷ ̴R̸E̶A̵L̸M̶ ̵H̶U̷N̶G̸E̷R̵S̴!̸",
                acceptText: "F̴E̷E̸D̵ ̸I̶T̷",
                declineText: "R̸U̷N̶"
            },
            {
                title: "🌀 SPINNING COOKIE VORTEX 🌀",
                text: "YOU'VE ENTERED THE COOKIE DIMENSION! THERE IS NO ESCAPE! ONLY ETERNAL SPINNING AND COOKIE CONSENT! WE DEMAND YOUR FIRSTBORN'S NETFLIX PASSWORD!",
                acceptText: "🌀 SPIN ME 🌀",
                declineText: "HELP!"
            },
            {
                title: "🔥 FINAL BOSS: ULTIMATE COOKIE OVERLORD 🔥",
                text: "CONGRATULATIONS! YOU HAVE REACHED THE FINAL LEVEL OF COOKIE HELL! \n\nBy clicking accept, you hereby agree to:\n• Give us your soul\n• Name your firstborn 'Cookie'\n• Only eat cookies for sustenance\n• Become our cookie marketing ambassador\n• Accept that cookies are now your religion\n\nTHERE IS NO ESCAPE FROM THE COOKIE DIMENSION!",
                acceptText: "🍪 I AM THE COOKIE 🍪",
                declineText: "💀 DOOM 💀"
            }
        ];
        
        this.init();
    }
    
    init() {
        // Debug: Check if elements exist
        console.log('Cookie Hell initialized!');
        console.log('Container element:', this.container);
        console.log('Overlay element:', this.overlay);
        
        // Add immediate visual feedback that script is working
        if (this.container) {
            this.container.innerHTML = '<div style="position:fixed; top:10px; right:10px; background:green; color:white; padding:5px; border-radius:3px; z-index:9999; font-size:12px;">Cookie Hell Loading...</div>';
        }
        
        // Start the madness after a short delay
        setTimeout(() => {
            console.log('Starting first banner...');
            this.showNextBanner();
        }, 2000);
    }
    
    showNextBanner() {
        console.log('showNextBanner called, currentLevel:', this.currentLevel);
        
        if (this.currentLevel >= this.maxLevel) {
            this.showVictoryMessage();
            return;
        }
        
        this.currentLevel++;
        const bannerLevel = Math.min(this.currentLevel, this.bannerData.length);
        const bannerInfo = this.bannerData[bannerLevel - 1];
        
        console.log('Creating banner level:', bannerLevel, 'with info:', bannerInfo);
        
        // Clear loading message
        if (this.currentLevel === 1) {
            this.container.innerHTML = '';
        }
        
        // Show overlay for levels 2+
        if (this.currentLevel > 1) {
            this.overlay.classList.add('show');
        }
        
        // Create banner element
        const banner = this.createBanner(bannerInfo, bannerLevel);
        console.log('Banner created:', banner);
        
        this.container.appendChild(banner);
        this.activeBanners.push(banner);
        
        // Show banner with animation
        setTimeout(() => {
            banner.classList.add('show');
            console.log('Banner should now be visible');
        }, 100);
        
        // Add special effects for certain levels
        this.addSpecialEffects(bannerLevel);
    }
    
    createBanner(bannerInfo, level) {
        const banner = document.createElement('div');
        banner.className = `cookie-banner cookie-banner-${level}`;
        banner.innerHTML = `
            <h3>${bannerInfo.title}</h3>
            <p>${bannerInfo.text}</p>
            <div class="cookie-banner-buttons">
                <button class="cookie-btn cookie-btn-decline" onclick="cookieHell.handleDecline()">${bannerInfo.declineText}</button>
                <button class="cookie-btn cookie-btn-accept" onclick="cookieHell.handleAccept()">${bannerInfo.acceptText}</button>
            </div>
        `;
        
        return banner;
    }
    
    handleAccept() {
        // Add click sound effect (optional)
        this.playClickSound();
        
        // Special behavior for final level
        if (this.currentLevel >= this.maxLevel) {
            this.showFinalMessage();
            return;
        }
        
        // Remove current banner with animation
        const currentBanner = this.activeBanners[this.activeBanners.length - 1];
        if (currentBanner) {
            currentBanner.style.transition = 'all 0.3s ease';
            currentBanner.style.transform = 'scale(0.8) translateY(-100px)';
            currentBanner.style.opacity = '0';
            
            setTimeout(() => {
                if (currentBanner.parentNode) {
                    currentBanner.parentNode.removeChild(currentBanner);
                }
            }, 300);
        }
        
        // Show next banner after a short delay
        setTimeout(() => {
            this.showNextBanner();
        }, 600);
    }
    
    handleDecline() {
        // Different reactions based on level
        const reactions = [
            "Oh no! But we really need those cookies! 🥺",
            "Are you sure? We promise we're trustworthy! 😇",
            "DECLINED?! This is suspicious behavior! 🚨",
            "WHY WOULD YOU DO THIS?! 😭",
            "THE COOKIES ARE SAD NOW! 💔",
            "SYSTEM ERROR: DECLINE NOT COMPUTED",
            "THIS ACTION IS NOT AVAILABLE IN COOKIE HELL",
            "R̸E̵S̶I̸S̷T̵A̴N̵C̶E̷ ̴I̶S̸ ̷F̶U̵T̸I̶L̸E̴",
            "THERE IS NO DECLINE IN THE VORTEX!",
            "DECLINE IS NOT AN OPTION IN THE FINAL DIMENSION!"
        ];
        
        const reactionIndex = Math.min(this.currentLevel - 1, reactions.length - 1);
        this.showTemporaryMessage(reactions[reactionIndex]);
        
        // Make decline button disappear or change
        const declineButtons = document.querySelectorAll('.cookie-btn-decline');
        declineButtons.forEach(btn => {
            if (this.currentLevel >= 6) {
                btn.textContent = "ERROR";
                btn.style.background = "#e74c3c";
                btn.disabled = true;
            }
        });
    }
    
    addSpecialEffects(level) {
        switch(level) {
            case 3:
                // Add shaking effect to the page
                document.body.style.animation = 'suspicious-shake 0.5s infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 3000);
                break;
                
            case 5:
                // Change page background
                document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)';
                document.body.style.backgroundSize = '300% 300%';
                document.body.style.animation = 'rainbow-move 2s ease infinite';
                break;
                
            case 6:
                // Matrix rain effect (simplified)
                this.startMatrixRain();
                break;
                
            case 8:
                // Glitch the entire page
                document.body.style.animation = 'glitch 0.3s infinite';
                break;
                
            case 9:
                // Make everything spin slightly
                document.body.style.animation = 'spin-crazy 10s linear infinite';
                break;
                
            case 10:
                // CHAOS MODE
                this.activateChaosMode();
                break;
        }
    }
    
    startMatrixRain() {
        // Simple matrix effect
        const matrixDiv = document.createElement('div');
        matrixDiv.style.position = 'fixed';
        matrixDiv.style.top = '0';
        matrixDiv.style.left = '0';
        matrixDiv.style.width = '100%';
        matrixDiv.style.height = '100%';
        matrixDiv.style.pointerEvents = 'none';
        matrixDiv.style.zIndex = '1';
        matrixDiv.style.background = 'radial-gradient(circle, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0.8) 100%)';
        document.body.appendChild(matrixDiv);
    }
    
    activateChaosMode() {
        // Multiple effects at once
        document.body.style.filter = 'hue-rotate(0deg)';
        
        let hue = 0;
        const chaosInterval = setInterval(() => {
            hue += 10;
            document.body.style.filter = `hue-rotate(${hue}deg) saturate(2)`;
        }, 100);
        
        // Stop chaos after 10 seconds
        setTimeout(() => {
            clearInterval(chaosInterval);
        }, 10000);
    }
    
    showTemporaryMessage(message) {
        const tempMessage = document.createElement('div');
        tempMessage.style.position = 'fixed';
        tempMessage.style.top = '10px';
        tempMessage.style.left = '50%';
        tempMessage.style.transform = 'translateX(-50%)';
        tempMessage.style.background = '#e74c3c';
        tempMessage.style.color = 'white';
        tempMessage.style.padding = '1rem';
        tempMessage.style.borderRadius = '5px';
        tempMessage.style.zIndex = '9999';
        tempMessage.style.fontSize = '1.2rem';
        tempMessage.style.fontWeight = 'bold';
        tempMessage.textContent = message;
        
        document.body.appendChild(tempMessage);
        
        setTimeout(() => {
            if (tempMessage.parentNode) {
                tempMessage.parentNode.removeChild(tempMessage);
            }
        }, 3000);
    }
    
    showFinalMessage() {
        // Clear all banners
        this.container.innerHTML = '';
        
        // Show ultimate victory/defeat message
        const finalDiv = document.createElement('div');
        finalDiv.className = 'cookie-banner cookie-banner-10';
        finalDiv.innerHTML = `
            <h2>🎉 CONGRATULATIONS! 🎉</h2>
            <p>You have successfully navigated through all 10 levels of Cookie Banner Hell!</p>
            <p>Your digital soul now belongs to the Cookie Overlords.</p>
            <p>Thank you for your sacrifice. 🍪</p>
            <button class="cookie-btn cookie-btn-accept" onclick="location.reload()">START OVER (Why would you do this?)</button>
        `;
        
        this.container.appendChild(finalDiv);
        setTimeout(() => {
            finalDiv.classList.add('show');
        }, 100);
    }
    
    showVictoryMessage() {
        console.log("You've reached the end of Cookie Banner Hell!");
    }
    
    playClickSound() {
        // Simple audio feedback (optional)
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+LyvmAaAzuJzvPPfTIIL3vG8N2QQAoUXrTp66hVFApGn+LyvmAaAzuJzvPPfTIIL3vG8N2QQAoUXrTp66hVFApGn+LyvmAaAzuJzvPPfTIIL3vG8N2QQAoUXrTp66hVFApGn+LyvmAaAz');
            audio.play().catch(() => {
                // Ignore audio errors
            });
        } catch (e) {
            // Ignore audio errors
        }
    }
}

// Initialize the Cookie Banner Hell when the page loads
let cookieHell;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded, initializing Cookie Hell...');
    try {
        cookieHell = new CookieBannerHell();
        console.log('Cookie Hell instance created:', cookieHell);
    } catch (error) {
        console.error('Error creating Cookie Hell:', error);
    }
});

// Backup initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    // Still loading, DOMContentLoaded will fire
} else {
    // DOM already loaded
    console.log('DOM already loaded, initializing immediately...');
    setTimeout(() => {
        if (!cookieHell) {
            try {
                cookieHell = new CookieBannerHell();
                console.log('Backup Cookie Hell instance created:', cookieHell);
            } catch (error) {
                console.error('Error in backup initialization:', error);
            }
        }
    }, 100);
}

// Additional GitHub Pages compatibility check
window.addEventListener('load', function() {
    console.log('Window load event fired');
    setTimeout(() => {
        if (!cookieHell) {
            console.log('Final attempt to initialize Cookie Hell...');
            try {
                cookieHell = new CookieBannerHell();
                console.log('Final Cookie Hell instance created:', cookieHell);
            } catch (error) {
                console.error('Error in final initialization:', error);
            }
        } else {
            console.log('Cookie Hell already exists:', cookieHell);
        }
    }, 500);
});

// Keyboard shortcuts for testing
document.addEventListener('keydown', function(e) {
    // Press 'R' to reset
    if (e.key === 'r' || e.key === 'R') {
        if (e.ctrlKey) {
            location.reload();
        }
    }
    
    // Press 'S' to skip to next level (for testing)
    if (e.key === 's' || e.key === 'S') {
        if (e.ctrlKey && cookieHell) {
            cookieHell.handleAccept();
        }
    }
});

// Prevent right-click context menu on higher levels for added frustration
document.addEventListener('contextmenu', function(e) {
    if (cookieHell && cookieHell.currentLevel >= 7) {
        e.preventDefault();
        cookieHell.showTemporaryMessage("Right-click disabled in Cookie Hell! 😈");
    }
});

// Add some random chaos effects
function addRandomChaos() {
    if (cookieHell && cookieHell.currentLevel >= 8) {
        // Random cursor changes
        const cursors = ['wait', 'not-allowed', 'help', 'crosshair', 'move', 'grab'];
        document.body.style.cursor = cursors[Math.floor(Math.random() * cursors.length)];
        
        setTimeout(() => {
            document.body.style.cursor = 'auto';
        }, 2000);
    }
}

// Trigger random chaos occasionally
setInterval(addRandomChaos, 5000); 