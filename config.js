const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349112362396";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_50_09_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVNeXp6K2t3VWwydTNmN0hCcUZVWjNrU2h0QlhsSzdNMmREU0hob0JOVDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjgwYXZxLXc3UU5hRGl2YWFLZ2NqTXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTgyMzAxZjktNzkxYi00M2Y3LTllMTAtMGNmMDNiMmQ3ZTEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDg4LFxuICAgICAgMTMsXG4gICAgICAxMixcbiAgICAgIDkwLFxuICAgICAgMTUyLFxuICAgICAgMjEyLFxuICAgICAgMTU3LFxuICAgICAgMjM5LFxuICAgICAgMjQ2LFxuICAgICAgOSxcbiAgICAgIDMyLFxuICAgICAgOTcsXG4gICAgICA1NCxcbiAgICAgIDE3OSxcbiAgICAgIDE4MSxcbiAgICAgIDE4NixcbiAgICAgIDEzOCxcbiAgICAgIDI0NCxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDE3MSxcbiAgICAgIDQxLFxuICAgICAgMjA0LFxuICAgICAgMTgsXG4gICAgICAyMjgsXG4gICAgICA2OSxcbiAgICAgIDU3LFxuICAgICAgMTg4LFxuICAgICAgODEsXG4gICAgICAxMDEsXG4gICAgICA2MixcbiAgICAgIDgwLFxuICAgICAgMTgxLFxuICAgICAgMTM1LFxuICAgICAgMTcsXG4gICAgICA3MCxcbiAgICAgIDExMCxcbiAgICAgIDE3MyxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4TUJHQ1BIVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExMjM2MjM5Njo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODQ0ODY1NDUzMzAyNDI6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaXA1Zm9GRUwvWHhMY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJWNmgvMk1BTmM2Q0FwK3ZsZFdNRkVqcStLQUJCZFNLaG9ibjdUeUNMemc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNTVyTFlsQW8rd0xJcGpVVGRZNEs4VDJmTTFPOEFvVjJNV3MzdHV6dkQrZEpNdlNwNkduKzY1TGtjbG5GL2FJbUtUSFRYMk1FeHBLNVhzZGptTTdDQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL201YlJBM3ZUZ3E5UTZrNzMyTVpnb28wZmQrQ3VBR0Rid1lmaTZwRFgxNk5BdGZFc1ZpeWdoY3NSMWNnWWRCZm4wMHNUWGdDeEZucW5uZlZaK3NraFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMjM2MjM5Njo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcwODE0MTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
