


require("./module")

global.owner = "6285779025796"
global.namabot = "Heisenberg -MD"
global.botnumber = "6285283090376"
global.namaCreator = "Erick"
global.teksmenu = "POLLOSHERMANOS"
global.linkyt = 'https://youtube.com/@erickseptyana249' //ini adalah creator nya,ALIAS\HANMOD\ GANTI MENGGUNAKAN LINK YT/TT/IG jika kamu ingin jadi creator bot nya
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = true //NOT CHANGE / JANGAN GANTI

global.imageurl = '-' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = '' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.chsaluran = '' //GANTI PAKE LINK SALURAN WA LU
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.simbol = '⨠' //GANTI AJA BEBAS
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "TKJ Bot" //GANTI AJ
global.author = "- Heisen Crash -" //GANTI SERAH MU
global.jumlah = "2" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})