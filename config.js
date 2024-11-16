const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254111200187";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_45_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA4NixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDksXG4gICAgICAgIDgxLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidmlJbjRRUGlhbFB4VnRkejZQK0p1TmZ5NG52WXNhWFc4WjNkMkpDWVd5ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVF9HWFhXS0dUckNFUEJ0SGRSaHJCQVwiLFxuICBcInBob25lSWRcIjogXCI3OGE0ZDZiMy1hNzIzLTRkNWQtODQ3MC01Mjk0NTUxZjExYjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTcxLFxuICAgICAgNzIsXG4gICAgICA5MCxcbiAgICAgIDg2LFxuICAgICAgMTM0LFxuICAgICAgMTAwLFxuICAgICAgNDgsXG4gICAgICAyNTUsXG4gICAgICAxODMsXG4gICAgICAyMjcsXG4gICAgICAxMDAsXG4gICAgICAyNDMsXG4gICAgICAyNTUsXG4gICAgICA5MixcbiAgICAgIDEwLFxuICAgICAgMjA2LFxuICAgICAgODUsXG4gICAgICA0MyxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgODIsXG4gICAgICAxMDgsXG4gICAgICA4NCxcbiAgICAgIDIxMixcbiAgICAgIDExMSxcbiAgICAgIDIzLFxuICAgICAgMjYsXG4gICAgICA0NCxcbiAgICAgIDc5LFxuICAgICAgNDUsXG4gICAgICA2NSxcbiAgICAgIDE4MCxcbiAgICAgIDE5MSxcbiAgICAgIDY2LFxuICAgICAgMzIsXG4gICAgICAxMjIsXG4gICAgICAyNTMsXG4gICAgICAyMTIsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pibCt2UUNFSmpUNGJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZEdGa3c1Nkh0TW02U1lPQzgxK3lnZVdmSlVzalJMR242a3dvRjRLbkVUcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBbFNZSlJEUzBYdjdxSk5MWHYyM2hHeEtsWUpGa3Ixcm9JaUh2Nk9JVEZTSTFpRFNwWit4RUZ6dEhqdlJzZUI2ZXROcE9KanlPdHA2T1lwWDhFU29EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEUnNMb3Mvby9RTDRwTVoya292eGRwUTJMTWVLbncrVXJzcU82ZVUyK2JocU9ja1RRUFgyaWE0NmRiQ3UyMk1vZUJsODQ4VGNNVzRGL1duZ2Z0WHhDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMTIwMDE4Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4OTY0NTExMTA1ODY2Njo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTExMjAwMTg3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3NTAzMDJcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🍬D🍄‍🟫E🍥E 🍑M🍹D🍭",
  packname: process.env.PACK_NAME || "🍬D🍄‍🟫E🍥E 🍑M🍹D🍭",
  botname : process.env.BOT_NAME  || "🍬D🍄‍🟫E🍥E 🍑M🍹D🍭",
  ownername:process.env.OWNER_NAME|| "🍬D🍄‍🟫E🍥E 🍑M🍹D🍭 +254795048213",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
