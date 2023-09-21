"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var t=["vs/workbench/services/keybinding/browser/keyboardLayouts/_.contribution","require","exports","vs/workbench/services/keybinding/browser/keyboardLayouts/de.linux","vs/workbench/services/keybinding/browser/keyboardLayouts/en.linux","vs/workbench/services/keybinding/browser/keyboardLayouts/es.linux","vs/workbench/services/keybinding/browser/keyboardLayouts/fr.linux","vs/workbench/services/keybinding/browser/keyboardLayouts/ru.linux","vs/workbench/services/keybinding/browser/keyboardLayouts/layout.contribution.linux"],i=function(r){for(var e=[],a=0,o=r.length;a<o;a++)e[a]=t[r[a]];return e};define(t[0],i([1,2]),function(r,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$Zcc=void 0;class a{get layoutInfos(){return this.a}constructor(){this.a=[]}registerKeyboardLayout(u){this.a.push(u)}}e.$Zcc=a,a.INSTANCE=new a}),define(t[3],i([1,2,0]),function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.$Zcc.INSTANCE.registerKeyboardLayout({layout:{model:"pc104",group:0,layout:"de",variant:"",options:"",rules:"base"},secondaryLayouts:[],mapping:{Sleep:[],WakeUp:[],KeyA:["a","A","\xE6","\xC6",0],KeyB:["b","B","\u201C","\u2018",0],KeyC:["c","C","\xA2","\xA9",0],KeyD:["d","D","\xF0","\xD0",0],KeyE:["e","E","\u20AC","\u20AC",0],KeyF:["f","F","\u0111","\xAA",0],KeyG:["g","G","\u014B","\u014A",0],KeyH:["h","H","\u0127","\u0126",0],KeyI:["i","I","\u2192","\u0131",0],KeyJ:["j","J","\u0323","\u0307",0],KeyK:["k","K","\u0138","&",0],KeyL:["l","L","\u0142","\u0141",0],KeyM:["m","M","\xB5","\xBA",0],KeyN:["n","N","\u201D","\u2019",0],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\xFE","\xDE",0],KeyQ:["q","Q","@","\u03A9",0],KeyR:["r","R","\xB6","\xAE",0],KeyS:["s","S","\u017F","\u1E9E",0],KeyT:["t","T","\u0167","\u0166",0],KeyU:["u","U","\u2193","\u2191",0],KeyV:["v","V","\u201E","\u201A",0],KeyW:["w","W","\u0142","\u0141",0],KeyX:["x","X","\xAB","\u2039",0],KeyY:["z","Z","\u2190","\xA5",0],KeyZ:["y","Y","\xBB","\u203A",0],Digit1:["1","!","\xB9","\xA1",0],Digit2:["2",'"',"\xB2","\u215B",0],Digit3:["3","\xA7","\xB3","\xA3",0],Digit4:["4","$","\xBC","\xA4",0],Digit5:["5","%","\xBD","\u215C",0],Digit6:["6","&","\xAC","\u215D",0],Digit7:["7","/","{","\u215E",0],Digit8:["8","(","[","\u2122",0],Digit9:["9",")","]","\xB1",0],Digit0:["0","=","}","\xB0",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:["\xDF","?","\\","\xBF",0],Equal:["\u0301","\u0300","\u0327","\u0328",0],BracketLeft:["\xFC","\xDC","\u0308","\u030A",0],BracketRight:["+","*","~","\xAF",0],Backslash:["#","'","\u2019","\u0306",0],Semicolon:["\xF6","\xD6","\u030B","\u0323",0],Quote:["\xE4","\xC4","\u0302","\u030C",0],Backquote:["\u0302","\xB0","\u2032","\u2033",0],Comma:[",",";","\xB7","\xD7",0],Period:[".",":","\u2026","\xF7",0],Slash:["-","_","\u2013","\u2014",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:["","","","",0],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:["/","/","/","/",0],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:[],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",",","",",",0],IntlBackslash:["<",">","|","\u0331",0],ContextMenu:[],Power:[],NumpadEqual:[],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:[],NumpadParenRight:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:["\r","\r","\r","\r",0],MetaRight:[".",".",".",".",0],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}})}),define(t[4],i([1,2,0]),function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.$Zcc.INSTANCE.registerKeyboardLayout({layout:{model:"pc105",group:0,layout:"us",variant:"",options:"",rules:"evdev",isUSStandard:!0},secondaryLayouts:[{model:"pc105",group:0,layout:"cn",variant:"",options:"",rules:"evdev"}],mapping:{Sleep:[],WakeUp:[],KeyA:["a","A","a","A",0],KeyB:["b","B","b","B",0],KeyC:["c","C","c","C",0],KeyD:["d","D","d","D",0],KeyE:["e","E","e","E",0],KeyF:["f","F","f","F",0],KeyG:["g","G","g","G",0],KeyH:["h","H","h","H",0],KeyI:["i","I","i","I",0],KeyJ:["j","J","j","J",0],KeyK:["k","K","k","K",0],KeyL:["l","L","l","L",0],KeyM:["m","M","m","M",0],KeyN:["n","N","n","N",0],KeyO:["o","O","o","O",0],KeyP:["p","P","p","P",0],KeyQ:["q","Q","q","Q",0],KeyR:["r","R","r","R",0],KeyS:["s","S","s","S",0],KeyT:["t","T","t","T",0],KeyU:["u","U","u","U",0],KeyV:["v","V","v","V",0],KeyW:["w","W","w","W",0],KeyX:["x","X","x","X",0],KeyY:["y","Y","y","Y",0],KeyZ:["z","Z","z","Z",0],Digit1:["1","!","1","!",0],Digit2:["2","@","2","@",0],Digit3:["3","#","3","#",0],Digit4:["4","$","4","$",0],Digit5:["5","%","5","%",0],Digit6:["6","^","6","^",0],Digit7:["7","&","7","&",0],Digit8:["8","*","8","*",0],Digit9:["9","(","9","(",0],Digit0:["0",")","0",")",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:["-","_","-","_",0],Equal:["=","+","=","+",0],BracketLeft:["[","{","[","{",0],BracketRight:["]","}","]","}",0],Backslash:["\\","|","\\","|",0],Semicolon:[";",":",";",":",0],Quote:["'",'"',"'",'"',0],Backquote:["`","~","`","~",0],Comma:[",","<",",","<",0],Period:[".",">",".",">",0],Slash:["/","?","/","?",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:[],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:[],Delete:["","","","",0],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:["\r","\r","\r","\r",0],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",".","",".",0],IntlBackslash:["<",">","|","\xA6",0],ContextMenu:[],Power:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[".",".",".",".",0],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:["(","(","(","(",0],NumpadParenRight:[")",")",")",")",0],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}})}),define(t[5],i([1,2,0]),function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.$Zcc.INSTANCE.registerKeyboardLayout({layout:{model:"pc105",group:0,layout:"es",variant:"",options:"",rules:"evdev"},secondaryLayouts:[],mapping:{Sleep:[],WakeUp:[],KeyA:["a","A","\xE6","\xC6",0],KeyB:["b","B","\u201D","\u2019",0],KeyC:["c","C","\xA2","\xA9",0],KeyD:["d","D","\xF0","\xD0",0],KeyE:["e","E","\u20AC","\xA2",0],KeyF:["f","F","\u0111","\xAA",0],KeyG:["g","G","\u014B","\u014A",0],KeyH:["h","H","\u0127","\u0126",0],KeyI:["i","I","\u2192","\u0131",0],KeyJ:["j","J","\u0309","\u031B",0],KeyK:["k","K","\u0138","&",0],KeyL:["l","L","\u0142","\u0141",0],KeyM:["m","M","\xB5","\xBA",0],KeyN:["n","N","n","N",0],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\xFE","\xDE",0],KeyQ:["q","Q","@","\u03A9",0],KeyR:["r","R","\xB6","\xAE",0],KeyS:["s","S","\xDF","\xA7",0],KeyT:["t","T","\u0167","\u0166",0],KeyU:["u","U","\u2193","\u2191",0],KeyV:["v","V","\u201C","\u2018",0],KeyW:["w","W","\u0142","\u0141",0],KeyX:["x","X","\xBB",">",0],KeyY:["y","Y","\u2190","\xA5",0],KeyZ:["z","Z","\xAB","<",0],Digit1:["1","!","|","\xA1",0],Digit2:["2",'"',"@","\u215B",0],Digit3:["3","\xB7","#","\xA3",0],Digit4:["4","$","~","$",0],Digit5:["5","%","\xBD","\u215C",0],Digit6:["6","&","\xAC","\u215D",0],Digit7:["7","/","{","\u215E",0],Digit8:["8","(","[","\u2122",0],Digit9:["9",")","]","\xB1",0],Digit0:["0","=","}","\xB0",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:["'","?","\\","\xBF",0],Equal:["\xA1","\xBF","\u0303","~",0],BracketLeft:["\u0300","\u0302","[","\u030A",0],BracketRight:["+","*","]","\u0304",0],Backslash:["\xE7","\xC7","}","\u0306",0],Semicolon:["\xF1","\xD1","~","\u030B",0],Quote:["\u0301","\u0308","{","{",0],Backquote:["\xBA","\xAA","\\","\\",0],Comma:[",",";","\u2500","\xD7",0],Period:[".",":","\xB7","\xF7",0],Slash:["-","_","\u0323","\u0307",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:[],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:[],Delete:["","","","",0],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:["/","/","/","/",0],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:["\r","\r","\r","\r",0],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",".","",".",0],IntlBackslash:["<",">","|","\xA6",0],ContextMenu:[],Power:[],NumpadEqual:["=","=","=","=",0],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[".",".",".",".",0],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:["(","(","(","(",0],NumpadParenRight:[")",")",")",")",0],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:[],MetaRight:[],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}})}),define(t[6],i([1,2,0]),function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.$Zcc.INSTANCE.registerKeyboardLayout({layout:{model:"pc104",group:0,layout:"fr",variant:"",options:"",rules:"base"},secondaryLayouts:[],mapping:{Sleep:[],WakeUp:[],KeyA:["q","Q","@","\u03A9",0],KeyB:["b","B","\u201D","\u2019",0],KeyC:["c","C","\xA2","\xA9",0],KeyD:["d","D","\xF0","\xD0",0],KeyE:["e","E","\u20AC","\xA2",0],KeyF:["f","F","\u0111","\xAA",0],KeyG:["g","G","\u014B","\u014A",0],KeyH:["h","H","\u0127","\u0126",0],KeyI:["i","I","\u2192","\u0131",0],KeyJ:["j","J","\u0309","\u031B",0],KeyK:["k","K","\u0138","&",0],KeyL:["l","L","\u0142","\u0141",0],KeyM:[",","?","\u0301","\u030B",0],KeyN:["n","N","n","N",0],KeyO:["o","O","\xF8","\xD8",0],KeyP:["p","P","\xFE","\xDE",0],KeyQ:["a","A","\xE6","\xC6",0],KeyR:["r","R","\xB6","\xAE",0],KeyS:["s","S","\xDF","\xA7",0],KeyT:["t","T","\u0167","\u0166",0],KeyU:["u","U","\u2193","\u2191",0],KeyV:["v","V","\u201C","\u2018",0],KeyW:["z","Z","\xAB","<",0],KeyX:["x","X","\xBB",">",0],KeyY:["y","Y","\u2190","\xA5",0],KeyZ:["w","W","\u0142","\u0141",0],Digit1:["&","1","\xB9","\xA1",0],Digit2:["\xE9","2","~","\u215B",0],Digit3:['"',"3","#","\xA3",0],Digit4:["'","4","{","$",0],Digit5:["(","5","[","\u215C",0],Digit6:["-","6","|","\u215D",0],Digit7:["\xE8","7","`","\u215E",0],Digit8:["_","8","\\","\u2122",0],Digit9:["\xE7","9","^","\xB1",0],Digit0:["\xE0","0","@","\xB0",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:[")","\xB0","]","\xBF",0],Equal:["=","+","}","\u0328",0],BracketLeft:["\u0302","\u0308","\u0308","\u030A",0],BracketRight:["$","\xA3","\xA4","\u0304",0],Backslash:["*","\xB5","\u0300","\u0306",0],Semicolon:["m","M","\xB5","\xBA",0],Quote:["\xF9","%","\u0302","\u030C",0],Backquote:["\xB2","~","\xAC","\xAC",0],Comma:[";",".","\u2500","\xD7",0],Period:[":","/","\xB7","\xF7",0],Slash:["!","\xA7","\u0323","\u0307",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:["","","","",0],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:["/","/","/","/",0],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:[],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",".","",".",0],IntlBackslash:["<",">","|","\xA6",0],ContextMenu:[],Power:[],NumpadEqual:[],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:[],NumpadParenRight:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:["\r","\r","\r","\r",0],MetaRight:[".",".",".",".",0],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}})}),define(t[7],i([1,2,0]),function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.$Zcc.INSTANCE.registerKeyboardLayout({layout:{model:"pc104",group:0,layout:"ru",variant:",",options:"",rules:"base"},secondaryLayouts:[],mapping:{Sleep:[],WakeUp:[],KeyA:["\u0444","\u0424","\u0444","\u0424",0],KeyB:["\u0438","\u0418","\u0438","\u0418",0],KeyC:["\u0441","\u0421","\u0441","\u0421",0],KeyD:["\u0432","\u0412","\u0432","\u0412",0],KeyE:["\u0443","\u0423","\u0443","\u0423",0],KeyF:["\u0430","\u0410","\u0430","\u0410",0],KeyG:["\u043F","\u041F","\u043F","\u041F",0],KeyH:["\u0440","\u0420","\u0440","\u0420",0],KeyI:["\u0448","\u0428","\u0448","\u0428",0],KeyJ:["\u043E","\u041E","\u043E","\u041E",0],KeyK:["\u043B","\u041B","\u043B","\u041B",0],KeyL:["\u0434","\u0414","\u0434","\u0414",0],KeyM:["\u044C","\u042C","\u044C","\u042C",0],KeyN:["\u0442","\u0422","\u0442","\u0422",0],KeyO:["\u0449","\u0429","\u0449","\u0429",0],KeyP:["\u0437","\u0417","\u0437","\u0417",0],KeyQ:["\u0439","\u0419","\u0439","\u0419",0],KeyR:["\u043A","\u041A","\u043A","\u041A",0],KeyS:["\u044B","\u042B","\u044B","\u042B",0],KeyT:["\u0435","\u0415","\u0435","\u0415",0],KeyU:["\u0433","\u0413","\u0433","\u0413",0],KeyV:["\u043C","\u041C","\u043C","\u041C",0],KeyW:["\u0446","\u0426","\u0446","\u0426",0],KeyX:["\u0447","\u0427","\u0447","\u0427",0],KeyY:["\u043D","\u041D","\u043D","\u041D",0],KeyZ:["\u044F","\u042F","\u044F","\u042F",0],Digit1:["1","!","1","!",0],Digit2:["2",'"',"2",'"',0],Digit3:["3","\u2116","3","\u2116",0],Digit4:["4",";","4",";",0],Digit5:["5","%","5","%",0],Digit6:["6",":","6",":",0],Digit7:["7","?","7","?",0],Digit8:["8","*","\u20BD","",0],Digit9:["9","(","9","(",0],Digit0:["0",")","0",")",0],Enter:["\r","\r","\r","\r",0],Escape:["\x1B","\x1B","\x1B","\x1B",0],Backspace:["\b","\b","\b","\b",0],Tab:["	","","	","",0],Space:[" "," "," "," ",0],Minus:["-","_","-","_",0],Equal:["=","+","=","+",0],BracketLeft:["\u0445","\u0425","\u0445","\u0425",0],BracketRight:["\u044A","\u042A","\u044A","\u042A",0],Backslash:["\\","/","\\","/",0],Semicolon:["\u0436","\u0416","\u0436","\u0416",0],Quote:["\u044D","\u042D","\u044D","\u042D",0],Backquote:["\u0451","\u0401","\u0451","\u0401",0],Comma:["\u0431","\u0411","\u0431","\u0411",0],Period:["\u044E","\u042E","\u044E","\u042E",0],Slash:[".",",",".",",",0],CapsLock:[],F1:[],F2:[],F3:[],F4:[],F5:[],F6:[],F7:[],F8:[],F9:[],F10:[],F11:[],F12:[],PrintScreen:["","","","",0],ScrollLock:[],Pause:[],Insert:[],Home:[],PageUp:["/","/","/","/",0],Delete:[],End:[],PageDown:[],ArrowRight:[],ArrowLeft:[],ArrowDown:[],ArrowUp:[],NumLock:[],NumpadDivide:[],NumpadMultiply:["*","*","*","*",0],NumpadSubtract:["-","-","-","-",0],NumpadAdd:["+","+","+","+",0],NumpadEnter:[],Numpad1:["","1","","1",0],Numpad2:["","2","","2",0],Numpad3:["","3","","3",0],Numpad4:["","4","","4",0],Numpad5:["","5","","5",0],Numpad6:["","6","","6",0],Numpad7:["","7","","7",0],Numpad8:["","8","","8",0],Numpad9:["","9","","9",0],Numpad0:["","0","","0",0],NumpadDecimal:["",",","",",",0],IntlBackslash:["/","|","|","\xA6",0],ContextMenu:[],Power:[],NumpadEqual:[],F13:[],F14:[],F15:[],F16:[],F17:[],F18:[],F19:[],F20:[],F21:[],F22:[],F23:[],F24:[],Open:[],Help:[],Select:[],Again:[],Undo:[],Cut:[],Copy:[],Paste:[],Find:[],AudioVolumeMute:[],AudioVolumeUp:[],AudioVolumeDown:[],NumpadComma:[],IntlRo:[],KanaMode:[],IntlYen:[],Convert:[],NonConvert:[],Lang1:[],Lang2:[],Lang3:[],Lang4:[],Lang5:[],NumpadParenLeft:[],NumpadParenRight:[],ControlLeft:[],ShiftLeft:[],AltLeft:[],MetaLeft:[],ControlRight:[],ShiftRight:[],AltRight:["\r","\r","\r","\r",0],MetaRight:[".",".",".",".",0],BrightnessUp:[],BrightnessDown:[],MediaPlay:[],MediaRecord:[],MediaFastForward:[],MediaRewind:[],MediaTrackNext:[],MediaTrackPrevious:[],MediaStop:[],Eject:[],MediaPlayPause:[],MediaSelect:[],LaunchMail:[],LaunchApp2:[],LaunchApp1:[],SelectTask:[],LaunchScreenSaver:[],BrowserSearch:[],BrowserHome:[],BrowserBack:[],BrowserForward:[],BrowserStop:[],BrowserRefresh:[],BrowserFavorites:[],MailReply:[],MailForward:[],MailSend:[]}})}),define(t[8],i([1,2,0,4,5,3,6,7]),function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.KeyboardLayoutContribution=void 0,Object.defineProperty(e,"KeyboardLayoutContribution",{enumerable:!0,get:function(){return a.$Zcc}})})}).call(this);

//# sourceMappingURL=layout.contribution.linux.js.map
