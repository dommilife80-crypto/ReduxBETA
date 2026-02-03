<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Play Gota.io — a free browser multiplayer cell game. Eat players, gain XP, level up, and climb the leaderboard in fast, competitive matches.">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Gota.io">
        <meta name="theme-color" content="#0d0d0d">
        <link rel="canonical" href="https://gota.io/">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://www.googletagmanager.com">
        <meta content="Gota.io" property="og:site_name">
        <meta content="website" property="og:type">
        <meta content="Play Gota.io — Free Browser Multiplayer Cell Game" property="og:title">
        <meta content="Eat other players, earn XP, and level up. Do you have what it takes to be #1?" property="og:description">
        <meta content="https://gota.io/" property="og:url">
        <meta content="https://gota.io/assets/images/favicon.png" property="og:image">
        <meta content="120" property="og:image:width">
        <meta content="120" property="og:image:height">
        <meta content="Gota.io logo" property="og:image:alt">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@GotaIO">
        <meta name="twitter:title" content="Play Gota.io — Free Browser Multiplayer Cell Game">
        <meta name="twitter:description" content="Eat other players, earn XP, and level up. Do you have what it takes to be #1?">
        <meta name="twitter:image" content="https://gota.io/assets/images/favicon.png">
        <meta name="twitter:image:alt" content="Gota.io logo">
        <link rel="icon" type="image/png" href="./assets/images/BrM3PN10.ico?v=1767463120758">
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "VideoGame",
                "name": "Gota.io",
                "url": "https://gota.io/",
                "image": "https://gota.io/assets/images/favicon.png",
                "description": "A free browser-based multiplayer cell game. Eat others, gain XP, and climb the leaderboard.",
                "applicationCategory": "Game",
                "operatingSystem": "Web",
                "author": {
                    "@type": "Organization",
                    "name": "Gota.io"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Gota.io"
                },
                "sameAs": [
                    "https://www.youtube.com/channel/UCkjizHFZCcolEPoprLSqKUA",
                    "https://x.com/GotaIO",
                    "https://www.facebook.com/PlayGotaIO/",
                    "https://gota.io/discord"
                ]
            }</script>
        <style>
            .visually-hidden {
                position: absolute !important;
                clip: rect(1px, 1px, 1px, 1px);
                clip-path: inset(50%);
                height: 1px;
                width: 1px;
                overflow: hidden;
                white-space: nowrap;
            }
        </style>
        <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css">
        <script type="a34ce2b03f66004534580816-text/javascript">
            window.onerror=function(e,o,n,r){console.log("%cAN ERROR HAS OCCURED\n%c"+e+" (line "+n+")","background-color:red;color:white;font-size:24px","font-size:14px;color:black"),console.log("%cTROUBLESHOOTING STEPS\n%c- Make sure all extenstions are disabled\n- Try the client in Incognito or Private mode\n- Try a different browser\n- Clear browser cache/browsing data\n- Ask for help on our Discord on the #support channel (https://gota.io/discord) with a screenshot of the console","font-size:24px;color:red;","color: black;font-size:14px;");try{document.getElementsByClassName("error-banner")[0].setAttribute("style","display:block;")}catch(e){}},window.addEventListener("unhandledrejection",function(e){try{const o=e&&e.reason,n=o&&o.message?String(o.message):String(o||""),r=o&&o.stack?String(o.stack):"";if(_isHyperdxNoise(n,"",{stack:r})){try{e.preventDefault&&e.preventDefault()}catch(e){}return}}catch(e){}console.log("%cUNHANDLED PROMISE REJECTION","background-color:orange;color:black;font-size:18px")})
        </script>
        <script src="lib/jquery.3.7.1.js?v=1767463120758" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="//www.gstatic.com/firebasejs/6.6.2/firebase-app.js" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="//www.gstatic.com/firebasejs/6.6.2/firebase-auth.js" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="//www.gstatic.com/firebasejs/6.6.2/firebase-database.js" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="//www.gstatic.com/firebasejs/6.6.2/firebase-firestore.js" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="lib/coloris.min.js?v=1767463120758" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="lib/first-input-delay.js?v=1767463120758" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="lib/gif-frames.js?v=1767463120758" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="lib/fontfaceobserver.js?v=1767463120758" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="lib/nipplejs.min.js?v=1767463120758" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script src="lib/fastclick.js?v=1767463120758" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script type="a34ce2b03f66004534580816-text/javascript">
            window.version="3.8.4.6",window.build=Number("1767463120758"),window.GOTA_TURNSTILE_SITEKEY="0x4AAAAAABvTPSbzBI-VHMUx"
        </script>
        <script type="a34ce2b03f66004534580816-text/javascript">
            var aiptag=aiptag||{};aiptag.cmd=aiptag.cmd||[],aiptag.cmd.display=aiptag.cmd.display||[],aiptag.cmd.player=aiptag.cmd.player||[],aiptag.gdprShowConsentTool=!0,aiptag.gdprConsentToolPosition="bottom",aiptag.gdprShowConsentToolButton=!1,aiptag.consented=!1,window.module&&(module=window.module)
        </script>
        <script async src="//api.adinplay.com/libs/aiptag/pub/GOT/gota.io/tag.min.js" type="a34ce2b03f66004534580816-text/javascript"></script>
        <title>Play Gota.io — Free Browser Multiplayer Cell Game</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CJD34K9EWX" type="a34ce2b03f66004534580816-text/javascript"></script>
        <script type="a34ce2b03f66004534580816-text/javascript">
            function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("consent","default",{ad_storage:"denied",analytics_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"}),gtag("config","G-CJD34K9EWX")
        </script>
        <script type="a34ce2b03f66004534580816-module" crossorigin src="./assets/js/CxDFefmY.js"></script>
        <link rel="modulepreload" crossorigin href="./assets/js/COYfAeLa.js">
        <link rel="modulepreload" crossorigin href="./assets/js/B6Qhol38.js">
        <link rel="modulepreload" crossorigin href="./assets/js/CxDFefmY.js">
        <link rel="modulepreload" crossorigin href="./assets/js/BdA_rHlF.js">
        <link rel="stylesheet" crossorigin href="./assets/BUUzqbD4.css">
    </head>
    <body ondragstart="if (!window.__cfRLUnblockHandlers) return false; return!1" ondrop="if (!window.__cfRLUnblockHandlers) return false; return!1" data-cf-modified-a34ce2b03f66004534580816-="">
        <div id="cf-turnstile-container" aria-hidden="true"></div>
        <h1 class="visually-hidden">Play Gota.io — Free Browser Multiplayer Cell Game</h1>
        <p class="visually-hidden">Join fast-paced matches, eat other players to grow, unlock levels, and compete to reach #1.</p>
        <div class="error-banner" style="display: none">
            An error has occured, You can try hard refresh your browser with CTRL + F5 or check the browser's console for more information/troubleshooting steps. This can be caused by custom scripts, ensure they're disabled! You can also contact us on <a href="https://gota.io/discord">our Discord</a>
            (click to close this message)
        </div>
        <div id="canvas-container">
            <div id="canvas-background"></div>
            <canvas id="canvas"></canvas>
        </div>
        <div class="hud-panel">
            <div class="top-left ui-scale">
                <div id="score-panel" class="ui-pane interface-color">
                    <p id="pId">
                        ID: <span>0</span>
                    </p>
                    <p id="pServer">
                        Server: <span>None</span>
                    </p>
                    <p id="pFps">
                        FPS: <span>0</span>
                    </p>
                    <p id="pPing">
                        Ping: <span>0ms</span>
                    </p>
                    <p id="pMass">
                        Mass: <span>0</span>
                    </p>
                    <p id="pScore">
                        Score: <span>0</span>
                    </p>
                    <p id="pCells">
                        Cells: <span>0/16</span>
                    </p>
                    <p id="pMouse" class="text-red d-none">MOUSE FROZEN</p>
                    <p id="pLine" class="d-none">
                        Line: <span style="color: #00bfff">↑</span>
                    </p>
                </div>
                <div id="party-panel" class="ui-pane interface-color hud-panel" style="display: none">
                    <p id="party-header">Party</p>
                    <canvas id="party-canvas"></canvas>
                </div>
            </div>
            <div class="top-right ui-scale">
                <div id="leaderboard-panel" class="ui-pane interface-color">
                    <p class="lh" id="leaderboard-header">Leaderboard</p>
                    <canvas id="leaderboard-canvas" width="10" height="10"></canvas>
                    <div id="scrimmage-btn-leave" style="display: none">
                        <button id="btn-leave-match" class="gota-btn">Leave</button>
                    </div>
                </div>
                <div id="extra-panel" class="ui-pane interface-color">
                    <p id="extra-reset-timer">
                        Reset: <span id="resetTime">00:00</span>
                    </p>
                    <p id="extra-spectators">
                        Spectators: <span id="spectatorCount">0</span>
                    </p>
                    <p id="extra-respawn-cooldown">
                        Respawn: <span id="respawnCooldown">00:00</span>
                    </p>
                </div>
            </div>
            <div id="chat-panel" class="ui-pane ui-scale">
                <div id="chat-tab-container" class="interface-color"></div>
                <div id="chat-container" class="interface-color"></div>
                <div id="chat-components">
                    <div id="chat-resize"></div>
                    <input id="chat-input" autocomplete="off">
                    <button id="chat-emote-btn"></button>
                    <div id="emote-panel" class="ui-pane interface-color">
                        <h3>Emotes</h3>
                        <ul class="emote-list"></ul>
                        <h3>Gifs</h3>
                        <ul class="gif-list"></ul>
                    </div>
                    <div id="autocomplete-panel" class="ui-pane interface-color"></div>
                </div>
            </div>
            <div id="minimap-panel" class="ui-pane interface-color ui-scale">
                <div id="minimap-coordinates">&nbsp;</div>
                <canvas id="minimap-canvas" width="250" height="250"></canvas>
            </div>
        </div>
        <div id="preroll"></div>
        <div id="main" class="main">
            <div class="main-panel-wrapper">
                <div class="main-left main-divider">
                    <div id="main-rb" class="main-panel">
                        <div class="main-rb-title">Advertisement</div>
                        <div id="inner-rb">
                            <div id="supporter-message" style="display: none; text-align: center; padding: 10px 8px">
                                <div style="font-size: 13px; line-height: 1.35; opacity: 0.95">Your locked name helps keep Gota.io running ad‑free for you.</div>
                            </div>
                            <div id="ad-wrapper" style="position: relative">
                                <div id="adblock-fallback" style="display: none">
                                    <a href="https://shop.gota.io" target="_blank" rel="noopener">
                                        <img src="./assets/images/BVayZEFd.png?v=1767463120758" draggable="false" alt="Support us by disabling your adblocker" style="max-width: 100%; height: auto; cursor: pointer">
                                    </a>
                                </div>
                                <div id="GOT_gota-io_336x280" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"></div>
                            </div>
                            <script type="a34ce2b03f66004534580816-text/javascript">
                                function displayAd(){try{if(!0===window.disableMenuAd){var e=document.getElementById("GOT_gota-io_336x280"),t=document.getElementById("adblock-fallback");return e&&(e.style.display="none",e.style.visibility="hidden",e.style.opacity="0"),void(t&&(t.style.display="none"))}if("undefined"!=typeof aipDisplayTag){aipDisplayTag.display("GOT_gota-io_336x280");var i=document.getElementById("GOT_gota-io_336x280");i&&(i.style.zIndex="3000",i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%"),setTimeout(function(){if(!0!==window.adFinalized){var e=document.getElementById("GOT_gota-io_336x280"),t=document.getElementById("adblock-fallback");if(e&&t)if(null!==e.querySelector("iframe, ins, img")||(e.innerHTML||"").trim().length>0||e.getBoundingClientRect&&e.getBoundingClientRect().height>50)t.style.display="none",e.style.display="block",e.style.visibility="visible",e.style.opacity="1",window.adDetected=!0,window.adFinalized=!0;else{t.style.display="block";try{e&&e.parentNode&&e.parentNode.removeChild(e)}catch(e){}window.adDetected=!1,window.adFinalized=!0}}},1200)}}catch(e){}}function safeDisplayAd(){if(!0===window.disableMenuAd){var e=document.getElementById("GOT_gota-io_336x280"),t=document.getElementById("adblock-fallback");return e&&(e.style.display="none",e.style.visibility="hidden",e.style.opacity="0"),void(t&&(t.style.display="none"))}window.adDetected||window.adDisplayAttempts>=1||(window.adDisplayAttempts++,displayAd())}window.adDisplayAttempts=window.adDisplayAttempts||0,window.adDetected=window.adDetected||!1,aiptag&&aiptag.cmd&&aiptag.cmd.display&&aiptag.cmd.display.push(safeDisplayAd),document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){safeDisplayAd()},2e3)})
                            </script>
                            <script type="a34ce2b03f66004534580816-text/javascript">
                                !function(){function e(){try{var e=document.getElementById("GOT_gota-io_336x280"),n=document.getElementById("adblock-fallback"),t=document.getElementById("supporter-message");if(!n)return;if(!0===window.adFinalized)return;if(!0===window.disableMenuAd)return n.style.display="none",void(t&&(t.style.display="block"));!function(e){if(!e)return!1;if(e.querySelector("iframe, ins, img"))return!0;if((e.innerHTML||"").trim().length>0)return!0;var n=e.getBoundingClientRect?e.getBoundingClientRect():{width:0,height:0};return n.height>50&&n.width>50}(e)?n.style.display="block":(n.style.display="none",t&&(t.style.display="none"),window.adDetected=!0)}catch(e){}}document.addEventListener("DOMContentLoaded",function(){!0!==window.adFinalized&&(setTimeout(function(){window.adFinalized||e()},3500),setTimeout(function(){window.adFinalized||e()},6e3))})}()
                            </script>
                        </div>
                    </div>
                    <div id="main-account" class="main-panel">
                        <div class="loader" id="account-loader">Loading...</div>
                        <div id="no_cookie_consent" class="main-mini-container" style="display: none">
                            <h1>Gota.io Account</h1>
                            <p>
                                You have not accepted the use of cookies.<br>
                                Without cookies we cannot provide account features.<br>
                                <br>You can change your cookie preference in our cookie consent tool at the bottom!
                            </p>
                        </div>
                        <div id="guest" class="main-mini-container" style="display: none">
                            <h1>Gota.io Account</h1>
                            <p>Log in to gain access to exclusive features like profiles, social, titles, and locked names!</p>
                            <button id="account-login" class="gota-btn">Login</button>
                        </div>
                        <div id="authed" style="display: none">
                            <div id="userinfo">
                                <img id="account-avatar" class="avatar">
                                <div id="username-container">
                                    <span id="account-username"></span>
                                    <span id="account-level"></span>
                                    <div class="xp-meter">
                                        <span style="width: 0%"></span>
                                    </div>
                                </div>
                            </div>
                            <div id="account-actions">
                                <button id="account-profile" class="gota-btn">Profile</button>
                                <button id="account-social" class="gota-btn">Social</button>
                                <button id="account-shop" class="gota-btn">Shop</button>
                                <button id="account-logout" class="gota-btn">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-content main-divider main-panel">
                    <div class="main-top">
                        <div id="logo"></div>
                        <span class="main-version">
                            Client version:&nbsp;<span id="client-version" aria-live="polite">unknown</span>
                        </span>
                    </div>
                    <div class="main-mid menu-sub-bg">
                        <input type="text" id="name-box" maxlength="20" class="gota-input" placeholder="Name">
                        <div class="main-input-btns">
                            <button id="btn-play" class="gota-menu-btn">Play</button>
                            <button id="btn-spec" class="gota-menu-btn">Spectate</button>
                        </div>
                        <div class="main-bottom interface-color">
                            <div class="main-bottom-left">
                                <button id="btn-servers" class="gota-btn bottom-btn">Servers</button>
                                <button id="btn-options" class="gota-btn bottom-btn">Options</button>
                                <button id="btn-hotkeys" class="gota-btn bottom-btn">Hotkeys</button>
                                <button id="btn-themes" class="gota-btn bottom-btn">Theme</button>
                                <button id="btn-cellpanel" class="gota-btn bottom-btn">Cell Panel</button>
                            </div>
                            <div class="main-bottom-right">
                                <button id="btn-titles" class="gota-btn bottom-btn">Titles</button>
                                <button id="btn-changelog" class="gota-btn bottom-btn">Changelog</button>
                            </div>
                        </div>
                    </div>
                    <div class="main-bottom-links">
                        <a href="https://www.youtube.com/channel/UCkjizHFZCcolEPoprLSqKUA?sub_confirmation=1" target="_blank" rel="noopener" class="fg-interface-color">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                        </a>
                        <a href="https://x.com/share?url=https://s5frq.app.goo.gl/kK5p&via=GotaIO&text=Have%20you%20played%20this%20addictive%20game%20yet%3F%20Try%20today%21" target="_blank" rel="noopener" class="fg-interface-color">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.facebook.com/PlayGotaIO/" target="_blank" rel="noopener" class="fg-interface-color">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </a>
                        <a href="https://gota.io/discord" target="_blank" rel="noopener" class="fg-interface-color">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                            </svg>
                        </a>
                    </div>
                    <div class="policyLinks interface-color">
                        <a href="https://gota.io/policies/privacy.html">Privacy Policy</a>
                        | <a href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; aiptag.showConsentToolSettings()" data-cf-modified-a34ce2b03f66004534580816-="">Ad Privacy Settings</a>
                        | <a href="https://gota.io/policies/cookies.html">Cookie Policy</a>
                    </div>
                </div>
                <div id="main-right" class="main-divider main-panel">
                    <div id="main-servers" class="main-right-panel" style="display: block">
                        <div class="title-text menu-title">Servers</div>
                        <div class="server-container">
                            <ul id="server-tab-container">
                                <li region="eu" id="server-tab-eu" class="server-tab server-active" title="Europe">
                                    <span>Europe</span>
                                </li>
                                <li region="na" id="server-tab-na" class="server-tab" title="North America">
                                    <span>North America</span>
                                </li>
                                <li region="ap" id="server-tab-ap" class="server-tab" title="Asia Pacific">
                                    <span>Asia Pacific</span>
                                </li>
                            </ul>
                            <div id="server-content">
                                <div id="servers-eu" style="display: block">
                                    <table class="server-table">
                                        <thead>
                                            <tr>
                                                <th class="server-table-name">
                                                    <span>Name</span>
                                                </th>
                                                <th class="server-table-players">
                                                    <span>Players</span>
                                                </th>
                                                <th class="server-table-mode">
                                                    <span>Gamemode</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="servers-body-eu"></tbody>
                                    </table>
                                </div>
                                <div id="servers-na" style="display: none">
                                    <table class="server-table">
                                        <thead>
                                            <tr>
                                                <th class="server-table-name">
                                                    <span>Name</span>
                                                </th>
                                                <th class="server-table-players">
                                                    <span>Players</span>
                                                </th>
                                                <th class="server-table-mode">
                                                    <span>Gamemode</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="servers-body-na"></tbody>
                                    </table>
                                </div>
                                <div id="servers-ap" style="display: none">
                                    <table class="server-table">
                                        <thead>
                                            <tr>
                                                <th class="server-table-name">
                                                    <span>Name</span>
                                                </th>
                                                <th class="server-table-players">
                                                    <span>Players</span>
                                                </th>
                                                <th class="server-table-mode">
                                                    <span>Gamemode</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="servers-body-ap"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="main-options" class="main-right-panel" style="display: none">
                        <div class="title-text menu-title">Options</div>
                        <div class="options-container">
                            <table class="options-table">
                                <thead>
                                    <tr>
                                        <th colspan="4">Privacy Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Allow Cookies</td>
                                        <td>
                                            <input type="checkbox" id="cc_acceptCookies">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <a href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; aiptag.showConsentToolSettings()" data-cf-modified-a34ce2b03f66004534580816-="">Ad Privacy Settings</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Show profile on global leaderboards</td>
                                        <td>
                                            <input type="checkbox" id="cGlobalLeaderboard" disabled="true">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Performance Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Quality</td>
                                        <td>
                                            <select id="sQuality" class="select-input">
                                                <option value="ULTRA">Ultra</option>
                                                <option value="HIGH">High</option>
                                                <option value="MEDIUM">Medium</option>
                                                <option value="LOW">Low</option>
                                                <option value="VERYLOW">Very Low</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Renderer</td>
                                        <td>
                                            <select id="sRenderType" class="select-input">
                                                <option value="AUTO">Auto</option>
                                                <option value="WEBGL">WebGl</option>
                                                <option value="CANVAS">Canvas</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Disable Anti Aliasing</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cDisableAA">
                                        </td>
                                    </tr>
                                    <tr id="performance-refresh" style="display: none">
                                        <td colspan="4" class="red">Refresh Required!</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Render Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Show Border</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cShowBorder">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Hide Food</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cHideFood">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Transparent Cells</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cTransCells">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Disable Auto Name Hiding</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cDisableAutoNameHiding">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Disable Auto Food Hiding</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cDisableAutoFoodHiding">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Disable Auto Skin Hiding</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cDisableAutoSkinHiding">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Name Outlines</td>
                                        <td>
                                            <select id="sTextOutlines" class="select-input">
                                                <option value="THICK">Thick</option>
                                                <option value="THIN">Thin</option>
                                                <option value="NONE">Off</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Show Names</td>
                                        <td>
                                            <select id="sShowNames" class="select-input">
                                                <option value="ALL">All</option>
                                                <option value="PARTY">Party</option>
                                                <option value="SELF">Self</option>
                                                <option value="NONE">None</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Show Skins</td>
                                        <td>
                                            <select id="sShowSkins" class="select-input">
                                                <option value="ALL">All</option>
                                                <option value="PARTY">Party</option>
                                                <option value="SELF">Self</option>
                                                <option value="NONE">None</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Show Mass</td>
                                        <td>
                                            <select id="sShowMass" class="select-input" style="margin-left: 8px">
                                                <option value="SELF">Self</option>
                                                <option value="PARTY">Party</option>
                                                <option value="ALL">All</option>
                                                <option value="NONE">None</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Mass Type</td>
                                        <td>
                                            <select id="sMassType" class="select-input">
                                                <option value="DEFAULT">Default</option>
                                                <option value="SHORT">Short</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">General Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Auto Respawn</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cAutoRespawn">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Silent Login</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cSilentLogin">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Disable Auto Zoom</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cDisableAutoZoom">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Old Camera</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cOldCamera">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Track Largest Cell</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cTrackLargestCell">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Auto Decline Party Invites</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cAutoDecline">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" data-balloon="Stop ejecting mass when the window loses focus." data-balloon-pos="up" data-balloon-length="fit">Disable Persistent Mass Ejecting</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cDisablePersistEjectMass">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="overflow-x: visible" data-balloon="Default: 90" data-balloon-pos="up">
                                            Animation Delay: <input class="options-input" id="animationDelay" style="float: none">
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rAnimationDelay" min="25" max="250" value="90" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="overflow-x: visible" data-balloon="Default: 90" data-balloon-pos="up">
                                            Camera Delay: <input class="options-input" id="cameraDelay" style="float: none">
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rCameraDelay" min="0" max="250" value="90" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="overflow-x: visible" data-balloon="Default: 90" data-balloon-pos="up">
                                            Zoom Delay: <input class="options-input" id="zoomDelay" style="float: none">
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rZoomDelay" min="0" max="250" value="90" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="overflow-x: visible" data-balloon="Default: 5 (% per wheel notch / key press)" data-balloon-pos="up">
                                            Zoom Step: <input class="options-input" id="zoomStep" style="float: none">
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rZoomStep" min="0.1" max="50" value="5" step="0.1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="overflow-x: visible" data-balloon="Default: 100" data-balloon-pos="up">
                                            View Distance: <input class="options-input" id="viewDistance" style="float: none">
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rViewDistance" min="50" max="150" value="100" step="1">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">UI Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Hide Minimap</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cHideMinimap">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Hide Leaderboard</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cHideLeaderboard">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Hide Sub-Leaderboard</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cHideExtraPanel">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Darker Bots</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cDarkerBots">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Show Coordinates</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cShowCoordinates">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            UI Scale: <input id="uiScale" class="options-input" style="float: none">%
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rUiScale" min="0.50" max="1.25" value="1.00" step="0.01">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4" class="text-left">Chat Panel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Hide Chat</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cHideChat">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Resizable Chat</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cResizableChat">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Show Chat IDs</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cShowChatIds">
                                        </td>
                                    </tr>
                                    <tr id="opt_colored_ids">
                                        <td colspan="3">Colored Chat IDs</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cColoredChatIds">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a id="aEditChatTabs" href="#">Edit Chat Tabs</a>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="3" class="text-left">Score Panel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Style</td>
                                        <td>
                                            <select id="sScorePanel" class="select-input">
                                                <option value="0">Hidden</option>
                                                <option value="1">Horizontal</option>
                                                <option value="2">Vertical</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Hide Colored Ping</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cColoredPing">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Hide Colored Cell Count</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cColoredCellCount">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Hide Party Panel</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cHidePartyPanel">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Streamer Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Hide ID</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cHideId">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Hide Server</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cHideServer">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="options-table">
                                <thead>
                                    <tr>
                                        <th colspan="4">Import / Export</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <button class="gota-btn" id="btn-options-import">Import</button>
                                        </td>
                                        <td colspan="2">
                                            <button class="gota-btn" id="btn-options-export">Export</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <input id="options-import" type="file" accept=".json,application/json" style="display: none">
                        </div>
                    </div>
                    <div id="main-hotkeys" class="main-right-panel" style="display: none">
                        <div class="title-text menu-title">Hotkeys</div>
                        <div class="options-container">
                            <table class="options-table">
                                <thead>
                                    <tr>
                                        <th colspan="4">Keybinds</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Context Menu</td>
                                        <td>
                                            <button id="kContextMenu" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Toggle Spectate Mode</td>
                                        <td>
                                            <button id="kToggleSpec" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Eject Mass</td>
                                        <td>
                                            <button id="kEjectMass" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Split</td>
                                        <td>
                                            <button id="kSplit" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Double Split (4x)</td>
                                        <td>
                                            <button id="kDoubleSplit" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Triple Split (8x)</td>
                                        <td>
                                            <button id="kTripleSplit" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Quad Split (16x)</td>
                                        <td>
                                            <button id="kQuadSplit" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Quintuple Split (32x)</td>
                                        <td>
                                            <button id="kSplit32" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Sextuple Split (64x)</td>
                                        <td>
                                            <button id="kHexaSplit" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Septuple Split (128x)</td>
                                        <td>
                                            <button id="kSplit128" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Octuple Split (256x)</td>
                                        <td>
                                            <button id="kSplit256" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Freeze Mouse (Toggle)</td>
                                        <td>
                                            <button id="kFreezeMouse" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Freeze Mouse (Hold)</td>
                                        <td>
                                            <button id="kFreezeMouseHold" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Line Split (Hold)</td>
                                        <td>
                                            <button id="kLineSplit" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Line Split (Toggle)</td>
                                        <td>
                                            <button id="kLineSplitToggle" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Cycle Mass Display</td>
                                        <td>
                                            <button id="kToggleMassShow" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Cycle Skins Display</td>
                                        <td>
                                            <button id="kToggleSkinsShow" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Cycle Names Display</td>
                                        <td>
                                            <button id="kToggleNamesShow" class="keybinds-btn"></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4">
                                            <button id="btn-reset-keybinds" class="gota-btn">Reset Keybinds</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="main-themes" class="main-right-panel" style="display: none">
                        <div class="title-text menu-title">Theme</div>
                        <div class="options-container">
                            <table class="options-table">
                                <thead>
                                    <tr>
                                        <th colspan="4">Theme Toggle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Enable Custom Theme</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cThemeEnabled">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Disable Event Theme</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cDisableEventSkins">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Interface Colors</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Interface Foreground</td>
                                        <td>
                                            <input type="text" data-coloris id="uiForegroundColor" value="#ffffff">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Interface Background</td>
                                        <td>
                                            <input type="text" data-coloris id="uiBackgroundColor" value="#ffffff">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Interface Border</td>
                                        <td>
                                            <input type="text" data-coloris id="uiBorderColor">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Menu Background</td>
                                        <td>
                                            <input type="text" data-coloris id="uiMenuBackgroundColor">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Menu Title Background</td>
                                        <td>
                                            <input type="text" data-coloris id="uiMenuTitleBackgroundColor">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Menu Sub Background</td>
                                        <td>
                                            <input type="text" data-coloris id="uiMenuSubBackgroundColor">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Menu Sub Background 2</td>
                                        <td>
                                            <input type="text" data-coloris id="uiMenuSubBackground2Color">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Button Color</td>
                                        <td>
                                            <input type="text" data-coloris id="uiButtonColor">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Tracer Lines</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Show Tracer Lines</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cShowTracer">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="overflow-x: visible" data-balloon="Tracer line opacity (Default: 50%)" data-balloon-pos="up">
                                            Tracer Opacity: <input class="options-input" id="tracerOpacity" style="float: none" value="50">
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rTracerOpacity" min="10" max="100" value="50" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" style="overflow-x: visible" data-balloon="Tracer line color (Default: #ffffff)" data-balloon-pos="up">Tracer Color:</td>
                                        <td>
                                            <input type="text" id="rTracerColor" data-coloris>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="overflow-x: visible" data-balloon="Tracer line thickness in pixels (Default: 2)" data-balloon-pos="up">
                                            Tracer Thickness: <input class="options-input" id="tracerThickness" style="float: none" value="2">
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rTracerThickness" min="1" max="16" value="2" step="1">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Pastel Theme</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Pastel Mode</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cPastelMode">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="overflow-x: visible" data-balloon="Pastel intensity (Default: 50)" data-balloon-pos="up">
                                            Pastel Intensity: <input class="options-input" id="pastelIntensity" style="float: none" value="50">
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rPastelIntensity" min="0" max="100" value="50" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Pastel Applies To</td>
                                        <td>
                                            <select id="sPastelApply" class="select-input">
                                                <option value="ALL">All</option>
                                                <option value="PARTY">Party</option>
                                                <option value="SELF">Self</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Panel Opacity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2" data-balloon="Leaderboard panel background opacity" data-balloon-pos="up">
                                            Leaderboard Opacity: <span id="leaderboardOpacity">100</span>
                                            %
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rLeaderboardOpacity" min="0" max="1" value="1" step=".01">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" data-balloon="Chat panel background opacity" data-balloon-pos="up">
                                            Chat Opacity: <span id="chatOpacity">100</span>
                                            %
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rChatOpacity" min="0" max="1" value="1" step=".01">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" data-balloon="Minimap panel background opacity" data-balloon-pos="up">
                                            Minimap Opacity: <span id="minimapOpacity">100</span>
                                            %
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rMinimapOpacity" min="0" max="1" value="1" step=".01">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Panel Blur</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2" data-balloon="Leaderboard panel blur (px)" data-balloon-pos="up">
                                            Leaderboard Blur: <span id="leaderboardBlur">2</span>
                                            px
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rLeaderboardBlur" min="0" max="30" value="2" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" data-balloon="Chat panel blur (px)" data-balloon-pos="up">
                                            Chat Blur: <span id="chatBlur">1</span>
                                            px
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rChatBlur" min="0" max="30" value="1" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" data-balloon="Minimap panel blur (px)" data-balloon-pos="up">
                                            Minimap Blur: <span id="minimapBlur">2</span>
                                            px
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rMinimapBlur" min="0" max="30" value="2" step="1">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Interface Highlights</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Leaderboard Highlight</td>
                                        <td>
                                            <input type="text" data-coloris id="uiLeaderboardHighlightSelf">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Leaderboard Highlight (Party)</td>
                                        <td>
                                            <input type="text" data-coloris id="uiLeaderboardHighlightParty">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Party Leader Color</td>
                                        <td>
                                            <input type="text" data-coloris id="uiPartyLeaderColor">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Game Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Game Background</td>
                                        <td>
                                            <input type="text" data-coloris id="uiGameBackgroundColor">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Game Border</td>
                                        <td>
                                            <input type="text" data-coloris id="uiGameBorderColor">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Show A1/B1 Grid</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cShowGrid">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Grid Style</td>
                                        <td>
                                            <select id="sGridStyle" class="select-input">
                                                <option value="a1">A1 / B1 (4x4)</option>
                                                <option value="none">None</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Grid Color</td>
                                        <td>
                                            <input type="text" data-coloris id="gridColor" value="#ff0000">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            Grid Opacity: <span id="gridOpacityLabel">80</span>
                                            %
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rGridOpacity" min="0" max="1" value="0.8" step="0.01">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Grid Line Thickness</td>
                                        <td colspan="2">
                                            <input type="range" id="rGridLineThickness" min="1" max="16" value="1" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Grid Columns</td>
                                        <td colspan="2">
                                            <input type="number" id="iGridCols" min="1" max="16" value="4">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Grid Rows</td>
                                        <td colspan="2">
                                            <input type="number" id="iGridRows" min="1" max="16" value="4">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Grid Labels</td>
                                        <td>
                                            <input type="checkbox" class="checkbox-options" id="cShowGridLabels" checked="checked">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Grid Label Font</td>
                                        <td>
                                            <select id="sGridLabelFont" class="select-input"></select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Grid Label Color</td>
                                        <td>
                                            <input type="text" data-coloris id="gridLabelColor" value="#ffffff">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Grid Label Size</td>
                                        <td colspan="2">
                                            <input type="range" id="rGridLabelSize" min="8" max="300" value="150" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a id="btn-food-colors" href="#">Edit Food Colors</a>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">UI Colors</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="3">Success</td>
                                        <td>
                                            <input type="text" data-coloris id="uiGameColorSuccess">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Warning</td>
                                        <td>
                                            <input type="text" data-coloris id="uiGameColorWarning">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">Error</td>
                                        <td>
                                            <input type="text" data-coloris id="uiGameColorError">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Custom Assets</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a id="aCustomBackground" class="custom-asset-skinner" href="#">Set Background Image</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a id="aCustomSpike" class="custom-asset-skinner" href="#">Set Virus Skin</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a id="aCustomMother" class="custom-asset-skinner" href="#">Set Mother Cell Skin</a>
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">Extra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2" data-balloon="Game border size. Default: 64" data-balloon-pos="up">
                                            Border Size: <span id="borderSize">64</span>
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rBorderSize" min="1" max="256" value="64" step="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" data-balloon="Custom background opacity" data-balloon-pos="up">
                                            BG Opacity: <span id="backgroundOpacity">100</span>
                                            %
                                        </td>
                                        <td colspan="2">
                                            <input type="range" id="rBackgroundOpacity" min="0" max="1" value="1" step=".01">
                                        </td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th colspan="4">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                            <button class="gota-btn" id="btn-theme-import">Import</button>
                                        </td>
                                        <td colspan="2">
                                            <button class="gota-btn" id="btn-theme-export">Export</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <input id="theme-import" type="file" style="display: none">
                        </div>
                    </div>
                    <div id="main-subpanel" class="main-right-panel" style="display: none">
                        <div class="title-text menu-title">Cell Panel</div>
                        <div class="options-container">
                            <div id="subpanel-rules" style="display: block">
                                <span class="title-text center">Locked Name Rules</span>
                                <ul class="locked-name-rules">
                                    <li>You must wait at least 7 days between changing the locked name.</li>
                                    <li>Do not share your locked name with others.</li>
                                    <li>Do not imitate or impersonate staff, moderators or YouTubers.</li>
                                    <li>Do not defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others in the locked name or in chat.</li>
                                    <li>Do not use locked names to advertise websites. (Names like "Saku YT", "Sylveon YouTube" etc. are fine)</li>
                                    <li>No flaming, hate speech, bullying, harassing, stalking, or being overly creepy in the locked name or in chat.</li>
                                    <li>Locked names must be between 2 and 20 characters.</li>
                                    <li>Locked names can only contain letters (a-z), numbers (0-9) and spaces.</li>
                                </ul>
                                <button id="btn-subpanel-rules" class="gota-btn">Accept</button>
                            </div>
                            <div id="subpanel-content" style="display: none">
                                <table class="options-table">
                                    <thead class="subpanel-name-dashboard">
                                        <tr>
                                            <th colspan="2">Locked Name</th>
                                        </tr>
                                    </thead>
                                    <tbody class="subpanel-name-dashboard">
                                        <tr>
                                            <td>Locked Name</td>
                                            <td>
                                                <span id="spLockedName"></span>
                                                (<a id="btn-chg-ln">edit</a>
                                                )
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <a id="btn-use-ln">Use name</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Expiry</td>
                                            <td id="spExpiry">Never</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="https://gota.io/policies/locked-names/rules.html" target="_blank" rel="noopener" style="color: white">Locked Name Rules</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th colspan="2">Cell Options</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Skin Name</td>
                                            <td>
                                                <input type="text" id="spSkinName">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ejected Mass Skin</td>
                                            <td>
                                                <select id="spEffect" class="select-input">
                                                    <option value="0">None</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Name Font</td>
                                            <td>
                                                <select id="spNameFont" class="select-input">
                                                    <option value="0">Default</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Name Color</td>
                                            <td>
                                                <input type="text" id="spNameColor" data-coloris>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Chat Color</td>
                                            <td>
                                                <input type="text" id="spChatColor" data-coloris>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Cell Color</td>
                                            <td>
                                                <input type="text" id="spCellColor" data-coloris title="Pick your cell color (sends !color r g b)">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Lower Name</td>
                                            <td>
                                                <input type="checkbox" id="spLowerName">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <button id="btn-updateSP" class="gota-btn">Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="main-social" class="main" style="display: none">
            <div id="main-friends" class="main-left main-divider main-panel">
                <div id="social-back-button" class="back-button" data-balloon="Go back to main menu" data-balloon-pos="up">
                    <i class="material-icons">chevron_left</i>
                </div>
                <div class="title-text menu-title">Friends</div>
                <div id="social-friends-info">
                    <span>
                        You have <span id="social-friends-count">0</span>
                        /25 friends
                    </span>
                    <span>
                        You currently have <span id="social-online-friends-count">0 online</span>
                        friends
                    </span>
                </div>
                <div id="social-friends" class="menu-sub-bg">
                    <menu class="user-list"></menu>
                    <menu class="user-list"></menu>
                </div>
                <div id="social-actions">
                    <span id="social-uid-container">
                        Your User ID: <span id="social-uid"></span>
                    </span>
                    <button class="gota-btn" id="btn-add-friend">Add a Friend</button>
                </div>
            </div>
            <div class="main-content main-divider">
                <div id="main-discord" class="main-panel center">
                    <div class="title-text menu-title">Discord Linking</div>
                    <div class="main-mini-container">
                        <p>
                            Link your Discord account to recieve exclusive rewards on our <a href="https://gota.io/discord" class="stealth-link">official server</a>
                            ! Linking your account will also join you to our server!
                        </p>
                        <p id="discordLinkStatus" style="display: none">Your account is currently not linked.</p>
                        <div class="discord-login-container">
                            <a class="discord-login-button" id="discordLink" href="#">Link with Discord</a>
                            <a class="discord-login-button" id="discordUnlink" style="display: none" href="#">Unlink Discord</a>
                        </div>
                    </div>
                </div>
                <div id="main-tokens" class="main-panel center">
                    <div class="title-text menu-title">Redeem Tokens</div>
                    <div class="main-mini-container">
                        <p>Visit our store for more information on receiving a locked name!</p>
                        <small id="token-amount"></small>
                    </div>
                    <form id="redeem-tokens" class="gota-input-group" action="#" style="display: none">
                        <input type="text" class="gota-input" id="redeem-name" placeholder="Name" minlength="3" maxlength="20" required>
                        <input type="number" class="gota-input" id="redeem-spend" placeholder="Tokens" min="0" required style="width: 35%">
                        <input type="submit" class="gota-btn" value="Redeem" style="margin: 15px">
                        <br>
                        <a href="https://gota.io/policies/locked-names/rules.html" target="_blank" rel="noopener" style="color: white">Locked Name Rules</a>
                    </form>
                </div>
            </div>
        </div>
        <div id="main-scrimmage" class="main-panel interface-color" style="display: none">
            <div id="scrimmage-menu" class="scrimmage-full" style="display: block">
                <div class="title-text menu-title">Scrimmage</div>
                <div class="scrimmage-content">
                    <div class="scrimmage-left scrimmage-main-left">
                        <div class="scrimmage-mode-box menu-sub-bg">
                            <span>Gamemode</span>
                            <br>
                            <select id="scrimmage-mode-select" class="scrimmage-select"></select>
                        </div>
                        <div id="scrimmage-custom-btn-container" class="scrimmage-mode-box scrimmage-main-left menu-sub-bg">
                            <span>Custom Game</span>
                            <button id="btn-custom-create" class="gota-btn">Create</button>
                            <button id="btn-custom-lobbies" class="gota-btn">Join</button>
                        </div>
                    </div>
                    <div id="scrimmage-mode-info" class="scrimmage-mode-box scrimmage-right menu-sub-bg"></div>
                </div>
                <div style="text-align: center; height: 30px">
                    <button id="btn-queue" class="gota-btn">Queue</button>
                </div>
            </div>
            <div id="scrimmage-custom" class="scrimmage-full" style="display: none">
                <div class="title-text menu-title">Custom Game</div>
                <div class="scrimmage-content">
                    <div class="scrimmage-left">
                        <div id="scrimmage-options-leader" class="scrimmage-mode-box menu-sub-bg">
                            <span>Map</span>
                            <br>
                            <select id="scrimmage-map" class="scrimmage-select custom-game"></select>
                            <br>
                            <span>Modifier</span>
                            <br>
                            <select id="scrimmage-mapmode" class="scrimmage-select custom-game"></select>
                            <br>
                            <span>Map Size</span>
                            <br>
                            <select id="scrimmage-mapsize" class="scrimmage-select custom-game"></select>
                            <br>
                            <span>Starting Mass</span>
                            <br>
                            <input id="scrimmage-startmass" class="custom-game">
                            <br>
                            <span>Virus Density (%)</span>
                            <br>
                            <input id="scrimmage-virusDensity" class="custom-game">
                            <br>
                            <span>Respawn Delay (Sec)</span>
                            <br>
                            <input id="scrimmage-respawnDelay" class="custom-game">
                            <br>
                            <input type="checkbox" id="scrimmage-autoSplit" class="custom-game">
                            <span>Auto Splits</span>
                            <br>
                            <br>
                            <input type="checkbox" id="scrimmage-lockteams" class="custom-game">
                            <span>Lock Teams</span>
                            <br>
                            <br>
                            <input type="checkbox" id="scrimmage-public" class="custom-game">
                            <span>Public</span>
                            <br>
                            <input type="checkbox" id="scrimmage-password" class="custom-game">
                            <span>Password</span>
                        </div>
                    </div>
                    <div id="scrimmage-custom-playerlist" class="scrimmage-mode-box scrimmage-right menu-sub-bg">
                        <table class="scrimmage-list-table">
                            <thead>
                                <tr>
                                    <th style="width: 70%">
                                        <span>Players</span>
                                    </th>
                                    <th style="width: 30%">
                                        <span>Team</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="scrimmage-custom-players"></tbody>
                        </table>
                    </div>
                </div>
                <div style="text-align: center; height: 30px">
                    <button id="btn-custom-start" class="gota-btn">Start</button>
                    <button id="btn-custom-return" class="gota-btn">Back</button>
                </div>
            </div>
            <div id="scrimmage-lobbies" class="scrimmage-full" style="display: none">
                <div class="title-text menu-title">Custom Game Browser</div>
                <div class="scrimmage-content menu-sub-bg">
                    <div id="scrimmage-lobbies-list" class="scrimmage-mode-box scrimmage-right">
                        <table class="scrimmage-list-table">
                            <thead>
                                <tr>
                                    <th style="width: 34%">
                                        <span>Name</span>
                                    </th>
                                    <th style="width: 24%">
                                        <span>Leader</span>
                                    </th>
                                    <th style="width: 16%">
                                        <span>Map</span>
                                    </th>
                                    <th style="width: 16%">
                                        <span>Mode</span>
                                    </th>
                                    <th style="width: 10%">
                                        <span>Players</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="scrimmage-lobbies-tbody"></tbody>
                        </table>
                    </div>
                </div>
                <div style="text-align: center; height: 30px">
                    <button id="btn-lobbies-join" class="gota-btn">Join</button>
                    <button id="btn-lobbies-refresh" class="gota-btn">Refresh</button>
                    <button id="btn-lobbies-return" class="gota-btn">Back</button>
                </div>
            </div>
        </div>
        <div class="popup-container">
            <div id="popup-party" class="popup-panel" style="display: none">
                <div class="title-text menu-title">Party Invite</div>
                <div id="popup-party-text"></div>
                <div class="popup-buttons">
                    <button id="btn-accept" class="gota-btn">Accept</button>
                    <button id="btn-decline" class="gota-btn">Decline</button>
                </div>
            </div>
            <div id="popup-party-code" class="popup-panel" style="display: none">
                <div class="title-text menu-title">Party Code</div>
                <div class="gota-input-group" id="popup-party-code-content">
                    <input type="text" id="party-code-input" readonly="readonly">
                    <button>Copy</button>
                </div>
            </div>
            <div id="popup-account-username" class="popup-panel" style="display: none">
                <div class="back-button" data-balloon="Go back to main menu" data-balloon-pos="up">
                    <i class="material-icons">chevron_left</i>
                </div>
                <div class="title-text menu-title">Edit Username</div>
                <div class="gota-input-group"></div>
                <div class="gota-input-group">
                    <input type="text" id="account-username-input" placeholder="New Username" autocomplete="off" maxlength="29" minlength="3" data-lpignore="true">
                    <button id="account-set-username-btn" class="gota-btn">Set</button>
                </div>
                <div class="center">
                    <i>Woah! You can only change your username every 14 days.</i>
                    <a href="https://gota.io/policies/usernames/rules.html" class="stealth-link" target="_blank" rel="noopener">Username Rules</a>
                </div>
            </div>
            <div id="popup-profile" class="popup-panel" style="display: none">
                <div class="profile-title-container">
                    <img id="profile-avatar" class="avatar">
                    <div class="title-text" id="profile-name">
                        <span id="profile-title"></span>
                        &nbsp;<span id="profile-username"></span>
                    </div>
                    <span id="profile-clan-membership"></span>
                    <span id="profile-level"></span>
                </div>
                <div class="divider title-divider"></div>
                <div class="popup-profile-filler"></div>
                <div class="profile-actions">
                    <button id="profile-close-btn" class="gota-btn">Close</button>
                </div>
            </div>
            <div id="popup-titles" class="popup-panel" style="display: none">
                <div class="back-button" data-balloon="Go back to main menu" data-balloon-pos="up">
                    <i class="material-icons">chevron_left</i>
                </div>
                <div class="title-text menu-title">Titles</div>
                <div class="popup-content">
                    <div class="gota-input-group">
                        <select id="account-titles" style="display: none">
                            <option value="0">Default Title</option>
                        </select>
                    </div>
                    <div id="titles-list" style="margin-top: 12px"></div>
                </div>
            </div>
            <div id="popup-changelog" class="popup-panel" style="display: none">
                <div class="back-button" data-balloon="Go back to main menu" data-balloon-pos="up">
                    <i class="material-icons">chevron_left</i>
                </div>
                <div class="title-text menu-title">Changelog</div>
                <div class="popup-content">
                    <div id="changelog-content" class="changelog-content" style="margin-top: 12px; overflow: auto; max-height: 60vh">Loading changelog...</div>
                </div>
                <div class="popup-buttons">
                    <button id="changelog-close-btn" class="gota-btn">Close</button>
                </div>
            </div>
            <div id="popup-food-colors" class="popup-panel" style="display: none">
                <div class="back-button" data-balloon="Go back to main menu" data-balloon-pos="up">
                    <i class="material-icons">chevron_left</i>
                </div>
                <div class="title-text menu-title">Food Colors</div>
                <table class="food-colors-table">
                    <tbody>
                        <tr>
                            <td>
                                <div id="food-color-list"></div>
                            </td>
                            <td style="white-space: nowrap">
                                <button id="btnAddFoodColor" type="button" style="margin-right: 6px;
                    padding: 4px 10px;
                    border: none;
                    border-radius: 4px;
                    background: #444;
                    color: #fff;
                    cursor: pointer;
                    font-size: 14px;
                    vertical-align: middle;
                    transition: background 0.2s;">Add</button>
                                <input type="text" id="pFoodColors" data-coloris>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="popup-asset-skinner" class="popup-panel" style="display: none">
                <div class="back-button" data-balloon="Go back to main menu" data-balloon-pos="up">
                    <i class="material-icons">chevron_left</i>
                </div>
                <div class="title-text menu-title">Set</div>
                <div class="center asset-skinner-center">
                    <input type="text" class="gota-input" id="input-asset-skinner" autocomplete="off" data-lpignore="true">
                    <div>
                        <button id="btn-custom-asset-clear" class="gota-btn">Clear</button>
                        <button id="btn-custom-asset-set" class="gota-btn">Set</button>
                    </div>
                </div>
                <div class="center asset-skinner-last">
                    <i>Please enter the image url or drag an image to this window.</i>
                </div>
            </div>
            <div id="popup-chat-tab-editor" class="popup-panel" style="display: none">
                <div class="back-button" data-balloon="Go back to main menu" data-balloon-pos="up">
                    <i class="material-icons">chevron_left</i>
                </div>
                <div class="title-text menu-title">Chat Tabs Editor</div>
                <table class="popup-chat-tab-editor-table">
                    <thead>
                        <tr>
                            <th colspan="5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="3">Chat Tab</td>
                            <td colspan="2">
                                <select id="cte-tab-selector">
                                    <option value="All">All</option>
                                    <option value="Party">Party</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">Name</td>
                            <td colspan="2">
                                <input type="text" class="gota-input" autocomplete="off" id="cte-tab-name">
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colspan="5">Allowed Chat Types</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="4">All Chat</td>
                            <td>
                                <input type="checkbox" id="cte-type-all">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">Party Chat</td>
                            <td>
                                <input type="checkbox" id="cte-type-party">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">Whispers</td>
                            <td>
                                <input type="checkbox" id="cte-type-whisper">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">System Messages</td>
                            <td>
                                <input type="checkbox" id="cte-type-system">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">Admin Announcements</td>
                            <td>
                                <input type="checkbox" id="cte-type-admin">
                            </td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colspan="5">Extra</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="4">Max Messages</td>
                            <td>
                                <input type="text" class="gota-input" autocomplete="off" id="cte-max-messages">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="center popup-chat-tab-editor-last">
                    <button id="btn-chat-tab-editor-add" class="gota-btn">Add</button>
                    <button id="btn-chat-tab-editor-remove" class="gota-btn">Remove</button>
                    <button id="btn-chat-tab-editor-update" class="gota-btn">Update</button>
                </div>
            </div>
            <div id="popup-message" class="popup-panel" style="display: none">
                <div class="back-button" data-balloon="Go back to main menu" data-balloon-pos="up">
                    <i class="material-icons">chevron_left</i>
                </div>
                <div class="title-text menu-title">Gota Alert</div>
                <div id="popup-message-content"></div>
                <div class="profile-actions">
                    <button id="popup-message-read-btn" class="gota-btn">Mark as read</button>
                </div>
            </div>
        </div>
        <div id="cookie-banner" style="display: none">
            <span class="description">
                <b>We've updated our Cookie Policy!</b>
                <br>We use cookies to ensure that we give you the best experience on our website. We also use cookies to provide personalised content (e.g personalised ads or saved settings). If you refuse (or do not provide a preference) to the use of cookies, we may be unable to provide some of our services. (You can change your preference in the options menu at any time).
            </span>
            <div class="buttons">
                <button id="declineCookies">Decline</button>
                <button id="acceptCookies">Allow Cookies</button>
            </div>
        </div>
        <div id="context-menu" style="display: none" selected="0" party="-1">
            <ul class="context-list">
                <li id="context-name"></li>
                <li id="menu-invite" class="context-action">
                    <span>Invite</span>
                </li>
                <li id="menu-pu_pr" class="context-action">
                    <span>Public</span>
                </li>
                <li id="menu-promote" class="context-action">
                    <span>Promote</span>
                </li>
                <li id="menu-whisper" class="context-action">
                    <span>Whisper</span>
                </li>
                <li id="menu-profile" class="context-action">
                    <span>Profile</span>
                </li>
                <li id="menu-kick" class="context-action">
                    <span>Kick</span>
                </li>
                <li id="menu-spectate" class="context-action">
                    <span>Spectate</span>
                </li>
                <li id="menu-block" class="context-action">
                    <span>Block</span>
                </li>
            </ul>
        </div>
        <div id="touch_controls">
            <div id="joystick" style="position: relative"></div>
            <div id="touch_buttons">
                <button id="button_double" class="touch_button">D</button>
                <button id="button_triple" class="touch_button">T</button>
                <button id="button_split" class="touch_button">S</button>
                <button id="button_eject" class="touch_button">E</button>
            </div>
        </div>
        <script type="a34ce2b03f66004534580816-text/javascript">
            !function(){try{var n=document.getElementById("client-version");if(!n)return;n.textContent="undefined"!=typeof window&&window.version?String(window.version):"unknown"}catch(n){}}()
        </script>
        <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="a34ce2b03f66004534580816-|49" defer></script>
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"9c828193bc6db07c","serverTiming":{"name":{"cfExtPri":true,"cfEdge":true,"cfOrigin":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"version":"2025.9.1","token":"ed5742fb141f4b3db3ac668f702d222e"}' crossorigin="anonymous"></script>
    </body>
</html>
