const build = 2310130;
var version, showSideMenu, hideSideMenu;
(function () {
  var _0xA45D = ["gota.io", "", ":", "split", "/", "://", "href", "location", ",", "length", ".", "error", "3.6.4", "#", "display", "css", "none", "slideDown", "block", "slideUp", "each", "children", "#main-right", "PIXI", "Container", "EMPTY", "Texture", "Sprite", "addChild", "PI", "https://discord.com/channels/166703751053312000/630428963889741854", "GoogleAuthProvider", "auth", "https://accounts.gota.io", "xmas", "enabled", "endDate", "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM", "accounts.gota.io", "https://gota-io.firebaseio.com", "gota-io", "gota-io.appspot.com", "570450309042", "1:570450309042:web:380ab6c94d44de2f", "initializeApp", "All", "Party", "ALL", "AUTO", "NONE", "ULTRA", "DEFAULT", "360px", "250px", "stringify", "parse", "assign", "rgb(255, 255, 255)", "rgba(22, 22, 22, 0.8)", "rgba(255, 255, 255, .2)", "#2A2A2A", "#404040", "#363636", "#444444", "#121212", "#ff0000", "#ffaaaa", "#ffff00", "#00ffff", "#00ff00", "canvas", "getElementById", "minimap-canvas", "2d", "getContext", "#main", "#party-panel", ".hud-panel", "#score-panel", "#main-scrimmage", "#context-menu", "#chat-input", "#leaderboard-header", "#scrimmage-custom", "mouseFrozenDiv", "#score-mouse", "playerScore", "#playerScore", "playerCells", "#playerCells", "playerFps", "#playerFps", "resetInfo", "#extra-reset-timer", "resetTime", "#resetTime", "respawnInfo", "#extra-respawn-cooldown", "respawnCooldown", "#respawnCooldown", "spectatorCount", "#spectatorCount", "playerCellCount", "minimapCoords", "#minimap-coordinates", "partyPanel", "friendOnlineCount", "#social-online-friends-count", "onmousemove", "mouseRawX", "clientX", "mouseRawY", "clientY", "onkeydown", "which", "keyCode", "charCode", "preventDefault", ":focus", "is", "input", "#popup-profile", "#popup-account-username", "handleKey", "onkeyup", "kEjectMass", "sendEjectMass", "sendPacket", "onmousedown", "button", "onmouseup", "onblur", "cDisablePersistEjectMass", "wheel", "id", "target", "wheelDelta", "originalEvent", "deltaY", "mouseZoom", "on", "contextmenu", "addEventListener", "&", "join", "slice", "toLowerCase", "toUpperCase", "name", "region", "value", "val", "version", "Woah! Version ", " is now available. Press Ctrl+R to update!", "selfMsg", "motd", "listRefresh", "titles", "/game", "ref", "database", "POST", "json", "/api/v1/utilities/servers", "servers", "players", "bots", "playersMax", "*", "address", "gamemode", "ssl", "order", "push", "sort", "ajax", "eu", "Vendetta", "unload", "init", "sRenderType", "CANVAS", "cDisableAA", "autoDetectRenderer", "resize", "now", "Welcome to Gota.io!", "width", "innerWidth", "resolution", "height", "innerHeight", "renderer", "x", "position", "stage", "y", "Graphics", "beginFill", "drawCircle", "endFill", "HIGH", "MSAA_QUALITY", "devicePixelRatio", "create", "RenderTexture", "Matrix", "render", "framebuffer", "blit", "destroy", "charAt", "u", "rAnimationDelay", "min", "scale", "cDisableAutoFoodHiding", "cHideFood", "visible", "foodObjects", "steps", "animate", "handleFood", "bucket", "handle", "myCells", "size", "centerX", "centerY", "centerSteps", "cDisableAutoZoom", "scale_base", "max", "pow", "centerX_", "centerY_", "pivot", "isConnected", "mouseFrozen", "sendMouse", "cHideMinimap", "cShowCoordinates", "update", "buffHolder", "html", "resetType", "serverData", "floor", "ceil", "NEVER", "handleUpdatedPlayers", "playerRegistry", "cShowBorder", "border", "removeChild", "parent", "rBorderSize", "toHexString", "uiGameBorderColor", "string2hex", "utils", "lineStyle", "left", "top", "drawRect", "uiForegroundColor", "X: ", "toFixed", " Y: ", "clearRect", "font", "12px Calibri", "party", "state", "ALIVE", "playerId", "mmColor", "x_", "y_", "#fefefe", "socket", "currentServer", "currentServerName", "spectate", "scale_", "offsetX", "offsetY", "mouseX", "mouseY", "partyIds", "subPanelOverride", "score", "customGameMap", "accountListeners", "clearStats", "bind", "sendPing", "prototype", "stats", "An unnamed cell", "play", "No server selected!", "#name-box", "#playerServer", "ip", "setName", "connect", "send", "event", "Game", "webMenu", "Play", "spec", "sendSpectate", "Spectate", "nextUrl", "disconnect", "Connecting to ", "...", "wss://", "ws://", "binaryType", "arraybuffer", "onopen", "onConnect", "onmessage", "onMessage", "onclose", "reset", "You have been disconnected from the server. Reason: ", "reason", "Unknown", "onerror", "Error connecting to server... Retrying every second.", "hide-captcha-badge", "add", "classList", "body", "close", "clearBuckets", "onDelete", "clear", "clearParty", "clearBuffs", "hasSentSubPanel", "autosplits", "#playerId", "kSplit", "sendKey", "kToggleSpec", "kDoubleSplit", "kTripleSplit", "kQuadSplit", "kHexaSplit", "kFreezeMouse", "kContextMenu", "readyState", "connectionStart", "sendOptions", "currentUser", "catch", "sendAuthToken", "then", "getIdToken", "td", "createElement", "span", "color", "style", "#DDDD00", "innerHTML", "[System] ", "appendChild", "SYSTEM", "selfMsgWithJoinCode", "pointerEvents", "all", "userSelect", "partyLeader", "partyIndex", "handleCustomGameLeave", "partyCode", "page", " ", "pushState", "history", "isPartyLeader", "getServerMaxCells", "maxCells", "bonusMaxCells", "data", "getUint8", "offset", "handleUpdate", "handlePosition", "handleStats", "showSubPanel", "updateSubPanel", "handleInvite", "handlePartyInfo", "handlePartyData", "handlePartyJoinCode", "handleLeaderboard", "handleLeaderboardCustom", "handleRespawnCooldown", "handleMapData", "handleClearNodes", "handleUpdateBorder", "handleResetTime", "handleSpectators", "handleSystemMsg", "handlePing", "handleChat", "handleWhisper", "handleEditMessage", "handleShowScrimmageMenu", "handleQueueData", "handleQueueLeave", "handleMatchState", "handleScrimmageData", "handleCustomGameShow", "handleCustomGameUpdate", "handleShowCustomGameLobbies", "handleAddBuff", "handleRemoveBuff", "handleClearBuffs", "handleAuthenticated", "handleProfile", "getUint16", "remove", "type", "keys", "cAutoRespawn", "GOT_gota-io_336x280", "refresh", "cmd", "getPlayer", "cellColor", "setSkin", "setFlags", "flags", "nameColor", "parseEffect", "nameFont", "updatePlayer", "setType", "getInt16", "setX", "setY", "setSize", "skin", "rainbow", "buff", "onCreate", "updateX", "updateY", "size_", "sortCells", "getFloat32", "getFloat64", "updateCellCounter", "sendPartyJoin", "#scrimmage-btn-leave", "right", "bottom", "spectators", "updateSpectators", "leaderboard-canvas", "Leaderboard", "text", "getUint32", "16px Calibri", "fillStyle", "uiLeaderboardHighlightSelf", "uiLeaderboardHighlightParty", ". ", "fillText", "cColoredPing", "uiGameColorSuccess", "#playerPing", "uiGameColorWarning", "uiGameColorError", "ms", "rgb(", ")", "includes", "byteLength", "getBigInt64", "PARTY", "Admin", "ADMIN", " - ", "msgid", "dataset", "[", "] ", "innerText", "className", "chat-name", "oncontextmenu", ": ", "chat-content", " > ", "WHISPER", ".chat-table td[data-msgid='", "'] .chat-content", "tr", "closest", "']", "SUCCESS", "Invalid authentication token! Please logout and try again!", "FAILURE", "cAutoDecline", "sendInviteResponse", "popup-party-text", " has invited you to a party.", "#popup-party", "isLeader", "cache", "team", "UNKNOWN", "checkLeader", "drawParty", "getInt32", "#popup-party-code-content input", "show", "#popup-party-code", "alive", "eatenFood", "eatenEject", "eatenVirus", "eatenPlayer", "gainFood", "gainEject", "gainVirus", "gainPlayer", "#main-stats", "empty", "<span>Name: ", " (", ")</span><br>", "append", "<span>Alive: ", "</span><br>", "<span>Food eaten: ", "<span>Ejected mass eaten: ", "<span>Viruses eaten: ", "<span>Player cells eaten: ", "uid", "onAddBuff", "onRemoveBuff", "parentCell", "updateScorePanel", "getRealMass", "toLocaleString", "cColoredCellCount", "cHidePartyPanel", "party-canvas", "measureText", "scoreText", "DEAD", "SPECTATE", "SPEC", "uiPartyLeaderColor", "Total:", "stop", "Queue", "Mode: ", "Time: ", "Queued players: ", "You have left the queue for [", "]", "A match has been found. Good luck and have fun!", "#scrimmage-mode-select", "#scrimmage-mode-info", "option", "div", "scrimmage-info-", "modes", "sizes", "startmass", "respawnDelay", "teams", "maps", "#scrimmage-custom-btn-container", "#scrimmage-map", "<option value='", "'>", "</option>", "change", "trigger", "selectedIndex", "prop", "updateMap", "MAP", "updateMode", "MODE", "updateSize", "SIZE", "updateStartMass", "STARTMASS", "updateLock", "LOCK", "updatePlayerById", "PLAYER_UPDATE", "updatePlayers", "PLAYER_LIST", "updateVirusDensity", "VIRUS_DENSITY", "updateRespawnDelay", "RESPAWN_DELAY", "updateAutoSplit", "AUTOSPLIT", "updatePublic", "PUBLIC", "updatePassword", "PASSWORD", "updateName", "NAME", ".scrimmage-full", "#scrimmage-menu", "#scrimmage-lobbies", "#scrimmage-lobbies-tbody", "leaderId", "leaderName", "map", "mode", "maxSize", "hasPasscode", "<div class='scrimmage-lock'></div>", "<tr partyId='", "'><td><span>", "</span></td><td><span>", "</span></td></tr>", "click", "custom-game-selected", "removeClass", ".custom-game-selected", "partyId", "attr", "addClass", "#scrimmage-lobbies-tbody tr", "#scrimmage-name", "selected", "#scrimmage-map option[value='", "#scrimmage-mapmode", "#scrimmage-mapsize", "placeholder", "#scrimmage-startmass", "#scrimmage-mapmode option[value='", "#scrimmage-mapsize option[value='", "#scrimmage-virusDensity", "#scrimmage-respawnDelay", "checked", "#scrimmage-autoSplit", "#scrimmage-public", "#scrimmage-password", "#scrimmage-lockteams", "checkLock", "disabled", "#cgp-", "removeAttr", ".custom-game", " option[value='", "#cgp-name-", "#scrimmage-custom-players", "<tr><td><span id='cgp-name-", "</span></td>", "getTeamOptions", "</tr>", "\\d+", "match", "option:selected", "find", "sendCustomGameUpdate", "<td><select class='custom-game' id='cgp-", "'><option value='0'>Spectator</option>", "' class='t", "</select></td>", "nameCache", "massLastAmount", "getMass", "getSizeCache", "massType", "toShortString", "toString", "getNumber", "cacheContainer", "getSizeCacheSprite", "texture", "clearCacheContainer", "K", "M", "B", "sprites", "spritesIndex", "buildSizeCache", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "T", "Verdana", "bold", "#fff", "black", "textOutlineSize", "Text", "needsPixiUpdate", "sprite", "set", "anchor", "cThemeEnabled", "tint", "getPlayerById", "SELF", "cellSprite", "container", "skinSprite", "massSprite", "nameSprite", "cacheUpdate", "getNameCache", "spiked", "aCustomSpike", "aCustomMother", "levelSkins", "getSkin", "isGif", "getTexture", "cDisableAutoNameHiding", "levelNames", "lowerName", "effect", "nameEffectSprite", "cShowMass", "debuffSprite", "shieldSprite", "motherCustomEnabled", "cDisableEventSkins", "motherCustom", "setDefaultSpriteAnchor", "defaultData", "updatedPlayers", "shift", "skinCache", "normal", "outlineColor", "fontFamily", "stroke", "fontWeight", "fontSize", "fill", "updateText", "LOADING", ".gif", "endsWith", "loadFromFrameData", "LOADED", "crossOrigin", "load", "beginPath", "arc", "closePath", "clip", "drawImage", "from", "ERROR", "src", "Gota Web ", "setUint8", "cSilentLogin", "setInt32", "setUint16", "sendChat", "sendPartyAction", "setUint32", "sendShowProfile", "sendWhisper", "sendSubPanel", "skinName", "r", "g", "b", "chatColor", "sendLockedNameChange", "rViewDistance", "sendQueue", "sendCustomGame", "sendLeaveMatch", "sendShowLobbies", "sendJoinLobby", "sendCaptcha", "setInt16", "sendCustomGameUpdateString", "charCodeAt", "fromCharCode", "message", "code", "This account has been permanently suspended by an administrator.", "auth/user-disabled", "auth/popup-closed-by-user", "white", "STAFF", "Gota.io Staff", "build", "royalblue", "VERIFIED", "Verified Player", "check_circle", "i", "material-icons", "user-badge", "data-balloon", "data-balloon-pos", "setAttribute", "up", "li", "user-embed menu-sub-bg2", "backgroundColor", "uiMenuHeaderBackgroundColor", "img", "avatar", "alt", "username", "info", "server", "presence", "timestamp", "getTime", "status offline", "Not playing on any server", "status ", "status", "ONLINE", "online", "Playing ", "Spectating ", " on ", " (ID ", "status pending", "Pending Friend Request", "actions", "#main-social", "Join Server", "'s ID is ", "done", "Add as Friend", "isHandlingRequest", "/api/v1/social/friends", "application/json", "Remove Friend", 'Are you sure you want to remove "', '" as your friend?', "off", "callbacks", "elements", "#profile-username", "#profile-avatar", "Level ", "level", "levelData", "&nbsp;&nbsp;&nbsp;[", "xp_current", "xp_needed", "#profile-level", "title", "#profile-title", "#profile-name", "hide", "cursor", "pointer", "default", "spin", "#profile-close-btn", "#social-friends .user-list", "#social-uid", "title-text center", "You have no friends 😥", "pendingFriends", "replaceChild", "forEach", "profiles", "/api/v1/social/friends/pending", "/users/", "timestamps", "indexOf", " online", "#social-friends-count", "/friendships/", "hasOwnProperty", "balloon", "event-", "key", "toggleClass", ".server-tab", "incrementPlay", "undefined", "startPreRoll", "player", "#btn-play", "main-servers", "#btn-servers", "main-options", "#btn-options", "main-hotkeys", "#btn-hotkeys", "main-themes", "#btn-themes", "main-subpanel", "#btn-cellpanel", "https://www.reddit.com/r/PlayGotaIO/", "_blank", "open", "#btn-reddit", "https://gota.io/discord", "#btn-discord", "keypress", "#btn-spec", "#autocomplete-panel", "startsWith", "<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>", "substring", "findIndex", "triggers", "<tr><td>", "</td><td>", "description", "</td></tr>", "#autocomplete-panel tbody", "values", "filter", "<h3>Emotes</h3>", "<img name='", "' title='", "' src='https://gota.io/emotes/", ".png' />", "<h3>Gifs</h3>", "' src='https://gota.io/emotes/gifs/", ".gif' />", "keyup", "nodeName", "TD", "parentElement", "focus", "IMG", "nodeValue", "attributes", "#animationDelay", "#rAnimationDelay", "#viewDistance", "#rViewDistance", "rUiScale", "parseFloat", "#uiScale", "#rUiScale", "transform", "scale(", ".ui-scale", "background-image", "url(https://gota.io/emotes/", "random", ".png)", "#chat-emote-btn", "toggle", "#emote-panel", "#emote-panel ul li img", "chat-panel", "mousedown", "chat-resize", "getComputedStyle", "defaultView", "mousemove", "documentElement", "mouseup", "px", "removeEventListener", ".checkbox-options", ".options-container select", ".options-container input[type=range]", "#popup-changelog", "#btn-changelog", "#btn-close-changelog", "#btn-accept", "#btn-decline", "select", "Copy", "execCommand", "#popup-party-code-content button", "#menu-invite", "/t ", "#menu-whisper", "#menu-profile", "Private", "#menu-pu_pr span", "Public", "#menu-pu_pr", "#menu-promote", "#menu-kick", "#menu-spectate", "#menu-block", "chat-emote-btn", "popup-party-code", "#popup-chat-tab-editor", "#aEditChatTabs", "#cte-tab-selector", "#btn-chat-tab-editor-add", "#btn-chat-tab-editor-remove", "#btn-chat-tab-editor-update", "#popup-asset-skinner .title-text", "asset", "#input-asset-skinner", "#popup-asset-skinner", ".custom-asset-skinner", "a", "#popup-asset-skinner .back-button", "#btn-custom-asset-set", "#btn-custom-asset-clear", "drop", "test", "result", "readAsDataURL", "dragover", "#popup-food-colors", "#btn-food-colors", "theme.json", "text/plain", "#btn-theme-export", "#theme-import", "#btn-theme-import", "files", "#main-themes .options-container", "/api/v1/options/setFlags", "#cGlobalLeaderboard", "consented", "signOut", "users/", "#account-loader", "#authed", "display: flex;", "#account-avatar", "#account-username", "&nbsp;&nbsp;&nbsp;&nbsp;", " XP", "#account-level", "%", ".xp-meter > span", "loadServers", "port", "?", "servers/account/", "DISCORD_LINKED", "loadDiscord", "exists", "Your account is linked with ", "discrim", "#discordLinkStatus", "#discordLink", "#discordUnlink", "padding", "15px", ".discord-login-container", "30px", "onSnapshot", "doc", "discord", "collection", "firestore", "tokens", "getMonth", "setMonth", "#redeem-tokens", "You have 0 tokens.", "#token-amount", "You have ", " tokens, maximum expiry date: ", "#redeem-spend", "#account-titles", "loadPrivateData", "<option value='0'>Default Title</option>", "inline-block", "content", "read", "#popup-message-title", "#popup-message-content", "#popup-message", "private/", "#guest", "#no_cookie_consent", "onAuthStateChanged", "signInWithPopup", "#account-login", "#account-logout", "https://store.gota.io/", "#account-shop", "#account-social", "#social-back-button", "#account-profile", "#food-colors-close-btn", "Set", "/api/v1/options/setTitle", "/api/v1/options/markAsRead", "#popup-message-read-btn", "#account-username-input", "trim", "Please provide a username!", "/api/v1/social/username", "#account-set-username-btn", ".popup-panel .back-button", "https://accounts.gota.io/api/v1/options/discord/redirect?token=", "popup", "width=600,height=700", "/api/v1/options/discord/unlink", "By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.", "#redeem-name", "/api/v1/options/redeem", "submit", ".error-banner", "Enter friend's UID (found above add friend button)", "replace", "string", "Please enter a valid UID", "#btn-add-friend", "tagName", "activeElement", "INPUT", "setSelectionRange", "blur", "beforeunload", "Are you sure you want to leave Gota.io?", "keybinds-btn-selected", ".keybinds-btn", "#btn-reset-keybinds", "#scrimmage-info-", "#btn-queue", "#btn-leave-match", "#btn-custom-create", "#btn-custom-return", "#btn-custom-start", "#btn-custom-lobbies", "#btn-lobbies-refresh", "Enter the password to join this game", "#btn-lobbies-join", "#btn-lobbies-return", "Enter a password to join your game (32 max characters)", "Enter a new name for your game (32 max characters)", "grecaptcha", "ready", "6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", "login", "execute", "hex", "toRgbString", "spectrum", "showAlpha", "#uiGameBackgroundColor", "#uiGameBorderColor", "Add", "_FoodColors", "#pFoodColors", "#food-color-list", "<div c='", "' style='background:", ";color:", ";'><span>", "</span><div><button class='btn-food-color'>X</button></div></div>", "c", "eq", "parents", "splice", ".btn-food-color", ".keybinds-btn-selected", "first", "&nbsp;", "logo", "backgroundImage", "url('images/logo.png')", "url('images/events/", "/logo.png')", "<li><img name='", ".png' /></li>", ".emote-list", ".gif' /></li>", ".gif-list", '<option value="', '">', "#spEffect", "images/ejected_mass_skins/", ".png", "index", "customEjectedMass", "images/events/", "/ejected_mass.png", "images/effects/", "/spike_mother_happy.png", "images", "/spike_mother.png", "/spike.png", "table-row", "#performance-refresh", "cHideId", ".pID", "cHideServerDisplay", ".psvr", "alpha", "cTransCells", "cHideChat", "#chat-panel", "#minimap-panel", "cHideScorePanel", "cHideLeaderboard", "#leaderboard-panel", "cHideExtraPanel", "#extra-panel", "disable", "enable", "cResizableChat", "#chat-resize", "sShowNames", "sShowSkins", "sMassType", "sTextOutlines", "strokeThickness", "sQuality", ".fg-interface-color", ".interface-color", "border-color", ".gota-btn", ".popup-panel", ".main", ".main-bottom-stats", "background-color", ".hud-panel .interface-color", ".ui-pane", "#chat-tab-container", ".chat-tab", ".main-panel", ".options-container", ".menu-title", ".menu-sub-bg", ".server-active", "#server-content", ".menu-sub-bg2", ".server-table tbody", "#social-friends-online-count", "background", "#borderSize", "rBackgroundOpacity", "#backgroundOpacity", "opacity", "canvas-background", "url('", "')", "backgroundSize", "100% 100%", "Unable to load custom theme virus.", "Unable to load custom theme mother cell.", "#minimap-canvas", "2px solid rgba(255, 255, 255, .2)", "270px", "Enter new locked name!", "Please enter a valid name!", "Locked names must be 2 or more characters long.", "Locked names must be 20 or less characters long.", "You are about to change your locked name to: '", "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?", "#btn-chg-ln", "#btn-updateSP", "rules", "#btn-subpanel-rules", "rgb", "#spNameColor", "#spChatColor", "#spSkinName", "#spLowerName", "#spEffect select", "#spNameFont select", "toRgb", "get", "#spNameFont", ".subpanel-name-dashboard", "#subpanel-rules", "#subpanel-content", "loadSubPanel", "locked", "#main-subpanel", "#spLockedName", "lastChange", "Last Changed: ", "expiry", "seconds", "#spExpiry", "Never", "accounts", "playerText", "#servers-body-eu", "#servers-body-na", "#servers-body-ap", ' title="Players: ', "&#10;Bots: ", '"', '<tr id="s_', '" class="server-row" server="', '"><td class="server-table-name">', '</td><td class="server-table-players"', ">", '</td><td class="server-table-mode">', "#servers-body-", '" class="account-server server-row" server="', '</td><td class="server-table-players">', "prepend", ".server-row", "server-selected", "#s_", "#server-tab-", "inherit", "server-active", "#server-tab-container", "uiMenuSubBackgroundColor", "#servers-", "_ChatTabs", "#chat-body-", " tr", "maxMessages", " tr:first-child", "cloneNode", "chat-body-", "#chat-container-", "scrollHeight", "scrollTop", "outerHeight", "action", "Invalid command!", "#chat-container", "Unnamed", "<li class='chat-tab' id='chat-tab-", "' name='", "'><span>", "</span></li>", "<div class='chat-inner-container' id='chat-container-", "'><table class='chat-table'><tbody id='chat-body-", "'></tbody></table></div>", "uiBorderColor", "#chat-tab-", "<span>", "</span>", "chat-active-tab", "chat-active-container", ".chat-inner-container", "#cte-tab-name", "#cte-type-", "#cte-max-messages", "New", "context-name", ".context-action", "&gt;", "&lt;", "iChatWidth", "iChatHeight", "options", "setItem", "localStorage", "keybinds", "theme", "subpanel", "getItem", "isInteger", "s", "lockedName", "readAsText", "#cThemeEnabled", '<img src="https://gota.io/emotes/', '.png" height="17" width="17" alt="', '<img src="https://gota.io/emotes/gifs/', '.gif" height="17" width="17" alt="', "Random", "Maximum Cells Upgrade", "extracells", "MODIFIER", "Extra Consumable Slot", "extraconsumable", "Merge", "merge", "PASSIVE", "Grow", "grow", "Speed", "speed", "Shield", "shield", "Virus", "spike", "CONSUMABLE", "Disrupt", "disrupt", "Teleport", "teleport", "_disrupt", "DEBUFF", "Silver", "phoenix", "Consumable Shield", "_shield", "Magnet", "magnet", "Decay", "decay", "_decay", "image", "images/powerups/", "images/shield.png", "images/debuff.png", "passiveBuffs", "passiveSortedBuffs", "consumableBuffs", "nextCacheUpdate", "sortPassiveBuffs", "onPassiveBuffsUpdate", "markCacheForUpdate", "Recieved buff: ", "powerup", "Lost buff: ", "stack", "updateCache", "#222", "bold 16pt Calibri", "draw", "startTime", "expireTime", "getCooldown", "#000", "moveTo", "globalAlpha", "hearts", "delay", "frames", "getFrame", "getLength", "getImage", "frameInfo", "foodColors", "#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614", "You cannot block that player.", "Unblocked player with ID: ", "Blocked player with ID: ", "Whisper a player by ID", "whisper", "t", "w", "Invalid player id.", "Reply to previous whisper", "reply", "/r ", "Send a message to other party members", "p", "/p ", "Invite a player to the party", "invite", "Invalid ID.", "Leave your current party", "leave", "l", "Promote a party member to leader", "promote", "Kick a player from the party", "kick", "Clear the chat", "chat-body", "firstChild", "Get your current ID", "Your id is ", "You need to be connected to a server to use this command.", "Show the scrimmage menu", "scrimmenu", "Join a party with a code", "j", "Set the party to private", "private", "Allow players to join the party without an invite", "public", "Reset chat size", "resetchat", "Reset chat tab settings", "resetchattabs", "Spectate a player", "Disconnect from the server", "Get Account UID", "account", "You are not logged in.", "UID: ", "Block or unblock a player by ID", "4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP", "Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap", "A", "C", "D", "E", "F", "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", "BACK_SPACE", "TAB", "CLEAR", "ENTER", "ENTER_SPECIAL", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", ";", "<", "=", "AT", "G", "H", "I", "J", "L", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "CONTEXT_MENU", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "META", "ALTGR", "WIN_ICO_HELP", "WIN_ICO_00", "WIN_ICO_CLEAR", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "PA1", "WIN_OEM_CLEAR", "heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "fire", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "cat", "cupid", "sword", "tornado", "radioactive", "rocket", "wave", "letter_a", "letter_b", "letter_c", "letter_d", "letter_e", "letter_f", "letter_g", "letter_h", "letter_i", "letter_j", "letter_k", "letter_l", "letter_m", "letter_n", "letter_o", "letter_p", "letter_q", "letter_r", "letter_s", "letter_t", "letter_u", "letter_v", "letter_w", "letter_x", "letter_y", "letter_z", "number_0", "number_1", "number_2", "number_3", "number_4", "number_5", "number_6", "number_7", "number_8", "number_9", "0:00", "_", "Invalid HEX color.", "#000000", "items", "dataTransfer", "kind", "file", "getAsFile", "msSaveOrOpenBlob", "navigator", "createObjectURL", "download", "revokeObjectURL", "URL", "regex", "Spectator", "Blue", "Red", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "#25f", "#f31", "green", "yellow", "purple", "orange", "ampad", "burnstown", "chlorinar", "Facon", "archistico", "breakaway", "conformity", "electroharmonix", "PWJoyeuxNoel", "leckerli-one", "IceCaps", "#00c9ff", "BrazierFlame", "#e25822", '" style="font-family:', "Notification", "permission", "granted", "Your match has started.", "https://gota.io/assets/images/favicon.png", "policyID", "CP_0918_01", "policyLink", "https://gota.io/policies/privacy.html?v=", "#cookies", "consentOption", "#cc_acceptCookies", "consentCookie", "cookieConsent", "yes+", "/web", "cookieBanner", "#cookie-banner", "#declineCookies", "#acceptCookies", "backwardsCompatable", "consentHandler", "getConsentCookie", "showCookieBanner", "deleteConsentCookie", "createConsentCookie", "handlersBound", "bindBannerHandlers", "banner", "decline", "accept", ' <a href="', '" target="_blank">Our Cookie Policy!</a>', "#cookie-banner .description", "exdays", "setTime", "expires=", "toUTCString", "cookie", ";path=", "path", "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=", "cookieconsent_status", "allow", "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;", "playCounter", "Advertisement Loading...", "preroll"];
  function _0xA47C(_0xA4BA, _0xA536, _0xA517) {
    if (!_0xA4BA) {
      return;
    };
    var _0xA4D9 = this.location.href.split("://")[1].split("/")[0].split(":")[0];
    var _0xA47C = _0xA4BA.split(",");
    for (var _0xA4F8 = 0; _0xA4F8 < _0xA47C.length; _0xA4F8++) {
      var _0xA49B = _0xA47C[_0xA4F8];
      if (_0xA49B == _0xA4D9) {
        return;
      };
      if (!_0xA536) {
        continue;
      };
      _0xA49B = _0xA4D9.split("." + _0xA49B);
      if (_0xA49B.length == 2 && !_0xA49B[1]) {
        return;
      }
    };
    throw _0xA517 || "error";
  }

  function _0xA49B(_0xA49B) {
    var _0xA47C = $("#" + _0xA49B);
    if (_0xA47C.css("display") == "none") {
      _0xA4BA();
      _0xA47C.slideDown(500);
    }
  }

  function _0xA4BA() {
    $("#main-right").children().each(function () {
      if ($(this).css("display") == "block") {
        $(this).slideUp(500);
      }
    });
  }

  function _0xA4D9() {
    var _0xB7DC = window.PIXI;
    const _0xB931 = _0xB7DC;
    window.PIXI = null;
    var _0xB950;
    const _0xB96F = new _0xB931.Container;
    const _0xA574 = new _0xB931.Container;
    const _0xA60F = new _0xB931.Container;
    const _0xB5CD = new _0xB931.Container;
    const _0xAE0D = new _0xB931.Container;
    const _0xA7E0 = new _0xB931.Container;
    const _0xBA67 = new _0xB931.Sprite(_0xB931.Texture.EMPTY);
    var _0xA5F0;
    _0xB5CD.addChild(_0xA60F);
    _0xB5CD.addChild(_0xAE0D);
    _0xB5CD.addChild(_0xA7E0);
    _0xB96F.addChild(_0xA574);
    _0xB96F.addChild(_0xB5CD);
    _0xB96F.addChild(_0xBA67);
    var _0xA6C9, _0xB60B, _0xB649, _0xB98E, _0xB7FB, _0xB361, _0xBF3F, _0xBF5E, _0xB912, _0xBFBB, _0xBFDA, _0xBFF9, _0xBD4F, _0xBD30, _0xB5EC, _0xB8D4, _0xB1AF, _0xB39F, _0xBCB4, _0xAA2D, _0xA7FF, _0xC265, _0xACF6, _0xA555, _0xBC95, _0xABA1, _0xAB82, _0xBC76, _0xB380, _0xB5AE = false, 
    _0xAEC7 = 0, 
    _0xAEA8 = 0, 
    _0xC246 = null, 
    _0xC227 = null, 
    _0xB0B7 = false,
     _0xC14E = {
      elements: [], 
      callbacks: [],
      pendingFriends: [], 
      timestamps: []
    }, 
    _0xA5B2 = [], 
    _0xAEE6 = false, 
    _0xA707 = null, 
    _0xB269 = true, 
    _0xAC3C;
    const _0xB8F3 = Math.PI * 2;
    const _0xA783 = 128, 
    _0xA745 = _0xA783 * 2, 
    _0xA764 = (_0xA783 + 6) * 2, 
    _0xA7A2 = _0xA783 / 2;
    var _0xA7C1, _0xACD7, _0xADEE;
    const _0xAC5B = {};

    const _0xC16D = "https://discord.com/channels/166703751053312000/630428963889741854";

    const _0xA517 = new firebase.auth.GoogleAuthProvider;

    const _0xA47C = "https://accounts.gota.io";

    var _0xAD72 = {
      key: "xmas", 
      foodColors: [9225727, 12574719, 14802654, 9225727], 
      customEjectedMass: false, 
      motd: "", 
      endDate: 17037216e5, 
      enabled: false, 
      motherCustomEnabled: false, 
      motherCustom: function (_0xA45D) {}, 
      happyMotherCells: []};
    _0xAD72.enabled = new Date < _0xAD72.endDate;
    firebase.initializeApp({
      apiKey: "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM", 
      authDomain: "accounts.gota.io", 
      databaseURL: "https://gota-io.firebaseio.com", 
      projectId: "gota-io", 
      storageBucket: "gota-io.appspot.com", 
      messagingSenderId: "570450309042", 
      appId: "1:570450309042:web:380ab6c94d44de2f"
    });
    var _0xBE09 = {};
    var _0xA4BA = {};
    var _0xB7BD = {
      levelNames: 3, 
      levelSkins: 3, 
      textOutlineSize: 0, 
      resolution: 1
    };
    var _0xABC0 = [{
      name: "All", 
      flags: 255, 
      maxMessages: 100
    }, {
      name: "Party", 
      flags: 2, 
      maxMessages: 100
    }];
    var _0xBD11 = 0;
    var _0xB79E = {
      cDisableAA: false, 
      cAutoRespawn: false, 
      cHideId: false, 
      cHideServerDisplay: true, 
      sShowNames: "ALL", 
      sShowSkins: "ALL", 
      sRenderType: "AUTO", 
      sTextOutlines: "NONE", 
      sQuality: "ULTRA", 
      sMassType: "DEFAULT", 
      cTransCells: false, 
      cShowMass: false, 
      cShowBorder: false, 
      cSilentLogin: false, 
      cHideChat: false, 
      cHideMinimap: false, 
      cShowCoordinates: false, 
      cHideFood: false, 
      cColoredPing: false, 
      cColoredCellCount: false, 
      cThemeEnabled: false, 
      cDisableAutoZoom: false, 
      cAutoDecline: false, 
      cDisableEventSkins: false, 
      cResizableChat: false, 
      cDisableAutoNameHiding: false, 
      cDisableAutoFoodHiding: false, 
      cDisablePersistEjectMass: false, 
      iChatWidth: "360px", 
      iChatHeight: "250px", 
      rUiScale: 1, 
      rAnimationDelay: 90, 
      rViewDistance: 100, 
      _ChatTabs: JSON.parse(JSON.stringify(_0xABC0))};
    var _0xB304 = {
      kContextMenu: 3, 
      kEjectMass: 87, 
      kSplit: 32, 
      kToggleSpec: 81, 
      kDoubleSplit: -1, 
      kTripleSplit: -1, 
      kQuadSplit: -1, 
      kHexaSplit: -1, 
      kFreezeMouse: -1
    };
    var _0xB2E5 = false;
    const _0xABDF = Object.assign({}, _0xB304);
    const _0xC0D2 = 2;
    const _0xC0B3 = {
      version: _0xC0D2, 
      uiForegroundColor: "rgb(255, 255, 255)", 
      uiBackgroundColor: "rgba(22, 22, 22, 0.8)", 
      uiBorderColor: "rgba(255, 255, 255, .2)", 
      uiMenuBackgroundColor: "#2A2A2A", 
      uiMenuTitleBackgroundColor: "#404040", 
      uiMenuSubBackgroundColor: "#363636", 
      uiMenuSubBackground2Color: "#404040", 
      uiButtonColor: "#444444", 
      uiGameBackgroundColor: "#121212", 
      uiGameBorderColor: "#ff0000", 
      uiLeaderboardHighlightSelf: "#ffaaaa", 
      uiLeaderboardHighlightParty: "#ffff00", 
      uiPartyLeaderColor: "#00ffff", 
      uiGameColorSuccess: "#00ff00", 
      uiGameColorWarning: "#ffff00", 
      uiGameColorError: "#ff0000", 
      _FoodColors: [], 
      aCustomBackground: "", 
      aCustomSpike: "", 
      aCustomMother: "", 
      rBorderSize: 32, 
      rBackgroundOpacity: 1
    };
    const _0xAC1D = {};
    for (var _0xB2C6 in _0xC0B3) {
      _0xAC1D[_0xB2C6] = _0xC0B3[_0xB2C6];
    };
    const _0xAB06 = {
      aCustomSpike: null, 
      aCustomMother: null
    };
    var _0xAB25 = [];
    var _0xC075 = {
      rules: false, 
      nameColor: {r: 0, g: 255, b: 255}, 
      chatColor: 0, 
      lowerName: false, 
      skinName: "", 
      effect: 0, 
      nameFont: 0
    };
    var _0xB22B = null;
    var _0xBDEA = null;
    var _0xB3BE = 0;

    function _0xC018() {
      _0xA6C9 = document.getElementById("canvas");
      _0xB60B = document.getElementById("minimap-canvas");
      _0xB649 = _0xB60B.getContext("2d");
      _0xB5EC = $("#main");
      _0xB8D4 = $("#party-panel");
      _0xB1AF = $(".hud-panel");
      _0xBC76 = $("#score-panel");
      _0xBCB4 = $("#main-scrimmage");
      _0xAA2D = $("#context-menu");
      _0xA7FF = $("#chat-input");
      _0xB39F = $("#leaderboard-header");
      _0xAB82 = $("#scrimmage-custom");
      _0xAC5B.mouseFrozenDiv = $("#score-mouse");
      _0xAC5B.playerScore = $("#playerScore");
      _0xAC5B.playerCells = $("#playerCells");
      _0xAC5B.playerFps = $("#playerFps");
      _0xAC5B.resetInfo = $("#extra-reset-timer");
      _0xAC5B.resetTime = $("#resetTime");
      _0xAC5B.respawnInfo = $("#extra-respawn-cooldown");
      _0xAC5B.respawnCooldown = $("#respawnCooldown");
      _0xAC5B.spectatorCount = $("#spectatorCount");
      _0xAC5B.playerCellCount = 0;
      _0xAC5B.minimapCoords = $("#minimap-coordinates");
      _0xAC5B.partyPanel = _0xB8D4;
      _0xAC5B.friendOnlineCount = $("#social-online-friends-count");
      _0xB114();
      _0xC265 = false;
      window.onmousemove = function (_0xA47C) {
        _0xB98E.mouseRawX = _0xA47C.clientX;
        _0xB98E.mouseRawY = _0xA47C.clientY;
      };
      window.onkeydown = function (_0xA47C) {
        var _0xA49B = _0xA47C.which || _0xA47C.keyCode || _0xA47C.charCode;
        if (_0xA49B <= 5) {
          return;
        }
        ;
        if (_0xB2E5) {
          _0xA593(_0xA49B);
          _0xA47C.preventDefault();
          return;
        }
        ;
        if ($("input").is(":focus")) {
          return;
        }
        ;
        if (_0xA49B == 27) {
          _0xC12F(_0xB5EC);
          if (($("#popup-profile") || $("#popup-account-username").css("display") === "none").css("display") === "none") {
            _0xB133($("#popup-profile"));
            _0xB133($("#popup-account-username"));
          }
        }
        ;
        if (_0xB5EC.css("display") != "none") {
          return;
        }
        ;
        _0xB98E.handleKey(_0xA49B);
      };
      window.onkeyup = function (_0xA47C) {
        var _0xA49B = _0xA47C.which || _0xA47C.keyCode || _0xA47C.charCode;
        if (_0xA49B == _0xB304.kEjectMass) {
          _0xC265 = false;
          if (_0xB98E) {
            _0xB98E.sendPacket(new _0xB7FB.sendEjectMass(false));
          }
        }
      };
      window.onmousedown = function (_0xA47C) {
        var _0xA49B = _0xA47C.button + 1;
        if (_0xB2E5) {
          _0xA593(_0xA49B);
          _0xA47C.preventDefault();
          return;
        }
        ;
        if ($("input").is(":focus") || _0xB5EC.css("display") != "none") {
          return;
        }
        ;
        _0xB98E.handleKey(_0xA49B);
      };
      window.onmouseup = function (_0xA47C) {
        var _0xA49B = _0xA47C.button + 1;
        if (_0xA49B == _0xB304.kEjectMass) {
          _0xC265 = false;
          if (_0xB98E) {
            _0xB98E.sendPacket(new _0xB7FB.sendEjectMass(false));
          }
        }
      };
      window.onblur = function (_0xA47C) {
        if (_0xC265 && _0xB79E.cDisablePersistEjectMass) {
          _0xC265 = false;
          if (_0xB98E) {
            _0xB98E.sendPacket(new _0xB7FB.sendEjectMass(false));
          }
        }
      };
      $(document).on("wheel", function (_0xA49B) {
        if (_0xB5EC.css("display") == "none" && _0xA49B.target.id == "canvas") {
          var _0xA47C = _0xA49B.originalEvent.wheelDelta || _0xA49B.originalEvent.deltaY * -1;
          if (_0xA47C > 0) {
            _0xB98E.mouseZoom *= 1.1;
          } else {
            _0xB98E.mouseZoom *= 0.9;
          }
          ;
          _0xB98E.mouseZoom = _0xB98E.mouseZoom > 5 ? 5 : _0xB98E.mouseZoom < 0.1 ? 0.1 : _0xB98E.mouseZoom;
        }
      });
      document.addEventListener("contextmenu", function (_0xA47C) {
        _0xA47C.preventDefault();
      });
      _0xB43A();
      _0xB41B();
      var _0xA4D9 = window.location.href.split("#").slice(1).join("#").split("&");
      var _0xA517 = "";
      if (_0xA4D9[0]) {
        _0xA517 = _0xA4D9[0].toLowerCase();
      }
      ;
      if (_0xA4D9[1]) {
        _0xA555 = _0xA4D9[1];
      }
      ;
      if (_0xA517 != null && _0xA517 != "") {
        _0xA517 = _0xA517[0].toUpperCase() + _0xA517.slice(1);
        _0xBDEA = function () {
          var _0xA47C = null;
          if ((_0xA47C = _0xAFFD(_0xA517)) != null) {
            _0xBD8D(_0xA47C.name);
            _0xBD6E(_0xA47C.region);
          } else {
            _0xA49B();
          }
        };
      } else {
        _0xBDEA = _0xA49B;
      }
      ;
      firebase.database().ref("/game").on("value", function (_0xA4D9) {
        var _0xA47C = _0xA4D9.val();
        if (_0xA47C.version !== version) {
          _0xB98E.selfMsg("Woah! Version " + _0xA47C.version + " is now available. Press Ctrl+R to update!");
        }
        ;
        if (_0xB380 != _0xA47C.motd && _0xA47C.motd !== "") {
          _0xB380 = _0xA47C.motd;
          _0xB98E.selfMsg(_0xA47C.motd);
        }
        ;
        if (_0xA47C.listRefresh != _0xB3BE) {
          _0xB3BE = _0xA47C.listRefresh;
          _0xBE09 = {};
          _0xA4BA(_0xBDEA);
          clearInterval(_0xB22B);
          _0xB22B = setInterval(() => {
            _0xA4BA();
          }, _0xA47C.listRefresh);
        }
        ;
        for (var _0xA49B in _0xA47C.titles) {
          _0xC110[_0xA49B] = _0xA47C.titles[_0xA49B];
        }
      });
      function _0xA4BA(_0xA49B) {
        jQuery.ajax({
          type: "POST", 
          dataType: "json", 
          url: _0xA47C + "/api/v1/utilities/servers", 
          success: function (_0xA47C) {
          for (var _0xA517 of _0xA47C) {
            var _0xA555 = [];
            for (var _0xA4D9 of _0xA517.servers) {
              _0xA4D9.players = parseInt(_0xA4D9.players);
              _0xA4D9.bots = _0xA4D9.bots || 0;
              var _0xA4F8 = _0xA4D9.players + _0xA4D9.bots + "/" + _0xA4D9.playersMax;
              if (_0xA4D9.bots > 0) {
                _0xA4F8 += "*";
              }
              ;
              var _0xA536 = new _0xBDCB(_0xA4D9.name, _0xA4D9.address, _0xA4D9.players, _0xA4D9.bots, _0xA4F8, _0xA4D9.gamemode, _0xA517.region, _0xA4D9.ssl, _0xA4D9.order);
              _0xA555.push(_0xA536);
            }
            ;
            _0xA555.sort((_0xA47C, _0xA49B) => {
              return _0xA47C.order - _0xA49B.order;
            });
            _0xBE09[_0xA517.region] = {};
            for (var _0xA4BA = 0; _0xA4BA < _0xA555.length; _0xA4BA++) {
              var _0xA536 = _0xA555[_0xA4BA];
              _0xBE09[_0xA517.region][_0xA536.name] = _0xA536;
            }
          }
          ;
          _0xB4D5();
          if (_0xA49B != null) {
            _0xA49B();
          } else {
            if (_0xBD4F != null) {
              _0xBD8D(_0xBD4F.name);
            }
          }
        }, error: function (_0xA45D) {
          _0xB4D5();
        }});
      }
      function _0xA49B() {
        if (_0xBD4F != null) {
          _0xBD8D(_0xBD4F.name);
          return;
        }
        ;
        _0xBD6E("eu");
        _0xBD8D("Vendetta");
      }
      _0xBF3F = {};
      _0xBF5E = {};
      _0xB58F();
      $(window).unload(_0xB741);
      _0xB98E = new _0xA9B1;
      _0xB7FB = new _0xB81A;
      _0xB3DD();
      _0xAA4C.init();
      _0xBB9D();
      var _0xA4F8 = {
        view: _0xA6C9, 
        backgroundAlpha: 0, 
        forceCanvas: _0xB79E.sRenderType === "CANVAS",
        antialias: !_0xB79E.cDisableAA};
      _0xB950 = {
        renderer: _0xB931.autoDetectRenderer(_0xA4F8), 
        stage: _0xB96F};
      _0xA7C1 = _0xAAA9(_0xA783);
      _0xACD7 = _0xAAA9(32);
      _0xADEE = _0xAAA9(8);
      $(window).resize(_0xB760);
      _0xB760();
      _0xB361 = Date.now();
      fps = 0;
      _0xB98E.selfMsg("Welcome to Gota.io!");
      if (_0xAD72.enabled && _0xAD72.motd !== "") {
        _0xB98E.selfMsg(_0xAD72.motd);
      }
      ;
      _0xC1CA();
      requestAnimationFrame(_0xC0F1);
    }
    function _0xB760() {
      _0xA6C9.width = window.innerWidth * _0xB7BD.resolution;
      _0xA6C9.height = window.innerHeight * _0xB7BD.resolution;
      _0xB950.renderer.resize(_0xA6C9.width, _0xA6C9.height);
      _0xB950.stage.position.x = window.innerWidth * _0xB7BD.resolution / 2;
      _0xB950.stage.position.y = window.innerHeight * _0xB7BD.resolution / 2;
    }
    function _0xAAA9(_0xA49B) {
      var _0xA47C = new _0xB931.Graphics;
      _0xA47C.beginFill(16777215);
      _0xA47C.drawCircle(0, 0, _0xA783);
      _0xA47C.endFill();
      var _0xA4BA = _0xB931.RenderTexture.create({
        width: _0xA47C.width, 
        height: _0xA47C.height, 
        multisample: _0xB931.MSAA_QUALITY.HIGH, 
        resolution: window.devicePixelRatio
      });
      _0xB950.renderer.render(_0xA47C, {
        renderTexture: _0xA4BA, 
        transform: new _0xB931.Matrix(1, 0, 0, 1, _0xA47C.width / 2, _0xA47C.height / 2)
      });
      if (_0xB950.renderer.framebuffer) {
        _0xB950.renderer.framebuffer.blit();
      }
      ;
      _0xA47C.destroy(true);
      return _0xA4BA;
    }
    function _0xAE4B(_0xA47C) {
      for (var _0xA49B in _0xC0B3) {
        if (_0xA49B.charAt(0) == "u") {
          _0xA47C(_0xA49B);
        }
      }
    }
    function _0xC0F1() {
      var _0xA4BA = Date.now() - _0xB361;
      _0xB361 = Date.now();
      var _0xA49B = Math.min(_0xA4BA / _0xB79E.rAnimationDelay, 1);
      _0xAEC7 += _0xA4BA;
      if ((_0xB98E.scale > 0.12 || _0xB79E.cDisableAutoFoodHiding) && !_0xB79E.cHideFood) {
        _0xAE0D.visible = true;
        for (var _0xA4D9 in _0xB98E.foodObjects) {
          _0xA593 = _0xB98E.foodObjects[_0xA4D9];
          if (_0xA593.steps > 0) {
            _0xA593.animate(_0xA49B);
          }
          ;
          _0xA593.handleFood();
        }
      } else {
        _0xAE0D.visible = false;
      }
      ;
      for (var _0xA4D9 in _0xB98E.bucket) {
        _0xA593 = _0xB98E.bucket[_0xA4D9];
        if (_0xA593.steps > 0) {
          _0xA593.animate(_0xA49B);
        }
        ;
        _0xA593.handle();
      }
      ;
      var _0xA555 = 0, 
      _0xA574 = 0,
      _0xA47C = 0, 
      _0xA5D1 = 0, 
      _0xA593 = null;
      for (var _0xA4D9 in _0xB98E.myCells) {
        _0xA593 = _0xB98E.myCells[_0xA4D9];
        if (_0xA593 != null) {
          _0xA555 += _0xA593.x;
          _0xA574 += _0xA593.y;
          _0xA5D1 += _0xA593.size;
          _0xA47C++;
        }
      }
      ;
      if (_0xA47C != 0) {
        _0xB98E.centerX = _0xA555 / _0xA47C;
        _0xB98E.centerY = _0xA574 / _0xA47C;
        _0xB98E.centerSteps = 0;
        if (_0xB79E.cDisableAutoZoom) {
          _0xB98E.scale_base = 0.2 * Math.max(_0xA6C9.height / 1080, _0xA6C9.width / 1920);
        } else {
          _0xB98E.scale_base = Math.pow(Math.min(32 / _0xA5D1, 1), 0.4) * Math.max(_0xA6C9.height / 1080, _0xA6C9.width / 1920);
        }
      }
      ;
      if (_0xB98E.centerSteps > 0) {
        _0xB98E.centerX += (_0xB98E.centerX_ - _0xB98E.centerX) * _0xA49B;
        _0xB98E.centerY += (_0xB98E.centerY_ - _0xB98E.centerY) * _0xA49B;
      }
      ;
      var _0xA536 = _0xB98E.scale_base * _0xB98E.mouseZoom;
      _0xB98E.scale = (9 * _0xB98E.scale + _0xA536) / 10;
      _0xB5CD.scale.x = _0xB98E.scale;
      _0xB5CD.scale.y = _0xB98E.scale;
      _0xB5CD.pivot.x = _0xB98E.centerX;
      _0xB5CD.pivot.y = _0xB98E.centerY;
      if (_0xB98E.isConnected() && _0xB5EC.css("display") == "none") {
        if (!_0xB98E.mouseFrozen) {
          var _0xA4F8 = _0xB5CD.pivot.x - _0xB950.stage.position.x / _0xB98E.scale + _0xB98E.mouseRawX * _0xB7BD.resolution / _0xB98E.scale;
          var _0xA517 = _0xB5CD.pivot.y - _0xB950.stage.position.y / _0xB98E.scale + _0xB98E.mouseRawY * _0xB7BD.resolution / _0xB98E.scale;
          _0xB98E.sendPacket(new _0xB7FB.sendMouse(_0xA4F8, _0xA517));
        }
      }
      ;
      if (!_0xB79E.cHideMinimap) {
        _0xACB8(_0xA49B);
      }
      ;
      if (_0xB79E.cShowCoordinates) {
        _0xAC99();
      }
      ;
      _0xB98E.buffHolder.update();
      _0xB950.renderer.render(_0xB950.stage);
      _0xAEA8++;
      if (_0xAEC7 >= 1e3) {
        _0xAC5B.playerFps.html(_0xAEA8);
        var _0xA5F0 = Date.now();
        if (_0xB98E.serverData.resetType > 0 && _0xB98E.serverData.resetTime > 0) {
          _0xAC5B.resetInfo.css("display", "block");
          var _0xA5B2 = Math.max(0, Math.floor((_0xB98E.serverData.resetTime - _0xA5F0) / 1e3));
          _0xAC5B.resetTime.html(_0xAE89(_0xA5B2));
        } else {
          _0xAC5B.resetInfo.css("display", "none");
        }
        ;
        if (_0xB98E.respawnCooldown > 0 && _0xB98E.respawnCooldown >= _0xA5F0) {
          _0xAC5B.respawnInfo.css("display", "block");
          var _0xA5B2 = Math.max(0, Math.ceil((_0xB98E.respawnCooldown - _0xA5F0) / 1e3));
          _0xAC5B.respawnCooldown.html(_0xAE89(_0xA5B2));
        } else {
          if (_0xB98E.respawnCooldown < 0) {
            _0xAC5B.respawnInfo.css("display", "block");
            _0xAC5B.respawnCooldown.html("NEVER");
          } else {
            _0xAC5B.respawnInfo.css("display", "none");
          }
        }
        ;
        _0xAEC7 = 0;
        _0xAEA8 = 0;
      }
      ;
      _0xB98E.playerRegistry.handleUpdatedPlayers();
      requestAnimationFrame(_0xC0F1);
    }
    function _0xB079() {
      if (_0xB79E.cShowBorder && _0xB98E.serverData.border.enabled) {
        if (_0xA5F0 != null) {
          _0xA5F0.parent.removeChild(_0xA5F0);
          _0xA5F0.destroy();
          _0xA5F0 = null;
        }
        ;
        _0xA5F0 = new _0xB931.Graphics;
        _0xA5F0.lineStyle(_0xC0B3.rBorderSize, _0xB931.utils.string2hex(tinycolor(_0xC0B3.uiGameBorderColor).toHexString()));
        _0xA5F0.drawRect(_0xB98E.serverData.border.left, _0xB98E.serverData.border.top, _0xB98E.serverData.border.width, _0xB98E.serverData.border.height);
        _0xA60F.addChild(_0xA5F0);
        _0xA5F0.visible = true;
      } else {
        if (_0xA5F0 != null) {
          _0xA5F0.parent.removeChild(_0xA5F0);
          _0xA5F0.destroy();
          _0xA5F0 = null;
        }
      }
    }
    function _0xAC99() {
      _0xAC5B.minimapCoords.css({
        color: _0xC0B3.uiForegroundColor
      });
      _0xAC5B.minimapCoords.html("X: " + _0xB98E.centerX.toFixed(0) + " Y: " + _0xB98E.centerY.toFixed(0));
    }
    function _0xACB8(_0xA47C) {
      if (!_0xB98E.serverData.border.enabled) {
        return;
      }
      ;
      _0xB649.clearRect(0, 0, _0xB60B.width, _0xB60B.height);
      _0xB649.font = "12px Calibri";
      for (var _0xA49B = 0; _0xA49B < _0xB98E.party.length; _0xA49B++) {
        var _0xA4BA = _0xB98E.party[_0xA49B];
        if (_0xA4BA.state === _0xB8B5.ALIVE && _0xA4BA.id != _0xB98E.playerId) {
          _0xB668(_0xB649, _0xA4BA.name, _0xA4BA.x, _0xA4BA.y, 4, _0xA4BA.mmColor, true);
          _0xA4BA.x += (_0xA4BA.x_ - _0xA4BA.x) * _0xA47C;
          _0xA4BA.y += (_0xA4BA.y_ - _0xA4BA.y) * _0xA47C;
        }
      }
      ;
      _0xB668(_0xB649, _0xB98E.name, _0xB98E.centerX, _0xB98E.centerY, 6, "#fefefe", false);
    }
    function _0xB741() {
      _0xBC57();
    }
    function _0xA9B1() {
      this.socket = null;
      this.currentServer = null;
      this.currentServerName = null;
      this.spectate = false;
      this.name = "";
      this.playerId = 0;
      this.bucket = {};
      this.foodObjects = {};
      this.myCells = {};
      this.playerRegistry = new _0xB9CC;
      this.buffHolder = new _0xA66C;
      this.centerX = 0;
      this.centerY = 0;
      this.centerX_ = 0;
      this.centerY_ = 0;
      this.centerSteps = 0;
      this.scale = 0.5;
      this.scale_ = 0.5;
      this.scale_base = 0.5;
      this.mouseZoom = 1;
      this.offsetX = 0;
      this.offsetY = 0;
      this.mouseRawX = 0;
      this.mouseRawY = 0;
      this.mouseX = 0;
      this.mouseY = 0;
      this.mouseFrozen = false;
      this.party = [];
      this.partyIds = {};
      this.subPanelOverride = false;
      this.serverData = {
        hasSentSubPanel: false, 
        border: {}, 
        maxCells: 16
      };
      this.score = 0;
      this.respawnCooldown = 0;
      this.customGameMap = null;
      this.accountListeners = {};
      this.clearStats();
      setInterval(this.sendPing.bind(this), 3e4);
    }
    _0xA9B1.prototype.clearStats = function () {
      this.stats = {
        name: "An unnamed cell", 
        alive: 0, 
        eatenFood: 0,
         eatenEject: 0, 
         eatenVirus: 0, 
         eatenPlayer: 0, 
         gainFood: 0, 
         gainEject: 0, 
         gainVirus: 0, 
         gainPlayer: 0};
    };
    _0xA9B1.prototype.play = function () {
      if (_0xBD4F == null) {
        this.selfMsg("No server selected!");
        return;
      }
      ;
      this.name = $("#name-box").val();
      this.spectate = false;
      this.currentServerName = _0xBD4F.name;
      $("#playerServer").html(this.currentServerName);
      _0xB4B6();
      if (this.isConnected() && this.currentServer == _0xBD4F.ip) {
        this.sendPacket(new _0xB7FB.setName(this.name));
      } else {
        this.connect(_0xBD4F.ip);
      }
      ;
      _0xBEA4();
      _0xB133(_0xB5EC);
      ga("send", "event", "Game", "webMenu", "Play");
    };
    _0xA9B1.prototype.spec = function () {
      if (_0xBD4F == null) {
        this.selfMsg("No server selected!");
        return;
      }
      ;
      this.spectate = true;
      _0xB4B6();
      if (this.isConnected() && this.currentServer == _0xBD4F.ip) {
        this.sendPacket(new _0xB7FB.sendSpectate);
      } else {
        this.connect(_0xBD4F.ip);
      }
      ;
      _0xBEA4();
      _0xB133(_0xB5EC);
      ga("send", "event", "Game", "webMenu", "Spectate");
    };
    _0xA9B1.prototype.connect = function (_0xA49B) {
      if (this.socket != null) {
        this.socket.nextUrl = _0xA49B;
        this.disconnect(_0xA49B);
        return;
      }
      ;
      this.currentServer = _0xA49B;
      this.currentServerName = _0xBD4F.name;
      this.selfMsg("Connecting to " + this.currentServerName + "...");
      if (_0xBD4F.ssl == 1) {
        this.socket = new WebSocket("wss://" + _0xA49B);
      } else {
        this.socket = new WebSocket("ws://" + _0xA49B);
      }
      ;
      this.socket.binaryType = "arraybuffer";
      var _0xA47C = this;
      this.socket.onopen = this.onConnect.bind(this);
      this.socket.onmessage = this.onMessage.bind(this);
      this.socket.onclose = function (_0xA49B) {
        _0xA47C.reset();
        _0xA47C.selfMsg("You have been disconnected from the server. Reason: " + (_0xA49B.reason === "" ? "Unknown" : _0xA49B.reason));
        if (this.nextUrl != null) {
          _0xA47C.connect(this.nextUrl);
        }
      };
      this.socket.onerror = function (_0xA4BA) {
        _0xA47C.reset();
        this.nextUrl = null;
        _0xA47C.selfMsg("Error connecting to server... Retrying every second.");
        setTimeout(function () {
          if (_0xA47C.isConnected() == false && _0xA47C.socket == null) {
            _0xA47C.connect(_0xA49B);
          }
        }, 1e3);
      };
      document.body.classList.add("hide-captcha-badge");
    };
    _0xA9B1.prototype.disconnect = function (_0xA47C) {
      if (this.socket != null) {
        this.socket.close();
      }
    };
    _0xA9B1.prototype.clearBuckets = function () {
      for (var _0xA47C in this.bucket) {
        this.bucket[_0xA47C].onDelete();
        delete this.bucket[_0xA47C];
      }
      ;
      for (var _0xA47C in this.foodObjects) {
        this.foodObjects[_0xA47C].onDelete();
        delete this.foodObjects[_0xA47C];
      }
    };
    _0xA9B1.prototype.reset = function () {
      this.clearBuckets();
      this.myCells = {};
      this.playerRegistry.clear();
      this.playerId = 0;
      this.score = 0;
      this.respawnCooldown = 0;
      this.customGameMap = null;
      this.currentServer = null;
      this.clearStats();
      this.clearParty();
      this.buffHolder.clearBuffs();
      this.serverData.hasSentSubPanel = false;
      this.serverData.resetType = 0;
      this.serverData.autosplits = false;
      if (this.socket != null) {
        this.socket = null;
      }
      ;
      $("#playerId").html(this.playerId);
      if (this.subPanelOverride) {
        this.subPanelOverride = false;
        _0xC208();
      }
    };
    _0xA9B1.prototype.handleKey = function (_0xA49B) {
      if (_0xA49B == _0xB304.kEjectMass) {
        _0xC265 = true;
        this.sendPacket(new _0xB7FB.sendEjectMass(true));
      } else {
        if (_0xA49B == _0xB304.kSplit) {
          this.sendPacket(new _0xB7FB.sendKey(17));
        } else {
          if (_0xA49B == _0xB304.kToggleSpec) {
            this.sendPacket(new _0xB7FB.sendKey(18));
          } else {
            if (_0xA49B == _0xB304.kDoubleSplit) {
              this.sendPacket(new _0xB7FB.sendKey(17));
              this.sendPacket(new _0xB7FB.sendKey(17));
            } else {
              if (_0xA49B == _0xB304.kTripleSplit) {
                for (var _0xA47C = 0; _0xA47C < 3; _0xA47C++) {
                  this.sendPacket(new _0xB7FB.sendKey(17));
                }
              } else {
                if (_0xA49B == _0xB304.kQuadSplit) {
                  for (var _0xA47C = 0; _0xA47C < 4; _0xA47C++) {
                    this.sendPacket(new _0xB7FB.sendKey(17));
                  }
                } else {
                  if (_0xA49B == _0xB304.kHexaSplit) {
                    for (var _0xA47C = 0; _0xA47C < 6; _0xA47C++) {
                      this.sendPacket(new _0xB7FB.sendKey(17));
                    }
                  } else {
                    if (_0xA49B == 38) {
                      this.mouseZoom *= 1.05;
                      this.mouseZoom = _0xB98E.mouseZoom > 5 ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom;
                    } else {
                      if (_0xA49B == 40) {
                        this.mouseZoom *= 0.95;
                        this.mouseZoom = _0xB98E.mouseZoom > 5 ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom;
                      } else {
                        if (_0xA49B == _0xB304.kFreezeMouse) {
                          this.mouseFrozen = !this.mouseFrozen;
                          if (this.mouseFrozen) {
                            _0xAC5B.mouseFrozenDiv.css("display", "block");
                          } else {
                            _0xAC5B.mouseFrozenDiv.css("display", "none");
                          }
                        } else {
                          if (_0xA49B == _0xB304.kContextMenu) {
                            _0xA935();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    _0xA9B1.prototype.isConnected = function () {
      if (this.socket == null) {
        return false;
      } else {
        return this.socket.readyState == 1;
      }
    };
    _0xA9B1.prototype.sendPacket = function (_0xA47C) {
      if (this.isConnected()) {
        this.socket.send(_0xA47C);
      }
    };
    _0xA9B1.prototype.onConnect = function () {
      _0xA5B2 = [];
      _0xADB0();
      this.sendPacket(new _0xB7FB.connectionStart);
      this.sendPing();
      this.sendOptions();
      if (firebase.auth().currentUser !== null) {
        firebase.auth().currentUser.getIdToken(true).then(_0xA47C => {
          _0xB98E.sendPacket(new _0xB7FB.sendAuthToken(_0xA47C));
        }).catch(_0xA45D => {
          return _0xB098(_0xA45D, true);
        });
        return;
      } else {
        if (!this.spectate) {
          this.sendPacket(new _0xB7FB.setName(this.name));
        } else {
          this.sendPacket(new _0xB7FB.sendSpectate);
        }
      }
    };
    _0xA9B1.prototype.sendPing = function () {
      if (this.isConnected()) {
        _0xB912 = +new Date;
        this.sendPacket(new _0xB7FB.sendPing);
      }
    };
    _0xA9B1.prototype.sendOptions = function () {
      if (this.isConnected()) {
        this.sendPacket(new _0xB7FB.sendOptions);
      }
    };
    _0xA9B1.prototype.selfMsg = function (_0xA49B) {
      var _0xA47C = document.createElement("td");
      var _0xA4BA = document.createElement("span");
      _0xA4BA.style.color = "#DDDD00";
      _0xA4BA.innerHTML = "[System] " + _0xA49B.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      _0xA47C.appendChild(_0xA4BA);
      _0xA4D9(_0xA8F7.SYSTEM, _0xA47C);
    };
    _0xA9B1.prototype.selfMsgWithJoinCode = function (_0xA4F8, _0xA47C) {
      var _0xA4BA = document.createElement("td");
      var _0xA517 = document.createElement("span");
      _0xA517.style.color = "#DDDD00";
      _0xA517.innerHTML = "[System] " + _0xA4F8.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      _0xA4BA.appendChild(_0xA517);
      var _0xA49B = document.createElement("span");
      _0xA49B.style.color = "#DDDD00";
      _0xA49B.innerHTML = _0xA47C;
      _0xA49B.style.pointerEvents = "all";
      _0xA49B.style.userSelect = "all";
      _0xA4BA.appendChild(_0xA49B);
      _0xA4D9(_0xA8F7.SYSTEM, _0xA4BA);
    };
    _0xA9B1.prototype.clearParty = function (_0xA47C) {
      this.party = [];
      this.partyIds = {};
      this.partyLeader = -1;
      this.partyIndex = -1;
      $("#party-panel").css("display", "none");
      if (_0xAB82.css("display") == "block") {
        this.handleCustomGameLeave();
      }
      ;
      if (this.partyCode != null || _0xA555 != null) {
        this.partyCode = _0xA555 = null;
        window.history.pushState("page", "", " ");
      }
    };
    _0xA9B1.prototype.isPartyLeader = function () {
      return this.partyLeader == this.playerId;
    };
    _0xA9B1.prototype.getServerMaxCells = function () {
      return this.serverData.maxCells + this.buffHolder.bonusMaxCells;
    };
    _0xA9B1.prototype.onMessage = function (_0xA49B) {
      var _0xA47C = new DataView(_0xA49B.data);
      var _0xA4BA = _0xA47C.getUint8(0);
      _0xA47C.offset = 1;
      switch (_0xA4BA) {
        case 2:
          this.handleUpdate(_0xA47C);
          break;
        case 10:
          this.handlePosition(_0xA47C);
          break;
        case 21:
          this.handleStats(_0xA47C);
          break;
        case 22:
          this.showSubPanel(_0xA47C);
          break;
        case 23:
          this.updateSubPanel(_0xA47C);
          break;
        case 40:
          this.handleInvite(_0xA47C);
          break;
        case 41:
          this.handlePartyInfo(_0xA47C);
          break;
        case 45:
          this.handlePartyData(_0xA47C);
          break;
        case 43:
          this.handlePartyJoinCode(_0xA47C);
          break;
        case 49:
          this.handleLeaderboard(_0xA47C);
          break;
        case 50:
          this.handleLeaderboardCustom(_0xA47C);
          break;
        case 63:
          this.handleRespawnCooldown(_0xA47C);
          break;
        case 64:
          this.handleMapData(_0xA47C);
          break;
        case 65:
          this.handleClearNodes();
          break;
        case 66:
          this.handleUpdateBorder(_0xA47C);
          break;
        case 68:
          this.handleResetTime(_0xA47C);
          break;
        case 69:
          this.handleSpectators(_0xA47C);
          break;
        case 70:
          this.handleSystemMsg(_0xA47C);
          break;
        case 71:
          this.handlePing();
          break;
        case 72:
          this.handleChat(_0xA47C);
          break;
        case 73:
          this.handleWhisper(_0xA47C);
          break;
        case 74:
          this.handleEditMessage(_0xA47C);
          break;
        case 80:
          this.handleShowScrimmageMenu();
          break;
        case 81:
          this.handleQueueData(_0xA47C);
          break;
        case 82:
          this.handleQueueLeave(_0xA47C);
          break;
        case 83:
          this.handleMatchState(_0xA47C);
          break;
        case 90:
          this.handleScrimmageData(_0xA47C);
          break;
        case 91:
          this.handleCustomGameShow(_0xA47C);
          break;
        case 92:
          this.handleCustomGameUpdate(_0xA47C);
          break;
        case 93:
          this.handleCustomGameLeave();
          break;
        case 94:
          this.handleShowCustomGameLobbies(_0xA47C);
          break;
        case 100:
          this.handleAddBuff(_0xA47C);
          break;
        case 101:
          this.handleRemoveBuff(_0xA47C);
          break;
        case 102:
          this.handleClearBuffs(_0xA47C);
          break;
        case 103:
          this.handleAuthenticated(_0xA47C);
          break;
        case 104:
          this.handleProfile(_0xA47C);
          break;
      }
    };
    _0xA9B1.prototype.handleUpdate = function (_0xA574) {
      var _0xA47C = _0xA574.getUint16(_0xA574.offset, true);
      _0xA574.offset += 2;
      while (_0xA47C > 0) {
        var _0xA4D9 = _0xA574.getUint16(_0xA574.offset, true);
        _0xA574.offset += 2;
        _0xB98E.playerRegistry.remove(_0xA4D9);
        _0xA47C--;
      }
      ;
      _0xA47C = _0xA574.getUint16(_0xA574.offset, true);
      _0xA574.offset += 2;
      while (_0xA47C > 0) {
        var _0xA4D9 = _0xA574.getUint16(_0xA574.offset, true);
        _0xA574.offset += 2;
        var _0xA4F8 = this.bucket[_0xA4D9] || this.foodObjects[_0xA4D9];
        if (_0xA4F8 != null) {
          if (_0xA4F8.type == 6) {
            delete this.foodObjects[_0xA4D9];
          } else {
            delete this.bucket[_0xA4D9];
          }
          ;
          if (_0xA4F8.playerId == this.playerId) {
            delete this.myCells[_0xA4D9];
            if (Object.keys(this.myCells).length == 0) {
              if (_0xB79E.cAutoRespawn) {
                if ($("#main").css("display") == "none") {
                  _0xB98E.play();
                }
              } else {
                if (_0xBCB4.css("display") != "block") {
                  _0xBEC3(_0xB5EC);
                }
                ;
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.refresh("GOT_gota-io_336x280");
                });
              }
            }
          }
          ;
          _0xA4F8.onDelete();
        }
        ;
        _0xA47C--;
      }
      ;
      while (true) {
        var _0xA4D9 = _0xA574.getUint16(_0xA574.offset, true);
        _0xA574.offset += 2;
        if (_0xA4D9 == 0) {
          break;
        }
        ;
        var _0xA517 = this.playerRegistry.getPlayer(_0xA4D9);
        var _0xA4BA = false;
        if (_0xA517 == null) {
          _0xA517 = new _0xB9AD(_0xA4D9);
        } else {
          _0xA4BA = true;
        }
        ;
        _0xA517.cellColor = (_0xA574.getUint8(_0xA574.offset++) << 16) + (_0xA574.getUint8(_0xA574.offset++) << 8) + _0xA574.getUint8(_0xA574.offset++);
        _0xA517.name = _0xBB5F(_0xA574);
        _0xA517.setSkin(_0xBB7E(_0xA574));
        _0xA517.setFlags(_0xA574.getUint8(_0xA574.offset++));
        if ((_0xA517.flags & 2) == 2) {
          _0xA517.nameColor = "#" + (_0xB0D6[_0xA574.getUint8(_0xA574.offset++) >> 4 & 15] + _0xB0D6[_0xA574.getUint8(_0xA574.offset++) & 15]) + (_0xB0D6[_0xA574.getUint8(_0xA574.offset++) >> 4 & 15] + _0xB0D6[_0xA574.getUint8(_0xA574.offset++) & 15]) + (_0xB0D6[_0xA574.getUint8(_0xA574.offset++) >> 4 & 15] + _0xB0D6[_0xA574.getUint8(_0xA574.offset++) & 15]);
          _0xA517.parseEffect(_0xA574.getUint8(_0xA574.offset++));
          _0xA517.nameFont = _0xA574.getUint8(_0xA574.offset++);
        }
        ;
        if (!_0xA4BA) {
          _0xB98E.playerRegistry.add(_0xA517);
        } else {
          _0xB98E.playerRegistry.updatePlayer(_0xA517);
        }
      }
      ;
      while (true) {
        var _0xA555 = _0xA574.getUint8(_0xA574.offset++);
        var _0xA536 = 0;
        if (_0xA555 == 0) {
          break;
        }
        ;
        while (true) {
          if (_0xA555 == 2 && _0xA536 == 0) {
            _0xA536 = _0xA574.getUint16(_0xA574.offset, true);
            _0xA574.offset += 2;
            if (_0xA536 == 0) {
              break;
            }
          }
          ;
          var _0xA4D9 = _0xA574.getUint16(_0xA574.offset, true);
          _0xA574.offset += 2;
          if (_0xA4D9 == 0) {
            if (_0xA555 == 2) {
              _0xA536 = 0;
              continue;
            } else {
              break;
            }
          }
          ;
          var _0xA4F8 = new _0xA726(_0xA4D9);
          _0xA4F8.setType(_0xA555);
          _0xA4F8.setX(_0xA574.getInt16(_0xA574.offset, true));
          _0xA4F8.setY(_0xA574.getInt16(_0xA574.offset + 2, true));
          _0xA574.offset += 4;
          switch (_0xA555) {
            case 6:
              _0xA4F8.color = _0xBB02[_0xA4F8.id % _0xBB02.length];
              break;
            case 1:
              _0xA4F8.setSize(_0xA574.getUint16(_0xA574.offset, true));
              _0xA574.offset += 2;
              _0xA4F8.color = (_0xA574.getUint8(_0xA574.offset++) << 16) + (_0xA574.getUint8(_0xA574.offset++) << 8) + _0xA574.getUint8(_0xA574.offset++);
              var _0xA49B = _0xA574.getUint8(_0xA574.offset++);
              _0xA4F8.skin = (_0xA49B & 127) - 1;
              _0xA4F8.rainbow = (_0xA49B & 128) == 128;
              break;
            case 2:
              _0xA4F8.setSize(_0xA574.getUint16(_0xA574.offset, true));
              _0xA574.offset += 2;
              _0xA4F8.playerId = _0xA536;
              break;
            case 3:
              _0xA4F8.setSize(_0xA574.getUint16(_0xA574.offset, true));
              _0xA574.offset += 2;
              break;
            case 4:
              _0xA4F8.setSize(_0xA574.getUint16(_0xA574.offset, true));
              _0xA574.offset += 2;
              break;
            case 5:
              _0xA4F8.setSize(_0xA574.getUint16(_0xA574.offset, true));
              _0xA574.offset += 2;
              _0xA4F8.buff = _0xA574.getUint8(_0xA574.offset++);
              break;
          }
          ;
          _0xA4F8.onCreate(this);
        }
      }
      ;
      while (true) {
        var _0xA555 = _0xA574.getUint8(_0xA574.offset++);
        if (_0xA555 == 0) {
          break;
        }
        ;
        while (true) {
          var _0xA4D9 = _0xA574.getUint16(_0xA574.offset, true);
          _0xA574.offset += 2;
          if (_0xA4D9 == 0) {
            break;
          }
          ;
          var _0xA593 = _0xA574.getInt16(_0xA574.offset, true);
          var _0xA5B2 = _0xA574.getInt16(_0xA574.offset + 2, true);
          _0xA574.offset += 4;
          var _0xA4F8;
          if (_0xA555 == 6) {
            _0xA4F8 = this.foodObjects[_0xA4D9];
          } else {
            _0xA4F8 = this.bucket[_0xA4D9];
          }
          ;
          if (_0xA4F8 == null) {
            _0xA4F8 = new _0xA726(_0xA4D9);
            _0xA4F8.setType(_0xA555);
            _0xA4F8.setSize(10);
            _0xA4F8.setX(_0xA593);
            _0xA4F8.setY(_0xA5B2);
            _0xA4F8.onCreate(this);
          } else {
            _0xA4F8.updateX(_0xA593);
            _0xA4F8.updateY(_0xA5B2);
          }
          ;
          switch (_0xA555) {
            case 2:
              _0xA4F8.size_ = _0xA574.getUint16(_0xA574.offset, true);
              _0xA574.offset += 2;
              break;
            case 3:
              _0xA4F8.size_ = _0xA574.getUint16(_0xA574.offset, true);
              _0xA574.offset += 2;
              break;
            case 4:
              _0xA4F8.size_ = _0xA574.getUint16(_0xA574.offset, true);
              _0xA574.offset += 2;
              break;
          }
          ;
          _0xA4F8.steps = 30;
        }
      }
      ;
      this.sortCells();
    };
    _0xA9B1.prototype.handlePosition = function (_0xA47C) {
      this.centerX_ = _0xA47C.getFloat32(_0xA47C.offset, true);
      _0xA47C.offset += 4;
      this.centerY_ = _0xA47C.getFloat32(_0xA47C.offset, true);
      _0xA47C.offset += 4;
      this.centerSteps = 30;
      if (!_0xB79E.cDisableAutoZoom) {
        this.scale_base = _0xA47C.getFloat32(_0xA47C.offset, true);
      }
    };
    _0xA9B1.prototype.handleRespawnCooldown = function (_0xA49B) {
      var _0xA47C = _0xA49B.getFloat64(_0xA49B.offset, true);
      this.respawnCooldown = _0xA47C;
    };
    _0xA9B1.prototype.handleMapData = function (_0xA47C) {
      this.playerId = _0xA47C.getUint16(_0xA47C.offset, true);
      _0xA47C.offset += 3;
      this.handleUpdateBorder(_0xA47C);
      this.serverData.maxCells = _0xA47C.getUint16(_0xA47C.offset, true);
      _0xA47C.offset += 2;
      _0xBB7E(_0xA47C);
      this.serverData.autosplits = _0xA47C.getUint8(_0xA47C.offset++);
      $("#playerId").html(_0xB98E.playerId);
      this.updateCellCounter(0, true);
      if (_0xA555 != null) {
        _0xB98E.sendPacket(new _0xB7FB.sendPartyJoin(_0xA555));
      }
      ;
      _0xBCB4.css("display", "none");
      $("#scrimmage-btn-leave").css("display", "none");
    };
    _0xA9B1.prototype.handleUpdateBorder = function (_0xA47C) {
      this.serverData.border = {};
      this.serverData.border.left = _0xA47C.getInt16(_0xA47C.offset, true);
      this.serverData.border.top = _0xA47C.getInt16(_0xA47C.offset + 2, true);
      this.serverData.border.right = _0xA47C.getInt16(_0xA47C.offset + 4, true);
      this.serverData.border.bottom = _0xA47C.getInt16(_0xA47C.offset + 6, true);
      _0xA47C.offset += 8;
      this.serverData.border.width = this.serverData.border.right - this.serverData.border.left;
      this.serverData.border.height = this.serverData.border.bottom - this.serverData.border.top;
      this.serverData.border.enabled = this.serverData.border.width != 0 && this.serverData.border.height != 0;
      _0xB079();
    };
    _0xA9B1.prototype.handleResetTime = function (_0xA4BA) {
      var _0xA49B = _0xA4BA.getUint8(_0xA4BA.offset++);
      var _0xA47C = _0xA4BA.getFloat64(_0xA4BA.offset, true);
      this.serverData.resetType = _0xA49B;
      this.serverData.resetTime = _0xA47C;
    };
    _0xA9B1.prototype.handleSpectators = function (_0xA47C) {
      this.spectators = _0xA47C.getUint16(_0xA47C.offset, true);
      this.updateSpectators();
    };
    _0xA9B1.prototype.handleClearNodes = function (_0xA47C) {
      this.clearBuckets();
    };
    _0xA9B1.prototype.handleLeaderboard = function (_0xA555) {
      var _0xA4F8 = document.getElementById("leaderboard-canvas");
      var _0xA49B = _0xA4F8.getContext("2d");
      _0xB39F.text("Leaderboard");
      var _0xA47C = _0xA555.getUint32(_0xA555.offset, true);
      _0xA555.offset += 4;
      _0xA4F8.width = 200;
      _0xA4F8.height = 20 * _0xA47C + 5;
      _0xA49B.font = "16px Calibri";
      var _0xA536 = 20;
      for (var _0xA4BA = 0; _0xA4BA < _0xA47C; _0xA4BA++) {
        var _0xA4D9 = _0xA555.getUint16(_0xA555.offset, true);
        _0xA555.offset += 2;
        var _0xA517 = _0xBB5F(_0xA555) || "An unnamed cell";
        if (_0xA4D9 == this.playerId) {
          _0xA49B.fillStyle = _0xC0B3.uiLeaderboardHighlightSelf;
        } else {
          if (this.partyIds[_0xA4D9] != null) {
            _0xA49B.fillStyle = _0xC0B3.uiLeaderboardHighlightParty;
          } else {
            _0xA49B.fillStyle = _0xC0B3.uiForegroundColor;
          }
        }
        ;
        _0xA49B.fillText(_0xA4BA + 1 + ". " + _0xA517, 10, _0xA536);
        _0xA536 += 20;
      }
    };
    _0xA9B1.prototype.handleLeaderboardCustom = function (_0xA574) {
      var _0xA4F8 = document.getElementById("leaderboard-canvas");
      var _0xA4BA = _0xA4F8.getContext("2d");
      _0xB39F.html("Leaderboard");
      var _0xA47C = _0xA574.getUint16(_0xA574.offset, true);
      var _0xA49B = _0xA574.getUint8(_0xA574.offset + 2, true);
      var _0xA555 = _0xA574.getUint8(_0xA574.offset + 3, true);
      _0xA574.offset += 4;
      _0xA4F8.width = 200;
      _0xA4F8.height = 20 * _0xA47C + 5;
      _0xA4BA.font = "16px Calibri";
      var _0xA536 = 20;
      for (var _0xA4D9 = 0; _0xA4D9 < _0xA47C; _0xA4D9++) {
        var _0xA517 = _0xBB7E(_0xA574);
        if (_0xA4D9 == _0xA49B) {
          _0xA4BA.fillStyle = _0xC0B3.uiLeaderboardHighlightSelf;
        } else {
          _0xA4BA.fillStyle = _0xC0B3.uiForegroundColor;
        }
        ;
        _0xA4BA.fillText(_0xA517, 5, _0xA536);
        _0xA536 += 20;
      }
    };
    _0xA9B1.prototype.handlePing = function () {
      var _0xA47C = +new Date - _0xB912;
      if (!_0xB79E.cColoredPing) {
        if (_0xA47C < 100) {
          $("#playerPing").css({color: _0xC0B3.uiGameColorSuccess});
        } else {
          if (_0xA47C < 200) {
            $("#playerPing").css({color: _0xC0B3.uiGameColorWarning});
          } else {
            $("#playerPing").css({color: _0xC0B3.uiGameColorError});
          }
        }
      } else {
        $("#playerPing").css({color: _0xC0B3.uiForegroundColor});
      }
      ;
      $("#playerPing").html(_0xA47C + "ms");
    };
    _0xA9B1.prototype.handleChat = function (_0xA68B) {
      var _0xA47C = _0xA68B.getUint8(_0xA68B.offset++);
      var _0xA5D1 = "rgb(" + _0xA68B.getUint8(_0xA68B.offset++) + "," + _0xA68B.getUint8(_0xA68B.offset++) + "," + _0xA68B.getUint8(_0xA68B.offset++) + ")";
      var _0xA4BA = _0xA68B.getUint8(_0xA68B.offset++);
      var _0xA60F = _0xA68B.getUint16(_0xA68B.offset, true);
      _0xA68B.offset += 2;
      if (_0xA5B2.includes(_0xA60F)) {
        return;
      }
      ;
      var _0xA64D = _0xBB5F(_0xA68B);
      _0xA68B.getUint8(_0xA68B.offset++);
      var _0xA593 = _0xBB5F(_0xA68B).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
      var _0xA555 = _0xBB5F(_0xA68B).replace(/</g, "&lt;").replace(/>/g, "&gt;");
      var _0xA4F8 = _0xA8F7.ALL;
      var _0xA574 = _0xA68B.offset < _0xA68B.byteLength ? _0xA68B.getBigInt64(_0xA68B.offset, true) : 0;
      var _0xA49B;
      switch (_0xA47C) {
        case 1:
          _0xA49B = "Party";
          _0xA4F8 = _0xA8F7.PARTY;
          break;
        case 2:
          _0xA49B = "Admin";
          _0xA4F8 = _0xA8F7.ADMIN;
          break;
        default:
          _0xA49B = "All";
          break;
      }
      ;
      if (_0xA64D.length > 0) {
        (_0xA49B += " - " + _0xA64D).replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      ;
      var _0xA536 = document.createElement("td");
      if (_0xA574 != 0) {
        _0xA536.dataset.msgid = _0xA574;
      }
      ;
      var _0xA62E = document.createElement("span");
      _0xA62E.innerHTML = "[" + _0xA49B + "] ";
      _0xA536.appendChild(_0xA62E);
      var _0xA5F0 = document.createElement("span");
      _0xA5F0.innerText = _0xA593;
      _0xA5F0.dataset.playerId = _0xA60F;
      _0xA5F0.style.color = _0xA5D1;
      _0xA5F0.className = "chat-name";
      _0xA5F0.oncontextmenu = _0xA83D;
      _0xA536.appendChild(_0xA5F0);
      var _0xA517 = document.createElement("span");
      _0xA517.innerHTML = ": ";
      _0xA536.appendChild(_0xA517);
      var _0xA66C = document.createElement("span");
      _0xA66C.className = "chat-content";
      _0xA66C.style.color = _0xA81E[_0xA4BA];
      _0xA66C.innerHTML = _0xB858(_0xA555);
      _0xA536.appendChild(_0xA66C);
      _0xA4D9(_0xA4F8, _0xA536);
    };
    _0xA9B1.prototype.handleWhisper = function (_0xA62E) {
      var _0xA574 = _0xBB5F(_0xA62E).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
      var _0xA5D1 = _0xA62E.getUint16(_0xA62E.offset, true);
      _0xA62E.offset += 2;
      if (_0xA5B2.includes(_0xA5D1)) {
        return;
      }
      ;
      var _0xA593 = "rgb(" + _0xA62E.getUint8(_0xA62E.offset++) + "," + _0xA62E.getUint8(_0xA62E.offset++) + "," + _0xA62E.getUint8(_0xA62E.offset++) + ")";
      var _0xA4F8 = _0xBB5F(_0xA62E).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
      var _0xA536 = _0xA62E.getUint16(_0xA62E.offset, true);
      _0xA62E.offset += 2;
      var _0xA517 = "rgb(" + _0xA62E.getUint8(_0xA62E.offset++) + "," + _0xA62E.getUint8(_0xA62E.offset++) + "," + _0xA62E.getUint8(_0xA62E.offset++) + ")";
      var _0xA4BA = _0xBB5F(_0xA62E).replace(/</g, "&lt;").replace(/>/g, "&gt;");
      var _0xA49B = document.createElement("td");
      var _0xA5F0 = document.createElement("span");
      _0xA5F0.innerText = _0xA574;
      _0xA5F0.dataset.playerId = _0xA5D1;
      _0xA5F0.style.color = _0xA593;
      _0xA5F0.className = "chat-name";
      _0xA5F0.oncontextmenu = _0xA83D;
      _0xA49B.appendChild(_0xA5F0);
      var _0xA47C = document.createElement("span");
      _0xA47C.innerHTML = " > ";
      _0xA49B.appendChild(_0xA47C);
      var _0xA555 = document.createElement("span");
      _0xA555.innerText = _0xA4F8;
      _0xA555.dataset.playerId = _0xA536;
      _0xA555.style.color = _0xA517;
      _0xA555.className = "chat-name";
      _0xA555.oncontextmenu = _0xA83D;
      _0xA49B.appendChild(_0xA555);
      var _0xA60F = document.createElement("span");
      _0xA60F.innerHTML = ": " + _0xB858(_0xA4BA);
      _0xA49B.appendChild(_0xA60F);
      _0xA4D9(_0xA8F7.WHISPER, _0xA49B);
    };
    _0xA9B1.prototype.handleEditMessage = function (_0xA4BA) {
      var _0xA49B = _0xA4BA.getBigInt64(_0xA4BA.offset, true);
      _0xA4BA.offset += 8;
      var _0xA47C = _0xBB5F(_0xA4BA).replace(/</g, "&lt;").replace(/>/g, "&gt;");
      if (_0xA47C.length > 0) {
        $(".chat-table td[data-msgid='" + _0xA49B + "'] .chat-content").html(_0xB858(_0xA47C));
      } else {
        $(".chat-table td[data-msgid='" + _0xA49B + "']").closest("tr").remove();
      }
    };
    _0xA9B1.prototype.handleSystemMsg = function (_0xA49B) {
      var _0xA47C = _0xBB5F(_0xA49B);
      this.selfMsg(_0xA47C);
    };
    _0xA9B1.prototype.handleAuthenticated = function (_0xA49B) {
      var _0xA47C = _0xA49B.getUint8(1);
      switch (_0xA47C) {
        case _0xA536.SUCCESS:
          break;
        case _0xA536.FAILURE:
          this.selfMsg("Invalid authentication token! Please logout and try again!");
          break;
      }
      ;
      if (!this.spectate) {
        this.sendPacket(new _0xB7FB.setName(this.name));
      } else {
        this.sendPacket(new _0xB7FB.sendSpectate);
      }
    };
    _0xA9B1.prototype.handleProfile = function (_0xA4BA) {
      var _0xA47C = _0xBB7E(_0xA4BA);
      var _0xA49B = JSON.parse(_0xA47C);
      _0xB497(_0xA49B);
    };
    _0xA9B1.prototype.handleInvite = function (_0xA4BA) {
      if (_0xB79E.cAutoDecline) {
        _0xB98E.sendPacket(new _0xB7FB.sendInviteResponse(false));
      } else {
        var _0xA49B = _0xBB5F(_0xA4BA).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var _0xA47C = document.getElementById("popup-party-text");
        _0xA47C.innerText = _0xA49B + " has invited you to a party.";
        _0xBEC3($("#popup-party"));
      }
    };
    _0xA9B1.prototype.handlePartyInfo = function (_0xA574) {
      var _0xA4F8 = {};
      var _0xA536 = [];
      var _0xA517 = -1;
      var _0xA47C = _0xA574.getUint16(_0xA574.offset, true);
      _0xA574.offset += 2;
      for (var _0xA4BA = 0; _0xA4BA < _0xA47C; _0xA4BA++) {
        var _0xA4D9 = {};
        var _0xA49B = _0xA574.getUint8(_0xA574.offset++);
        _0xA4D9.id = _0xA574.getUint16(_0xA574.offset, true);
        _0xA4F8[_0xA4D9.id] = _0xA4BA;
        _0xA574.offset += 2;
        if (_0xA49B == 1) {
          _0xA517 = _0xA4D9.id;
          _0xA4D9.isLeader = true;
        } else {
          _0xA4D9.isLeader = false;
        }
        ;
        _0xA4D9.name = _0xBB5F(_0xA574) || "An unnamed cell";
        _0xA4D9.x = 0;
        _0xA4D9.y = 0;
        _0xA4D9.x_ = 0;
        _0xA4D9.y_ = 0;
        _0xA4D9.score = 0;
        _0xA4D9.cache = -1;
        _0xA4D9.team = 0;
        _0xA4D9.state = _0xB8B5.UNKNOWN;
        if (this.partyIds[_0xA4D9.id] != null) {
          var _0xA555 = this.party[this.partyIds[_0xA4D9.id]];
          _0xA4D9.x = _0xA555.x;
          _0xA4D9.y = _0xA555.y;
          _0xA4D9.x_ = _0xA555.x_;
          _0xA4D9.y_ = _0xA555.y_;
          _0xA4D9.state = _0xA555.state;
          _0xA4D9.score = _0xA555.score;
          _0xA4D9.cache = _0xA555.cache;
          _0xA4D9.mmColor = _0xA555.mmColor;
        } else {
          _0xA4D9.mmColor = _0xBB21[_0xA4D9.id % _0xBB21.length];
        }
        ;
        _0xA536.push(_0xA4D9);
      }
      ;
      this.party = _0xA536;
      this.partyIds = _0xA4F8;
      if (this.partyLeader != _0xA517) {
        this.partyLeader = _0xA517;
        if (_0xAB82.css("display") == "block") {
          ScrimmageHelper.checkLeader();
        }
      }
      ;
      if (_0xA47C > 0) {
        this.drawParty();
      } else {
        this.clearParty();
      }
    };
    _0xA9B1.prototype.handlePartyData = function (_0xA4D9) {
      var _0xA47C = _0xA4D9.getUint16(_0xA4D9.offset, true);
      _0xA4D9.offset += 2;
      if (_0xA47C != this.party.length) {
        return;
      }
      ;
      for (var _0xA49B = 0; _0xA49B < _0xA47C; _0xA49B++) {
        var _0xA4BA = this.party[_0xA49B];
        _0xA4BA.state = _0xA4D9.getUint8(_0xA4D9.offset++);
        if (_0xA4BA.state === _0xB8B5.ALIVE) {
          _0xA4BA.x_ = _0xA4D9.getInt16(_0xA4D9.offset, true);
          _0xA4BA.y_ = _0xA4D9.getInt16(_0xA4D9.offset + 2, true);
          _0xA4BA.score = _0xA4D9.getInt32(_0xA4D9.offset + 4, true);
          _0xA4D9.offset += 8;
        }
      }
      ;
      this.drawParty();
    };
    _0xA9B1.prototype.handlePartyJoinCode = function (_0xA4BA) {
      var _0xA47C = _0xBB7E(_0xA4BA);
      this.partyCode = _0xBB7E(_0xA4BA);
      if (this.partyCode.length != 0) {
        this.selfMsgWithJoinCode(_0xA47C, this.partyCode);
        $("#popup-party-code-content input").val(this.partyCode);
        $("#popup-party-code").show();
        var _0xA49B = "#" + this.currentServerName + "&" + this.partyCode;
        window.history.pushState("page", "", _0xA49B);
      } else {
        this.selfMsg(_0xA47C);
        this.partyCode = null;
        window.history.pushState("page", "", " ");
      }
    };
    _0xA9B1.prototype.handleStats = function (_0xA4BA) {
      var _0xA47C = _0xA4BA.getUint16(_0xA4BA.offset, true);
      _0xA4BA.offset += 2;
      this.stats.name = _0xBB5F(_0xA4BA) || "An unnamed cell";
      this.stats.alive += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      this.stats.eatenFood += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      this.stats.eatenEject += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      this.stats.eatenVirus += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      this.stats.eatenPlayer += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      this.stats.gainFood += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      this.stats.gainEject += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      this.stats.gainVirus += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      this.stats.gainPlayer += _0xA4BA.getUint32(_0xA4BA.offset, true);
      _0xA4BA.offset += 4;
      var _0xA49B = $("#main-stats");
      _0xA49B.empty();
      _0xA49B.append("<span>Name: " + this.stats.name + " (" + _0xA47C + ")</span><br>");
      _0xA49B.append("<span>Alive: " + _0xAE89(this.stats.alive) + "</span><br>");
      _0xA49B.append("<span>Food eaten: " + this.stats.eatenFood + " (" + this.stats.gainFood + ")</span><br>");
      _0xA49B.append("<span>Ejected mass eaten: " + this.stats.eatenEject + " (" + this.stats.gainEject + ")</span><br>");
      _0xA49B.append("<span>Viruses eaten: " + this.stats.eatenVirus + " (" + this.stats.gainVirus + ")</span><br>");
      _0xA49B.append("<span>Player cells eaten: " + this.stats.eatenPlayer + " (" + this.stats.gainPlayer + ")</span><br>");
    };
    _0xA9B1.prototype.showSubPanel = function (_0xA49B) {
      var _0xA47C = _0xA49B.getUint8(_0xA49B.offset++) == 1;
      this.subPanelOverride = _0xA47C;
      _0xC208();
      if (_0xA47C) {
        if (!this.serverData.hasSentSubPanel) {
          _0xC1E9();
          this.serverData.hasSentSubPanel = true;
        }
        ;
        document.body.classList.add("hide-captcha-badge");
      }
    };
    _0xA9B1.prototype.updateSubPanel = function (_0xA47C) {
      if (_0xC246) {
        _0xB3FC(_0xC246.uid);
      }
    };
    _0xA9B1.prototype.updateSpectators = function () {
      _0xAC5B.spectatorCount.html(this.spectators);
    };
    _0xA9B1.prototype.handleAddBuff = function (_0xA4D9) {
      var _0xA47C = _0xA4D9.getUint8(_0xA4D9.offset++);
      var _0xA4BA = _0xA4D9.getUint8(_0xA4D9.offset++);
      var _0xA49B = _0xA4D9.getFloat64(_0xA4D9.offset, true);
      _0xA4D9.offset += 8;
      this.buffHolder.onAddBuff(_0xA47C, _0xA4BA, _0xA49B);
    };
    _0xA9B1.prototype.handleRemoveBuff = function (_0xA49B) {
      var _0xA47C = _0xA49B.getUint8(_0xA49B.offset++);
      this.buffHolder.onRemoveBuff(_0xA47C);
    };
    _0xA9B1.prototype.handleClearBuffs = function (_0xA49B) {
      var _0xA47C = _0xA49B.getUint8(_0xA49B.offset++) == 1 ? true : false;
      this.buffHolder.clearBuffs(_0xA47C);
    };
    _0xA9B1.prototype.sortCells = function () {
      _0xA7E0.children.sort(function (_0xA47C, _0xA49B) {
        return _0xA47C.parentCell.size - _0xA49B.parentCell.size;
      });
      this.updateScorePanel();
    };
    _0xA9B1.prototype.updateScorePanel = function () {
      var _0xA49B = 0;
      var _0xA47C = 0;
      for (var _0xA4BA in this.myCells) {
        var _0xA4D9 = this.myCells[_0xA4BA];
        _0xA49B += _0xA4D9.getRealMass();
        _0xA47C++;
      }
      ;
      if (_0xA49B > this.score) {
        this.score = _0xA49B;
        _0xAC5B.playerScore.html(this.score.toLocaleString());
      }
      ;
      this.updateCellCounter(_0xA47C);
    };
    _0xA9B1.prototype.updateCellCounter = function (_0xA47C, _0xA49B) {
      if (_0xAC5B.playerCellCount != _0xA47C || _0xA49B) {
        _0xAC5B.playerCellCount = _0xA47C;
        _0xAC5B.playerCells.html(_0xA47C + "/" + this.getServerMaxCells());
        if (!_0xB79E.cColoredCellCount) {
          var _0xA4BA = _0xA47C / this.getServerMaxCells();
          if (_0xA4BA >= 1) {
            _0xAC5B.playerCells.css({color: _0xC0B3.uiGameColorError});
          } else {
            if (_0xA4BA >= 0.5) {
              _0xAC5B.playerCells.css({color: _0xC0B3.uiGameColorWarning});
            } else {
              _0xAC5B.playerCells.css({color: _0xC0B3.uiGameColorSuccess});
            }
          }
        } else {
          _0xAC5B.playerCells.css({color: _0xC0B3.uiForegroundColor});
        }
      }
    };
    _0xA9B1.prototype.drawParty = function () {
      if (this.party.length == 0) {
        return;
      }
      ;
      if (_0xB79E.cHidePartyPanel) {
        _0xAC5B.partyPanel.css("display", "none");
      } else {
        if (_0xAC5B.partyPanel.css("display") == "none" && _0xB1AF.css("display") != "none") {
          _0xAC5B.partyPanel.css("display", "block");
        }
      }
      ;
      var _0xA555 = document.getElementById("party-canvas");
      var _0xA47C = _0xA555.getContext("2d");
      _0xA47C.font = "16px Calibri";
      var _0xA4BA = 0;
      var _0xA4D9 = 0;
      var _0xA593 = 0;
      for (var _0xA49B = 0; _0xA49B < this.party.length; _0xA49B++) {
        var _0xA4F8 = this.party[_0xA49B];
        if (_0xA4F8.cache == -1) {
          _0xA4F8.cache = _0xA47C.measureText(_0xA49B + 1 + ". " + _0xA4F8.name).width;
        }
        ;
        if (_0xA4F8.cache > _0xA4BA) {
          _0xA4BA = _0xA4F8.cache;
        }
        ;
        if (_0xA4F8.state === _0xB8B5.ALIVE || _0xA4F8.state === _0xB8B5.UNKNOWN) {
          _0xA4F8.scoreText = _0xA4F8.score.toLocaleString();
          _0xA593 += _0xA4F8.score;
        } else {
          if (_0xA4F8.state === _0xB8B5.DEAD) {
            _0xA4F8.scoreText = "DEAD";
          } else {
            if (_0xA4F8.state === _0xB8B5.SPECTATE) {
              _0xA4F8.scoreText = "SPEC";
            }
          }
        }
        ;
        var _0xA574 = _0xA47C.measureText(_0xA4F8.scoreText).width;
        if (_0xA574 > _0xA4D9) {
          _0xA4D9 = _0xA574;
        }
      }
      ;
      var _0xA5B2 = _0xA593.toLocaleString();
      _0xA4D9 = Math.max(_0xA4D9, _0xA47C.measureText(_0xA5B2).width);
      _0xA555.width = 15 + _0xA4BA + 50 + _0xA4D9;
      _0xA555.height = 20 * this.party.length + 5 + (this.party.length > 1 ? 20 : 0);
      _0xA47C.font = "16px Calibri";
      var _0xA536 = 20;
      var _0xA517 = 5 + _0xA4BA + 50;
      for (var _0xA49B = 0; _0xA49B < this.party.length; _0xA49B++) {
        var _0xA4F8 = this.party[_0xA49B];
        _0xA47C.fillStyle = _0xA4F8.isLeader ? _0xC0B3.uiPartyLeaderColor : _0xC0B3.uiForegroundColor;
        _0xA47C.fillText(_0xA49B + 1 + ". " + _0xA4F8.name, 5, _0xA536);
        _0xA47C.fillText(_0xA4F8.scoreText, _0xA517, _0xA536);
        _0xA536 += 20;
      }
      ;
      if (this.party.length > 1) {
        _0xA47C.fillStyle = _0xC0B3.uiForegroundColor;
        _0xA47C.fillText("Total:", 5, _0xA536);
        _0xA47C.fillText(_0xA5B2, _0xA517, _0xA536);
      }
    };
    _0xA9B1.prototype.handleShowScrimmageMenu = function () {
      _0xB5EC.stop(true, false);
      _0xB5EC.css("display", "none");
      _0xBCB4.css("display", "block");
      $("#scrimmage-btn-leave").css("display", "none");
      _0xB98E.serverData.border.enabled = false;
    };
    _0xA9B1.prototype.handleQueueData = function (_0xA536) {
      var _0xA4BA = _0xBB7E(_0xA536);
      var _0xA517 = _0xA536.getUint32(_0xA536.offset, true);
      _0xA536.offset += 4;
      var _0xA4F8 = _0xA536.offset < _0xA536.byteLength ? _0xA536.getUint8(_0xA536.offset) : -1;
      var _0xA49B = document.getElementById("leaderboard-canvas");
      var _0xA47C = _0xA49B.getContext("2d");
      _0xB39F.html("Queue");
      _0xA49B.width = 200;
      _0xA49B.height = 20 * (2 + (_0xA4F8 != -1 ? 1 : 0)) + 5;
      _0xA47C.font = "16px Calibri";
      var _0xA4D9 = 20;
      _0xA47C.fillStyle = _0xC0B3.uiForegroundColor;
      _0xA47C.fillText("Mode: " + _0xA4BA, 5, _0xA4D9);
      _0xA4D9 += 20;
      _0xA47C.fillText("Time: " + _0xAE89(_0xA517), 5, _0xA4D9);
      if (_0xA4F8 != -1) {
        _0xA4D9 += 20;
        _0xA47C.fillText("Queued players: " + _0xA4F8, 5, _0xA4D9);
      }
    };
    _0xA9B1.prototype.handleQueueLeave = function (_0xA4BA) {
      var _0xA49B = _0xBB7E(_0xA4BA);
      var _0xA47C = document.getElementById("leaderboard-canvas");
      _0xA47C.width = 0;
      _0xA47C.height = 0;
      this.selfMsg("You have left the queue for [" + _0xA49B + "]");
    };
    _0xA9B1.prototype.handleMatchState = function (_0xA49B) {
      var _0xA47C = _0xA49B.byteLength == 1 ? 0 : _0xA49B.getUint8(_0xA49B.offset++);
      if (_0xA47C == 0) {
        this.selfMsg("A match has been found. Good luck and have fun!");
        _0xBDAC();
      } else {
        if (_0xA47C == 1) {
          $("#scrimmage-btn-leave").css("display", "block");
        }
      }
    };
    _0xA9B1.prototype.handleScrimmageData = function (_0xA5D1) {
      var _0xA47C = _0xA5D1.getUint8(_0xA5D1.offset++);
      var _0xA574 = $("#scrimmage-mode-select");
      var _0xA555 = $("#scrimmage-mode-info");
      var _0xA5B2 = parseInt(_0xA574.val());
      _0xA574.empty();
      _0xA555.empty();
      var _0xA49B = {};
      while (_0xA47C > 0) {
        var _0xA4F8 = _0xA5D1.getUint8(_0xA5D1.offset++);
        var _0xA593 = _0xBB7E(_0xA5D1);
        var _0xA517 = _0xBB7E(_0xA5D1);
        var _0xA4BA = document.createElement("option");
        _0xA4BA.innerHTML = _0xA593;
        _0xA4BA.value = _0xA4F8;
        _0xA574.append(_0xA4BA);
        _0xA4BA = document.createElement("div");
        _0xA4BA.innerHTML = _0xA517;
        _0xA4BA.id = "scrimmage-info-" + _0xA4F8;
        _0xA4BA.style.display = "none";
        _0xA555.append(_0xA4BA);
        _0xA49B[_0xA4F8] = true;
        _0xA47C--;
      }
      ;
      _0xBC95 = {
        modes: {}, 
        sizes: {}, 
        maps: []
      };
      if (_0xA5D1.byteLength - 1 > _0xA5D1.offset) {
        _0xA47C = _0xA5D1.getUint8(_0xA5D1.offset++);
        while (_0xA47C > 0) {
          var _0xA4F8 = _0xA5D1.getUint8(_0xA5D1.offset++);
          var _0xA593 = _0xBB7E(_0xA5D1);
          _0xBC95.modes[_0xA4F8] = {
            id: _0xA4F8, 
            name: _0xA593
          };
          _0xA47C--;
        }
        ;
        _0xA47C = _0xA5D1.getUint8(_0xA5D1.offset++);
        while (_0xA47C > 0) {
          var _0xA4F8 = _0xA5D1.getUint8(_0xA5D1.offset++);
          var _0xA593 = _0xBB7E(_0xA5D1);
          _0xBC95.sizes[_0xA4F8] = {id: _0xA4F8, name: _0xA593};
          _0xA47C--;
        }
        ;
        _0xA47C = _0xA5D1.getUint8(_0xA5D1.offset++);
        while (_0xA47C > 0) {
          var _0xA593 = _0xBB7E(_0xA5D1);
          var _0xA536 = {name: _0xA593, startmass: 0, teams: 0, modes: [], sizes: []};
          var _0xA4D9 = _0xA5D1.getUint8(_0xA5D1.offset++);
          while (_0xA4D9 > 0) {
            _0xA536.modes.push(_0xA5D1.getUint8(_0xA5D1.offset++));
            _0xA4D9--;
          }
          ;
          var _0xA4D9 = _0xA5D1.getUint8(_0xA5D1.offset++);
          while (_0xA4D9 > 0) {
            _0xA536.sizes.push(_0xA5D1.getUint8(_0xA5D1.offset++));
            _0xA4D9--;
          }
          ;
          _0xA536.startmass = _0xA5D1.getUint16(_0xA5D1.offset, true);
          _0xA5D1.offset += 2;
          _0xA536.respawnDelay = _0xA5D1.getInt16(_0xA5D1.offset, true);
          _0xA5D1.offset += 2;
          _0xA536.teams = _0xA5D1.getUint8(_0xA5D1.offset++);
          _0xBC95.maps.push(_0xA536);
          _0xA47C--;
        }
      }
      ;
      $("#scrimmage-custom-btn-container").css("display", _0xBC95.maps.length == 0 ? "none" : "block");
      $("#scrimmage-map").empty();
      for (var _0xA4D9 = 0; _0xA4D9 < _0xBC95.maps.length; _0xA4D9++) {
        $("#scrimmage-map").append("<option value='" + _0xA4D9 + "'>" + _0xBC95.maps[_0xA4D9].name + "</option>");
      }
      ;
      if (_0xA49B[_0xA5B2] != null) {
        _0xA574.val(_0xA5B2);
        _0xA574.trigger("change");
      } else {
        _0xA574.prop("selectedIndex", 0);
        _0xA574.trigger("change");
      }
    };
    _0xA9B1.prototype.handleCustomGameUpdate = function (_0xA4F8) {
      var _0xA4BA = _0xA4F8.getUint8(_0xA4F8.offset++);
      switch (_0xA4BA) {
        case _0xAB63.MAP:
          ScrimmageHelper.updateMap(_0xA4F8.getUint8(_0xA4F8.offset++));
          break;
        case _0xAB63.MODE:
          ScrimmageHelper.updateMode(_0xA4F8.getUint8(_0xA4F8.offset++));
          break;
        case _0xAB63.SIZE:
          ScrimmageHelper.updateSize(_0xA4F8.getUint8(_0xA4F8.offset++));
          break;
        case _0xAB63.STARTMASS:
          ScrimmageHelper.updateStartMass(_0xA4F8.getUint16(_0xA4F8.offset, true));
          _0xA4F8.offset += 2;
          break;
        case _0xAB63.LOCK:
          ScrimmageHelper.updateLock(_0xA4F8.getUint8(_0xA4F8.offset++) === 1 ? true : false);
          break;
        case _0xAB63.PLAYER_UPDATE:
          var _0xA49B = _0xA4F8.getUint8(_0xA4F8.offset++);
          var _0xA4D9 = _0xA4F8.getUint8(_0xA4F8.offset++);
          _0xB98E.party[_0xA49B].team = _0xA4D9;
          ScrimmageHelper.updatePlayerById(_0xA49B);
          break;
        case _0xAB63.PLAYER_LIST:
          var _0xA47C = _0xA4F8.getUint8(_0xA4F8.offset++);
          var _0xA49B = 0;
          while (_0xA47C > 0) {
            _0xB98E.party[_0xA49B].team = _0xA4F8.getUint8(_0xA4F8.offset++);
            _0xA47C--;
            _0xA49B++;
          }
          ;
          ScrimmageHelper.updatePlayers();
          break;
        case _0xAB63.VIRUS_DENSITY:
          ScrimmageHelper.updateVirusDensity(_0xA4F8.getUint16(_0xA4F8.offset, true));
          _0xA4F8.offset += 2;
          break;
        case _0xAB63.RESPAWN_DELAY:
          ScrimmageHelper.updateRespawnDelay(_0xA4F8.getInt16(_0xA4F8.offset, true));
          _0xA4F8.offset += 2;
          break;
        case _0xAB63.AUTOSPLIT:
          ScrimmageHelper.updateAutoSplit(_0xA4F8.getUint8(_0xA4F8.offset++) === 1 ? true : false);
          break;
        case _0xAB63.PUBLIC:
          ScrimmageHelper.updatePublic(_0xA4F8.getUint8(_0xA4F8.offset++) === 1 ? true : false);
          break;
        case _0xAB63.PASSWORD:
          ScrimmageHelper.updatePassword(_0xA4F8.getUint8(_0xA4F8.offset++) === 1 ? true : false);
          break;
        case _0xAB63.NAME:
          ScrimmageHelper.updateName(_0xBB5F(_0xA4F8));
          break;
      }
    };
    _0xA9B1.prototype.handleCustomGameShow = function (_0xA5F0) {
      $(".scrimmage-full").css("display", "none");
      $("#scrimmage-custom").css("display", "block");
      var _0xA536 = _0xBB5F(_0xA5F0);
      var _0xA4F8 = _0xA5F0.getUint8(_0xA5F0.offset++);
      var _0xA517 = _0xA5F0.getUint8(_0xA5F0.offset++);
      var _0xA5B2 = _0xA5F0.getUint8(_0xA5F0.offset++);
      var _0xA5D1 = _0xA5F0.getUint16(_0xA5F0.offset, true);
      _0xA5F0.offset += 2;
      var _0xA60F = _0xA5F0.getUint16(_0xA5F0.offset, true);
      _0xA5F0.offset += 2;
      var _0xA593 = _0xA5F0.getInt16(_0xA5F0.offset, true);
      _0xA5F0.offset += 2;
      var _0xA49B = _0xA5F0.getUint8(_0xA5F0.offset++) === 1 ? true : false;
      var _0xA4D9 = _0xA5F0.getUint8(_0xA5F0.offset++) === 1 ? true : false;
      var _0xA574 = _0xA5F0.getUint8(_0xA5F0.offset++) === 1 ? true : false;
      var _0xA555 = _0xA5F0.getUint8(_0xA5F0.offset++) === 1 ? true : false;
      var _0xA47C = _0xA5F0.getUint8(_0xA5F0.offset++);
      var _0xA4BA = 0;
      while (_0xA47C > 0) {
        _0xB98E.party[_0xA4BA].team = _0xA5F0.getUint8(_0xA5F0.offset++);
        _0xA47C--;
        _0xA4BA++;
      }
      ;
      ScrimmageHelper.updateName(_0xA536);
      ScrimmageHelper.updateMap(_0xA4F8);
      ScrimmageHelper.updateMode(_0xA517);
      ScrimmageHelper.updateSize(_0xA5B2);
      ScrimmageHelper.updateStartMass(_0xA5D1);
      ScrimmageHelper.updateVirusDensity(_0xA60F);
      ScrimmageHelper.updateLock(_0xA4D9);
      ScrimmageHelper.updateRespawnDelay(_0xA593);
      ScrimmageHelper.updateAutoSplit(_0xA49B);
      ScrimmageHelper.updatePublic(_0xA574);
      ScrimmageHelper.updatePassword(_0xA555);
      ScrimmageHelper.updatePlayers();
      ScrimmageHelper.checkLeader();
    };
    _0xA9B1.prototype.handleCustomGameLeave = function () {
      $(".scrimmage-full").css("display", "none");
      $("#scrimmage-menu").css("display", "block");
    };
    _0xA9B1.prototype.handleShowCustomGameLobbies = function (_0xA4F8) {
      $(".scrimmage-full").css("display", "none");
      $("#scrimmage-lobbies").css("display", "block");
      _0xABA1 = {};
      var _0xA4D9 = $("#scrimmage-lobbies-tbody");
      _0xA4D9.empty();
      while (true) {
        var _0xA4BA = _0xA4F8.getUint32(_0xA4F8.offset, true);
        _0xA4F8.offset += 4;
        if (_0xA4BA == 0) {
          break;
        }
        ;
        var _0xA47C = {};
        _0xA47C.id = _0xA4BA;
        _0xA47C.name = _0xBB5F(_0xA4F8);
        _0xA47C.leaderId = _0xA4F8.getUint32(_0xA4F8.offset);
        _0xA4F8.offset += 4;
        _0xA47C.leaderName = _0xBB5F(_0xA4F8) || "An unnamed cell";
        _0xA47C.map = _0xA4F8.getUint8(_0xA4F8.offset++);
        _0xA47C.mode = _0xA4F8.getUint8(_0xA4F8.offset++);
        _0xA47C.size = _0xA4F8.getUint16(_0xA4F8.offset, true);
        _0xA4F8.offset += 2;
        _0xA47C.maxSize = _0xA4F8.getUint16(_0xA4F8.offset, true);
        _0xA4F8.offset += 2;
        _0xA47C.hasPasscode = _0xA4F8.getUint8(_0xA4F8.offset++) == 1 ? true : false;
        _0xABA1[_0xA47C.id] = _0xA47C;
        var _0xA49B = _0xA47C.hasPasscode ? "<div class='scrimmage-lock'></div>" : "";
        _0xA4D9.append("<tr partyId='" + _0xA47C.id + "'><td><span>" + _0xA49B + _0xA47C.name.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</span></td><td><span>" + _0xA47C.leaderName.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</span></td><td><span>" + _0xBC95.maps[_0xA47C.map].name + "</span></td><td><span>" + _0xBC95.modes[_0xA47C.mode].name + "</span></td><td><span>" + _0xA47C.size + "/" + _0xA47C.maxSize + "</span></td></tr>");
      }
      ;
      $("#scrimmage-lobbies-tbody tr").on("click", function () {
        $(".custom-game-selected").removeClass("custom-game-selected");
        _0xBD30 = $(this).attr("partyId");
        $(this).addClass("custom-game-selected");
      });
    };
    ScrimmageHelper = {
      updateName: function (_0xA47C) {
      $("#scrimmage-name").text(_0xA47C);
    }, 
      updateMap: function (_0xA49B) {
      $("#scrimmage-map option[value='" + _0xA49B + "']").prop("selected", true);
      var _0xA4BA = _0xBC95.maps[_0xA49B];
      $("#scrimmage-mapmode").empty();
      for (var _0xA47C = 0; _0xA47C < _0xA4BA.modes.length; _0xA47C++) {
        var _0xA4D9 = _0xBC95.modes[_0xA4BA.modes[_0xA47C]];
        $("#scrimmage-mapmode").append("<option value='" + _0xA47C + "'>" + _0xA4D9.name + "</option>");
      }
      ;
      $("#scrimmage-mapsize").empty();
      for (var _0xA47C = 0; _0xA47C < _0xA4BA.sizes.length; _0xA47C++) {
        var _0xA4F8 = _0xBC95.sizes[_0xA4BA.sizes[_0xA47C]];
        $("#scrimmage-mapsize").append("<option value='" + _0xA47C + "'>" + _0xA4F8.name + "</option>");
      }
      ;
      ScrimmageHelper.updateMode(0);
      ScrimmageHelper.updateSize(0);
      ScrimmageHelper.updateStartMass(_0xA4BA.startmass);
      $("#scrimmage-startmass").attr("placeholder", _0xA4BA.startmass);
      ScrimmageHelper.updateRespawnDelay(_0xA4BA.respawnDelay);
      $("#scrimmage-map").attr("data", _0xA49B);
      _0xB98E.customGameMap = _0xA4BA;
    }, updateMode: function (_0xA47C) {
      $("#scrimmage-mapmode option[value='" + _0xA47C + "']").prop("selected", true);
      $("#scrimmage-mapmode").attr("data", _0xA47C);
    }, updateSize: function (_0xA47C) {
      $("#scrimmage-mapsize option[value='" + _0xA47C + "']").prop("selected", true);
      $("#scrimmage-mapsize").attr("data", _0xA47C);
    }, updateStartMass: function (_0xA47C) {
      $("#scrimmage-startmass").val(_0xA47C);
      $("#scrimmage-startmass").attr("data", _0xA47C);
    }, updateVirusDensity: function (_0xA47C) {
      $("#scrimmage-virusDensity").val(_0xA47C);
      $("#scrimmage-virusDensity").attr("data", _0xA47C);
    }, updateRespawnDelay: function (_0xA47C) {
      $("#scrimmage-respawnDelay").val(_0xA47C);
      $("#scrimmage-respawnDelay").attr("data", _0xA47C);
    }, updateAutoSplit: function (_0xA47C) {
      $("#scrimmage-autoSplit").prop("checked", _0xA47C);
    }, updatePublic: function (_0xA47C) {
      $("#scrimmage-public").prop("checked", _0xA47C);
    }, updatePassword: function (_0xA47C) {
      $("#scrimmage-password").prop("checked", _0xA47C);
    }, updateLock: function (_0xA47C) {
      $("#scrimmage-lockteams").prop("checked", _0xA47C);
      ScrimmageHelper.checkLock();
    }, checkLock: function () {
      if ($("#scrimmage-lockteams").prop("checked") && !_0xB98E.isPartyLeader()) {
        $("#cgp-" + _0xB98E.partyIndex).attr("disabled", "disabled");
      } else {
        $("#cgp-" + _0xB98E.partyIndex).removeAttr("disabled");
      }
    }, checkLeader: function () {
      if (_0xB98E.isPartyLeader()) {
        $(".custom-game").removeAttr("disabled");
      } else {
        $(".custom-game").attr("disabled", "disabled");
        ScrimmageHelper.checkLock();
      }
    }, updatePlayerById: function (_0xA47C) {
      var _0xA49B = _0xB98E.party[_0xA47C];
      $("#cgp-" + _0xA47C + " option[value='" + _0xA49B.team + "']").prop("selected", true);
      $("#cgp-name-" + _0xA47C).text(_0xA49B.name);
      $("#cgp-name-" + _0xA47C).css("color", _0xAB44[_0xA49B.team]);
    }, updatePlayers: function () {
      $("#scrimmage-custom-players").empty();
      for (var _0xA47C = 0; _0xA47C < _0xB98E.party.length; _0xA47C++) {
        var _0xA49B = _0xB98E.party[_0xA47C];
        if (_0xA49B.id == _0xB98E.playerId) {
          _0xB98E.partyIndex = _0xA47C;
        }
        ;
        $("#scrimmage-custom-players").append("<tr><td><span id='cgp-name-" + _0xA47C + "'>" + _0xA49B.name + "</span></td>" + ScrimmageHelper.getTeamOptions(_0xA47C, _0xB98E.customGameMap.teams) + "</tr>");
        $("#cgp-" + _0xA47C + " option[value='" + _0xA49B.team + "']").prop("selected", true);
        $("#cgp-name-" + _0xA47C).css("color", _0xAB44[_0xA49B.team]);
        $("#cgp-" + _0xA47C).on("change", function (_0xA49B) {
          var _0xA4BA = parseInt($(this).attr("id").match("\\d+")[0]);
          var _0xA4D9 = $(this).find("option:selected").val();
          $("#cgp-" + _0xA47C + " option[value='" + $(this).attr("data") + "']").prop("selected", true);
          _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.PLAYER_UPDATE, _0xA4BA, _0xA4D9));
        });
      }
      ;
      ScrimmageHelper.checkLeader();
    }, getTeamOptions: function (_0xA49B, _0xA4D9) {
      var _0xA4BA = "";
      if (_0xA4D9 != null && _0xA4D9 > 1) {
        _0xA4BA = "<td><select class='custom-game' id='cgp-" + _0xA49B + "'><option value='0'>Spectator</option>";
        for (var _0xA47C = 1; _0xA47C <= _0xA4D9; _0xA47C++) {
          _0xA4BA += "<option value='" + _0xA47C + "' class='t" + _0xA47C + "'>" + _0xBCD3[_0xA47C] + "</option>";
        }
        ;
        _0xA4BA += "</select></td>";
      }
      ;
      return _0xA4BA;
    }};
    function _0xA726(_0xA47C) {
      this.id = _0xA47C;
      this.type = 0;
      this.nameCache = null;
      this.skin = null;
      this.playerId = 0;
      this.color = null;
      this.x = 0;
      this.y = 0;
      this.x_ = 0;
      this.y_ = 0;
      this.size = 0;
      this.size_ = 0;
      this.steps = 0;
      this.massLastAmount = -1;
      this.cache = null;
    }
    _0xA726.prototype.setType = function (_0xA47C) {
      this.type = _0xA47C;
    };
    _0xA726.prototype.setX = function (_0xA47C) {
      this.x_ = _0xA47C;
      this.x = _0xA47C;
    };
    _0xA726.prototype.setY = function (_0xA47C) {
      this.y_ = _0xA47C;
      this.y = _0xA47C;
    };
    _0xA726.prototype.updateX = function (_0xA47C) {
      this.x_ = _0xA47C;
    };
    _0xA726.prototype.updateY = function (_0xA47C) {
      this.y_ = _0xA47C;
    };
    _0xA726.prototype.setSize = function (_0xA47C) {
      this.size_ = _0xA47C;
      this.size = _0xA47C;
    };
    _0xA726.prototype.getMass = function () {
      return this.size * this.size / 25 >> 0;
    };
    _0xA726.prototype.getRealMass = function () {
      return this.size_ * this.size_ / 25 >> 0;
    };
    _0xA726.prototype.animate = function (_0xA47C) {
      this.x += (this.x_ - this.x) * _0xA47C;
      this.y += (this.y_ - this.y) * _0xA47C;
      this.size += (this.size_ - this.size) * _0xA47C;
      this.steps--;
    };
    _0xA726.prototype.getSizeCache = function () {
      var _0xA517 = this.getMass();
      if (_0xA517 != this.massLastAmount || this.massLastAmount < 0) {
        var _0xA536;
        if (_0xB7BD.massType == 1) {
          _0xA536 = this.toShortString(_0xA517);
        } else {
          _0xA536 = _0xA517.toString();
        }
        ;
        var _0xA574 = 0;
        var _0xA4BA = 0;
        for (var _0xA4D9 = 0; _0xA4D9 < _0xA536.length; _0xA4D9++) {
          var _0xA47C = _0xA536.charAt(_0xA4D9);
          var _0xA4F8 = _0xBF20.getNumber(_0xA47C);
          _0xA574 += _0xA4F8.width - 2;
          _0xA4BA = Math.max(_0xA4F8.height, _0xA4BA);
        }
        ;
        if (this.cache == null) {
          this.cache = _0xB931.RenderTexture.create(_0xA574, _0xA4BA);
        } else {
          if (_0xA574 != this.cache.width || _0xA4BA != this.cache.height) {
            this.cache.destroy({children: true, texture: true, baseTexture: true});
            this.cache = _0xB931.RenderTexture.create(_0xA574, _0xA4BA);
          }
        }
        ;
        var _0xA49B = _0xBF20.cacheContainer;
        var _0xA555 = 0;
        for (var _0xA4D9 = 0; _0xA4D9 < _0xA536.length; _0xA4D9++) {
          var _0xA47C = _0xA536.charAt(_0xA4D9);
          var _0xA4F8 = _0xBF20.getSizeCacheSprite();
          _0xA4F8.texture = _0xBF20.getNumber(_0xA47C).texture;
          _0xA4F8.position.x = _0xA555;
          _0xA49B.addChild(_0xA4F8);
          _0xA555 += _0xA4F8.width - 2;
        };
        _0xB950.renderer.render(_0xA49B, {renderTexture: this.cache, clear: true});
        _0xBF20.clearCacheContainer();
        this.massLastAmount = _0xA517;
      };
      return this.cache;
    };
    _0xA726.prototype.toShortString = function (_0xA49B) {
      if (_0xA49B < 1e3) {
        return _0xA49B.toString();
      } else {
        if (_0xA49B < 1e6) {
          var _0xA47C = Math.floor(_0xA49B / 100) / 10;
          return _0xA47C.toFixed(1) + "K";
        } else {
          if (_0xA49B < 1e9) {
            var _0xA47C = Math.floor(_0xA49B / 1e5) / 10;
            return _0xA47C.toFixed(1) + "M";
          } else {
            if (_0xA49B >= 1e9) {
              var _0xA47C = Math.floor(_0xA49B / 1e8) / 10;
              return _0xA47C.toFixed(1) + "B";
            }
          }
        }
      }
      ;
      return _0xA49B.toString();
    };

    function _0xBF01() {
      this.cache = {};
      this.cacheContainer = new _0xB931.Container;
      this.sprites = [];
      this.spritesIndex = 0;
      this.getNumber = function (_0xA47C) {
        return this.cache[_0xA47C];
      };
      this.clearCacheContainer = function () {
        while (this.cacheContainer.children[0]) {
          this.cacheContainer.removeChild(this.cacheContainer.children[0]);
        }
        ;
        this.spritesIndex = 0;
      };
      this.getSizeCacheSprite = function () {
        while (this.spritesIndex >= this.sprites.length) {
          this.sprites.push(new _0xB931.Sprite);
        }
        ;
        return this.sprites[this.spritesIndex++];
      };
      this.buildSizeCache = function () {
        var _0xA47C = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "K", "M", "B", "T"];
        for (var _0xA49B of _0xA47C) {
          var _0xA4BA = new _0xB931.Text(_0xA49B, {
            fontFamily: "Verdana", 
            fontWeight: "bold", 
            fontSize: 54, 
            fill: "#fff", 
            stroke: "black", 
            strokeThickness: _0xB7BD.textOutlineSize
          });
          this.cache[_0xA49B] = _0xA4BA;
        }
      };
    }
    const _0xBF20 = new _0xBF01;
    _0xA726.prototype.handleFood = function () {
      if (this.needsPixiUpdate && this.sprite.visible) {
        this.sprite.texture = _0xADEE;
        this.sprite.anchor.set(0.5);
        this.sprite.width = 12;
        this.sprite.height = 12;
        if (_0xB79E.cThemeEnabled && _0xAB25.length > 0) {
          this.sprite.tint = _0xAB25[this.id % _0xAB25.length];
        } else {
          this.sprite.tint = this.color;
        }
        ;
        this.needsPixiUpdate = false;
      }
      ;
      this.sprite.position.set(this.x, this.y);
    };
    _0xA726.prototype.handle = function () {
      switch (this.type) {
        case 0:
          break;
        case 1:
          if (this.needsPixiUpdate) {
            if (this.skin >= 0 && this.skin < _0xAD34.length) {
              this.sprite.texture = _0xAD34[this.skin];
            } else {
              this.sprite.texture = _0xACD7;
            }
            ;
            this.sprite.tint = this.color;
            this.sprite.width = this.size * 2;
            this.sprite.height = this.size * 2;
            this.needsPixiUpdate = false;
          }
          ;
          if (this.rainbow) {
            this.sprite.tint = _0xBAC4[Math.floor(_0xB361 % _0xBAE3 / 100)];
          }
          ;
          this.sprite.position.set(this.x, this.y);
          break;
        case 2:
          var _0xA4BA = _0xB98E.playerRegistry.getPlayerById(this.playerId);
          var _0xA4D9 = _0xB9EB.ALL;
          if (_0xB98E.playerId == this.playerId) {
            _0xA4D9 = _0xB9EB.SELF;
          } else {
            if (_0xB98E.partyIds[this.playerId] != null) {
              _0xA4D9 = _0xB9EB.PARTY;
            }
          }
          ;
          let _0xA47C = this.needsPixiUpdate;
          if (this.needsPixiUpdate) {
            this.cellSprite = new _0xB931.Sprite(_0xB931.Texture.EMPTY);
            this.cellSprite.anchor.set(0.5);
            this.cellSprite.width = _0xA745;
            this.cellSprite.height = _0xA745;
            this.container.addChild(this.cellSprite);
            this.skinSprite = new _0xB931.Sprite(_0xB931.Texture.EMPTY);
            this.skinSprite.anchor.set(0.5);
            this.skinSprite.width = _0xA745;
            this.skinSprite.height = _0xA745;
            this.container.addChild(this.skinSprite);
            this.massSprite = new _0xB931.Sprite(_0xB931.Texture.EMPTY);
            this.container.addChild(this.massSprite);
            if (_0xA4BA.name.length > 0) {
              this.nameSprite = new _0xB931.Sprite(_0xB931.Texture.EMPTY);
              this.container.addChild(this.nameSprite);
            }
            ;
            this.needsPixiUpdate = false;
          }
          ;
          if (_0xA4BA.cacheUpdate || _0xA47C) {
            if (this.nameSprite) {
              this.nameSprite.texture = _0xA4BA.getNameCache(_0xA4BA.cacheUpdate).texture;
              this.nameSprite.texture.update();
            }
            ;
            if (_0xA4BA.spiked == 1) {
              if (_0xAB06.aCustomSpike) {
                this.cellSprite.texture = _0xAB06.aCustomSpike;
              } else {
                this.cellSprite.texture = _0xBFBB;
              }
              ;
              this.cellSprite.tint = 16777215;
            } else {
              if (_0xA4BA.spiked == 2) {
                if (_0xAB06.aCustomMother) {
                  this.cellSprite.texture = _0xAB06.aCustomMother;
                } else {
                  this.cellSprite.texture = _0xBFDA;
                }
                ;
                this.cellSprite.tint = 16777215;
              } else {
                this.cellSprite.texture = _0xA7C1;
                this.cellSprite.tint = _0xA4BA.cellColor;
              }
            }
          }
          ;
          this.skinSprite.visible = _0xB7BD.levelSkins >= _0xA4D9 && _0xA4BA.spiked == 0;
          if (this.skinSprite.visible) {
            var _0xA536 = _0xA4BA.getSkin();
            if (_0xA536 != null) {
              if (!_0xA536.isGif) {
                if (_0xA536 !== this.skinSprite.texture) {
                  this.skinSprite.texture = _0xA536;
                }
              } else {
                this.skinSprite.texture = _0xA536.getTexture();
              }
            } else {
              this.skinSprite.visible = false;
            }
          }
          ;
          var _0xA4F8 = 4 / this.size;
          var _0xA555 = Math.max(_0xA4F8, 0.16) * 4;
          var _0xA517 = _0xB98E.scale >= _0xA4F8 * 4 || _0xB79E.cDisableAutoNameHiding;
          if (this.nameSprite) {
            this.nameSprite.visible = _0xB7BD.levelNames >= _0xA4D9 && _0xA517;
            if (this.nameSprite.visible) {
              this.nameSprite.scale.set(_0xA555);
              this.nameSprite.x = -(this.nameSprite.width / 2);
              if (!_0xA4BA.lowerName) {
                this.nameSprite.y = -(this.nameSprite.height / 2);
              } else {
                this.nameSprite.y = _0xA7A2 - this.nameSprite.height / 2;
              }
              ;
              if (_0xA4BA.effect == 1 && _0xB687[0] != null) {
                if (!this.nameEffectSprite) {
                  this.nameEffectSprite = new _0xB931.Sprite(_0xB931.Texture.EMPTY);
                  this.nameSprite.addChild(this.nameEffectSprite);
                }
                ;
                var _0xA574 = _0xB687[0].getTexture();
                this.nameEffectSprite.scale.set(this.nameSprite.texture.width / _0xA574.width, this.nameSprite.texture.height / _0xA574.height);
                this.nameEffectSprite.texture = _0xA574;
              }
            }
          }
          ;
          if (_0xB79E.cShowMass && (_0xA4D9 <= _0xB9EB.PARTY || _0xB98E.serverData.autosplits) && _0xA517) {
            var _0xA49B = this.getSizeCache();
            this.massSprite.texture = _0xA49B;
            this.massSprite.scale.set(_0xA555);
            this.massSprite.x = -(this.massSprite.width / 2);
            if (this.nameSprite != null && this.nameSprite.visible) {
              this.massSprite.y = this.nameSprite.y + this.nameSprite.height;
            } else {
              this.massSprite.y = -(this.massSprite.height / 2);
            }
            ;
            this.massSprite.visible = true;
          } else {
            this.massSprite.visible = false;
          }
          ;
          if ((_0xA4BA.flags & 4) == 4) {
            if (!this.debuffSprite) {
              this.debuffSprite = new _0xB931.Sprite(_0xBA29);
              this.debuffSprite.anchor.set(0.5);
              this.debuffSprite.width = _0xA764;
              this.debuffSprite.height = _0xA764;
              this.container.addChild(this.debuffSprite);
            }
          } else {
            if (this.debuffSprite) {
              this.debuffSprite.parent.removeChild(this.debuffSprite);
              this.debuffSprite.destroy();
              this.debuffSprite = null;
            }
          }
          ;
          if ((_0xA4BA.flags & 1) == 1) {
            if (!this.shieldSprite) {
              this.shieldSprite = new _0xB931.Sprite(_0xBA48);
              this.shieldSprite.anchor.set(0.5);
              this.shieldSprite.width = _0xA764;
              this.shieldSprite.height = _0xA764;
              this.container.addChild(this.shieldSprite);
            }
          } else {
            if (this.shieldSprite) {
              this.shieldSprite.parent.removeChild(this.shieldSprite);
              this.shieldSprite.destroy();
              this.shieldSprite = null;
            }
          }
          ;
          this.container.scale.set(this.size / _0xA783);
          this.container.position.set(this.x, this.y);
          break;
        case 3:
          if (this.needsPixiUpdate) {
            this.sprite.anchor.set(0.5);
            this.sprite.width = 128;
            this.sprite.height = 128;
            if (_0xAB06.aCustomSpike) {
              this.sprite.texture = _0xAB06.aCustomSpike;
            } else {
              this.sprite.texture = _0xBFBB;
            }
            ;
            this.needsPixiUpdate = false;
          }
          ;
          this.sprite.scale.set(this.size / 256);
          this.sprite.position.set(this.x, this.y);
          break;
        case 4:
          if (this.needsPixiUpdate) {
            if (_0xAB06.aCustomMother) {
              this.sprite.texture = _0xAB06.aCustomMother;
            } else {
              this.sprite.texture = _0xBFDA;
            }
            ;
            if (_0xAD72.enabled && _0xAD72.motherCustomEnabled && !_0xB79E.cDisableEventSkins && !_0xAB06.aCustomMother) {
              _0xAD72.motherCustom(this);
            } else {
              this.setDefaultSpriteAnchor();
            }
            ;
            this.needsPixiUpdate = false;
          }
          ;
          if (!_0xAB06.aCustomMother && _0xAD72.enabled) {
            if (this.size >= 100 && !_0xB79E.cDisableEventSkins) {
              this.sprite.texture = _0xBFF9;
            } else {
              this.sprite.texture = _0xBFDA;
            }
          }
          ;
          this.sprite.scale.set(this.size / 256);
          this.sprite.position.set(this.x, this.y);
          break;
        case 5:
          if (this.needsPixiUpdate) {
            this.sprite.texture = _0xBA86[this.buff].texture;
            this.sprite.width = this.size * 2;
            this.sprite.height = this.size * 2;
            this.needsPixiUpdate = false;
          }
          ;
          this.sprite.position.set(this.x, this.y);
          break;
      }
    };
    _0xA726.prototype.setDefaultSpriteAnchor = function () {
      this.sprite.anchor.set(0.5);
      this.sprite.width = 128;
      this.sprite.height = 128;
    };
    _0xA726.prototype.onCreate = function (_0xA47C) {
      if (this.type == 2) {
        if (this.container) {
          return;
        }
        ;
        this.container = new _0xB931.Container;
        this.container.parentCell = this;
        this.needsPixiUpdate = true;
        _0xA7E0.addChild(this.container);
      } else {
        if (this.sprite) {
          return;
        }
        ;
        this.sprite = new _0xB931.Sprite(_0xB931.Texture.EMPTY);
        this.sprite.parentCell = this;
        this.sprite.anchor.set(0.5);
        this.needsPixiUpdate = true;
        if (this.type != 0) {
          _0xA7E0.addChild(this.sprite);
        } else {
          _0xAE0D.addChild(this.sprite);
        }
      }
      ;
      if (this.type == 6) {
        _0xA47C.foodObjects[this.id] = this;
      } else {
        _0xA47C.bucket[this.id] = this;
      }
      ;
      if (this.playerId == _0xA47C.playerId) {
        _0xA47C.myCells[this.id] = this;
      }
    };
    _0xA726.prototype.onDelete = function () {
      if (this.container) {
        this.container.parent.removeChild(this.container);
        this.container.parentCell = null;
        this.container.destroy({children: true});
        this.container = null;
      } else {
        if (this.sprite) {
          this.sprite.parent.removeChild(this.sprite);
          this.sprite.parentCell = null;
          this.sprite.destroy({children: true});
          this.sprite = null;
        }
      }
      ;
      if (this.cache) {
        this.cache.destroy();
        this.cache = null;
      }
    };
    function _0xB9CC() {
      this.bucket = {};
      this.defaultData;
      this.updatedPlayers = [];
      this.init = function () {
        this.defaultData = new _0xB9AD(0);
        this.defaultData.name = "";
        this.defaultData.cellColor = 11184810;
      };
      this.add = function (_0xA47C) {
        this.bucket[_0xA47C.id] = _0xA47C;
      };
      this.remove = function (_0xA47C) {
        this.bucket[_0xA47C].onDelete();
        delete this.bucket[_0xA47C];
      };
      this.clear = function () {
        for (var _0xA47C in this.bucket) {
          this.remove(_0xA47C);
        }
      };
      this.getPlayer = function (_0xA47C) {
        return this.bucket[_0xA47C];
      };
      this.getPlayerById = function (_0xA49B) {
        var _0xA47C = this.bucket[_0xA49B];
        return _0xA47C != null ? _0xA47C : this.defaultData;
      };
      this.updatePlayer = function (_0xA47C) {
        _0xA47C.cacheUpdate = true;
        this.updatedPlayers.push(_0xA47C);
      };
      this.handleUpdatedPlayers = function () {
        while (this.updatedPlayers.length > 0) {
          var _0xA47C = this.updatedPlayers.shift();
          _0xA47C.cacheUpdate = false;
        }
      };
      this.init();
    }
    function _0xB9AD(_0xA47C) {
      this.id = _0xA47C;
      this.name;
      this.skin;
      this.skinCache;
      this.cellColor;
      this.nameColor = "#fff";
      this.flags = 0;
      this.effect = 0;
      this.nameFont = 0;
      this.lowerName = false;
      this.nameCache = null;
      this.cacheUpdate = false;
      this.spiked = 0;
      this.setFlags = function (_0xA47C) {
        this.flags = _0xA47C;
        if ((this.flags & 8) == 8) {
          this.spiked = 1;
        } else {
          if ((this.flags & 16) == 16) {
            this.spiked = 2;
          } else {
            this.spiked = 0;
          }
        }
      };
      this.parseEffect = function (_0xA47C) {
        if (_0xA47C >= 64) {
          _0xA47C -= 64;
          this.lowerName = true;
        } else {
          this.lowerName = false;
        }
        ;
        this.effect = _0xA47C;
      };
      this.getNameCache = function (_0xA47C) {
        if (_0xA47C || this.nameCache == null) {
          var _0xA49B = _0xAF62(this.nameFont);
          var _0xA4D9, _0xA4BA;
          if (_0xA49B == _0xABFE) {
            _0xA4D9 = "bold";
            _0xA4BA = _0xB7BD.textOutlineSize;
          } else {
            _0xA4D9 = "normal";
            _0xA4BA = 9;
          }
          ;
          if (!this.nameCache) {
            this.nameCache = new _0xB931.Text(this.name, {
              fontFamily: _0xA49B.font, 
              fontWeight: _0xA4D9, 
              fontSize: _0xA49B.size, 
              fill: this.nameColor, 
              stroke: _0xA49B.outlineColor, 
              strokeThickness: _0xA4BA});
          } else {
            this.nameCache.text = this.name;
            this.nameCache.style.fontFamily = _0xA49B.font;
            this.nameCache.style.stroke = _0xA49B.outlineColor;
            this.nameCache.style.fontWeight = _0xA4D9;
            this.nameCache.style.fontSize = _0xA49B.size;
            this.nameCache.style.fill = this.nameColor;
            this.nameCache.updateText();
          }
          ;
          this.nameCache.width;
        }
        ;
        return this.nameCache;
      };
      this.setSkin = function (_0xA47C) {
        if (_0xA47C.length == 0) {
          this.skin = null;
          this.skinCache = null;
        } else {
          if (_0xA47C !== this.skin) {
            this.skin = _0xA47C;
            this.skinCache = null;
          }
        }
      };
      this.getSkin = function () {
        if (this.skinCache != null) {
          return this.skinCache;
        };
        if (this.skin != null) {
          if (!_0xBF5E[this.skin]) {
            _0xBF5E[this.skin] = _0xBF7D.LOADING;
            if (this.skin.endsWith(".gif")) {
              var _0xA4BA = this.skin;
              var _0xA47C = this;
              gifFrames({
                url: _0xA4BA, frames: "all", cumulative: false, outputType: "canvas"}).then(function (_0xA47C) {
                var _0xA49B = new _0xB03B;
                _0xA49B.loadFromFrameData(_0xA47C);
                _0xBF5E[_0xA4BA] = _0xBF7D.LOADED;
                _0xBF3F[_0xA4BA] = _0xA49B;
              }).catch(function (_0xA49B) {
                _0xA47C.skin = null;
              });
            } else {
              var _0xA49B = new Image;
              _0xA49B.crossOrigin = "";
              var _0xA4BA = this.skin;
              _0xA49B.addEventListener("load", function () {
                var _0xA47C = document.createElement("canvas");
                _0xA47C.width = 512;
                _0xA47C.height = 512;
                var _0xA4D9 = _0xA47C.getContext("2d");
                _0xA4D9.beginPath();
                _0xA4D9.arc(256, 256, 256, 0, _0xB8F3, false);
                _0xA4D9.closePath();
                _0xA4D9.clip();
                _0xA4D9.drawImage(_0xA49B, 0, 0, 512, 512);
                var _0xA4F8 = _0xB931.Texture.from(_0xA47C);
                _0xBF5E[_0xA4BA] = _0xBF7D.LOADED;
                _0xBF3F[_0xA4BA] = _0xA4F8;
              });
              _0xA49B.addEventListener("error", function () {
                _0xBF5E[_0xA4BA] = _0xBF7D.ERROR;
              });
              _0xA49B.src = _0xA4BA;
            }
          } else {
            if (_0xBF5E[this.skin] == _0xBF7D.LOADED) {
              this.skinCache = _0xBF3F[this.skin];
              return this.skinCache;
            } else {
              if (_0xBF5E[this.skin] == _0xBF7D.ERROR) {
                this.skin = null;
              }
            }
          }
        }
        ;
        return null;
      };
      this.onDelete = function () {
        if (this.nameCache) {
          this.nameCache.destroy();
        }
      };
    }
    function _0xB81A() {}
    _0xB81A.prototype.connectionStart = function () {
      var _0xA49B = "Gota Web " + version;
      var _0xA47C = new ArrayBuffer(1 + _0xA49B.length + 1 + 1);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 255);
      _0xA4BA.setUint8(1, 6);
      _0xC2A3(2, _0xA4BA, _0xA49B);
      return _0xA47C;
    };
    _0xB81A.prototype.setName = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(2 + (_0xA49B.length + 1) * 2);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 0);
      _0xC284(1, _0xA4BA, _0xA49B);
      if (_0xB79E.cSilentLogin) {
        _0xA4BA.setUint8(2 + _0xA49B.length * 2 + 1, 1);
      }
      ;
      return _0xA47C;
    };
    _0xB81A.prototype.sendKey = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(1);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, _0xA49B);
      return _0xA47C;
    };
    _0xB81A.prototype.sendMouse = function (_0xA4BA, _0xA4D9) {
      var _0xA47C = new ArrayBuffer(9);
      var _0xA49B = new DataView(_0xA47C);
      _0xA49B.setUint8(0, 16);
      _0xA49B.setInt32(1, _0xA4BA, true);
      _0xA49B.setInt32(5, _0xA4D9, true);
      return _0xA47C;
    };
    _0xB81A.prototype.sendEjectMass = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(1);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, _0xA49B ? 3 : 4);
      return _0xA47C;
    };
    _0xB81A.prototype.sendPing = function () {
      var _0xA47C = new ArrayBuffer(1);
      var _0xA49B = new DataView(_0xA47C);
      _0xA49B.setUint8(0, 71);
      return _0xA47C;
    };
    _0xB81A.prototype.sendSpectate = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(3);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 1);
      if (_0xA49B) {
        _0xA4BA.setUint16(1, _0xA49B, true);
      }
      ;
      return _0xA47C;
    };
    _0xB81A.prototype.sendChat = function (_0xA4BA, _0xA49B) {
      var _0xA47C = new ArrayBuffer(2 + (_0xA4BA.length + 1) * 2);
      var _0xA4D9 = new DataView(_0xA47C);
      _0xA4D9.setUint8(0, 72);
      _0xA4D9.setUint8(1, _0xA49B);
      _0xC284(2, _0xA4D9, _0xA4BA);
      return _0xA47C;
    };
    _0xB81A.prototype.sendInviteResponse = function (_0xA47C) {
      var _0xA49B = new ArrayBuffer(2);
      var _0xA4BA = new DataView(_0xA49B);
      _0xA4BA.setUint8(0, 41);
      _0xA4BA.setUint8(1, _0xA47C ? 1 : 0);
      return _0xA49B;
    };
    _0xB81A.prototype.sendPartyAction = function (_0xA47C, _0xA4BA) {
      var _0xA49B = new ArrayBuffer(6);
      var _0xA4D9 = new DataView(_0xA49B);
      _0xA4D9.setUint8(0, 40);
      _0xA4D9.setUint8(1, _0xA47C);
      _0xA4D9.setUint32(2, _0xA4BA, true);
      return _0xA49B;
    };
    _0xB81A.prototype.sendPartyJoin = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(1 + _0xA49B.length + 1);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 42);
      _0xC2A3(1, _0xA4BA, _0xA49B);
      return _0xA47C;
    };
    _0xB81A.prototype.sendShowProfile = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(3);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 103);
      _0xA4BA.setUint16(1, _0xA49B, true);
      return _0xA47C;
    };
    _0xB81A.prototype.sendWhisper = function (_0xA49B, _0xA4BA) {
      var _0xA47C = new ArrayBuffer(5 + (_0xA4BA.length + 1) * 2);
      var _0xA4D9 = new DataView(_0xA47C);
      _0xA4D9.setUint8(0, 73);
      _0xA4D9.setUint32(1, _0xA49B, true);
      _0xC284(5, _0xA4D9, _0xA4BA);
      return _0xA47C;
    };
    _0xB81A.prototype.sendSubPanel = function () {
      var _0xA47C = new ArrayBuffer(8 + (_0xC075.skinName.length + 1));
      var _0xA49B = new DataView(_0xA47C);
      _0xA49B.setUint8(0, 10);
      _0xA49B.setUint8(1, _0xC075.nameColor.r);
      _0xA49B.setUint8(2, _0xC075.nameColor.g);
      _0xA49B.setUint8(3, _0xC075.nameColor.b);
      _0xA49B.setUint8(4, _0xC075.chatColor);
      _0xA49B.setUint8(5, _0xC075.effect);
      _0xA49B.setUint8(6, _0xC075.lowerName ? 1 : 0);
      _0xC2A3(7, _0xA49B, _0xC075.skinName);
      _0xA49B.setUint8(8 + _0xC075.skinName.length, _0xC075.nameFont);
      return _0xA47C;
    };
    _0xB81A.prototype.sendLockedNameChange = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(1 + (_0xA49B.length + 1));
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 11);
      _0xC2A3(1, _0xA4BA, _0xA49B);
      return _0xA47C;
    };
    _0xB81A.prototype.sendOptions = function () {
      var _0xA47C = new ArrayBuffer(3);
      var _0xA49B = new DataView(_0xA47C);
      _0xA49B.setUint8(0, 104);
      _0xA49B.setUint16(1, _0xB79E.rViewDistance, true);
      return _0xA47C;
    };
    _0xB81A.prototype.sendQueue = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(5);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 80);
      _0xA4BA.setUint8(1, _0xA49B);
      _0xA4BA.setUint8(2, 0);
      _0xA4BA.setUint16(3, 0);
      return _0xA47C;
    };
    _0xB81A.prototype.sendCustomGame = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(2);
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 90);
      _0xA4BA.setUint8(1, _0xA49B);
      return _0xA47C;
    };
    _0xB81A.prototype.sendLeaveMatch = function () {
      var _0xA47C = new ArrayBuffer(1);
      var _0xA49B = new DataView(_0xA47C);
      _0xA49B.setUint8(0, 81);
      return _0xA47C;
    };
    _0xB81A.prototype.sendShowLobbies = function () {
      var _0xA47C = new ArrayBuffer(2);
      var _0xA49B = new DataView(_0xA47C);
      _0xA49B.setUint8(0, 93);
      return _0xA47C;
    };
    _0xB81A.prototype.sendJoinLobby = function (_0xA49B, _0xA4BA) {
      var _0xA47C = new ArrayBuffer(5 + _0xA4BA.length * 2 + 2);
      var _0xA4D9 = new DataView(_0xA47C);
      _0xA4D9.setUint8(0, 94);
      _0xA4D9.setUint32(1, _0xA49B, true);
      _0xC284(5, _0xA4D9, _0xA4BA);
      return _0xA47C;
    };
    _0xB81A.prototype.sendCaptcha = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(1 + (_0xA49B.length + 1));
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 100);
      _0xC2A3(1, _0xA4BA, _0xA49B);
      return _0xA47C;
    };
    _0xB81A.prototype.sendAuthToken = function (_0xA49B) {
      var _0xA47C = new ArrayBuffer(1 + (_0xA49B.length + 1));
      var _0xA4BA = new DataView(_0xA47C);
      _0xA4BA.setUint8(0, 101);
      _0xC2A3(1, _0xA4BA, _0xA49B);
      return _0xA47C;
    };
    _0xB81A.prototype.sendCustomGameUpdate = function (_0xA49B, _0xA4BA, _0xA4D9) {
      var _0xA47C = new ArrayBuffer(4);
      var _0xA4F8 = new DataView(_0xA47C);
      _0xA4F8.setUint8(0, 91);
      _0xA4F8.setUint8(1, _0xA49B);
      if (_0xA49B == _0xAB63.STARTMASS || _0xA49B == _0xAB63.VIRUS_DENSITY) {
        _0xA4F8.setUint16(2, _0xA4BA, false);
      } else {
        if (_0xA49B == _0xAB63.RESPAWN_DELAY) {
          _0xA4F8.setInt16(2, _0xA4BA, false);
        } else {
          _0xA4F8.setUint8(2, _0xA4BA);
          _0xA4F8.setUint8(3, _0xA4D9);
        }
      }
      ;
      return _0xA47C;
    };
    _0xB81A.prototype.sendCustomGameUpdateString = function (_0xA49B, _0xA4BA) {
      var _0xA47C = new ArrayBuffer(4 + _0xA4BA.length * 2);
      var _0xA4D9 = new DataView(_0xA47C);
      _0xA4D9.setUint8(0, 92);
      _0xA4D9.setUint8(1, _0xA49B);
      _0xC284(2, _0xA4D9, _0xA4BA);
      return _0xA47C;
    };
    function _0xC2A3(_0xA49B, _0xA4D9, _0xA4BA) {
      for (var _0xA47C = 0; _0xA47C < _0xA4BA.length; _0xA47C++) {
        _0xA4D9.setUint8(_0xA49B, _0xA4BA.charCodeAt(_0xA47C));
        _0xA49B++;
      }
      ;
      _0xA4D9.setUint8(_0xA49B, 0);
    }
    function _0xC284(_0xA49B, _0xA4D9, _0xA4BA) {
      for (var _0xA47C = 0; _0xA47C < _0xA4BA.length; _0xA47C++) {
        _0xA4D9.setUint16(_0xA49B, _0xA4BA.charCodeAt(_0xA47C), true);
        _0xA49B += 2;
      }
      ;
      _0xA4D9.setUint16(_0xA49B, 0, true);
    }
    function _0xBB7E(_0xA4BA) {
      var _0xA49B = "";
      while (true) {
        var _0xA47C = _0xA4BA.getUint8(_0xA4BA.offset);
        _0xA4BA.offset++;
        if (_0xA47C == 0) {
          break;
        }
        ;
        _0xA49B += String.fromCharCode(_0xA47C);
      }
      ;
      return _0xA49B;
    }
    function _0xBB5F(_0xA4BA) {
      var _0xA49B = "";
      while (true) {
        var _0xA47C = _0xA4BA.getUint16(_0xA4BA.offset, true);
        _0xA4BA.offset += 2;
        if (_0xA47C == 0) {
          break;
        }
        ;
        _0xA49B += String.fromCharCode(_0xA47C);
      }
      ;
      return _0xA49B;
    }
    function _0xBF9C(_0xA49B) {
      while (true) {
        var _0xA47C = _0xA49B.getUint16(_0xA49B.offset, true);
        _0xA49B.offset += 2;
        if (_0xA47C == 0) {
          break;
        }
      }
    }
    function _0xB098(_0xA47C, _0xA49B) {
      console.error(_0xA47C.message, _0xA47C.code);
      if (_0xA49B) {
        switch (_0xA47C.code) {
          case "auth/user-disabled":
            alert("This account has been permanently suspended by an administrator.");
            break;
          case "auth/popup-closed-by-user":
            break;
          default:
            alert(_0xA47C.message + " (" + _0xA47C.code + ")");
            break;
        }
      }
    }
    function _0xAAC8(_0xA517, _0xA4F8) {
      var _0xA4BA = "";
      var _0xA4D9 = "";
      var _0xA49B = "white";
      if (_0xA4F8.flags.STAFF) {
        _0xA4D9 = "Gota.io Staff";
        _0xA4BA = "build";
        _0xA49B = "royalblue";
      } else {
        if (_0xA4F8.flags.VERIFIED) {
          _0xA4D9 = "Verified Player";
          _0xA4BA = "check_circle";
        } else {
          return;
        }
      }
      ;
      var _0xA47C = document.createElement("i");
      _0xA47C.className = "material-icons";
      _0xA47C.id = "user-badge";
      _0xA47C.innerText = _0xA4BA;
      _0xA47C.style.color = _0xA49B;
      $(_0xA47C).attr("data-balloon", _0xA4D9);
      $(_0xA47C).attr("data-balloon-pos", "right");
      $(_0xA517).append(_0xA47C);
    }
    function _0xAA8A(_0xA49B, _0xA4BA) {
      var _0xA47C = document.createElement("i");
      _0xA47C.className = "material-icons";
      _0xA47C.innerText = _0xA49B;
      _0xA47C.setAttribute("data-balloon", _0xA4BA);
      _0xA47C.setAttribute("data-balloon-pos", "up");
      return _0xA47C;
    }
    function _0xAAE7(_0xA60F, _0xA64D, _0xA555, _0xA4BA) {
      var _0xA517 = document.createElement("li");
      _0xA517.className = "user-embed menu-sub-bg2";
      _0xA517.style.backgroundColor = _0xC0B3.uiMenuHeaderBackgroundColor;
      var _0xA4F8 = document.createElement("img");
      _0xA4F8.src = _0xA60F.avatar;
      _0xA4F8.alt = _0xA60F.username;
      _0xA517.appendChild(_0xA4F8);
      var _0xA536 = document.createElement("div");
      _0xA536.className = "info";
      var _0xA62E = document.createElement("div");
      _0xA62E.className = "username";
      _0xA62E.innerText = _0xA60F.username;
      _0xA536.appendChild(_0xA62E);
      _0xAAC8(_0xA62E, _0xA60F);
      var _0xA5F0 = document.createElement("div");
      var _0xA574 = false;
      var _0xA5D1 = null;
      if (_0xA555) {
        _0xA5D1 = _0xA60F.presence.server.charAt(0).toUpperCase() + _0xA60F.presence.server.slice(1);
        if (_0xA60F.presence.timestamp + 6e4 < (new Date).getTime() || _0xA60F.presence.id === undefined) {
          _0xA5F0.className = "status offline";
          _0xA5F0.innerText = "Not playing on any server";
        } else {
          _0xA574 = true;
          _0xA5F0.className = "status " + (_0xA60F.presence.status === "ONLINE" ? "online" : "spectate");
          _0xA5F0.innerText = (_0xA60F.presence.status === "ONLINE" ? "Playing " : "Spectating ") + _0xA60F.presence.gamemode + " on " + _0xA5D1 + " (ID " + _0xA60F.presence.id + ")";
        }
      } else {
        _0xA5F0.className = "status pending";
        _0xA5F0.innerText = "Pending Friend Request";
      }
      ;
      _0xA536.appendChild(_0xA5F0);
      var _0xA49B = document.createElement("div");
      _0xA49B.className = "actions";
      _0xA62E.addEventListener("click", function (_0xA47C) {
        _0xB497(_0xA60F, $("#main-social"));
      });
      if (_0xA555 && _0xA574) {
        var _0xA593 = _0xAA8A("input", "Join Server");
        _0xA593.addEventListener("click", function (_0xA47C) {
          _0xBD8D(_0xA5D1);
          _0xB98E.play();
          _0xB98E.selfMsg(_0xA60F.username + "'s ID is " + _0xA60F.presence.id);
          _0xB133($("#main-social"));
        });
        _0xA49B.appendChild(_0xA593);
      }
      ;
      if (!_0xA555) {
        var _0xA4D9 = _0xAA8A("done", "Add as Friend");
        _0xA4D9.isHandlingRequest = false;
        _0xA4D9.addEventListener("click", function (_0xA49B) {
          if (_0xA4D9.isHandlingRequest) {
            return;
          }
          ;
          _0xA4D9.isHandlingRequest = true;
          firebase.auth().currentUser.getIdToken().then(_0xA49B => {
            fetch(_0xA47C + "/api/v1/social/friends", 
              {method: "POST", 
                headers: {
                  "Content-Type": "application/json"
                }, body: JSON.stringify({token: _0xA49B, target: _0xA60F.uid, action: 2})}).then(_0xA47C => {
              return _0xA47C.json();
            }).then(_0xA47C => {
              if (_0xA47C.code !== 200) {
                alert(_0xA47C.message);
              }
              ;
              _0xA4D9.isHandlingRequest = false;
            }).catch(_0xA47C => {
              alert(_0xA47C);
              _0xA4D9.isHandlingRequest = false;
            });
          }).catch(_0xA47C => {
            _0xB098(_0xA47C, true);
            _0xA4D9.isHandlingRequest = false;
          });
        });
        _0xA49B.appendChild(_0xA4D9);
      }
      ;
      var _0xA5B2 = _0xAA8A("block", "Remove Friend");
      _0xA5B2.isHandlingRequest = false;
      _0xA5B2.addEventListener("click", function (_0xA49B) {
        if (_0xA5B2.isHandlingRequest || !confirm('Are you sure you want to remove "' + _0xA60F.username + '" as your friend?')) {
          return;
        }
        ;
        _0xA5B2.isHandlingRequest = true;
        firebase.auth().currentUser.getIdToken().then(_0xA49B => {
          fetch(_0xA47C + "/api/v1/social/friends", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({token: _0xA49B, target: _0xA60F.uid, action: 4})}).then(_0xA47C => {
            return _0xA47C.json();
          }).then(_0xA47C => {
            alert(_0xA47C.message);
            if (_0xA47C.code === 200) {
              firebase.database().ref(_0xC14E.callbacks[_0xA60F.uid]).off();
              _0xC14E.elements[_0xA60F.uid].remove();
              delete _0xC14E.callbacks[_0xA60F.uid];
              delete _0xC14E.elements[_0xA60F.uid];
            }
            ;
            _0xA5B2.isHandlingRequest = false;
          }).catch(_0xA47C => {
            alert(_0xA47C);
            _0xA5B2.isHandlingRequest = false;
          });
        }).catch(_0xA47C => {
          _0xB098(_0xA47C, true);
          _0xA5B2.isHandlingRequest = false;
        });
      });
      _0xA49B.appendChild(_0xA5B2);
      _0xA517.appendChild(_0xA536);
      _0xA517.appendChild(_0xA49B);
      if (_0xA4BA) {
        return _0xA64D.appendChild(_0xA517);
      } else {
        return _0xA517;
      }
    }
    function _0xB497(_0xA4BA, _0xA49B, _0xA47C) {
      if (_0xA49B) {
        _0xB133(_0xA49B);
      }
      ;
      $("#profile-username").text(_0xA4BA.username);
      $("#profile-avatar").attr("src", _0xA4BA.avatar);
      $("#profile-avatar").attr("alt", _0xA4BA.username);
      $("#profile-level").html("Level " + _0xA4BA.levelData.level + "&nbsp;&nbsp;&nbsp;[" + _0xAE6A(_0xA4BA.levelData.xp_current) + "/" + _0xAE6A(_0xA4BA.levelData.xp_needed) + "]");
      if (_0xA4BA.title && _0xA4BA.title > 0 && _0xC110[_0xA4BA.title]) {
        $("#profile-title").text(_0xC110[_0xA4BA.title]);
      } else {
        $("#profile-title").text("");
      }
      ;
      $("#profile-name").off("click");
      if (_0xA4BA.uid == _0xC246.uid) {
        $("#profile-name").on("click", function () {
          $("#popup-profile").hide();
          _0xC12F($("#popup-account-username"));
        });
        $("#profile-name").css("cursor", "pointer");
      } else {
        $("#profile-name").css("cursor", "default");
      }
      ;
      if (_0xA4BA.flags.STAFF) {
        $("#profile-avatar").addClass("spin");
      } else {
        $("#profile-avatar").removeClass("spin");
      }
      ;
      _0xAAC8($("#profile-username"), _0xA4BA);
      $("#profile-close-btn").off("click");
      $("#profile-close-btn").on("click", function () {
        if (_0xA49B) {
          _0xBEC3(_0xA49B);
        }
        ;
        _0xB133($("#popup-profile"));
      });
      _0xBEC3($("#popup-profile"));
    }
    function _0xB4F4(_0xA49B) {
      if (_0xB0B7) {
        return;
      }
      ;
      var _0xA4BA = $("#social-friends .user-list")[0];
      var _0xA4D9 = $("#social-friends .user-list")[1];
      $("#social-uid").text(_0xA49B.uid);
      firebase.database().ref("/friendships/" + _0xA49B.uid).on("value", function (_0xA536) {
        if (_0xA536.val() === null) {
          var _0xA555 = document.createElement("div");
          var _0xA574 = document.createElement("span");
          _0xA555.className = "title-text center";
          _0xA574.innerText = "You have no friends 😥";
          _0xA555.appendChild(_0xA574);
          _0xA4BA.appendChild(_0xA555);
          return;
        }
        ;
        var _0xA49B = 0;
        var _0xA4F8 = _0xA536.val();
        var _0xA517 = false;
        Object.keys(_0xA4F8).map(_0xA536 => {
          var _0xA555 = _0xA4F8[_0xA536];
          if (!_0xA555 && !_0xA517) {
            _0xA517 = true;
            firebase.auth().currentUser.getIdToken().then(_0xA49B => {
              fetch(_0xA47C + "/api/v1/social/friends/pending", 
                {method: "POST", 
                  headers: {
                    "Content-Type": "application/json"
                  }, 
                  body: JSON.stringify({token: _0xA49B})}).then(_0xA47C => {
                return _0xA47C.json();
              }).then(_0xA47C => {
                if (_0xA47C.code === 200) {
                  _0xA47C.profiles.forEach(_0xA49B => {
                    if (!_0xC14E.pendingFriends.includes(_0xA49B)) {
                      _0xC14E.pendingFriends.push(_0xA49B.uid);
                    }
                    ;
                    if (_0xC14E.elements[_0xA49B.uid]) {
                      var _0xA47C = _0xAAE7(_0xA49B, _0xC14E.elements[_0xA49B.uid], false, false);
                      _0xA4D9.replaceChild(_0xA47C, _0xC14E.elements[_0xA49B.uid]);
                      _0xC14E.elements[_0xA536] = _0xA47C;
                      return;
                    }
                    ;
                    _0xC14E.elements[_0xA49B.uid] = _0xAAE7(_0xA49B, _0xA4D9, false, true);
                  });
                }
              });
            }).catch(_0xA45D => {
              return _0xB098(_0xA45D, false);
            });
            return;
          }
          ;
          if (!_0xC14E.callbacks[_0xA536]) {
            var _0xA574 = "/users/" + _0xA536;
            _0xC14E.callbacks[_0xA536] = _0xA574;
            firebase.database().ref(_0xA574).on("value", function (_0xA4D9) {
              if (_0xA4D9.val() === null) {
                return;
              }
              ;
              var _0xA49B = _0xA4D9.val();
              _0xC14E.timestamps[_0xA49B.uid] = _0xA49B.presence.timestamp;
              if (_0xC14E.pendingFriends.includes(_0xA536)) {
                _0xC14E.pendingFriends.slice(_0xC14E.pendingFriends.indexOf(_0xA536), 1);
                _0xC14E.elements[_0xA536].remove();
                var _0xA47C = _0xAAE7(_0xA49B, _0xC14E.elements[_0xA536], true, false);
                _0xA4BA.appendChild(_0xA47C);
                _0xC14E.elements[_0xA536] = _0xA47C;
                return;
              }
              ;
              if (_0xC14E.elements[_0xA536]) {
                var _0xA47C = _0xAAE7(_0xA49B, _0xC14E.elements[_0xA536], true, false);
                _0xA4BA.replaceChild(_0xA47C, _0xC14E.elements[_0xA536]);
                _0xC14E.elements[_0xA536] = _0xA47C;
                return;
              }
              ;
              _0xC14E.elements[_0xA536] = _0xAAE7(_0xA49B, _0xA4BA, true, true);
              _0xAC5B.friendOnlineCount.text(_0xAF81() + " online");
            });
          }
          ;
          if (_0xA555) {
            _0xA49B++;
          }
        });
        $("#social-friends-count").text(_0xA49B);
      });
      setInterval(function () {
        for (var _0xA47C in _0xC14E.timestamps) {
          if (!_0xC14E.timestamps.hasOwnProperty(_0xA47C)) {
            return;
          }
          ;
          var _0xA4D9 = _0xC14E.timestamps[_0xA47C];
          if (_0xA4D9 + 6e4 < (new Date).getTime() || _0xA4D9 === undefined) {
            var _0xA4BA = _0xC14E.elements[_0xA47C].children[1].children[1];
            _0xA4BA.innerText = "Not playing on any server";
            _0xA4BA.className = "status offline";
            var _0xA49B = _0xC14E.elements[_0xA47C].children[2].children[0];
            if (_0xA49B.dataset.balloon === "Join Server") {
              _0xA49B.remove();
            }
          }
        }
      }, 6e4);
      _0xB0B7 = true;
    }
    function _0xAF81() {
      var _0xA4BA = 0;
      var _0xA47C = (new Date).getTime();
      for (var _0xA49B in _0xC14E.timestamps) {
        var _0xA4D9 = _0xC14E.timestamps[_0xA49B];
        if (_0xA4D9 + 6e4 < _0xA47C || _0xA4D9 === undefined) {} else {
          _0xA4BA++;
        }
      }
      ;
      return _0xA4BA;
    }
    function _0xB58F() {
      if (_0xAD72.enabled && !_0xB79E.cDisableEventSkins) {
        $("body").toggleClass("event-" + _0xAD72.key);
      }
      ;
      $(".server-tab").on("click", function () {
        var _0xA47C = $(this).attr("region");
        _0xBD6E(_0xA47C);
      });
      $("#btn-play").on("click", function () {
        if (_0xBD4F == null || Date.now() < _0xAC3C) {
          return;
        }
        ;
        if (Object.keys(_0xB98E.myCells).length != 0 && this.currentServerName == _0xBD4F.name) {
          _0xB133(_0xB5EC);
          return;
        }
        ;
        _0xB98E.spectate = false;
        if (_0xC037.incrementPlay() && typeof adplayer != "undefined") {
          aiptag.cmd.player.push(function () {
            adplayer.startPreRoll();
          });
          _0xB133(_0xB5EC);
          _0xB114();
          _0xAC3C = Date.now() + 2e3;
        } else {
          _0xB98E.play();
        }
      });
      $("#btn-servers").on("click", function () {
        _0xA49B("main-servers");
      });
      $("#btn-options").on("click", function () {
        _0xA49B("main-options");
      });
      $("#btn-hotkeys").on("click", function () {
        _0xA49B("main-hotkeys");
      });
      $("#btn-themes").on("click", function () {
        _0xA49B("main-themes");
      });
      $("#btn-cellpanel").on("click", function () {
        _0xA49B("main-subpanel");
      });
      $("#btn-reddit").on("click", function () {
        window.open("https://www.reddit.com/r/PlayGotaIO/", "_blank");
      });
      $("#btn-discord").on("click", function () {
        window.open("https://gota.io/discord", "_blank");
      });
      $("#name-box").keypress(function (_0xA47C) {
        if (_0xA47C.keyCode == 13 && $(this).is(":focus")) {
          _0xB98E.play();
        }
      });
      $("#btn-spec").on("click", function () {
        if (_0xBD4F == null || Date.now() < _0xAC3C) {
          return;
        }
        ;
        if (_0xB98E.spectate && this.currentServerName == _0xBD4F.name) {
          _0xB133(_0xB5EC);
          return;
        }
        ;
        _0xB98E.spectate = true;
        if (_0xC037.incrementPlay() && typeof adplayer != "undefined") {
          aiptag.cmd.player.push(function () {
            adplayer.startPreRoll();
          });
          _0xB133(_0xB5EC);
          _0xB114();
          _0xAC3C = Date.now() + 2e3;
        } else {
          _0xB98E.spec();
        }
      });
      $("#chat-input").keyup(function (_0xA47C) {
        var _0xA4D9 = $(this).val();
        var _0xA4F8 = _0xA4D9.split(" ");
        if (_0xA47C.keyCode == 13 && $(this).is(":focus")) {
          _0xAD53($(this).val());
        }
        ;
        if (_0xA4D9.length == 0 || _0xA4D9.endsWith(" ") || _0xA47C.keyCode == 13) {
          $("#autocomplete-panel").html("");
          $("#autocomplete-panel").hide();
        } else {
          if (_0xA4D9.startsWith("/")) {
            if (_0xA4F8.length > 1) {
              return;
            }
            ;
            $("#autocomplete-panel").html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
            var _0xA517 = -1;
            Object.values(_0xAA0E).map(_0xA47C => {
              if ((_0xA517 = _0xA47C.triggers.findIndex(_0xA47C => {
                return _0xA47C.toLowerCase().startsWith(_0xA4F8[0].substring(1).toLowerCase());
              })) > -1) {
                $("#autocomplete-panel tbody").append("<tr><td>" + _0xA47C.triggers[_0xA517] + "</td><td>" + _0xA47C.triggers + "</td><td>" + _0xA47C.description + "</td></tr>");
              }
            });
            if ($("#autocomplete-panel tbody").children().length == 0) {
              $("#autocomplete-panel").hide();
            } else {
              $("#autocomplete-panel").show();
            }
          } else {
            if (_0xA4F8[_0xA4F8.length - 1].startsWith(":")) {
              $("#autocomplete-panel").html("");
              var _0xA49B = Object.keys(_0xACF6).filter(_0xA47C => {
                return _0xA47C.toLowerCase().includes(_0xA4F8[_0xA4F8.length - 1].substring(1).toLowerCase());
              });
              var _0xA4BA = Object.keys(gifEmoteList).filter(_0xA47C => {
                return _0xA47C.toLowerCase().includes(_0xA4F8[_0xA4F8.length - 1].substring(1).toLowerCase());
              });
              if (_0xA49B.length === 0 && _0xA4BA.length === 0) {
                $("#autocomplete-panel").html("");
                $("#autocomplete-panel").hide();
                return;
              } else {
                $("#autocomplete-panel").show();
              }
              ;
              if (_0xA49B.length > 0) {
                $("#autocomplete-panel").append("<h3>Emotes</h3>");
                _0xA49B.forEach(_0xA47C => {
                  $("#autocomplete-panel").append("<img name='" + _0xA47C + "' title='" + _0xA47C + "' src='https://gota.io/emotes/" + _0xA47C + ".png' />");
                });
              }
              ;
              if (_0xA4BA.length > 0) {
                $("#autocomplete-panel").append("<h3>Gifs</h3>");
                _0xA4BA.forEach(_0xA47C => {
                  $("#autocomplete-panel").append("<img name='" + _0xA47C + "' title='" + _0xA47C + "' src='https://gota.io/emotes/gifs/" + _0xA47C + ".gif' />");
                });
              }
            }
          }
        }
      });
      $("#autocomplete-panel").on("click", function (_0xA47C) {
        var _0xA49B = $("#chat-input").val().split(" ");
        if (_0xA47C.target.nodeName === "TD") {
          _0xBE28("/" + _0xA47C.target.parentElement.children[0].innerHTML + " ");
          $("#autocomplete-panel").html("");
          $("#autocomplete-panel").hide();
          $("#chat-input").focus();
        } else {
          if (_0xA47C.target.nodeName === "IMG") {
            _0xBE28($("#chat-input").val().substring(0, $("#chat-input").val().length - _0xA49B[_0xA49B.length - 1].length) + _0xA47C.target.attributes.name.nodeValue + " ");
            $("#autocomplete-panel").html("");
            $("#autocomplete-panel").hide();
            $("#chat-input").focus();
          }
        }
      });
      $("#animationDelay").on("change", function () {
        var _0xA47C = parseInt($(this).val());
        if (isNaN(_0xA47C)) {
          _0xA47C = 90;
        }
        ;
        _0xB79E.rAnimationDelay = Math.min(Math.max(_0xA47C, 1), 250);
        $("#animationDelay").val(_0xB79E.rAnimationDelay);
        $("#rAnimationDelay").val(_0xB79E.rAnimationDelay);
      });
      $("#viewDistance").on("change", function () {
        var _0xA47C = parseInt($(this).val());
        if (isNaN(_0xA47C)) {
          _0xA47C = 100;
        }
        ;
        _0xB79E.rViewDistance = Math.min(Math.max(_0xA47C, 50), 150);
        $("#viewDistance").val(_0xB79E.rViewDistance);
        $("#rViewDistance").val(_0xB79E.rViewDistance);
        _0xB98E.sendOptions();
      });
      $("#uiScale").on("change", function () {
        var _0xA47C = parseInt($(this).val());
        if (isNaN(_0xA47C)) {
          _0xA47C = 100;
        }
        ;
        _0xA47C *= 0.01;
        _0xB79E.rUiScale = Math.min(Math.max(_0xA47C, 0.5), 1.25);
        $("#uiScale").val(Number.parseFloat(_0xB79E.rUiScale * 100).toFixed(0));
        $("#rUiScale").val(_0xB79E.rUiScale);
        $(".ui-scale").css("transform", "scale(" + _0xB79E.rUiScale + ")");
      });
      $("#chat-emote-btn").css("background-image", "url(https://gota.io/emotes/" + _0xBB40[Math.floor(Math.random() * _0xBB40.length)] + ".png)");
      $("#chat-emote-btn").on("click", function () {
        $("#emote-panel").toggle();
      });
      $("#emote-panel ul li img").on("click", function (_0xA47C) {
        _0xA4F8(_0xA47C.target.name + " ");
        $("#chat-input").focus();
      });
      (function () {
        var _0xA47C = document.getElementById("chat-panel");
        document.getElementById("chat-resize").addEventListener("mousedown", _0xA4BA, false);
        var _0xA517, _0xA536, _0xA4F8, _0xA4D9;

        function _0xA4BA(_0xA4BA) {
          _0xA517 = _0xA4BA.clientX;
          _0xA536 = _0xA4BA.clientY;
          _0xA4F8 = parseInt(document.defaultView.getComputedStyle(_0xA47C).width, 10);
          _0xA4D9 = parseInt(document.defaultView.getComputedStyle(_0xA47C).height, 10);
          document.documentElement.addEventListener("mousemove", _0xA49B, false);
          document.documentElement.addEventListener("mouseup", _0xA555, false);
        }

        function _0xA49B(_0xA49B) {
          _0xA47C.style.width = _0xA4F8 + _0xA49B.clientX - _0xA517 + "px";
          _0xA47C.style.height = _0xA4D9 - (_0xA49B.clientY - _0xA536) + "px";
        }

        function _0xA555(_0xA47C) {
          document.documentElement.removeEventListener("mousemove", _0xA49B, false);
          document.documentElement.removeEventListener("mouseup", _0xA555, false);
        }
      }());
      $(".checkbox-options").on("change", function (_0xA45D) {
        _0xA954($(this));
      });
      $(".options-container select").on("change", function (_0xA45D) {
        _0xA992($(this));
      });
      $(".options-container input[type=range]").on("change", function (_0xA45D) {
        _0xA973($(this));
      });
      $("#btn-changelog").on("click", function () {
        _0xB133($("#popup-changelog"));
        _0xBEC3(_0xB5EC);
        window.open(_0xC16D, "_blank");
      });
      $("#btn-close-changelog").on("click", function () {
        _0xB133($("#popup-changelog"));
        _0xBEC3(_0xB5EC);
      });
      $("#btn-accept").on("click", function () {
        _0xB98E.sendPacket(new _0xB7FB.sendInviteResponse(true));
        _0xB133($("#popup-party"));
      });
      $("#btn-decline").on("click", function () {
        _0xB98E.sendPacket(new _0xB7FB.sendInviteResponse(false));
        _0xB133($("#popup-party"));
      });
      $("#popup-party-code-content button").on("click", function () {
        $("#popup-party-code-content input").select();
        document.execCommand("Copy");
        $("#popup-party-code").hide();
      });
      $("#menu-invite").on("click", function () {
        var _0xA47C = _0xAA2D.data("selected");
        _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(0, _0xA47C));
      });
      $("#menu-whisper").on("click", function () {
        var _0xA47C = _0xAA2D.data("selected");
        var _0xA49B = $("#chat-input").val();
        $("#chat-input").val("/t " + _0xA47C + " " + _0xA49B);
      });
      $("#menu-profile").on("click", function () {
        var _0xA47C = _0xAA2D.data("selected");
        _0xB98E.sendPacket(new _0xB7FB.sendShowProfile(_0xA47C));
      });
      $("#menu-pu_pr").on("click", function () {
        if (_0xB98E.partyCode == undefined) {
          _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(4, 0));
          $("#menu-pu_pr span").text("Private");
        } else {
          _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(4, 1));
          $("#menu-pu_pr span").text("Public");
        }
      });
      $("#menu-promote").on("click", function () {
        var _0xA47C = _0xAA2D.data("party") + 1;
        if (_0xA47C >= 0) {
          _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(2, _0xA47C));
        }
      });
      $("#menu-kick").on("click", function () {
        var _0xA47C = _0xAA2D.data("party") + 1;
        if (_0xA47C >= 0) {
          _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(1, _0xA47C));
        }
      });
      $("#menu-spectate").on("click", function () {
        var _0xA47C = _0xAA2D.data("selected");
        if (_0xA47C >= 0) {
          _0xB98E.sendPacket(new _0xB7FB.sendSpectate(_0xA47C));
        }
      });
      $("#menu-block").on("click", function () {
        var _0xA49B = parseInt(_0xAA2D.data("selected"));
        var _0xA47C = _0xA5D1(_0xA49B);
        _0xB98E.selfMsg(_0xA47C);
      });
      $(document).on("click", function (_0xA47C) {
        _0xAA2D.hide();
        if (_0xA47C.target.id !== "chat-emote-btn") {
          $("#emote-panel").hide();
        }
        ;
        if ($("#popup-party-code").css("display") !== "none" && _0xA47C.target.id !== "popup-party-code") {
          $("#popup-party-code").hide();
        }
      });
      $("#aEditChatTabs").on("click", function (_0xA47C) {
        _0xA68B();
        _0xB133(_0xB5EC);
        _0xBEC3($("#popup-chat-tab-editor"));
      });
      $("#cte-tab-selector").on("change", _0xA89A);
      $("#btn-chat-tab-editor-add").on("click", _0xA85C);
      $("#btn-chat-tab-editor-remove").on("click", _0xA87B);
      $("#btn-chat-tab-editor-update").on("click", _0xA8D8);
      $(".custom-asset-skinner").on("click", function () {
        $("#popup-asset-skinner .title-text").text($(this).text());
        $("#input-asset-skinner").attr("asset", $(this).attr("id")).val("");
        _0xB133(_0xB5EC);
        _0xBEC3($("#popup-asset-skinner"));
      });
      $("#btn-custom-asset-set").on("click", function () {
        if (!_0xB79E.cThemeEnabled) {
          _0xAE2C();
        }
        ;
        var _0xA49B = $("#input-asset-skinner").val();
        if (_0xA49B) {
          var _0xA47C = $("#input-asset-skinner").attr("asset");
          if (_0xA47C.charAt(0) == "a" && _0xC0B3[_0xA47C] != null) {
            _0xBE47(_0xA47C, _0xA49B);
          }
        }
        ;
        $("#popup-asset-skinner .back-button").trigger("click");
      });
      $("#btn-custom-asset-clear").on("click", function () {
        if (!_0xB79E.cThemeEnabled) {
          _0xAE2C();
        }
        ;
        var _0xA47C = $("#input-asset-skinner").attr("asset");
        if (_0xA47C.charAt(0) == "a" && _0xC0B3[_0xA47C] != null) {
          _0xBE47(_0xA47C, "");
        }
      });
      $("#popup-asset-skinner").on("dragover", false).on("drop", function (_0xA47C) {
        if (!_0xB79E.cThemeEnabled) {
          _0xAE2C();
        }
        ;
        var _0xA4BA = $("#input-asset-skinner").attr("asset");
        if (_0xA4BA.charAt(0) == "a" && _0xC0B3[_0xA4BA] != null) {
          var _0xA49B = _0xAF43(_0xA47C.originalEvent);
          if (/\.(jpe?g|png|gif)$/i.test(_0xA49B.name)) {
            var _0xA4D9 = new FileReader;
            _0xA4D9.addEventListener("load", function () {
              _0xBE47(_0xA4BA, this.result);
            }, false);
            _0xA4D9.readAsDataURL(_0xA49B);
          }
        }
        ;
        return false;
      });
      $("#btn-food-colors").on("click", function () {
        _0xC18C();
        _0xB133(_0xB5EC);
        _0xBEC3($("#popup-food-colors"));
      });
      $("#btn-theme-export").on("click", function () {
        if (!_0xB79E.cThemeEnabled) {
          return;
        }
        ;
        var _0xA49B = "theme.json";
        var _0xA47C = JSON.stringify(_0xC0B3, null, 2);
        _0xAC7A(_0xA49B, _0xA47C, "text/plain");
      });
      $("#btn-theme-import").on("click", function () {
        $("#theme-import").trigger("click");
      });
      $("#theme-import").on("change", function () {
        var _0xA49B = $(this).prop("files");
        if (_0xA49B.length > 0) {
          var _0xA47C = _0xA49B[0];
          _0xB570(_0xA47C);
        }
      });
      $("#main-themes .options-container").on("dragover", false).on("drop", function (_0xA47C) {
        var _0xA49B = _0xAF43(_0xA47C.originalEvent);
        _0xB570(_0xA49B);
        return false;
      });
      $("#cGlobalLeaderboard").on("change", function () {
        if (!_0xC246 || _0xAEE6) {
          return;
        }
        ;
        _0xAEE6 = true;
        firebase.auth().currentUser.getIdToken().then(_0xA49B => {
          fetch(_0xA47C + "/api/v1/options/setFlags", {
            method: "POST", 
            headers: {"Content-Type": "application/json"

            }, 
            body: JSON.stringify({
              token: _0xA49B
            })}) .then(_0xA47C => {
            return _0xA47C.json();
          }).then(_0xA47C => {
            _0xAEE6 = false;
            $(this).prop("checked", _0xA47C.message);
          }).catch(_0xA47C => {
            console.error(_0xA47C);
            _0xAEE6 = false;
            alert(_0xA47C);
          });
        }).catch(_0xA45D => {
          _0xB098(_0xA45D, true);
          _0xAEE6 = false;
        });
      });
      firebase.auth().onAuthStateChanged(function (_0xA47C) {
        if (_0xA47C) {
          if (!_0xAA4C.consented) {
            firebase.auth().signOut().then(function () {});
            return;
          }
          ;
          _0xBE85();
          if (_0xB98E.isConnected() && firebase.auth().currentUser !== null) {
            firebase.auth().currentUser.getIdToken(true).then(_0xA47C => {
              _0xB98E.sendPacket(new _0xB7FB.sendAuthToken(_0xA47C));
            }).catch(_0xA45D => {
              return _0xB098(_0xA45D, true);
            });
          }
          ;
          var _0xA49B = firebase.database().ref("users/" + _0xA47C.uid);
          var _0xA4D9 = false;
          _0xA49B.on("value", function (_0xA574) {
            var _0xA4F8 = _0xA574.val();
            if (!_0xA4F8) {
              return;
            }
            ;
            if (!_0xA4D9) {
              $("#account-loader").hide();
              $("#authed").show();
              $("#authed").attr("style", "display: flex;");
              $("#cGlobalLeaderboard").removeAttr("disabled");
              $("#cGlobalLeaderboard").prop("checked", _0xA4F8.flags.PUBLIC);
              _0xA4D9 = true;
            }
            ;
            _0xC246 = _0xA4F8;
            $("#account-avatar").attr("src", _0xA4F8.avatar);
            $("#account-username").text(_0xA4F8.username);
            _0xAAC8($("#account-username"), _0xA4F8);
            $("#account-level").html("Level " + _0xA4F8.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + _0xAE6A(_0xA4F8.levelData.xp_current) + "/" + _0xAE6A(_0xA4F8.levelData.xp_needed) + " XP");
            $(".xp-meter > span").each(function () {
              var _0xA47C = _0xA4F8.levelData.xp_current / _0xA4F8.levelData.xp_needed * 100;
              $(this).animate({width: _0xA47C + "%"}, 1200);
            });
            if (!_0xB98E.accountListeners.loadServers) {
              _0xB98E.accountListeners.loadServers = firebase.database().ref("servers/account/" + _0xC246.uid).on("value", function (_0xA4F8) {
                var _0xA47C = _0xA4F8.val();
                if (!_0xA47C) {
                  return;
                }
                ;
                _0xA4BA = {};
                for (var _0xA49B in _0xA47C) {
                  var _0xA4D9 = _0xA47C[_0xA49B];
                  if (_0xA4D9.up) {
                    _0xA4BA[_0xA4D9.name] = new _0xBDCB(_0xA4D9.name, _0xA4D9.ip + ":" + _0xA4D9.port, 0, 0, "?", _0xA4D9.gamemode, _0xA4D9.region, _0xA4D9.ssl, 0);
                  }
                }
                ;
                _0xB4D5();
                if (_0xBD4F != null) {
                  _0xBD8D(_0xBD4F.name);
                }
              });
            }
            ;
            if (_0xA4F8.flags.DISCORD_LINKED && !_0xB98E.accountListeners.loadDiscord) {
              _0xB98E.accountListeners.loadDiscord = firebase.firestore().collection("discord").doc(_0xC246.uid).onSnapshot(_0xA47C => {
                if (_0xA47C.exists) {
                  $("#discordLinkStatus").text("Your account is linked with " + _0xA47C.data().username + "#" + _0xA47C.data().discrim);
                  $("#discordLinkStatus").show();
                  $("#discordLink").hide();
                  $("#discordUnlink").show();
                  $(".discord-login-container").css("padding", "15px");
                } else {
                  $("#discordLinkStatus").hide();
                  $("#discordUnlink").hide();
                  $("#discordLink").show();
                  $(".discord-login-container").css("padding", "30px");
                }
              });
            }
            ;
            if (_0xA4F8.tokens !== undefined) {
              var _0xA536 = new Date;
              _0xA536.setMonth(_0xA536.getMonth() + _0xA4F8.tokens);
              if (_0xA4F8.tokens == 0) {
                $("#redeem-tokens").hide();
                $("#token-amount").text("You have 0 tokens.");
              } else {
                $("#redeem-tokens").show();
                $("#token-amount").text("You have " + _0xA4F8.tokens + " tokens, maximum expiry date: " + _0xA536.toString());
                $("#redeem-spend").attr("max", _0xA4F8.tokens);
              }
            } else {
              $("#token-amount").text("You have 0 tokens.");
            };
            if (_0xC246.title && _0xC246.title > 0 && _0xC227 && _0xC227.titles && _0xC227.titles.length > 0) {
              var _0xA49B = $("#account-titles");
              var _0xA555 = 0;
              for (var _0xA517 = 0; _0xA517 < _0xC227.titles.length; _0xA517++) {
                if (_0xC227.titles[_0xA517] == _0xC246.title) {
                  _0xA555 = _0xA517 + 1;
                }
              }
              ;
              if (_0xA555 > 0) {
                _0xA49B.val(_0xA555);
              }
            }
            ;
            if (!_0xB98E.accountListeners.loadPrivateData) {
              _0xB98E.accountListeners.loadPrivateData = firebase.database().ref("private/" + _0xA47C.uid).on("value", function (_0xA4F8) {
                var _0xA49B = _0xA4F8.val();
                if (!_0xA49B) {
                  return;
                }
                ;
                _0xC227 = _0xA49B;
                if (_0xC227.titles && _0xC227.titles.length > 0) {
                  var _0xA47C = $("#account-titles");
                  var _0xA4D9 = 0;
                  _0xA47C.empty();
                  _0xA47C.append("<option value='0'>Default Title</option>");
                  for (var _0xA4BA = 0; _0xA4BA < _0xA49B.titles.length; _0xA4BA++) {
                    _0xA47C.append("<option value='" + (_0xA4BA + 1) + "'>" + _0xC110[_0xC227.titles[_0xA4BA]] + "</option>");
                    if (_0xC227.titles[_0xA4BA] == _0xC246.title) {
                      _0xA4D9 = _0xA4BA + 1;
                    }
                  }
                  ;
                  if (_0xA4D9 > 0) {
                    _0xA47C.val(_0xA4D9);
                  }
                  ;
                  _0xA47C.css("display", "inline-block");
                } else {
                  $("#account-titles").css("display", "none");
                }
                ;
                if (_0xC227.message && _0xC227.message.title && _0xC227.message.content && !_0xC227.message.read) {
                  $("#popup-message-title").text(_0xC227.message.title);
                  $("#popup-message-content").html(_0xC227.message.content);
                  _0xBEC3($("#popup-message"));
                  _0xB133(_0xB5EC);
                }
              });
            }
            ;
            if (_0xB0B7) {
              _0xB4F4(_0xC246);
            }
            ;
            _0xB3FC(_0xA47C.uid);
          });
        } else {
          $("#cGlobalLeaderboard").attr("disabled");
          if (!_0xAA4C.consented) {
            $("#authed").hide();
            $("#account-loader").hide();
            $("#guest").hide();
            $("#no_cookie_consent").show();
          } else {
            $("#authed").hide();
            $("#account-loader").hide();
            $("#no_cookie_consent").hide();
            $("#guest").show();
          }
        }
      });
      $("#account-login").on("click", function () {
        if (_0xAA4C.consented) {
          firebase.auth().signInWithPopup(_0xA517).then(function (_0xA45D) {}).catch(_0xA45D => {
            return _0xB098(_0xA45D, true);
          });
        }
      });
      $("#account-logout").on("click", function () {
        firebase.auth().signOut().then(function () {
          $("#authed").hide(500);
          $("#guest").show();
          $("#discordLinkStatus").hide();
          $(".discord-login-container").show();
        }).catch(_0xA45D => {
          return _0xB098(_0xA45D, true);
        });
      });
      $("#account-shop").on("click", function () {
        window.open("https://store.gota.io/", "_blank");
      });
      $("#account-social").on("click", function () {
        if (!_0xC246) {
          return;
        }
        ;
        _0xB4F4(_0xC246);
        _0xBEC3($("#main-social"));
        _0xB133($(_0xB5EC));
      });
      $("#social-back-button").on("click", function () {
        _0xB133($("#main-social"));
        _0xBEC3($(_0xB5EC));
      });
      $("#account-profile").on("click", function () {
        _0xB497(_0xC246, _0xB5EC);
      });
      $("#food-colors-close-btn").on("click", function () {
        _0xC12F(_0xB5EC);
        _0xB133($("#popup-food-colors"));
      });
      function _0xA4D9(_0xA49B, _0xA47C) {
        if (_0xA49B) {
          $(_0xA47C).prop("disabled", false);
          $(_0xA47C).text("Set");
          return;
        }
        ;
        $(_0xA47C).prop("disabled", true);
        $(_0xA47C).text("...");
      }
      $("#account-titles").on("change", function () {
        if (_0xAEE6) {
          return;
        }
        ;
        var _0xA49B = parseInt($(this).val());
        _0xAEE6 = true;
        firebase.auth().currentUser.getIdToken().then(_0xA4BA => {
          fetch(_0xA47C + "/api/v1/options/setTitle", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({token: _0xA4BA, title: _0xA49B})}).then(_0xA47C => {
            return _0xA47C.json();
          }).then(_0xA45D => {
            _0xAEE6 = false;
          }).catch(_0xA47C => {
            console.error(_0xA47C);
            _0xAEE6 = false;
          });
        }).catch(_0xA45D => {
          _0xB098(_0xA45D, true);
          _0xAEE6 = false;
        });
      });
      $("#popup-message-read-btn").on("click", function () {
        if (_0xAEE6) {
          return;
        }
        ;
        _0xB133($("#popup-message"));
        _0xC12F(_0xB5EC);
        _0xAEE6 = true;
        firebase.auth().currentUser.getIdToken().then(_0xA49B => {
          fetch(_0xA47C + "/api/v1/options/markAsRead", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({token: _0xA49B})}).then(_0xA47C => {
            return _0xA47C.json();
          }).then(_0xA45D => {
            _0xAEE6 = false;
          }).catch(_0xA47C => {
            console.error(_0xA47C);
            _0xAEE6 = false;
          });
        }).catch(_0xA45D => {
          _0xB098(_0xA45D, true);
          _0xAEE6 = false;
        });
      });
      $("#account-set-username-btn").on("click", function () {
        if (!_0xC246) {
          return;
        }
        ;
        _0xA4D9(false, this);
        var _0xA49B = $("#account-username-input").val();
        if (!_0xA49B || _0xA49B == "" || _0xA49B.trim() == "") {
          alert("Please provide a username!");
          _0xA4D9(true, this);
          return;
        }
        ;
        firebase.auth().currentUser.getIdToken().then(_0xA4BA => {
          fetch(_0xA47C + "/api/v1/social/username", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({token: _0xA4BA, username: _0xA49B})}).then(_0xA47C => {
            return _0xA47C.json();
          }).then(_0xA47C => {
            _0xA4D9(true, this);
            if (_0xA47C.code == 200) {
              _0xC12F(_0xB5EC);
              $("#popup-account-username").hide();
              return;
            }
            ;
            alert(_0xA47C.message);
          }).catch(_0xA47C => {
            console.error(_0xA47C);
            alert(_0xA47C);
            _0xA4D9(true, this);
          });
        }).catch(_0xA45D => {
          _0xA4D9(true, this);
          _0xB098(_0xA45D, true);
        });
      });
      $(".popup-panel .back-button").on("click", function () {
        _0xB152();
        _0xC12F(_0xB5EC);
      });
      $("#discordLink").on("click", function () {
        if (!_0xC246) {
          return;
        }
        ;
        firebase.auth().currentUser.getIdToken().then(_0xA47C => {
          window.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + _0xA47C, "popup", "width=600,height=700");
        });
      });
      $("#discordUnlink").on("click", function () {
        if (!_0xC246) {
          return;
        }
        ;
        firebase.auth().currentUser.getIdToken().then(_0xA49B => {
          fetch(_0xA47C + "/api/v1/options/discord/unlink", {method: "POST", body: JSON.stringify({token: _0xA49B}), headers: {"Content-Type": "application/json"}}).then(_0xA47C => {
            return _0xA47C.json();
          }).then(_0xA47C => {
            alert(_0xA47C.message);
          });
        }).catch(_0xA45D => {
          return _0xB098(_0xA45D);
        });
      });
      $("#redeem-tokens").submit(function (_0xA49B) {
        _0xA49B.preventDefault();
        if (!_0xC246) {
          return;
        }
        ;
        if (!confirm("By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.")) {
          return;
        }
        ;
        var _0xA4BA = $("#redeem-name").val();
        var _0xA4D9 = $("#redeem-spend").val();
        firebase.auth().currentUser.getIdToken().then(_0xA49B => {
          fetch(_0xA47C + "/api/v1/options/redeem", {method: "POST", body: JSON.stringify({token: _0xA49B, name: _0xA4BA, spend: parseInt(_0xA4D9)}), headers: {"Content-Type": "application/json"}}).then(_0xA47C => {
            return _0xA47C.json();
          }).then(_0xA47C => {
            alert(_0xA47C.message);
            if (_0xA47C.code === 200) {
              _0xB3FC(_0xC246.uid);
            }
          });
        }).catch(_0xA45D => {
          return _0xB098(_0xA45D);
        });
      });
      $(".error-banner").on("click", function () {
        $(this).hide();
      });
      $("#btn-add-friend").on("click", function (_0xA49B) {
        _0xA49B.preventDefault();
        if (!_0xC246) {
          return;
        }
        ;
        var _0xA4D9 = prompt("Enter friend's UID (found above add friend button)");
        if (!_0xA4D9) {
          return;
        }
        ;
        var _0xA4BA = _0xA4D9.replace(/\s/g, "");
        if (typeof _0xA4D9 !== "string" || _0xA4BA.length === 0) {
          return alert("Please enter a valid UID");
        }
        ;
        firebase.auth().currentUser.getIdToken().then(_0xA49B => {
          fetch(_0xA47C + "/api/v1/social/friends", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({token: _0xA49B, target: _0xA4BA, action: 1})}).then(_0xA47C => {
            return _0xA47C.json();
          }).then(_0xA47C => {
            alert(_0xA47C.message);
          });
        }).catch(_0xA45D => {
          return _0xB098(_0xA45D, true);
        });
      });
      document.getElementById("party-canvas").oncontextmenu = _0xB896;
      $(document).keyup(function (_0xA47C) {
        if (_0xA47C.keyCode == 13) {
          var _0xA49B = $("#chat-input");
          if (document.activeElement.tagName != "INPUT") {
            var _0xA4BA = _0xA49B[0];
            if (_0xA4BA) {
              _0xA4BA.setSelectionRange(_0xA4BA.value.length, _0xA4BA.value.length);
            }
            ;
            _0xA49B.focus();
          } else {
            if (_0xA49B.is(":focus")) {
              _0xA49B.blur();
            }
          }
        }
      });
      $(window).bind("beforeunload", function () {
        return "Are you sure you want to leave Gota.io?";
      });
      _0xBC19();
      $(".keybinds-btn").on("click", function () {
        $(".keybinds-btn").removeClass("keybinds-btn-selected");
        $(this).addClass("keybinds-btn-selected");
        _0xB2E5 = true;
      });
      $("#btn-reset-keybinds").on("click", function () {
        $(".keybinds-btn").each(function () {
          var _0xA47C = $(this);
          var _0xA49B = _0xA47C.attr("id");
          if (_0xABDF[_0xA49B] != null) {
            _0xB304[_0xA49B] = _0xABDF[_0xA49B];
            _0xC1AB(_0xA47C);
          }
        });
      });
      $("#scrimmage-mode-select").on("change", function () {
        $("#scrimmage-mode-info").children().css("display", "none");
        $("#scrimmage-info-" + $(this).val()).css("display", "block");
      });
      $("#btn-queue").on("click", function () {
        var _0xA47C = parseInt($("#scrimmage-mode-select").val());
        var _0xA49B = isNaN(_0xA47C) ? 0 : Math.min(Math.max(_0xA47C, 0), 100);
        _0xB98E.sendPacket(new _0xB7FB.sendQueue(_0xA49B));
        $(this).blur();
      });
      $("#btn-leave-match").on("click", function () {
        _0xB98E.sendPacket(new _0xB7FB.sendLeaveMatch);
      });
      $("#btn-custom-create").on("click", function () {
        _0xB98E.sendPacket(new _0xB7FB.sendCustomGame(0));
        $(this).blur();
      });
      $("#btn-custom-return").on("click", function () {
        _0xB98E.sendPacket(new _0xB7FB.sendCustomGame(1));
      });
      $("#btn-custom-start").on("click", function () {
        _0xB98E.sendPacket(new _0xB7FB.sendCustomGame(2));
      });
      $("#btn-custom-lobbies").on("click", function () {
        _0xB98E.sendPacket(new _0xB7FB.sendShowLobbies);
      });
      $("#btn-lobbies-refresh").on("click", function () {
        _0xB98E.sendPacket(new _0xB7FB.sendShowLobbies);
      });
      $("#btn-lobbies-join").on("click", function () {
        if (_0xBD30 === 0) {
          return;
        }
        ;
        var _0xA49B = _0xBD30;
        var _0xA4BA = "";
        var _0xA47C = _0xABA1[_0xA49B];
        if (_0xA47C == null) {
          return;
        }
        ;
        if (_0xA47C.hasPasscode) {
          _0xA4BA = prompt("Enter the password to join this game", "");
        }
        ;
        if (_0xA4BA == null) {
          _0xA4BA = "";
        }
        ;
        _0xB98E.sendPacket(new _0xB7FB.sendJoinLobby(_0xA49B, _0xA4BA));
      });
      $("#btn-lobbies-return").on("click", function () {
        $(".scrimmage-full").css("display", "none");
        $("#scrimmage-menu").css("display", "block");
      });
      $("#scrimmage-map").on("change", function (_0xA49B) {
        var _0xA4BA = $(this).find("option:selected").val();
        var _0xA47C = $(this).attr("data");
        if (_0xA4BA != _0xA47C) {
          $("#scrimmage-map option[value='" + _0xA47C + "']").prop("selected", true);
          _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.MAP, _0xA4BA));
        }
      });
      $("#scrimmage-mapmode").on("change", function (_0xA49B) {
        var _0xA4BA = $(this).find("option:selected").val();
        var _0xA47C = $(this).attr("data");
        if (_0xA4BA != _0xA47C) {
          $("#scrimmage-mapmode option[value='" + _0xA47C + "']").prop("selected", true);
          _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.MODE, _0xA4BA));
        }
      });
      $("#scrimmage-mapsize").on("change", function (_0xA49B) {
        var _0xA4BA = $(this).find("option:selected").val();
        var _0xA47C = $(this).attr("data");
        if (_0xA4BA != _0xA47C) {
          $("#scrimmage-mapsize option[value='" + _0xA47C + "']").prop("selected", true);
          _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.SIZE, _0xA4BA));
        }
      });
      $("#scrimmage-startmass").on("change", function (_0xA49B) {
        var _0xA4BA = $(this).val();
        var _0xA47C = $(this).attr("data");
        if (isNaN(_0xA4BA)) {
          $(this).val(_0xA47C);
          return;
        }
        ;
        _0xA4BA = Math.max(1, Math.min(parseInt(_0xA4BA), 32e3));
        if (_0xA4BA != _0xA47C) {
          $(this).val(_0xA47C);
          _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.STARTMASS, _0xA4BA));
        }
      });
      $("#scrimmage-virusDensity").on("change", function (_0xA49B) {
        var _0xA4BA = $(this).val();
        var _0xA47C = $(this).attr("data");
        if (isNaN(_0xA4BA)) {
          $(this).val(_0xA47C);
          return;
        }
        ;
        _0xA4BA = Math.max(0, Math.min(parseInt(_0xA4BA), 1e3));
        if (_0xA4BA != _0xA47C) {
          $(this).val(_0xA47C);
          _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.VIRUS_DENSITY, _0xA4BA));
        }
      });
      $("#scrimmage-respawnDelay").on("change", function (_0xA49B) {
        var _0xA4BA = $(this).val();
        var _0xA47C = $(this).attr("data");
        if (isNaN(_0xA4BA)) {
          $(this).val(_0xA47C);
          return;
        }
        ;
        _0xA4BA = Math.max(-1, Math.min(parseInt(_0xA4BA), 600));
        if (_0xA4BA != _0xA47C) {
          $(this).val(_0xA47C);
          _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.RESPAWN_DELAY, _0xA4BA));
        }
      });
      $("#scrimmage-lockteams").on("change", function (_0xA47C) {
        var _0xA49B = $(this).prop("checked");
        $(this).prop("checked", !_0xA49B);
        _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.LOCK, _0xA49B == true ? 1 : 0));
      });
      $("#scrimmage-autoSplit").on("change", function (_0xA47C) {
        var _0xA49B = $(this).prop("checked");
        $(this).prop("checked", !_0xA49B);
        _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.AUTOSPLIT, _0xA49B == true ? 1 : 0));
      });
      $("#scrimmage-public").on("change", function (_0xA47C) {
        var _0xA49B = $(this).prop("checked");
        $(this).prop("checked", !_0xA49B);
        _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdate(_0xAB63.PUBLIC, _0xA49B == true ? 1 : 0));
      });
      $("#scrimmage-password").on("change", function (_0xA47C) {
        var _0xA4BA = $(this).prop("checked");
        $(this).prop("checked", !_0xA4BA);
        var _0xA49B = "";
        if (_0xA4BA) {
          _0xA49B = prompt("Enter a password to join your game (32 max characters)", "");
        }
        ;
        if (_0xA49B == null) {
          _0xA49B = "";
        }
        ;
        _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdateString(_0xAB63.PASSWORD, _0xA49B));
      });
      $("#scrimmage-name").on("click", function (_0xA47C) {
        if (!_0xB98E.isPartyLeader()) {
          return;
        }
        ;
        var _0xA49B = prompt("Enter a new name for your game (32 max characters)", $(this).text());
        if (_0xA49B != null) {
          _0xB98E.sendPacket(new _0xB7FB.sendCustomGameUpdateString(_0xAB63.NAME, _0xA49B));
        }
      });
    }
    function _0xB4B6() {
      if (window.grecaptcha === undefined) {
        return;
      }
      ;
      _0xA707 = window.grecaptcha;
      window.grecaptcha = undefined;
      _0xA707.ready(function () {});
    }
    function _0xADB0() {
      _0xA707.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {action: "login"}).then(function (_0xA47C) {
        _0xB98E.sendPacket(new _0xB7FB.sendCaptcha(_0xA47C));
        document.body.classList.add("hide-captcha-badge");
        if (!_0xB98E.spectate) {
          _0xB98E.play();
        } else {
          _0xB98E.spec();
        }
      });
    }
    function _0xB3DD() {
      _0xAE4B(function (_0xA47C) {
        $("#" + _0xA47C).spectrum({color: _0xC0B3[_0xA47C], preferredFormat: "hex", showInput: true, showAlpha: true, clickoutFiresChange: false, change: function (_0xA49B) {
          _0xC0B3[_0xA47C] = _0xA49B.toRgbString();
          _0xBC38(_0xA47C, _0xC0B3[_0xA47C]);
        }});
      });
      $("#uiGameBackgroundColor").spectrum("option", "showAlpha", false);
      $("#uiGameBorderColor").spectrum("option", "showAlpha", false);
      $("#pFoodColors").spectrum({preferredFormat: "hex", showInput: true, chooseText: "Add", flat: true, clickoutFiresChange: false, change: function (_0xA47C) {
        if (!_0xB79E.cThemeEnabled) {
          _0xAE2C();
        }
        ;
        var _0xA49B = _0xA47C.toHexString();
        if (!_0xC0B3._FoodColors.includes(_0xA49B)) {
          _0xC0B3._FoodColors.push(_0xA49B);
          _0xC18C();
        }
      }});
    }
    function _0xC18C() {
      var _0xA4BA = $("#food-color-list");
      _0xA4BA.empty();
      if (_0xC0B3._FoodColors.length == 0) {
        _0xBBDB();
        return;
      }
      ;
      try {
        for (var _0xA49B in _0xC0B3._FoodColors) {
          var _0xA47C = _0xC0B3._FoodColors[_0xA49B];
          _0xA4BA.append("<div c='" + _0xA47C + "' style='background:" + _0xA47C + ";color:" + _0xB24A(_0xA47C) + ";'><span>" + _0xA47C + "</span><div><button class='btn-food-color'>X</button></div></div>");
        }
        ;
        $(".btn-food-color").on("click", function () {
          var _0xA4BA = $(this).parents().eq(1).attr("c");
          var _0xA47C, _0xA49B;
          while ((_0xA47C = _0xC0B3._FoodColors.indexOf(_0xA4BA)) !== -1) {
            _0xC0B3._FoodColors.splice(_0xA47C, 1);
            _0xA49B = true;
          }
          ;
          if (_0xA49B) {
            _0xC18C();
          }
        });
      } catch (e) {
        _0xC0B3._FoodColors = [];
        _0xA4BA.empty();
      }
      ;
      _0xBBDB();
    }
    function _0xBBDB() {
      _0xAB25 = [];
      for (var _0xA47C of _0xC0B3._FoodColors) {
        _0xAB25.push(_0xB931.utils.string2hex(_0xA47C));
      }
      ;
      for (var _0xA49B in _0xB98E.foodObjects) {
        _0xB98E.foodObjects[_0xA49B].needsPixiUpdate = true;
      }
    }
    function _0xA593(_0xA4BA) {
      var _0xA49B = $(".keybinds-btn-selected");
      _0xB2E5 = false;
      if (_0xA49B.size() == 0) {
        return;
      }
      ;
      var _0xA47C = _0xA49B.first();
      _0xA49B.removeClass("keybinds-btn-selected");
      if (_0xA4BA != 27) {
        _0xB304[_0xA47C.attr("id")] = _0xA4BA;
      } else {
        _0xB304[_0xA47C.attr("id")] = -1;
      }
      ;
      _0xC1AB(_0xA47C);
    }
    function _0xC1AB(_0xA47C) {
      var _0xA49B = _0xB304[_0xA47C.attr("id")];
      _0xA47C.html(_0xB342(_0xA49B));
    }
    function _0xB342(_0xA47C) {
      return _0xA47C > 0 ? _0xB323[_0xA47C].toUpperCase() : "&nbsp;";
    }
    function _0xB43A() {
      var _0xA47C = document.getElementById("logo");
      if (_0xB79E.cDisableEventSkins || !_0xAD72.enabled) {
        _0xA47C.style.backgroundImage = "url('images/logo.png')";
      } else {
        if (_0xAD72.enabled) {
          _0xA47C.style.backgroundImage = "url('images/events/" + _0xAD72.key + "/logo.png')";
        }
      }
    }
    function _0xB41B() {
      _0xB513();
      _0xACF6 = {};
      gifEmoteList = {};
      for (var _0xA49B in _0xBB40) {
        var _0xA47C = _0xBB40[_0xA49B];
        $(".emote-list").append("<li><img name='" + _0xA47C + "' title='" + _0xA47C + "' src='https://gota.io/emotes/" + _0xA47C + ".png' /></li>");
        _0xACF6[_0xA47C] = true;
      }
      ;
      for (var _0xA49B in _0xB01C) {
        var _0xA47C = _0xB01C[_0xA49B];
        $(".gif-list").append("<li><img name='" + _0xA47C + "' title='" + _0xA47C + "' src='https://gota.io/emotes/gifs/" + _0xA47C + ".gif' /></li>");
        gifEmoteList[_0xA47C] = true;
      };
      for (var _0xA49B = 0; _0xA49B < _0xAD15.length; _0xA49B++) {
        var _0xA4F8 = _0xAD15[_0xA49B];
        $("#spEffect").append('<option value="' + (_0xA49B + 1) + '">' + _0xB703(_0xA4F8) + "</option>");
        _0xAD34[_0xA49B] = _0xACD7;
        var _0xA4D9 = new Image;
        _0xA4D9.src = "images/ejected_mass_skins/" + _0xA4F8 + ".png";
        _0xA4D9.index = _0xA49B;
        _0xA4D9.addEventListener("load", function () {
          _0xAD34[this.index] = _0xB931.Texture.from(this);
        });
      }
      ;
      if (_0xAD72.enabled && _0xAD72.customEjectedMass) {
        _0xAD91 = new Image;
        _0xAD91.src = "images/events/" + _0xAD72.key + "/ejected_mass.png";
      }
      ;
      _0xB478();
      for (var _0xA49B = 0; _0xA49B < _0xB6A6.length; _0xA49B++) {
        var _0xA4BA = _0xA49B;
        gifFrames({url: "images/effects/" + _0xB6A6[_0xA4BA] + ".gif", frames: "all", cumulative: false, outputType: "canvas"}).then(function (_0xA47C) {
          var _0xA49B = new _0xB03B;
          _0xA49B.loadFromFrameData(_0xA47C);
          _0xB687[_0xA4BA] = _0xA49B;
        });
      }
    }
    function _0xB513() {
      var _0xA47C, _0xA4F8;
      if (!_0xB79E.cDisableEventSkins && _0xAD72.enabled) {
        _0xA47C = "images/events/" + _0xAD72.key;
        _0xA4F8 = "/spike_mother_happy.png";
      } else {
        _0xA47C = "images";
        _0xA4F8 = "/spike_mother.png";
      }
      ;
      var _0xA49B = new Image;
      _0xA49B.addEventListener("load", function () {
        _0xBFBB = _0xB931.Texture.from(_0xA49B);
        if (_0xB98E) {
          for (var _0xA47C in _0xB98E.bucket) {
            var _0xA4BA = _0xB98E.bucket[_0xA47C];
            if (_0xA4BA.type == 3) {
              _0xA4BA.needsPixiUpdate = true;
            }
          }
        }
      });
      var _0xA4BA = new Image;
      _0xA4BA.addEventListener("load", function () {
        _0xBFDA = _0xB931.Texture.from(_0xA4BA);
        if (_0xB98E) {
          for (var _0xA47C in _0xB98E.bucket) {
            var _0xA49B = _0xB98E.bucket[_0xA47C];
            if (_0xA49B.type == 4) {
              _0xA49B.needsPixiUpdate = true;
            }
          }
        }
      });
      var _0xA4D9 = new Image;
      _0xA4D9.addEventListener("load", function () {
        _0xBFF9 = _0xB931.Texture.from(_0xA4D9);
        if (_0xB98E) {
          for (var _0xA47C in _0xB98E.bucket) {
            var _0xA49B = _0xB98E.bucket[_0xA47C];
            if (_0xA49B.type == 4) {
              _0xA49B.needsPixiUpdate = true;
            }
          }
        }
      });
      _0xA49B.src = _0xA47C + "/spike.png";
      _0xA4BA.src = _0xA47C + "/spike_mother.png";
      _0xA4D9.src = _0xA47C + _0xA4F8;
    }
    const _0xA916 = {cDisableAA: function () {
      if (_0xB950) {
        $("#performance-refresh").css("display", "table-row");
      }
    }, sRenderType: function () {
      if (_0xB950) {
        $("#performance-refresh").css("display", "table-row");
      }
    }, cHideId: function () {
      var _0xA47C = _0xB79E.cHideId ? "none" : "block";
      $(".pID").css("display", _0xA47C);
    }, cHideServerDisplay: function () {
      var _0xA47C = _0xB79E.cHideServerDisplay ? "none" : "block";
      $(".psvr").css("display", _0xA47C);
    }, cTransCells: function () {
      _0xA7E0.alpha = _0xB79E.cTransCells ? 0.5 : 1;
    }, cColoredCellCount: function () {
      _0xB98E.updateCellCounter(_0xAC5B.playerCellCount, true);
    }, cHideChat: function () {
      var _0xA47C = _0xB79E.cHideChat ? "none" : "block";
      $("#chat-panel").css("display", _0xA47C);
    }, cHideMinimap: function () {
      var _0xA47C = _0xB79E.cHideMinimap ? "none" : "block";
      $("#minimap-panel").css("display", _0xA47C);
    }, cHideScorePanel: function () {
      var _0xA47C = _0xB79E.cHideScorePanel ? "none" : "inline-block";
      $("#score-panel").css("display", _0xA47C);
    }, cHideLeaderboard: function () {
      var _0xA47C = _0xB79E.cHideLeaderboard ? "none" : "block";
      $("#leaderboard-panel").css("display", _0xA47C);
    }, cHideExtraPanel: function () {
      var _0xA47C = _0xB79E.cHideExtraPanel ? "none" : "block";
      $("#extra-panel").css("display", _0xA47C);
    }, cShowCoordinates: function () {
      var _0xA47C = _0xB79E.cShowCoordinates ? "block" : "none";
      $("#minimap-coordinates").css("display", _0xA47C);
      _0xBC19();
    }, cDisableAutoZoom: function () {
      if (_0xB79E.cDisableAutoZoom) {
        _0xB98E.scale_base = 0.2 * Math.max(_0xA6C9.height / 1080, _0xA6C9.width / 1920);
      }
    }, cThemeEnabled: function () {
      if (!_0xB79E.cThemeEnabled) {
        _0xBBFA();
        _0xAE4B(function (_0xA47C) {
          $("#" + _0xA47C).spectrum("disable");
        });
      } else {
        _0xAE4B(function (_0xA47C) {
          $("#" + _0xA47C).spectrum("enable");
        });
      }
    }, cShowBorder: function () {
      _0xB079();
    }, cDisableEventSkins: function () {
      if (_0xAD72.enabled) {
        $("body").toggleClass("event-" + _0xAD72.key);
      }
      ;
      _0xB513();
      _0xB43A();
    }, cResizableChat: function () {
      $("#chat-resize").css("display", _0xB79E.cResizableChat ? "block" : "none");
    }, sShowNames: function () {
      _0xB7BD.levelNames = _0xB9EB[_0xB79E.sShowNames];
    }, sShowSkins: function () {
      _0xB7BD.levelSkins = _0xB9EB[_0xB79E.sShowSkins];
    }, sMassType: function () {
      _0xB7BD.massType = _0xB62A[_0xB79E.sMassType];
    }, sTextOutlines: function () {
      _0xB7BD.textOutlineSize = _0xC094[_0xB79E.sTextOutlines];
      for (var _0xA47C in _0xB98E.playerRegistry.bucket) {
        var _0xA49B = _0xB98E.playerRegistry.bucket[_0xA47C];
        if (_0xA49B.nameCache) {
          _0xA49B.nameCache.style.strokeThickness = _0xB7BD.textOutlineSize;
        }
        ;
        _0xB98E.playerRegistry.updatePlayer(_0xA49B);
      }
      ;
      _0xBF20.buildSizeCache();
    }, sQuality: function () {
      var _0xA47C = _0xB7BD.resolution;
      _0xB7BD.resolution = _0xB05A[_0xB79E.sQuality];
      if (_0xA47C !== _0xB7BD.resolution) {
        $(window).trigger("resize");
      }
    }, uiForegroundColor: function (_0xA47C) {
      if (_0xB98E) {
        _0xB98E.drawParty();
      }
      ;
      $(".fg-interface-color").css("color", _0xA47C);
      $(".interface-color").css("color", _0xA47C);
      $(".gota-btn").css("color", _0xA47C).css("border-color", _0xA47C);
      $(".popup-panel").css("color", _0xA47C);
      $(".main").css("color", _0xA47C);
      $(".main-bottom-stats").css("border-color", _0xA47C);
    }, uiBackgroundColor: function (_0xA47C) {
      $(".hud-panel .interface-color").css("background-color", _0xA47C);
    }, uiButtonColor: function (_0xA47C) {
      $(".gota-btn").css("background-color", _0xA47C);
    }, uiBorderColor: function (_0xA47C) {
      $(".ui-pane").css("border-color", _0xA47C);
      $("#chat-tab-container").css("border-color", _0xA47C);
      $(".chat-tab").css("border-color", _0xA47C);
    }, uiMenuBackgroundColor: function (_0xA47C) {
      $(".main-panel").css("background-color", _0xA47C);
      $(".popup-panel").css("background-color", _0xA47C);
      $(".options-container").css("background-color", _0xA47C);
    }, uiMenuTitleBackgroundColor: function (_0xA47C) {
      $(".menu-title").css("background-color", _0xA47C);
    }, uiMenuSubBackgroundColor: function (_0xA47C) {
      $(".menu-sub-bg").css("background-color", _0xA47C);
      $(".server-active").css("background-color", _0xA47C);
      $("#server-content").css("background-color", _0xA47C);
    }, uiMenuSubBackground2Color: function (_0xA47C) {
      $(".menu-sub-bg2").css("background-color", _0xA47C);
      $(".server-table tbody").css("background-color", _0xA47C);
    }, uiPartyLeaderColor: function (_0xA47C) {
      if (_0xB98E) {
        _0xB98E.drawParty();
      }
    }, uiGameColorSuccess: function (_0xA47C) {
      $("#social-friends-online-count").css("color", _0xA47C);
    }, uiGameBackgroundColor: function (_0xA47C) {
      document.body.style.background = _0xA47C;
    }, uiGameBorderColor: function () {
      _0xB079();
    }, rUiScale: function (_0xA47C) {
      _0xB79E.rUiScale = Math.min(Math.max(_0xA47C, 0.5), 1.25);
      $("#uiScale").val(Number.parseFloat(_0xB79E.rUiScale * 100).toFixed(0));
      $(".ui-scale").css("transform", "scale(" + _0xB79E.rUiScale + ")");
    }, rAnimationDelay: function (_0xA47C) {
      _0xB79E.rAnimationDelay = Math.min(Math.max(_0xA47C, 1), 250);
      $("#animationDelay").val(_0xB79E.rAnimationDelay);
    }, rViewDistance: function (_0xA47C) {
      _0xB79E.rViewDistance = Math.min(Math.max(_0xA47C, 50), 150);
      $("#viewDistance").val(_0xB79E.rViewDistance);
      _0xB98E.sendOptions();
    }, rBorderSize: function (_0xA47C) {
      _0xC0B3.rBorderSize = Math.min(Math.max(_0xA47C, 1), 256);
      $("#borderSize").text(_0xC0B3.rBorderSize);
      _0xB079();
    }, rBackgroundOpacity: function (_0xA47C) {
      _0xC0B3.rBackgroundOpacity = Math.min(Math.max(_0xA47C, 0), 1);
      $("#backgroundOpacity").text(Number.parseFloat(_0xC0B3.rBackgroundOpacity * 100).toFixed(0));
      document.getElementById("canvas-background").style.opacity = _0xC0B3.rBackgroundOpacity;
    }, aCustomBackground: function (_0xA47C) {
      document.getElementById("canvas-background").style.backgroundImage = "url('" + _0xA47C + "')";
      document.getElementById("canvas-background").style.backgroundSize = "100% 100%";
    }, aCustomSpike: function (_0xA4D9) {
      if (_0xAB06.aCustomSpike) {
        _0xAB06.aCustomSpike.destroy();
      }
      ;
      _0xAB06.aCustomSpike = null;
      for (var _0xA49B in _0xB98E.bucket) {
        var _0xA4BA = _0xB98E.bucket[_0xA49B];
        if (_0xA4BA.type == 3) {
          _0xA4BA.needsPixiUpdate = true;
        }
      }
      ;
      if (_0xA4D9.length == 0) {
        return;
      }
      ;
      var _0xA47C = new Image;
      _0xA47C.crossOrigin = "";
      _0xA47C.addEventListener("load", function () {
        _0xAB06.aCustomSpike = _0xB931.Texture.from(_0xA47C);
      });
      _0xA47C.addEventListener("error", function () {
        _0xB98E.selfMsg("Unable to load custom theme virus.");
      });
      _0xA47C.src = _0xA4D9;
    }, aCustomMother: function (_0xA4D9) {
      if (_0xAB06.aCustomMother) {
        _0xAB06.aCustomMother.destroy();
      }
      ;
      _0xAB06.aCustomMother = null;
      for (var _0xA49B in _0xB98E.bucket) {
        var _0xA4BA = _0xB98E.bucket[_0xA49B];
        if (_0xA4BA.type == 4) {
          _0xA4BA.needsPixiUpdate = true;
        }
      }
      ;
      if (_0xA4D9.length == 0) {
        return;
      }
      ;
      var _0xA47C = new Image;
      _0xA47C.crossOrigin = "";
      _0xA47C.addEventListener("load", function () {
        _0xAB06.aCustomMother = _0xB931.Texture.from(_0xA47C);
      });
      _0xA47C.addEventListener("error", function () {
        _0xB98E.selfMsg("Unable to load custom theme mother cell.");
      });
      _0xA47C.src = _0xA4D9;
    }};
    function _0xBC19() {
      if (!_0xB79E.cShowCoordinates) {
        $("#minimap-canvas").css({"border-top": "0"});
        $("#minimap-panel").css({height: "250px"});
      } else {
        $("#minimap-canvas").css({"border-top": "2px solid rgba(255, 255, 255, .2)"});
        $("#minimap-panel").css({height: "270px"});
      }
    }
    function _0xB532() {
      _0xBE66();
      $("#btn-chg-ln").on("click", function () {
        if (!_0xB5AE) {
          return;
        }
        ;
        var _0xA49B = prompt("Enter new locked name!");
        if (!_0xA49B) {
          return;
        }
        ;
        var _0xA47C = null;
        if (typeof _0xA49B !== "string") {
          _0xA47C = "Please enter a valid name!";
        }
        ;
        if (_0xA49B.length < 2) {
          _0xA47C = "Locked names must be 2 or more characters long.";
        }
        ;
        if (_0xA49B.length > 20) {
          _0xA47C = "Locked names must be 20 or less characters long.";
        }
        ;
        if (_0xA47C !== null) {
          alert(_0xA47C);
          return;
        }
        ;
        _0xA49B = _0xA49B.trim();
        if (confirm("You are about to change your locked name to: '" + _0xA49B + "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?")) {
          _0xB98E.sendPacket(new _0xB7FB.sendLockedNameChange(_0xA49B));
        }
      });
      $("#btn-updateSP").on("click", function () {
        _0xC1E9();
      });
      $("#btn-subpanel-rules").on("click", function () {
        _0xC075.rules = true;
        _0xC208();
      });
    }
    function _0xBE66() {
      _0xC208();
      $("#spNameColor").spectrum({color: _0xC075.nameColor, showAlpha: false, showInput: true, preferredFormat: "rgb"});
      $("#spChatColor").spectrum({showPaletteOnly: true, showPalette: true, color: _0xA81E[_0xC075.chatColor], palette: _0xA81E});
      $("#spSkinName").val(_0xC075.skinName);
      $("#spLowerName").prop("checked", _0xC075.lowerName);
      $("#spEffect select").val(_0xC075.effect);
      $("#spNameFont select").val(_0xC075.nameFont);
    }
    function _0xC1E9(_0xA4D9) {
      _0xC075.skinName = $("#spSkinName").val().toLowerCase();
      _0xC075.lowerName = $("#spLowerName").prop("checked");
      _0xC075.nameColor = $("#spNameColor").spectrum("get").toRgb();
      var _0xA49B = $("#spChatColor").spectrum("get").toHexString().toUpperCase();
      var _0xA47C = 0;
      for (var _0xA4BA = 0; _0xA4BA < _0xA81E.length; _0xA4BA++) {
        if (_0xA81E[_0xA4BA] == _0xA49B) {
          _0xA47C = _0xA4BA;
          break;
        }
      }
      ;
      _0xC075.chatColor = _0xA47C;
      _0xC075.effect = parseInt($("#spEffect").val());
      _0xC075.nameFont = parseInt($("#spNameFont").val());
      _0xB98E.sendPacket(new _0xB7FB.sendSubPanel(_0xA4D9));
    }
    function _0xC208() {
      if (_0xB5AE || _0xB98E.subPanelOverride) {
        $("#btn-cellpanel").prop("disabled", false);
        if (_0xB5AE) {
          $(".subpanel-name-dashboard").css("display", "");
        } else {
          $(".subpanel-name-dashboard").css("display", "none");
        }
        ;
        if (_0xC075.rules) {
          $("#subpanel-rules").css("display", "none");
          $("#subpanel-content").css("display", "block");
        } else {
          $("#subpanel-content").css("display", "none");
          $("#subpanel-rules").css("display", "block");
        }
      } else {
        $("#btn-cellpanel").prop("disabled", true);
      }
    }
    function _0xB3FC(_0xA47C) {
      if (!_0xB98E.accountListeners.loadSubPanel) {
        _0xB98E.accountListeners.loadSubPanel = firebase.firestore().collection("accounts").doc(_0xA47C).onSnapshot(_0xA47C => {
          if (!_0xA47C.exists || !_0xA47C.data().locked) {
            _0xB5AE = false;
            if ($("#main-subpanel").css("display") !== "none") {
              _0xA49B("main-servers");
            }
          } else {
            _0xB5AE = true;
            $("#spLockedName").html(_0xA47C.data().name);
            if (_0xA47C.data().lastChange !== undefined) {
              $("#btn-chg-ln").attr("title", "Last Changed: " + new Date(_0xA47C.data().lastChange).toLocaleString());
            }
            ;
            if (_0xA47C.data().expiry !== null) {
              $("#spExpiry").html(new Date(_0xA47C.data().expiry.seconds * 1e3).toLocaleString());
            } else {
              $("#spExpiry").html("Never");
            }
          }
          ;
          _0xC208();
          _0xB98E.accountListeners.loadSubPanel();
          _0xB98E.accountListeners.loadSubPanel = null;
        }, _0xA47C => {
          _0xB98E.accountListeners.loadSubPanel();
          _0xB98E.accountListeners.loadSubPanel = null;
        });
      }
    }
    function _0xBDCB(_0xA4D9, _0xA49B, _0xA517, _0xA47C, _0xA536, _0xA4BA, _0xA555, _0xA574, _0xA4F8) {
      this.name = _0xA4D9;
      this.ip = _0xA49B;
      this.players = _0xA517;
      this.bots = _0xA47C;
      this.playerText = _0xA536;
      this.mode = _0xA4BA;
      this.region = _0xA555;
      this.ssl = _0xA574;
      this.order = _0xA4F8;
    }
    function _0xB4D5() {
      $("#servers-body-eu").html("");
      $("#servers-body-na").html("");
      $("#servers-body-ap").html("");
      for (var _0xA47C in _0xBE09) {
        for (var _0xA49B in _0xBE09[_0xA47C]) {
          var _0xA4D9 = _0xBE09[_0xA47C][_0xA49B];
          var _0xA4F8 = _0xA4D9.bots > 0 ? ' title="Players: ' + _0xA4D9.players + "&#10;Bots: " + _0xA4D9.bots + '"' : "";
          $("#servers-body-" + _0xA4D9.region).append('<tr id="s_' + _0xA4D9.name + '" class="server-row" server="' + _0xA4D9.name + '"><td class="server-table-name">' + _0xA4D9.name + '</td><td class="server-table-players"' + _0xA4F8 + ">" + _0xA4D9.playerText + '</td><td class="server-table-mode">' + _0xA4D9.mode + "</td></tr>");
        }
      }
      ;
      for (var _0xA49B in _0xA4BA) {
        var _0xA4D9 = _0xA4BA[_0xA49B];
        $("#servers-body-" + _0xA4D9.region).prepend('<tr id="s_' + _0xA4D9.name + '" class="account-server server-row" server="' + _0xA4D9.name + '"><td class="server-table-name">' + _0xA4D9.name + '</td><td class="server-table-players">' + _0xA4D9.playerText + '</td><td class="server-table-mode">' + _0xA4D9.mode + "</td></tr>");
      }
      ;
      $(".server-row").on("click", function () {
        _0xBD8D($(this).attr("server"));
      });
    }
    function _0xAF05(_0xA47C) {
      for (var _0xA49B in _0xA4BA) {
        if (_0xA47C.toLowerCase() === _0xA49B.toLowerCase()) {
          return _0xA4BA[_0xA49B];
        }
      }
      ;
      return null;
    }
    function _0xAFFD(_0xA47C) {
      for (var _0xA49B in _0xBE09) {
        for (var _0xA4BA in _0xBE09[_0xA49B]) {
          if (_0xA4BA.toLowerCase() === _0xA47C.toLowerCase()) {
            return _0xBE09[_0xA49B][_0xA4BA];
          }
        }
      }
      ;
      return null;
    }
    function _0xBD8D(_0xA47C) {
      if (_0xBD4F != null) {
        $("#s_" + _0xBD4F.name).removeClass("server-selected");
      }
      ;
      _0xBD4F = _0xAFFD(_0xA47C) || (Object.keys(_0xA4BA).length > 0 ? _0xAF05(_0xA47C) : null);
      if (_0xBD4F != null) {
        $("#s_" + _0xBD4F.name).addClass("server-selected");
      }
    }
    function _0xBD6E(_0xA47C) {
      _0xA47C = _0xA47C.toLowerCase();
      var _0xA49B = $("#server-tab-" + _0xA47C);
      $(".server-active").css("background-color", "inherit");
      $("#server-tab-container").children().removeClass("server-active");
      _0xA49B.addClass("server-active");
      $(".server-active").css("background-color", _0xC0B3.uiMenuSubBackgroundColor);
      $("#server-content").children().css("display", "none");
      $("#servers-" + _0xA47C).css("display", "block");
    }
    function _0xA4D9(_0xA49B, _0xA517) {
      var _0xA4D9 = 0;
      for (tab in _0xB79E._ChatTabs) {
        var _0xA555 = _0xB79E._ChatTabs[tab];
        if ((_0xA49B & _0xA555.flags) != _0xA49B) {
          continue;
        }
        ;
        var _0xA4F8 = $("#chat-body-" + tab + " tr").length;
        if (_0xA4F8 >= _0xA555.maxMessages) {
          $("#chat-body-" + tab + " tr:first-child").remove();
        }
        ;
        var _0xA47C = _0xA4D9 > 0 ? _0xA517.cloneNode(true) : _0xA517;
        _0xA4D9++;
        var _0xA536 = document.createElement("tr");
        _0xA536.appendChild(_0xA47C);
        document.getElementById("chat-body-" + tab).appendChild(_0xA536);
        var _0xA4BA = $("#chat-container-" + tab);
        if (_0xA4BA[0].scrollHeight - _0xA4BA[0].scrollTop < _0xA4BA.outerHeight() + 150) {
          _0xA4BA.scrollTop(_0xA4BA[0].scrollHeight);
        }
      }
    }
    function _0xAD53(_0xA47C) {
      if (_0xA47C.length == 0) {
        return;
      } else {
        if (_0xA47C.charAt(0) == "/") {
          _0xB839(_0xA47C);
        } else {
          _0xB98E.sendPacket(new _0xB7FB.sendChat(_0xA47C, 0));
          _0xBE28("");
        }
      }
    }
    function _0xBE28(_0xA47C) {
      $("#chat-input").val(_0xA47C);
    }
    function _0xA4F8(_0xA47C) {
      $("#chat-input").val($("#chat-input").val() + _0xA47C);
    }
    function _0xB839(_0xA4D9) {
      var _0xA4F8 = _0xA4D9.split(" ");
      var _0xA49B = _0xA4F8[0];
      var _0xA47C = _0xA49B.substring(1);
      _0xBE28("");
      var _0xA4BA = false;
      Object.keys(_0xAA0E).findIndex(_0xA49B => {
        if (_0xAA0E[_0xA49B].triggers.findIndex(_0xA49B => {
          return _0xA49B.toUpperCase() === _0xA47C.toUpperCase();
        }) > -1 && _0xA4BA == false) {
          _0xAA0E[_0xA49B].action(_0xA4F8.slice(1));
          _0xA4BA = true;
          return;
        }
      });
      if (_0xA4BA == false) {
        _0xB98E.selfMsg("Invalid command!");
      }
    }
    function _0xBB9D() {
      var _0xA49B = $("#chat-tab-container");
      var _0xA47C = $("#chat-container");
      _0xA49B.empty();
      _0xA47C.empty();
      for (var _0xA4BA in _0xB79E._ChatTabs) {
        var _0xA4D9 = _0xB79E._ChatTabs[_0xA4BA];
        if (_0xA4D9.name.length == 0) {
          _0xA4D9.name = "Unnamed";
        }
        ;
        _0xA49B.append("<li class='chat-tab' id='chat-tab-" + _0xA4BA + "' name='" + _0xA4BA + "'><span>" + _0xA4D9.name + "</span></li>");
        _0xA47C.append("<div class='chat-inner-container' id='chat-container-" + _0xA4BA + "'><table class='chat-table'><tbody id='chat-body-" + _0xA4BA + "'></tbody></table></div>");
      }
      ;
      $(".chat-tab").on("click", function () {
        _0xBCF2($(this).attr("name"));
      }).css("border-color", _0xC0B3.uiBorderColor);
      if (_0xBD11 >= 0 && _0xBD11 < _0xB79E._ChatTabs.length) {
        _0xBCF2(_0xBD11);
      } else {
        _0xBCF2(0);
      }
    }
    function _0xBBBC() {
      for (var _0xA47C in _0xB79E._ChatTabs) {
        var _0xA49B = _0xB79E._ChatTabs[_0xA47C];
        if (!_0xA49B) {
          continue;
        }
        ;
        if (_0xA49B.name.length == 0) {
          _0xA49B.name = "Unnamed";
        }
        ;
        var _0xA4BA = $("#chat-tab-" + _0xA47C);
        if (_0xA4BA) {
          _0xA4BA.html("<span>" + _0xA49B.name + "</span>");
        }
      }
    }
    function _0xBCF2(_0xA47C) {
      $(".chat-tab").removeClass("chat-active-tab");
      $(".chat-inner-container").removeClass("chat-active-container").css("display", "none");
      _0xBD11 = _0xA47C;
      var _0xA49B = _0xB79E._ChatTabs[_0xA47C];
      if (!_0xA49B) {
        return;
      }
      ;
      $("#chat-tab-" + _0xA47C).addClass("chat-active-tab");
      $("#chat-container-" + _0xA47C).addClass("chat-active-container").css("display", "block");
    }
    function _0xA68B(_0xA4BA = 0) {
      var _0xA47C = $("#cte-tab-selector");
      _0xA47C.empty();
      for (var _0xA49B in _0xB79E._ChatTabs) {
        _0xA47C.append("<option value='" + _0xA49B + "'>" + _0xB79E._ChatTabs[_0xA49B].name + "</option>");
      }
      ;
      _0xA47C.prop("selectedIndex", _0xA4BA);
      _0xA47C.trigger("change");
    }
    function _0xA89A(_0xA4BA) {
      var _0xA517 = $("#cte-tab-selector").val();
      var _0xA4F8 = {
        name: "", 
        flags: 0, 
        maxMessages: 0
      };
      var _0xA49B = _0xB79E._ChatTabs[_0xA517];
      if (_0xA49B) {
        for (var _0xA4D9 in _0xA4F8) {
          _0xA4F8[_0xA4D9] = _0xA49B[_0xA4D9];
        }
      }
      ;
      $("#cte-tab-name").val(_0xA4F8.name);
      for (var _0xA536 in _0xA8F7) {
        var _0xA47C = (_0xA8F7[_0xA536] & _0xA4F8.flags) == _0xA8F7[_0xA536];
        $("#cte-type-" + _0xA536.toLowerCase()).prop("checked", _0xA47C);
      }
      ;
      $("#cte-max-messages").val(_0xA4F8.maxMessages);
    }
    function _0xA8D8(_0xA47C) {
      var _0xA4D9 = $("#cte-tab-selector").val();
      var _0xA555 = _0xB79E._ChatTabs[_0xA4D9];
      if (!_0xA555) {
        return;
      }
      ;
      var _0xA536 = _0xA555.name;
      var _0xA517 = $("#cte-tab-name").val();
      if (_0xA517.length == 0) {
        return;
      }
      ;
      var _0xA4BA = _0xA517 != _0xA536;
      var _0xA49B = 0;
      var _0xA4F8 = parseInt($("#cte-max-messages").val());
      for (var _0xA574 in _0xA8F7) {
        if ($("#cte-type-" + _0xA574.toLowerCase()).prop("checked")) {
          _0xA49B += _0xA8F7[_0xA574];
        }
      }
      ;
      _0xA555.name = _0xA517;
      _0xA555.flags = _0xA49B;
      _0xA555.maxMessages = _0xA4F8;
      if (_0xA4BA) {
        _0xA68B(_0xA4D9);
        _0xBBBC();
      }
    }
    function _0xA85C() {
      var _0xA47C = {name: "New", flags: 0, maxMessages: 100};
      _0xB79E._ChatTabs.push(_0xA47C);
      _0xA68B(_0xB79E._ChatTabs.length - 1);
      _0xBB9D();
    }
    function _0xA87B() {
      var _0xA47C = $("#cte-tab-selector").val();
      var _0xA49B = _0xB79E._ChatTabs[_0xA47C];
      if (!_0xA49B) {
        return;
      }
      ;
      _0xB79E._ChatTabs.splice(_0xA47C, 1);
      _0xA68B();
      _0xBB9D();
    }
    function _0xA8B9(_0xA4F8) {
      var _0xA47C = parseInt($("#cte-tab-selector").val());
      var _0xA4D9 = _0xB79E._ChatTabs[_0xA47C];
      if (!_0xA4D9) {
        return;
      }
      ;
      var _0xA49B;
      if (_0xA4F8) {
        _0xA49B = _0xA47C - 1;
      } else {
        _0xA49B = _0xA47C + 1;
      }
      ;
      var _0xA4BA = _0xB79E._ChatTabs[_0xA49B];
      if (!_0xA4BA) {
        return;
      }
      ;
      _0xB79E._ChatTabs[_0xA47C] = _0xA4BA;
      _0xB79E._ChatTabs[_0xA49B] = _0xA4D9;
      _0xA68B(_0xA49B);
      _0xBBBC();
      _0xBCF2(_0xA49B);
    }
    var _0xA83D = function (_0xA47C) {
      _0xB77F(_0xA47C, this.innerText, this.dataset.playerId, -1);
    };
    var _0xB896 = function (_0xA47C) {
      var _0xA4D9 = _0xA47C.offsetY;
      var _0xA4BA = Math.floor(_0xA4D9 / 20);
      if (_0xA4D9 % 20 < 5) {
        return;
      }
      ;
      var _0xA49B = _0xB98E.party[_0xA4BA];
      if (_0xA49B == null) {
        return;
      }
      ;
      _0xB77F(_0xA47C, _0xA49B.name, _0xA49B.id, _0xA4BA);
    };
    function _0xB77F(_0xA47C, _0xA4BA, _0xA49B, _0xA4F8) {
      var _0xA4D9 = document.getElementById("context-name");
      _0xA4D9.innerText = _0xA4BA || "An unnamed cell";
      _0xAA2D.data("selected", _0xA49B);
      _0xAA2D.data("party", _0xA4F8);
      $(".context-action").css("display", "none");
      if (_0xA4F8 == -1) {
        $("#menu-invite").css("display", "block");
        $("#menu-whisper").css("display", "block");
        $("#menu-block").css("display", "block");
        $("#menu-profile").css("display", "block");
      } else {
        $("#menu-whisper").css("display", "block");
        $("#menu-profile").css("display", "block");
        if (_0xB98E.isPartyLeader()) {
          $("#menu-pu_pr").css("display", "block");
          $("#menu-promote").css("display", "block");
          $("#menu-kick").css("display", "block");
        }
      }
      ;
      if (_0xB98E.spectate) {
        $("#menu-spectate").css("display", "block");
      }
      ;
      _0xAA2D.css("display", "block");
      _0xAA2D.css("left", Math.min(_0xB98E.mouseRawX, window.innerWidth - _0xAA2D.width()));
      _0xAA2D.css("top", Math.min(_0xB98E.mouseRawY, window.innerHeight - _0xAA2D.height()));
    }
    function _0xB668(_0xA49B, _0xA517, _0xA5B2, _0xA5D1, _0xA593, _0xA47C, _0xA4F8) {
      var _0xA4BA = (_0xA5B2 - _0xB98E.serverData.border.left) / _0xB98E.serverData.border.width * _0xB60B.width;
      var _0xA4D9 = (_0xA5D1 - _0xB98E.serverData.border.top) / _0xB98E.serverData.border.height * _0xB60B.height;
      _0xA49B.beginPath();
      _0xA49B.arc(_0xA4BA, _0xA4D9, _0xA593, 0, _0xB8F3, false);
      _0xA49B.fillStyle = _0xA47C;
      _0xA49B.fill();
      if (_0xA4F8) {
        var _0xA574 = _0xA49B.measureText(_0xA517).width / 2;
        var _0xA536 = _0xA4BA - _0xA574;
        var _0xA555 = _0xA4D9 - 5;
        _0xA49B.fillText(_0xA517, _0xA536, _0xA555);
      }
    }
    function _0xA935(_0xA49B) {
      var _0xA593 = _0xB5CD.pivot.x - _0xB950.stage.position.x / _0xB98E.scale + _0xB98E.mouseRawX * _0xB7BD.resolution / _0xB98E.scale;
      var _0xA5B2 = _0xB5CD.pivot.y - _0xB950.stage.position.y / _0xB98E.scale + _0xB98E.mouseRawY * _0xB7BD.resolution / _0xB98E.scale;
      var _0xA555 = null;
      var _0xA4F8;
      for (var _0xA4BA in _0xB98E.bucket) {
        _0xA4F8 = _0xB98E.bucket[_0xA4BA];
        if (_0xA4F8.size < 25) {
          continue;
        }
        ;
        var _0xA574 = _0xA4F8.y - _0xA4F8.size;
        var _0xA47C = _0xA4F8.y + _0xA4F8.size;
        var _0xA4D9 = _0xA4F8.x - _0xA4F8.size;
        var _0xA536 = _0xA4F8.x + _0xA4F8.size;
        if (_0xA5B2 > _0xA47C) {
          continue;
        }
        ;
        if (_0xA5B2 < _0xA574) {
          continue;
        }
        ;
        if (_0xA593 > _0xA536) {
          continue;
        }
        ;
        if (_0xA593 < _0xA4D9) {
          continue;
        }
        ;
        _0xA555 = _0xA4F8;
        break;
      }
      ;
      if (_0xA555 != null && _0xA555.playerId != 0 && (!_0xA49B || _0xA49B.target.id == "canvas")) {
        var _0xA517 = _0xB98E.playerRegistry.getPlayer(_0xA555.playerId);
        if (_0xA517 != null) {
          _0xB77F(_0xA49B, _0xA517.name, _0xA555.playerId, -1);
        }
      }
    }
    function _0xBEC3(_0xA47C) {
      if (_0xA47C.css("display") == "none") {
        _0xA47C.css("display", "block");
        _0xA47C.animate({opacity: 1}, 500);
      }
    }
    function _0xB133(_0xA47C) {
      if (_0xA47C.css("display") == "block" && _0xA47C.css("opacity") == 1) {
        _0xA47C.animate({opacity: 0}, 500, function () {
          _0xA47C.css("display", "none");
        });
      }
    }
    function _0xC12F(_0xA47C) {
      if (_0xA47C.css("display") == "block" && _0xA47C.css("opacity") == 1) {
        _0xB133(_0xA47C);
      } else {
        if (_0xA47C.css("display") == "none") {
          _0xBEC3(_0xA47C);
        }
      }
    }
    function _0xB152() {
      $(".popup-panel").each(function () {
        _0xB133($(this));
      });
    }
    function _0xBEA4() {
      _0xB1AF.show();
      if (_0xB98E.party.length == 0 || _0xB79E.cHidePartyPanel) {
        _0xAC5B.partyPanel.css("display", "none");
      }
      ;
      if (_0xB79E.cHideChat) {
        $("#chat-panel").css("display", "none");
      }
      ;
      if (_0xB79E.cHideMinimap) {
        $("#minimap-panel").css("display", "none");
      }
    }
    function _0xB114() {
      _0xB1AF.hide();
    }
    function _0xBE85() {
      $("#guest").hide();
      $("#account-loader").show();
    }
    function _0xB0F5() {
      $("#authed").hide();
      $("#account-loader").hide();
      $("#no_cookie_consent").hide();
      $("#guest").show();
    }
    function _0xA954(_0xA47C) {
      var _0xA49B = _0xA47C.attr("id");
      _0xB79E[_0xA49B] = _0xA47C.prop("checked");
      _0xBC38(_0xA49B);
    }
    function _0xA992(_0xA47C) {
      var _0xA49B = _0xA47C.attr("id");
      _0xB79E[_0xA49B] = _0xA47C.val();
      _0xBC38(_0xA49B, _0xA47C.val());
    }
    function _0xA973(_0xA47C) {
      var _0xA49B = _0xA47C.attr("id");
      _0xBC38(_0xA49B, _0xA47C.val());
    }
    function _0xBC38(_0xA47C, _0xA49B) {
      var _0xA45D = _0xA916[_0xA47C];
      if (_0xA45D != null) {
        _0xA45D(_0xA49B);
      }
    }
    function _0xBE47(_0xA45D, _0xA47C) {
      if (_0xA47C != null) {
        _0xC0B3[_0xA45D] = _0xA47C;
        _0xBC38(_0xA45D, _0xA47C);
      }
    }
    function _0xBC57() {
      if (!_0xAA4C.consented) {
        return;
      }
      ;
      _0xB79E.iChatWidth = $("#chat-panel").css("width");
      _0xB79E.iChatHeight = $("#chat-panel").css("height");
      window.localStorage.setItem("options", JSON.stringify(_0xB79E));
      window.localStorage.setItem("keybinds", JSON.stringify(_0xB304));
      window.localStorage.setItem("name", $("#name-box").val());
      window.localStorage.setItem("theme", JSON.stringify(_0xC0B3));
      window.localStorage.setItem("subpanel", JSON.stringify(_0xC075));
    }
    function _0xB459() {
      if (!_0xAA4C.consented) {
        return;
      }
      ;
      var _0xA593 = window.localStorage.getItem("theme");
      if (_0xA593) {
        _0xB551(_0xA593);
      }
      ;
      var _0xA4F8 = window.localStorage.getItem("keybinds");
      if (_0xA4F8) {
        _0xA4F8 = JSON.parse(_0xA4F8);
        for (var _0xA4BA in _0xA4F8) {
          if (_0xA4F8[_0xA4BA] != null && Number.isInteger(_0xA4F8[_0xA4BA])) {
            _0xB304[_0xA4BA] = _0xA4F8[_0xA4BA];
            _0xC1AB($("#" + _0xA4BA));
          }
        }
      }
      ;
      var _0xA536 = window.localStorage.getItem("options");
      if (_0xA536) {
        _0xA536 = JSON.parse(_0xA536);
        for (var _0xA4D9 in _0xB79E) {
          if (_0xA4D9 in _0xA536 === false) {
            _0xA536[_0xA4D9] = _0xB79E[_0xA4D9];
          }
        }
      } else {
        _0xA536 = _0xB79E;
      }
      ;
      for (var _0xA4D9 in _0xA536) {
        var _0xA49B = _0xA4D9.charAt(0);
        if (_0xA49B == "c") {
          if (_0xA536[_0xA4D9] == true) {
            var _0xA47C = $("#" + _0xA4D9);
            _0xA47C.prop("checked", _0xA536[_0xA4D9]);
            _0xA954(_0xA47C);
          }
        } else {
          if (_0xA49B == "s") {
            var _0xA555 = $("#" + _0xA4D9);
            _0xA555.val(_0xA536[_0xA4D9]);
            _0xA992(_0xA555);
          } else {
            if (_0xA49B == "i") {
              _0xB79E[_0xA4D9] = _0xA536[_0xA4D9];
            } else {
              if (_0xA49B == "r") {
                _0xB79E[_0xA4D9] = _0xA536[_0xA4D9];
                $("#" + _0xA4D9).val(_0xB79E[_0xA4D9]);
                _0xA973($("#" + _0xA4D9));
              } else {
                _0xB79E[_0xA4D9] = _0xA536[_0xA4D9];
              }
            }
          }
        }
      }
      ;
      $("#chat-panel").css("width", _0xB79E.iChatWidth);
      $("#chat-panel").css("height", _0xB79E.iChatHeight);
      if (!_0xB79E.cThemeEnabled) {
        _0xBC38("cThemeEnabled");
      }
      ;
      var _0xA517 = window.localStorage.getItem("name");
      if (_0xA517 != null) {
        $("#name-box").val(_0xA517);
      }
      ;
      var _0xA574 = window.localStorage.getItem("subpanel");
      if (_0xA574) {
        _0xA574 = JSON.parse(_0xA574);
        for (var _0xA4D9 in _0xA574) {
          if (!_0xA574[_0xA4D9]) {
            continue;
          }
          ;
          if (_0xA574[_0xA4D9].length != 0) {
            _0xC075[_0xA4D9] = _0xA574[_0xA4D9];
          }
        }
      }
      ;
      _0xC075.lockedName = "";
      _0xC208();
    }
    function _0xBBFA() {
      for (var _0xA49B in _0xAC1D) {
        var _0xA47C = _0xA49B.charAt(0);
        if (_0xA47C == "r") {
          $("#" + _0xA49B).val(_0xAC1D[_0xA49B]);
          _0xA973($("#" + _0xA49B));
        } else {
          if (_0xA47C == "u") {
            _0xC0B3[_0xA49B] = _0xAC1D[_0xA49B];
            $("#" + _0xA49B).spectrum("set", _0xC0B3[_0xA49B]);
            _0xBC38(_0xA49B, _0xC0B3[_0xA49B]);
          } else {
            if (_0xA47C == "a") {
              _0xBE47(_0xA49B, "");
            } else {
              _0xC0B3[_0xA49B] = _0xAC1D[_0xA49B];
            }
          }
        }
      }
      ;
      _0xC0B3._FoodColors = [];
    }
    function _0xB551(_0xA47C) {
      try {
        var _0xA4D9 = JSON.parse(_0xA47C);
        if (_0xA4D9.version == null || _0xA4D9.version != _0xC0D2) {
          _0xBBFA();
          return;
        }
        ;
        for (var _0xA4BA in _0xA4D9) {
          if (_0xC0B3[_0xA4BA] != null && _0xA4D9[_0xA4BA].length != 0) {
            _0xC0B3[_0xA4BA] = _0xA4D9[_0xA4BA];
            var _0xA49B = _0xA4BA.charAt(0);
            if (_0xA49B == "u") {
              $("#" + _0xA4BA).spectrum("set", _0xC0B3[_0xA4BA]);
              _0xBC38(_0xA4BA, _0xC0B3[_0xA4BA]);
            } else {
              if (_0xA49B == "r") {
                $("#" + _0xA4BA).val(_0xC0B3[_0xA4BA]);
                _0xA973($("#" + _0xA4BA));
              } else {
                if (_0xA49B == "a") {
                  _0xBE47(_0xA4BA, _0xC0B3[_0xA4BA]);
                }
              }
            }
          }
        }
      } catch (e) {
        _0xBBFA();
      } finally {
        _0xBBDB();
      }
    }
    function _0xB570(_0xA47C) {
      if (/\.(json)$/i.test(_0xA47C.name)) {
        var _0xA49B = new FileReader;
        _0xA49B.addEventListener("load", function () {
          if (!_0xB79E.cThemeEnabled) {
            _0xAE2C();
          }
          ;
          _0xBBFA();
          _0xB551(this.result);
        }, false);
        _0xA49B.readAsText(_0xA47C);
      }
    }
    function _0xAE2C() {
      $("#cThemeEnabled").prop("checked", true).trigger("change");
    }
    function _0xB858(_0xA4BA) {
      var _0xA4D9 = _0xA4BA.split(" ");
      var _0xA49B = "";
      var _0xA4F8 = null;
      for (var _0xA47C = 0; _0xA47C < _0xA4D9.length; _0xA47C++) {
        if (_0xA47C != 0) {
          _0xA49B += " ";
        }
        ;
        _0xA4F8 = _0xA4D9[_0xA47C];
        if (_0xACF6[_0xA4F8] != null) {
          if (_0xA4F8.startsWith(":") && _0xA4F8.endsWith(":")) {
            _0xA4F8 = _0xA4F8.substring(1, _0xA4F8.length - 1);
          }
          ;
          _0xA49B += '<img src="https://gota.io/emotes/' + _0xA4F8 + '.png" height="17" width="17" alt="' + _0xA4F8 + '">';
        } else {
          if (gifEmoteList[_0xA4F8] != null) {
            if (_0xA4F8.startsWith(":") && _0xA4F8.endsWith(":")) {
              _0xA4F8 = _0xA4F8.substring(1, _0xA4F8.length - 1);
            }
            ;
            _0xA49B += '<img src="https://gota.io/emotes/gifs/' + _0xA4F8 + '.gif" height="17" width="17" alt="' + _0xA4F8 + '">';
          } else {
            _0xA49B += _0xA4F8;
          }
        }
      }
      ;
      return _0xA49B;
    }
    const _0xBAA5 = {
      MODIFIER: 1, 
      PASSIVE: 2, 
      CONSUMABLE: 3, 
      DEBUFF: 4, 
      NONE: 0
    };
    var _0xBA29, _0xBA48;
    var _0xBA86 = {
      0: new _0xBA0A("Random", "random", _0xBAA5.NONE), 
      1: new _0xBA0A("Maximum Cells Upgrade", "extracells", _0xBAA5.MODIFIER), 
      2: new _0xBA0A("Extra Consumable Slot", "extraconsumable", _0xBAA5.MODIFIER), 
      3: new _0xBA0A("Merge", "merge", _0xBAA5.PASSIVE), 
      4: new _0xBA0A("Grow", "grow", _0xBAA5.PASSIVE), 
      5: new _0xBA0A("Speed", "speed", _0xBAA5.PASSIVE), 
      6: new _0xBA0A("Shield", "shield", _0xBAA5.PASSIVE), 
      7: new _0xBA0A("Virus", "spike", _0xBAA5.CONSUMABLE), 
      8: new _0xBA0A("Disrupt", "disrupt", _0xBAA5.CONSUMABLE), 
      9: new _0xBA0A("Teleport", "teleport", _0xBAA5.CONSUMABLE), 
      10: new _0xBA0A("Disrupt", "_disrupt", _0xBAA5.DEBUFF), 
      11: new _0xBA0A("Silver", "phoenix", _0xBAA5.MODIFIER), 
      12: new _0xBA0A("Consumable Shield", "_shield", _0xBAA5.CONSUMABLE), 
      13: new _0xBA0A("Magnet", "magnet", _0xBAA5.PASSIVE), 
      14: new _0xBA0A("Decay", "decay", _0xBAA5.CONSUMABLE), 
      15: new _0xBA0A("Decay", "_decay", _0xBAA5.DEBUFF)};
    function _0xBA0A(_0xA49B, _0xA47C, _0xA4BA) {
      this.name = _0xA49B;
      this.img = _0xA47C;
      this.type = _0xA4BA;
      this.image = null;
      this.texture = null;
    }
    function _0xB478() {
      for (var _0xA49B in _0xBA86) {
        var _0xA47C = _0xBA86[_0xA49B];
        var _0xA4D9 = "images/powerups/" + _0xA47C.img + ".png";
        var _0xA4BA = new Image;
        _0xA4BA.addEventListener("load", function (_0xA47C, _0xA49B) {
          _0xA47C.texture = _0xB931.Texture.from(_0xA49B);
        }.bind(null, _0xA47C, _0xA4BA));
        _0xA4BA.src = _0xA4D9;
        _0xA47C.image = _0xA4BA;
      }
      ;
      _0xBA48 = _0xB931.Texture.from("images/shield.png");
      _0xBA29 = _0xB931.Texture.from("images/debuff.png");
    }
    function _0xA66C() {
      this.passiveBuffs = {};
      this.passiveSortedBuffs = [];
      this.consumableBuffs = [];
      this.cache = null;
      this.nextCacheUpdate = 0;
      this.texture = null;
      this.bonusMaxCells = 0;
      this.onAddBuff = function (_0xA4BA, _0xA4D9, _0xA49B) {
        var _0xA47C = null;
        var _0xA4F8 = _0xBA86[_0xA4BA].type;
        if (_0xA4F8 != _0xBAA5.CONSUMABLE) {
          _0xA47C = this.passiveBuffs[_0xA4BA];
          if (_0xA47C) {
            _0xA47C.update(_0xA4D9, _0xA49B);
          } else {
            _0xA47C = new _0xA64D(_0xA4BA, _0xA4D9, _0xA49B);
            this.passiveBuffs[_0xA4BA] = _0xA47C;
            this.sortPassiveBuffs();
          }
          ;
          this.onPassiveBuffsUpdate();
          this.markCacheForUpdate();
        } else {
          _0xA47C = new _0xA64D(_0xA4BA, _0xA4D9, _0xA49B);
          this.consumableBuffs.push(_0xA47C);
          this.markCacheForUpdate();
        }
        ;
        if (_0xA47C) {
          _0xB98E.selfMsg("Recieved buff: " + _0xA47C.powerup.name);
        }
      };
      this.onRemoveBuff = function (_0xA4BA) {
        var _0xA47C = null;
        var _0xA4D9 = _0xBA86[_0xA4BA].type;
        if (_0xA4D9 != _0xBAA5.CONSUMABLE) {
          _0xA47C = this.passiveBuffs[_0xA4BA];
          if (_0xA47C) {
            delete this.passiveBuffs[_0xA4BA];
            this.sortPassiveBuffs();
            this.markCacheForUpdate();
            this.onPassiveBuffsUpdate();
          }
        } else {
          for (var _0xA49B = 0; _0xA49B < this.consumableBuffs.length; _0xA49B++) {
            _0xA47C = this.consumableBuffs[_0xA49B];
            if (_0xA47C.id == _0xA4BA) {
              this.consumableBuffs.splice(_0xA49B, 1);
              this.markCacheForUpdate();
              break;
            }
          }
        }
        ;
        if (_0xA47C) {
          _0xB98E.selfMsg("Lost buff: " + _0xA47C.powerup.name);
        }
      };
      this.clearBuffs = function (_0xA4D9) {
        if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
          return;
        }
        ;
        var _0xA4BA = _0xA4D9 ? _0xA4D9 : false;
        for (var _0xA49B in this.passiveBuffs) {
          var _0xA47C = this.passiveBuffs[_0xA49B];
          if (_0xA4BA && _0xA47C.powerup.type == _0xBAA5.MODIFIER) {} else {
            delete this.passiveBuffs[_0xA49B];
          }
        }
        ;
        this.sortPassiveBuffs();
        this.onPassiveBuffsUpdate();
        this.consumableBuffs = [];
        this.markCacheForUpdate();
      };
      this.sortPassiveBuffs = function () {
        this.passiveSortedBuffs = [];
        if (this.passiveBuffs.length == 0) {
          return;
        }
        ;
        for (var _0xA49B in this.passiveBuffs) {
          var _0xA47C = this.passiveBuffs[_0xA49B];
          if (_0xA47C.powerup.type == _0xBAA5.MODIFIER) {
            this.passiveSortedBuffs.splice(0, 0, _0xA49B);
          } else {
            this.passiveSortedBuffs.push(_0xA49B);
          }
        }
      };
      this.onPassiveBuffsUpdate = function () {
        this.bonusMaxCells = 0;
        if (this.passiveBuffs[1] != null) {
          var _0xA47C = this.passiveBuffs[1];
          this.bonusMaxCells = _0xA47C.stack * 16;
        }
      };
      this.update = function () {
        if (this.passiveSortedBuffs.length == 0 && this.consumableBuffs.length == 0) {
          _0xBA67.visible = false;
          return;
        }
        ;
        if (Date.now() >= this.nextCacheUpdate) {
          this.updateCache();
          this.nextCacheUpdate = Date.now() + 1e3;
        }
        ;
        if (!this.texture) {
          this.texture = _0xB931.Texture.from(this.cache.canvas);
          _0xBA67.texture = this.texture;
          _0xBA67.anchor.set(0);
        }
        ;
        _0xBA67.position.x = _0xBC76.width() + 20 - _0xB950.stage.position.x;
        _0xBA67.position.y = 15 - _0xB950.stage.position.y;
        _0xBA67.visible = true;
      };
      this.updateCache = function () {
        var _0xA49B = this.cache == null || this.cache.canvas == null ? document.createElement("canvas") : this.cache.canvas;
        var _0xA4D9 = Math.max(this.passiveSortedBuffs.length, this.consumableBuffs.length);
        _0xA49B.width = 55 * _0xA4D9;
        _0xA49B.height = 105;
        this.cache = _0xA49B.getContext("2d");
        this.cache.fillStyle = "#222";
        this.cache.font = "bold 16pt Calibri";
        var _0xA4F8 = 0, _0xA517 = 0;
        for (var _0xA4BA = 0; _0xA4BA < this.passiveSortedBuffs.length; _0xA4BA++) {
          var _0xA47C = this.passiveBuffs[this.passiveSortedBuffs[_0xA4BA]];
          _0xA47C.draw(this.cache, _0xA4F8, _0xA517);
          _0xA4F8 += 55;
        }
        ;
        _0xA4F8 = 0;
        _0xA517 = 55;
        for (var _0xA4BA = 0; _0xA4BA < this.consumableBuffs.length; _0xA4BA++) {
          var _0xA47C = this.consumableBuffs[_0xA4BA];
          _0xA47C.draw(this.cache, _0xA4F8, _0xA517);
          _0xA4F8 += 55;
        }
        ;
        if (this.texture) {
          this.texture.update();
        }
        ;
        this.nextCacheUpdate = Date.now() + 1e3;
      };
      this.markCacheForUpdate = function () {
        this.nextCacheUpdate = 0;
      };
    }
    const _0xA62E = Math.PI * 1.5;
    function _0xA64D(_0xA49B, _0xA4BA, _0xA47C) {
      this.id = _0xA49B;
      this.powerup = _0xBA86[_0xA49B];
      this.startTime = Date.now();
      this.expireTime = _0xA47C;
      this.stack = _0xA4BA;
      this.update = function (_0xA49B, _0xA47C) {
        this.startTime = Date.now();
        this.expireTime = _0xA47C;
        this.stack = _0xA49B;
      };
      this.getCooldown = function () {
        if (Date.now() >= this.expireTime) {
          return 2 * Math.PI;
        } else {
          var _0xA49B = this.expireTime - Date.now();
          var _0xA4BA = this.expireTime - this.startTime;
          var _0xA47C = Math.min(_0xA49B / _0xA4BA, 1) * 2;
          return _0xA47C * Math.PI;
        }
      };
      this.draw = function (_0xA47C, _0xA49B, _0xA4BA) {
        _0xA47C.drawImage(this.powerup.image, _0xA49B, _0xA4BA, 50, 50);
        if (this.stack > 1) {
          _0xA47C.fillStyle = "#000";
          _0xA47C.fillText(this.stack, _0xA49B + 35, _0xA4BA + 17);
        }
        ;
        if (this.expireTime > 0) {
          _0xA47C.beginPath();
          _0xA47C.moveTo(_0xA49B + 25, _0xA4BA + 25);
          _0xA47C.arc(_0xA49B + 25, _0xA4BA + 25, 25, _0xA62E, _0xA62E - this.getCooldown(), false);
          _0xA47C.closePath();
          _0xA47C.globalAlpha = 0.75;
          _0xA47C.fillStyle = "#222";
          _0xA47C.fill();
          _0xA47C.globalAlpha = 1;
        }
      };
    }
    const _0xB6A6 = ["hearts"];
    var _0xB687 = [];
    function _0xB03B() {
      this.delay = 0;
      this.frames = [];
      this.isGif = true;
      this.push = function (_0xA47C) {
        this.frames.push(_0xA47C);
      };
      this.getFrame = function (_0xA47C) {
        return this.frames[_0xA47C];
      };
      this.getLength = function () {
        return this.frames.length;
      };
      this.getTexture = function () {
        return this.getFrame(Math.floor(_0xB361 / this.delay) % this.getLength());
      };
      this.loadFromFrameData = function (_0xA555) {
        if (_0xA555.length === 0) {
          return;
        }
        ;
        const _0xA593 = document.createElement("canvas");
        const _0xA5B2 = _0xA593.getContext("2d");
        const _0xA4BA = document.createElement("canvas");
        const _0xA4D9 = _0xA4BA.getContext("2d");
        const _0xA517 = _0xA555[0].getImage();
        this.delay = _0xA555[0].frameInfo.delay * 10;
        _0xA593.width = _0xA517.width;
        _0xA593.height = _0xA517.height;
        _0xA4BA.width = _0xA517.width;
        _0xA4BA.height = _0xA517.height;
        for (const _0xA536 of _0xA555) {
          _0xA5B2.clearRect(0, 0, _0xA593.width, _0xA593.height);
          _0xA5B2.drawImage(_0xA4BA, 0, 0);
          const _0xA47C = _0xA536.getImage();
          const _0xA49B = _0xA47C.getContext("2d");
          _0xA4D9.drawImage(_0xA47C, 0, 0);
          _0xA49B.clearRect(0, 0, _0xA47C.width, _0xA47C.height);
          _0xA49B.drawImage(_0xA4BA, 0, 0);
          const {frameInfo} = _0xA536;
          const {disposal} = frameInfo;
          if (disposal === 2) {
            _0xA4D9.clearRect(frameInfo.x, frameInfo.y, frameInfo.width, frameInfo.height);
          } else {
            if (disposal === 3) {
              _0xA4D9.clearRect(0, 0, _0xA4BA.width, _0xA4BA.height);
              _0xA4D9.drawImage(_0xA593, 0, 0);
            }
          }
          ;
          this.push(_0xB931.Texture.from(_0xA47C));
        }
      };
    }
    function _0xBEE2(_0xA47C) {
      for (var _0xA49B = _0xA47C.length - 1; _0xA49B > 0; _0xA49B--) {
        var _0xA4BA = Math.floor(Math.random() * (_0xA49B + 1));
        var _0xA4D9 = _0xA47C[_0xA49B];
        _0xA47C[_0xA49B] = _0xA47C[_0xA4BA];
        _0xA47C[_0xA4BA] = _0xA4D9;
      }
      ;
      return _0xA47C;
    }
    var _0xB171 = [];
    var _0xB190 = [];
    for (var _0xB1CE = 0; _0xB1CE < 180; _0xB1CE++) {
      var _0xA9D0 = tinycolor({h: _0xB1CE * 2, s: 97.25, v: 100});
      var _0xA9EF = _0xA9D0.toRgb();
      _0xB171[_0xB1CE] = (_0xA9EF.r << 16) + (_0xA9EF.g << 8) + _0xA9EF.b;
      _0xB190[_0xB1CE] = _0xA9D0.toHexString();
    }
    ;
    const _0xBB02 = _0xBEE2(_0xB171.slice(0));
    const _0xBB21 = _0xBEE2(_0xB190.slice(0));
    delete _0xB171;
    delete _0xB190;
    if (_0xAD72.enabled && _0xAD72.foodColors) {
      _0xAFBF = function (_0xA47C) {
        return _0xAD72.foodColors[_0xA47C % _0xAD72.foodColors.length];
      };
    }
    ;
    const _0xA81E = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614"];
    const _0xC110 = {};
    function _0xA5D1(_0xA47C) {
      if (_0xA47C === 0 || _0xA47C === _0xB98E.playerId) {
        return "You cannot block that player.";
      }
      ;
      if (_0xA5B2.includes(_0xA47C)) {
        delete _0xA5B2[_0xA47C];
        return "Unblocked player with ID: " + _0xA47C;
      }
      ;
      _0xA5B2.push(_0xA47C);
      return "Blocked player with ID: " + _0xA47C;
    }
    const _0xAA0E = {
      whisper: {
        description: "Whisper a player by ID", 
        triggers: ["whisper", "t", "w"], 
        action: function (_0xA47C) {
      var _0xA49B = parseInt(_0xA47C[0]);
      if (isNaN(_0xA49B)) {
        _0xB98E.selfMsg("Invalid player id.");
        return;
      }
      ;
      var _0xA4BA = _0xA47C.slice(1).join(" ");
      if (_0xA4BA.length != 0) {
        _0xB98E.sendPacket(new _0xB7FB.sendWhisper(_0xA49B, _0xA4BA));
      }
      ;
      _0xBE28("/t " + _0xA49B + " ");
    }}, reply_whisper: {description: "Reply to previous whisper", triggers: ["reply", "r"], action: function (_0xA47C) {
      var _0xA49B = _0xA47C.join(" ");
      if (_0xA49B.length != 0) {
        _0xB98E.sendPacket(new _0xB7FB.sendWhisper(0, _0xA49B));
      }
      ;
      _0xBE28("/r ");
    }}, party_chat: {description: "Send a message to other party members", triggers: ["party", "p"], action: function (_0xA47C) {
      var _0xA49B = _0xA47C.join(" ");
      if (_0xA49B.length != 0) {
        _0xB98E.sendPacket(new _0xB7FB.sendChat(_0xA49B, 1));
      }
      ;
      _0xBE28("/p ");
    }}, invite: {description: "Invite a player to the party", triggers: ["invite", "i"], action: function (_0xA47C) {
      var _0xA49B = parseInt(_0xA47C[0]);
      if (!isNaN(_0xA49B)) {
        _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(0, _0xA49B));
      } else {
        _0xB98E.selfMsg("Invalid ID.");
      }
    }}, leave: {description: "Leave your current party", triggers: ["leave", "l"], action: function (_0xA47C) {
      _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(3, 0));
    }}, promote: {description: "Promote a party member to leader", triggers: ["promote"], action: function (_0xA47C) {
      var _0xA49B = parseInt(_0xA47C[0]);
      if (!isNaN(_0xA49B)) {
        _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(2, _0xA49B));
      } else {
        _0xB98E.selfMsg("Invalid ID.");
      }
    }}, kick: {description: "Kick a player from the party", triggers: ["kick"], action: function (_0xA47C) {
      var _0xA49B = parseInt(_0xA47C[0]);
      if (!isNaN(_0xA49B)) {
        _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(1, _0xA49B));
      } else {
        _0xB98E.selfMsg("Invalid ID.");
      }
    }}, clear: {description: "Clear the chat", triggers: ["clear"], action: function (_0xA47C) {
      var _0xA49B = document.getElementById("chat-body");
      while (_0xA49B.firstChild != null) {
        _0xA49B.removeChild(_0xA49B.firstChild);
      }
    }}, info: {description: "Get your current ID", triggers: ["info"], action: function (_0xA47C) {
      if (_0xB98E.playerId > 0) {
        _0xB98E.selfMsg("Your id is " + _0xB98E.playerId);
      } else {
        _0xB98E.selfMsg("You need to be connected to a server to use this command.");
      }
    }}, scrimmenu: {description: "Show the scrimmage menu", triggers: ["scrimmenu"], action: function (_0xA47C) {
      _0xBCB4.css("display", _0xBCB4.css("display") == "none" ? "block" : "none");
    }}, join: {description: "Join a party with a code", triggers: ["join", "j"], action: function (_0xA47C) {
      var _0xA49B = _0xA47C[0];
      if (_0xA49B != null && _0xA49B.length != 0) {
        _0xB98E.sendPacket(new _0xB7FB.sendPartyJoin(_0xA49B));
      }
    }}, private: {description: "Set the party to private", triggers: ["private"], action: function (_0xA47C) {
      _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(4, 1));
    }}, public: {description: "Allow players to join the party without an invite", triggers: ["public"], action: function (_0xA47C) {
      _0xB98E.sendPacket(new _0xB7FB.sendPartyAction(4, 0));
    }}, reset_chat: {description: "Reset chat size", triggers: ["resetchat"], action: function (_0xA47C) {
      $("#chat-panel").css("width", "360px");
      $("#chat-panel").css("height", "250px");
    }}, reset_chat_tabs: {description: "Reset chat tab settings", triggers: ["resetchattabs"], action: function (_0xA47C) {
      _0xB79E._ChatTabs = JSON.parse(JSON.stringify(_0xABC0));
      _0xA68B();
      _0xBB9D();
    }}, spectate: {description: "Spectate a player", triggers: ["spectate", "s"], action: function (_0xA47C) {
      var _0xA49B = parseInt(_0xA47C[0]);
      if (!isNaN(_0xA49B)) {
        _0xB98E.sendPacket(new _0xB7FB.sendSpectate(_0xA49B));
      } else {
        _0xB98E.selfMsg("Invalid ID.");
      }
    }}, disconnect: {description: "Disconnect from the server", triggers: ["disconnect"], action: function (_0xA47C) {
      _0xB98E.disconnect();
    }}, account: {description: "Get Account UID", triggers: ["account"], action: function (_0xA47C) {
      if (_0xC246 === null) {
        _0xB98E.selfMsg("You are not logged in.");
        return;
      }
      ;
      _0xB98E.selfMsg("UID: " + _0xC246.uid);
    }}, block: {description: "Block or unblock a player by ID", triggers: ["block", "b"], action: function (_0xA47C) {
      var _0xA4BA = parseInt(_0xA47C[0]);
      if (!isNaN(_0xA4BA)) {
        var _0xA49B = _0xA5D1(_0xA4BA);
        _0xB98E.selfMsg(_0xA49B);
      }
    }}};
    const _0xBB40 = ["4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP"];
    const _0xB01C = ["Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap"];
    const _0xB0D6 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    const _0xB323 = ["", "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];
    var _0xAD15 = ["heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "fire", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "cat", "cupid", "sword", "shield", "tornado", "radioactive", "rocket", "wave", "letter_a", "letter_b", "letter_c", "letter_d", "letter_e", "letter_f", "letter_g", "letter_h", "letter_i", "letter_j", "letter_k", "letter_l", "letter_m", "letter_n", "letter_o", "letter_p", "letter_q", "letter_r", "letter_s", "letter_t", "letter_u", "letter_v", "letter_w", "letter_x", "letter_y", "letter_z", "number_0", "number_1", "number_2", "number_3", "number_4", "number_5", "number_6", "number_7", "number_8", "number_9"];
    var _0xAD34 = [];
    var _0xAD91 = null;
    const _0xBAC4 = [16708096, 13294378, 9356863, 3847498, 42578, 42612, 108702, 43973, 44527, 36821, 29371, 21669, 3027346, 6696593, 9578383, 12393101, 15532172, 15468916, 15537243, 15538497, 15538980, 15951139, 16225309, 16761359];
    const _0xBAE3 = _0xBAC4.length * 100 - 1;
    function _0xAE89(_0xA4D9) {
      if (_0xA4D9 <= 0) {
        return "0:00";
      }
      ;
      var _0xA47C = Math.floor(_0xA4D9 / 3600);
      var _0xA49B = Math.floor((_0xA4D9 - _0xA47C * 3600) / 60);
      var _0xA4BA = _0xA4D9 - _0xA47C * 3600 - _0xA49B * 60;
      if (_0xA49B < 10 && _0xA47C > 0) {
        _0xA49B = "0" + _0xA49B;
      }
      ;
      if (_0xA4BA < 10) {
        _0xA4BA = "0" + _0xA4BA;
      }
      ;
      return (_0xA47C > 0 ? _0xA47C + ":" : "") + _0xA49B + ":" + _0xA4BA;
    }
    function _0xAE6A(_0xA49B) {
      var _0xA47C = _0xA49B.toString().split(".");
      _0xA47C[0] = _0xA47C[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return _0xA47C.join(".");
    }
    function _0xB703(_0xA4D9) {
      var _0xA49B = _0xA4D9.split("");
      for (var _0xA4BA = 0; _0xA4BA < _0xA49B.length; _0xA4BA++) {
        var _0xA47C = _0xA49B[_0xA4BA];
        if (_0xA47C == "_") {
          if (_0xA4BA + 1 < _0xA49B.length) {
            _0xA49B[_0xA4BA + 1] = _0xA49B[_0xA4BA + 1].toUpperCase();
          }
          ;
          _0xA49B[_0xA4BA] = " ";
        }
        ;
        if (_0xA4BA == 0) {
          _0xA49B[_0xA4BA] = _0xA49B[_0xA4BA].toUpperCase();
        }
      }
      ;
      return _0xA49B.join("");
    }
    function _0xB24A(_0xA4BA) {
      if (_0xA4BA.indexOf("#") === 0) {
        _0xA4BA = _0xA4BA.slice(1);
      }
      ;
      if (_0xA4BA.length === 3) {
        _0xA4BA = _0xA4BA[0] + _0xA4BA[0] + _0xA4BA[1] + _0xA4BA[1] + _0xA4BA[2] + _0xA4BA[2];
      }
      ;
      if (_0xA4BA.length !== 6) {
        throw new Error("Invalid HEX color.");
      }
      ;
      var _0xA4D9 = parseInt(_0xA4BA.slice(0, 2), 16), _0xA49B = parseInt(_0xA4BA.slice(2, 4), 16), _0xA47C = parseInt(_0xA4BA.slice(4, 6), 16);
      return _0xA4D9 * 0.299 + _0xA49B * 0.587 + _0xA47C * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
    function _0xAF43(_0xA47C) {
      if (_0xA47C.dataTransfer.items) {
        for (var _0xA4BA = 0; _0xA4BA < _0xA47C.dataTransfer.items.length; _0xA4BA++) {
          if (_0xA47C.dataTransfer.items[_0xA4BA].kind === "file") {
            var _0xA49B = _0xA47C.dataTransfer.items[_0xA4BA].getAsFile();
            return _0xA49B;
          }
        }
      } else {
        for (var _0xA4BA = 0; _0xA4BA < _0xA47C.dataTransfer.files.length; _0xA4BA++) {
          return _0xA47C.dataTransfer.files[_0xA4BA];
        }
      }
    }
    function _0xAC7A(_0xA4D9, _0xA49B, _0xA4F8) {
      var _0xA4BA = new Blob([_0xA49B], {type: _0xA4F8});
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(_0xA4BA, _0xA4D9);
      } else {
        var _0xA47C = document.createElement("a"), _0xA517 = URL.createObjectURL(_0xA4BA);
        _0xA47C.href = _0xA517;
        _0xA47C.download = _0xA4D9;
        document.body.appendChild(_0xA47C);
        _0xA47C.click();
        setTimeout(function () {
          document.body.removeChild(_0xA47C);
          window.URL.revokeObjectURL(_0xA517);
        }, 0);
      }
    }
    _0xB288.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    const _0xB9EB = {ALL: 3, PARTY: 2, SELF: 1, NONE: 0};
    const _0xB62A = {DEFAULT: 0, SHORT: 1};
    const _0xC094 = {THICK: 9, THIN: 2, NONE: 0};
    const _0xB05A = {ULTRA: 1, HIGH: 0.8, MEDIUM: 0.7, LOW: 0.5, VERYLOW: 0.25};
    const _0xAB63 = {MAP: 0, MODE: 1, SIZE: 2, STARTMASS: 3, LOCK: 4, PLAYER_UPDATE: 5, PLAYER_LIST: 6, VIRUS_DENSITY: 7, PUBLIC: 8, PASSWORD: 9, NAME: 10, RESPAWN_DELAY: 11, AUTOSPLIT: 12};
    const _0xBCD3 = {0: "Spectator", 1: "Blue", 2: "Red", 3: "Green", 4: "Yellow", 5: "Purple", 6: "Orange", 7: "Pink", 8: "Brown"};
    const _0xA536 = {FAILURE: 1, SUCCESS: 0};
    const _0xBF7D = {ERROR: -1, NOT_LOADED: 0, LOADING: 1, LOADED: 2};
    const _0xA8F7 = {ALL: 1, PARTY: 2, WHISPER: 4, SYSTEM: 8, ADMIN: 16};
    const _0xB8B5 = {UNKNOWN: -1, ALIVE: 0, DEAD: 1, SPECTATE: 2};
    var _0xAB44 = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];
    function _0xB6C5(_0xA49B, _0xA4BA, _0xA47C) {
      this.font = _0xA49B;
      this.size = _0xA4BA;
      this.outlineColor = _0xA47C ? _0xA47C : "#000";
    }
    const _0xB6E4 = {0: new _0xB6C5("Verdana", 54), 1: new _0xB6C5("ampad", 75), 2: new _0xB6C5("burnstown", 81), 3: new _0xB6C5("chlorinar", 75), 4: new _0xB6C5("Facon", 75), 5: new _0xB6C5("archistico", 75), 6: new _0xB6C5("breakaway", 81), 7: new _0xB6C5("conformity", 81), 8: new _0xB6C5("electroharmonix", 70), 9: new _0xB6C5("PWJoyeuxNoel", 70), 10: new _0xB6C5("leckerli-one", 75), 101: new _0xB6C5("IceCaps", 81, "#00c9ff"), 102: new _0xB6C5("BrazierFlame", 81, "#e25822")};
    const _0xABFE = _0xB6E4[0];
    function _0xAF62(_0xA45D) {
      return _0xA45D > 0 && _0xB6E4[_0xA45D] ? _0xB6E4[_0xA45D] : _0xABFE;
    }
    for (var _0xB1ED in _0xB6E4) {
      var _0xADCF = _0xB6E4[_0xB1ED];
      var _0xB722 = new FontFaceObserver(_0xADCF.font);
      _0xB722.load(null, 1e4).then(() => {}, () => {});
      if (_0xB1ED > 0 && _0xB1ED < 64) {
        $("#spNameFont").append('<option value="' + _0xB1ED + '" style="font-family:' + _0xADCF.font + '">' + _0xADCF.font.charAt(0).toUpperCase() + _0xADCF.font.slice(1) + "</option>");
      }
    }
    ;
    function _0xC1CA() {
      if (!_0xAA4C.consented) {
        return;
      }
      ;
      var _0xA49B = localStorage.getItem("version");
      var _0xA47C = version.split(".");
      if (_0xA49B === null) {
        localStorage.setItem("version", version);
        return;
      }
      ;
      _0xA49B = _0xA49B.split(".");
      if (_0xA47C[0] != _0xA49B[0] || _0xA47C[1] != _0xA49B[1]) {
        localStorage.setItem("version", version);
        _0xB133(_0xB5EC);
        _0xBEC3($("#popup-changelog"));
      }
    }
    $(window).focus(function () {
      _0xB269 = true;
    });
    $(window).blur(function () {
      _0xB269 = false;
    });
    function _0xBDAC() {
      if (_0xB269) {
        return;
      }
      ;
      if (!("Notification" in window)) {
        return;
      }
      ;
      if (Notification.permission === "granted") {
        var _0xA47C = new Notification("Your match has started.", {icon: "https://gota.io/assets/images/favicon.png"});
      }
    }
    var _0xAA4C = new _0xAA6B;
    function _0xAA6B() {
      this.consented = false;
      this.policyID = "CP_0918_01";
      this.policyLink = "https://gota.io/policies/privacy.html?v=" + this.policyID + "#cookies";
      this.consentOption = $("#cc_acceptCookies");
      this.consentCookie = {name: "cookieConsent", value: "yes+" + this.policyID, exdays: 730, path: "/web"};
      this.cookieBanner = {banner: $("#cookie-banner"), decline: $("#declineCookies"), accept: $("#acceptCookies"), handlersBound: false};
      this.init = function () {
        this.backwardsCompatable();
        this.consentOption.on("change", function (_0xA47C) {
          _0xAA4C.consentHandler($(this).prop("checked"));
        });
        var _0xA47C = this.getConsentCookie();
        if (_0xA47C === this.consentCookie.value) {
          this.consentHandler(true);
          this.showCookieBanner(false);
        } else {
          this.consentHandler(false);
          this.showCookieBanner(true);
        }
      };
      this.consentHandler = function (_0xA47C) {
        this.consented = _0xA47C;
        aiptag.consented = _0xA47C;
        this.consentOption.prop("checked", _0xA47C);
        if (!_0xA47C) {
          this.deleteConsentCookie();
          if (firebase.auth().currentUser !== null) {
            firebase.auth().signOut().then(function () {}).catch(_0xA45D => {});
          }
          ;
          $("#authed").hide();
          $("#account-loader").hide();
          $("#guest").hide();
          $("#no_cookie_consent").show();
          this.showCookieBanner(true);
        } else {
          this.createConsentCookie();
          this.showCookieBanner(false);
          _0xB459();
          _0xB532();
          $("#no_cookie_consent").hide();
          if ($("#account-loader").css("display") !== "none") {
            $("#guest").hide();
          } else {
            $("#guest").show();
          }
        }
      };
      this.showCookieBanner = function (_0xA47C) {
        if (_0xA47C) {
          if (!this.cookieBanner.handlersBound) {
            this.bindBannerHandlers();
            this.cookieBanner.handlersBound = true;
          }
          ;
          this.cookieBanner.banner.slideDown();
        } else {
          this.cookieBanner.banner.slideUp();
        }
      };
      this.bindBannerHandlers = function () {
        this.cookieBanner.decline.on("click", function (_0xA47C) {
          _0xAA4C.consentHandler(false);
          _0xAA4C.showCookieBanner(false);
        });
        this.cookieBanner.accept.on("click", function (_0xA47C) {
          _0xAA4C.consentHandler(true);
          _0xAA4C.showCookieBanner(false);
        });
        $("#cookie-banner .description").append(' <a href="' + this.policyLink + '" target="_blank">Our Cookie Policy!</a>');
      };
      this.createConsentCookie = function () {
        var _0xA47C = new Date;
        _0xA47C.setTime(_0xA47C.getTime() + this.consentCookie.exdays * 24 * 60 * 60 * 1e3);
        var _0xA49B = "expires=" + _0xA47C.toUTCString();
        document.cookie = this.consentCookie.name + "=" + this.consentCookie.value + ";" + _0xA49B + ";path=" + this.consentCookie.path + ";";
      };
      this.deleteConsentCookie = function () {
        document.cookie = this.consentCookie.name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.consentCookie.path + ";";
      };
      this.getConsentCookie = function () {
        var _0xA4F8 = this.consentCookie.name + "=";
        var _0xA4BA = decodeURIComponent(document.cookie);
        var _0xA49B = _0xA4BA.split(";");
        for (var _0xA4D9 = 0; _0xA4D9 < _0xA49B.length; _0xA4D9++) {
          var _0xA47C = _0xA49B[_0xA4D9];
          while (_0xA47C.charAt(0) == " ") {
            _0xA47C = _0xA47C.substring(1);
          }
          ;
          if (_0xA47C.indexOf(_0xA4F8) == 0) {
            return _0xA47C.substring(_0xA4F8.length, _0xA47C.length);
          }
        }
        ;
        return false;
      };
      this.backwardsCompatable = function () {
        var _0xA4F8 = "cookieconsent_status=";
        var _0xA4BA = decodeURIComponent(document.cookie);
        var _0xA49B = _0xA4BA.split(";");
        var _0xA517 = null;
        for (var _0xA4D9 = 0; _0xA4D9 < _0xA49B.length; _0xA4D9++) {
          var _0xA47C = _0xA49B[_0xA4D9];
          while (_0xA47C.charAt(0) == " ") {
            _0xA47C = _0xA47C.substring(1);
          }
          ;
          if (_0xA47C.indexOf(_0xA4F8) == 0) {
            _0xA517 = _0xA47C.substring(_0xA4F8.length, _0xA47C.length);
          }
        }
        ;
        if (_0xA517 === "allow") {
          this.createConsentCookie();
          document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;";
        } else {
          document.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;";
        }
      };
    }
    var _0xC037 = new _0xC056;
    function _0xC056() {
      this.playCounter = 0;
      this.incrementPlay = function () {
        if (_0xB5AE) {
          return false;
        }
        ;
        this.playCounter++;
        if (this.playCounter % 5 == 1) {
          return true;
        } else {
          return false;
        }
      };
    }
    function _0xB20C() {
      if (typeof aipPlayer != "undefined") {
        aiptag.cmd.player.push(function () {
          adplayer = new aipPlayer({AD_WIDTH: 960, AD_HEIGHT: 540, AD_CENTERPLAYER: false, LOADING_TEXT: "Advertisement Loading...", PREROLL_ELEM: document.getElementById("preroll"), AIP_COMPLETE: function () {
            if (!_0xB98E.spectate) {
              _0xB98E.play();
            } else {
              _0xB98E.spec();
            }
          }});
        });
      } else {}
    }
    _0xB20C();
    _0xC018();
  }
  showSideMenu = _0xA49B;
  hideSideMenu = _0xA4BA;
  _0xA47C("gota.io", 1, "");
  version = "3.6.4";
  ;
  $(_0xA4D9);
}());
