//notes line to fix: 
//despues de socket.io/socket.io.js

//conexión socket
var socket_client= io.connect();

/*indice:
.chat
.play
.complementos
.read
.learn
.profile
.dict
.notas
.pie
.propuesta
.reciclaje
*/

//---variables---


var rooms= {
"gnrl":"General",

"abk":"Abkhazian","aar":"Afar",
"afr":"Afrikaans","aka":"Akan",
"sqi":"Albanian","amh":"Amharic",
"ara":"Arabic","arg":"Aragonese",
"hye":"Armenian","asm":"Assamese",
"ava":"Avaric","ave":"Avestan",
"aym":"Aymara","aze":"Azerbaijani",
"bam":"Bambara","bak":"Bashkir",
"eus":"Basque","bel":"Belarusian",
"ben":"Bengali","bih":"Bihari languages",
"bis":"Bislama","bos":"Bosnian",
"bre":"Breton","bul":"Bulgarian",
"mya":"Burmese","cat":"Catalan, Valencian",
"khm":"Central Khmer","cha":"Chamorro",
"che":"Chechen","nya":"Chichewa, Chewa, Nyanja",
"zho":"Chinese","chu":"Church Slavic, Church Slavonic, Old Church Slavonic, Old Slavonic, Old Bulgarian",
"chv":"Chuvash","cor":"Cornish",
"cos":"Corsican","cre":"Cree",
"hrv":"Croatian","ces":"Czech",
"dan":"Danish","div":"Divehi, Dhivehi, Maldivian",
"nld":"Dutch, Flemish","dzo":"Dzongkha",
"eng":"English","epo":"Esperanto",
"est":"Estonian","ewe":"Ewe",
"fao":"Faroese","fij":"Fijian",
"fin":"Finnish","fra":"French",
"ful":"Fulah","gla":"Gaelic, Scottish Gaelic",
"glg":"Galician","lug":"Ganda",
"kat":"Georgian","deu":"German",
"ell":"Greek (modern)","grn":"Guaraní",
"guj":"Gujarati","hat":"Haitian, Haitian Creole",
"hau":"Hausa","heb":"Hebrew (modern)",
"her":"Herero","hin":"Hindi",
"hmo":"Hiri Motu","hun":"Hungarian",
"isl":"Icelandic","ido":"Ido",
"ibo":"Igbo","ind":"Indonesian",
"ina":"Interlingua","ile":"Interlingue",
"iku":"Inuktitut","ipk":"Inupiaq",
"gle":"Irish","ita":"Italian",
"jpn":"Japanese","jav":"Javanese",
"kal":"Kalaallisut, Greenlandic","kan":"Kannada",
"kau":"Kanuri","kas":"Kashmiri",
"kaz":"Kazakh","kik":"Kikuyu, Gikuyu",
"kin":"Kinyarwanda","kir":"Kirghiz, Kyrgyz",
"kom":"Komi","kon":"Kongo",
"kor":"Korean","kua":"Kuanyama, Kwanyama",
"kur":"Kurdish","lao":"Lao",
"lat":"Latin","lav":"Latvian",
"lim":"Limburgan, Limburger, Limburgish","lin":"Lingala",
"lit":"Lithuanian","lub":"Luba-Katanga",
"ltz":"Luxembourgish, Letzeburgesch","mkd":"Macedonian",
"mlg":"Malagasy","msa":"Malay",
"mal":"Malayalam","mlt":"Maltese",
"glv":"Manx","mri":"Maori",
"mar":"Marathi","mah":"Marshallese",
"mon":"Mongolian","nau":"Nauru",
"nav":"Navajo, Navaho","ndo":"Ndonga",
"nep":"Nepali","nde":"North Ndebele",
"sme":"Northern Sami","nor":"Norwegian",
"nob":"Norwegian Bokmål","nno":"Norwegian Nynorsk",
"oci":"Occitan","oji":"Ojibwa",
"ori":"Oriya","orm":"Oromo",
"oss":"Ossetian, Ossetic","pli":"Pali",
"pan":"Panjabi, Punjabi","pus":"Pashto, Pushto",
"fas":"Persian","pol":"Polish",
"por":"Portuguese","que":"Quechua",
"ron":"Romanian, Moldavian, Moldovan","roh":"Romansh",
"run":"Rundi","rus":"Russian",
"smo":"Samoan","sag":"Sango",
"san":"Sanskrit","srd":"Sardinian",
"srp":"Serbian","sna":"Shona",
"iii":"Sichuan Yi, Nuosu","snd":"Sindhi",
"sin":"Sinhala, Sinhalese","slk":"Slovak",
"slv":"Slovenian","som":"Somali",
"nbl":"South Ndebele","sot":"Southern Sotho",
"spa":"Spanish, Castilian","sun":"Sundanese",
"swa":"Swahili","ssw":"Swati",
"swe":"Swedish","tgl":"Tagalog",
"tah":"Tahitian","tgk":"Tajik",
"tam":"Tamil","tat":"Tatar",
"tel":"Telugu","tha":"Thai",
"bod":"Tibetan","tir":"Tigrinya",
"ton":"Tonga (Tonga Islands)","tso":"Tsonga",
"tsn":"Tswana","tur":"Turkish",
"tuk":"Turkmen","twi":"Twi",
"uig":"Uighur, Uyghur","ukr":"Ukrainian",
"urd":"Urdu","uzb":"Uzbek",
"ven":"Venda","vie":"Vietnamese",
"vol":"Volapük","wln":"Walloon",
"cym":"Welsh","fry":"Western Frisian",
"wol":"Wolof","xho":"Xhosa",
"yid":"Yiddish","yor":"Yoruba",
"zha":"Zhuang, Chuang","zul":"Zulu",

"mul":"MULTILINGUAL",
"Musics":"Musics","TV":"TV",
"Travel":"Travel","News":"News",
"Politics":"Politics","Religion":"Religion",
"Others":"Others","Tests":"Tests",
           "bstlk":"BesTalk"
};//rooms

var roomsxcls= {lang: {
"abk":"Abkhazian","aar":"Afar",
"afr":"Afrikaans","aka":"Akan",
"sqi":"Albanian","amh":"Amharic",
"ara":"Arabic","arg":"Aragonese",
"hye":"Armenian","asm":"Assamese",
"ava":"Avaric","ave":"Avestan",
"aym":"Aymara","aze":"Azerbaijani",
"bam":"Bambara","bak":"Bashkir",
"eus":"Basque","bel":"Belarusian",
"ben":"Bengali","bih":"Bihari languages",
"bis":"Bislama","bos":"Bosnian",
"bre":"Breton","bul":"Bulgarian",
"mya":"Burmese","cat":"Catalan, Valencian",
"khm":"Central Khmer","cha":"Chamorro",
"che":"Chechen","nya":"Chichewa, Chewa, Nyanja",
"zho":"Chinese","chu":"Church Slavic, Church Slavonic, Old Church Slavonic, Old Slavonic, Old Bulgarian",
"chv":"Chuvash","cor":"Cornish",
"cos":"Corsican","cre":"Cree",
"hrv":"Croatian","ces":"Czech",
"dan":"Danish","div":"Divehi, Dhivehi, Maldivian",
"nld":"Dutch, Flemish","dzo":"Dzongkha",
"eng":"English","epo":"Esperanto",
"est":"Estonian","ewe":"Ewe",
"fao":"Faroese","fij":"Fijian",
"fin":"Finnish","fra":"French",
"ful":"Fulah","gla":"Gaelic, Scottish Gaelic",
"glg":"Galician","lug":"Ganda",
"kat":"Georgian","deu":"German",
"ell":"Greek (modern)","grn":"Guaraní",
"guj":"Gujarati","hat":"Haitian, Haitian Creole",
"hau":"Hausa","heb":"Hebrew (modern)",
"her":"Herero","hin":"Hindi",
"hmo":"Hiri Motu","hun":"Hungarian",
"isl":"Icelandic","ido":"Ido",
"ibo":"Igbo","ind":"Indonesian",
"ina":"Interlingua","ile":"Interlingue",
"iku":"Inuktitut","ipk":"Inupiaq",
"gle":"Irish","ita":"Italian",
"jpn":"Japanese","jav":"Javanese",
"kal":"Kalaallisut, Greenlandic","kan":"Kannada",
"kau":"Kanuri","kas":"Kashmiri",
"kaz":"Kazakh","kik":"Kikuyu, Gikuyu",
"kin":"Kinyarwanda","kir":"Kirghiz, Kyrgyz",
"kom":"Komi","kon":"Kongo",
"kor":"Korean","kua":"Kuanyama, Kwanyama",
"kur":"Kurdish","lao":"Lao",
"lat":"Latin","lav":"Latvian",
"lim":"Limburgan, Limburger, Limburgish","lin":"Lingala",
"lit":"Lithuanian","lub":"Luba-Katanga",
"ltz":"Luxembourgish, Letzeburgesch","mkd":"Macedonian",
"mlg":"Malagasy","msa":"Malay",
"mal":"Malayalam","mlt":"Maltese",
"glv":"Manx","mri":"Maori",
"mar":"Marathi","mah":"Marshallese",
"mon":"Mongolian","nau":"Nauru",
"nav":"Navajo, Navaho","ndo":"Ndonga",
"nep":"Nepali","nde":"North Ndebele",
"sme":"Northern Sami","nor":"Norwegian",
"nob":"Norwegian Bokmål","nno":"Norwegian Nynorsk",
"oci":"Occitan","oji":"Ojibwa",
"ori":"Oriya","orm":"Oromo",
"oss":"Ossetian, Ossetic","pli":"Pali",
"pan":"Panjabi, Punjabi","pus":"Pashto, Pushto",
"fas":"Persian","pol":"Polish",
"por":"Portuguese","que":"Quechua",
"ron":"Romanian, Moldavian, Moldovan","roh":"Romansh",
"run":"Rundi","rus":"Russian",
"smo":"Samoan","sag":"Sango",
"san":"Sanskrit","srd":"Sardinian",
"srp":"Serbian","sna":"Shona",
"iii":"Sichuan Yi, Nuosu","snd":"Sindhi",
"sin":"Sinhala, Sinhalese","slk":"Slovak",
"slv":"Slovenian","som":"Somali",
"nbl":"South Ndebele","sot":"Southern Sotho",
"spa":"Spanish, Castilian","sun":"Sundanese",
"swa":"Swahili","ssw":"Swati",
"swe":"Swedish","tgl":"Tagalog",
"tah":"Tahitian","tgk":"Tajik",
"tam":"Tamil","tat":"Tatar",
"tel":"Telugu","tha":"Thai",
"bod":"Tibetan","tir":"Tigrinya",
"ton":"Tonga (Tonga Islands)","tso":"Tsonga",
"tsn":"Tswana","tur":"Turkish",
"tuk":"Turkmen","twi":"Twi",
"uig":"Uighur, Uyghur","ukr":"Ukrainian",
"urd":"Urdu","uzb":"Uzbek",
"ven":"Venda","vie":"Vietnamese",
"vol":"Volapük","wln":"Walloon",
"cym":"Welsh","fry":"Western Frisian",
"wol":"Wolof","xho":"Xhosa",
"yid":"Yiddish","yor":"Yoruba",
"zha":"Zhuang, Chuang","zul":"Zulu",
  
"mul":"MULTILINGUAL"},
               
thm: {
"gnrl":"General",   
"Musics":"Musics","TV":"TV",
"Travel":"Travel","News":"News",
"Politics":"Politics","Religion":"Religion",
"Others":"Others", "Tests":"Tests",
"bstlk":"BesTalk"}
};//rooms x clase


//...variables...

//---chat---

//---users---

function entrar_a_chat()
{
console.log("a entrar_a_chat")
socket_client.emit("pedir usuario en chat", socket_client.id);
}//click tab chat


//llena tabla users chat
socket_client.on("recibir usuarios", function(users_cnntf)
{
//users_cnnt{socket_client_id:user}
//user{_id,email,firstname,lastname,chats[]}
console.log("on: recibe usuarios")
var con_user= "";
for(var username in users_cnntf)
{
con_user+= "<tr id=\'"+users_cnntf[username].skt_id
+"\' data-user-id='"+username
+"' onclick='informar_profile(this)' >"
+'<td><img style="width: 30px; height: 30px" src="'
+(users_cnntf[username].user.avatar||dar_img_provisional() )+'"></td>'
+"<td>"+users_cnntf[username].user.firstname
+" "+users_cnntf[username].user.lastname+"</td>"
+"<td>"+(users_cnntf[username].user.gender||"-")+"</td>"
+"<td>"+(users_cnntf[username].user.age||"-")+"</td>"
+"<td>"+(users_cnntf[username].user.country||"-")+"</td>"
+"<td>"+(users_cnntf[username].user.learning||"-")+"</td>"
+"<td>"+(users_cnntf[username].user.speaks||"-")+"</td>"
+"</tr>";
}//for
tbl_users_bd.innerHTML= con_user;
});//skon recibir usuarios table

socket_client.on("last 5 connected users", function(users_5_no_cnntx)
{//users_5_no_cnnt[{user},...]
console.log("on: last 5 connected users")
//console.log(users_5_no_cnntx)
var con_user= "";
for(var i=0; i < users_5_no_cnntx.length; i++)
{
con_user+= "<tr id=\'"+users_5_no_cnntx[i]._id
+"\' data-user-id='"+users_5_no_cnntx[i]._id
+"' onclick='informar_profile(this)' >"
+'<td><img style="width: 30px; height: 30px" src="'
+(users_5_no_cnntx[i].avatar||dar_img_provisional() )+'"></td>'
+"<td>"+users_5_no_cnntx[i].firstname
+" "+users_5_no_cnntx[i].lastname+"</td>"
+"<td>"+(users_5_no_cnntx[i].gender||"-")+"</td>"
+"<td>"+(users_5_no_cnntx[i].age||"-")+"</td>"
+"<td>"+(users_5_no_cnntx[i].country||"-")+"</td>"
+"<td>"+(users_5_no_cnntx[i].learning||"-")+"</td>"
+"<td>"+(users_5_no_cnntx[i].speaks||"-")+"</td>"
+"</tr>";  
}//for
tbl_users_lc_bd.innerHTML= con_user;
})//skon last 5 connected users


function informar_profile(ele)
{
console.log("a informar_profile: "+ele)
if(ele.id != socket_client.id)
{//if no es el mismo 

var user_id_rcv= ele.getAttribute("data-user-id");
var skt_id_rcv= ele.id;
socket_client.emit("ver su profile",
{
user_id_rcv: user_id_rcv,
skt_id_rcv: skt_id_rcv,
skt_id_mnd: socket_client.id
});
}//if no el mismo
}//informar_profile


socket_client.on("perfil a ver", function(obj_userf)
{
//obj_userf{user,user_id_rcv,skt_id_rcv}
console.log("on: perfil a ver");
//console.log(JSON.stringify(obj_userf.user));
if(typeof(dv_profile_user) == "undefined")
{
var nudiv= document.createElement("div");
nudiv.id= "dv_profile_user";
nudiv.setAttribute("class", "pos_a_i bordado_r_gris bac_col_whi al_frente")
//    nudiv.classList.add("al_frente");  
nudiv.setAttribute("style", "top: 20%; left: 20%; width: 60%; height: 60%")
nudiv.innerHTML= '<div id="dv_profile_user_tit" class="pos_r" style="border-radius:5px 5px 0 0; height: 30px">'
+'<div id="dv_profile_user_tit_nme" class="tex_cen pos_a lef h cur_mov bac_col_emerg_profile" style="right: 30px">'
+obj_userf.user.firstname+" "+obj_userf.user.lastname
+'</div><div id="dv_profile_user_tit_cerrar" class="tex_cen pos_a rig h cur_poi" style="border-radius: 0 5px 0 0; width: 30px" onclick="cerrar_profile_user()">X</div>'
+'</div>'
+'<div id="dv_profile_user_con" class="tex_cen ove_y pos_a top_30p bot_30p w bac_col_bla col_whi">'
+'<img id="img_profile_user" class="w50p h50p bor_r_" style="border:2px solid white" src="'
+(obj_userf.user.avatar||dar_img_provisional())
+'" alt="img_profile"><p>'
+obj_userf.user.age+", "+obj_userf.user.gender
+'</p><p>'+obj_userf.user.country
+'</p><p>'+obj_userf.user.speaks
+'</p><p>'+obj_userf.user.learning
+'</p><p>'+obj_userf.user.about_me
+'</div>'
+'<div id="dv_profile_user_chat_request" class="tex_cen pos_a bot w bac_col_emerg_profile" style="border-radius: 0 0 5px 5px; height: 30px">'
+'<input type="button" value="Chat Request" '
+' data-user-id-rcv="'+obj_userf.user_id_rcv
+'" data-skt-id-rcv="'+obj_userf.skt_id_rcv
+'" onclick="mandar_chat_request_profile(this)">'
+'</div>';  
dv_con_chat.appendChild(nudiv); 
jQuery(function($)
{
var draggableDiv= $("#dv_profile_user").draggable();
$("#dv_profile_user_con", draggableDiv).mousedown(function(ev)
{
draggableDiv.draggable('disable');
}).mouseup(function(ev)
{
draggableDiv.draggable('enable');
});
$("#dv_profile_user").resizable();
});//jQuery  
}//if no dv_profile_user
});//skcl perfil a ver



function dar_img_provisional()
{
console.log("a dar_img_provisional")
return "data:image/png;base64,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";
}//dar_img_provisional


//...users...

//---rooms---



function entrar_lang_room()
{
console.log("a entrar_lang_room")
for(var opt in dt_list_room.options)
{
if(dt_list_room.options[opt].value == in_list_room.value)
{
var roomf= dt_list_room.options[opt].id.slice(3,6);
break;
}//if
}//for
entrar_a_room(roomf);
spanear_room(roomf, dv_lang_rooms_con);
in_list_room.value= "";  
}//entrar_lang_room


function ir_a_theme_room(roomf)
{
console.log("a ir_a_theme_room: "+roomf)
entrar_a_room(roomf);
spanear_room(roomf, dv_theme_rooms_con);
}//ir_a_theme_room



function spanear_room(roomf, dv_a_metf)
{
console.log("a spanear_room: "+roomf)
if(!document.getElementById("sp_room_"+roomf) )
{
var sp_room= document.createElement("span");
sp_room.id= "sp_room_"+roomf;
sp_room.setAttribute("class", "cl_sp_chat_room");
sp_room.setAttribute("onclick", "entrar_a_room(\'"+roomf+"\')");  
sp_room.innerHTML= rooms[roomf]+' <span id="sp_chat_cant_'+roomf
+'" class="cl_sp_chat_cant"></span><svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 384q-153 0-286 52t-211.5 141-78.5 191q0 82 53 158t149 132l97 56-35 84q34-20 62-39l44-31 53 10q78 14 153 14 153 0 286-52t211.5-141 78.5-191-78.5-191-211.5-141-286-52zm0-128q191 0 353.5 68.5t256.5 186.5 94 257-94 257-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5 2-6l2.5-5 3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5zm822 1169q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5 2 6 .5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230q0 120-71 224.5t-195 176.5z" fill="#fff"/>';//comments-o
dv_a_metf.appendChild(sp_room);
}//if no esta 
}//spanear_room span room



function entrar_a_room(roomx)
{
console.log("a entrar_a_room: "+roomx)
crear_room(roomx);
//juntarlo al room: gnrl !!!
socket_client.emit("abrir room", roomx);
}//entrar_a_room



socket_client.on("recibir usuarios en el room", function(obj_roomf)
{
//obj_roomf{users_room,chat_room,skt_id,room} 
console.log("on: recibir usuarios en el room")
//console.log(JSON.stringify(obj_roomf))
var usersg= "";
for(var nombr in obj_roomf.users_room)
{
usersg+= '<span id="sp_escr_'+obj_roomf.room+'_'
+obj_roomf.users_room[nombr]
+'"></span>'+obj_roomf.users_room[nombr]
+"<br>";
}//for
var dv_chat_room_username_= document.getElementById("dv_chat_room_username_"+obj_roomf.room);
dv_chat_room_username_.innerHTML= "";
dv_chat_room_username_.innerHTML= usersg;
if(obj_roomf.skt_id == socket_client.id)
{
var dv_chat_room_con_= document.getElementById("dv_chat_room_con_"+obj_roomf.room); 
var li_chat= dv_chat_room_con_.innerHTML;
//15 lines of chat
for(var msg_chat in obj_roomf.chat_room)
{
li_chat+= obj_roomf.chat_room[msg_chat]+"<br>";
}//for
dv_chat_room_con_.innerHTML= li_chat;
dv_chat_room_con_.scrollTo(0, dv_chat_room_con_.scrollHeight);
}//if es el que llega
});//skcl recibir usuarios en el room



socket_client.on("actualizar rooms", function(obj_roomf)
{
//obj_roomf{users_room,room}
console.log("on: actualizar rooms");
if(rooms[obj_roomf.room])
{
if(roomsxcls.lang[obj_roomf.room])
{
spanear_room(obj_roomf.room, dv_lang_rooms_con);
}else if(roomsxcls.thm[obj_roomf.room])
{
spanear_room(obj_roomf.room, dv_theme_rooms_con);
}//else if thm room
//obj_roomf{users_room,chat_room,skt_id,room} 
var cnt_users= Object.keys(obj_roomf.users_room).length;
var sp_chat_cant_= document.getElementById("sp_chat_cant_"+obj_roomf.room);
sp_chat_cant_.innerHTML= cnt_users != 0 ? cnt_users : "";
}//if no secret
});//skcl actualizar rooms


//-----------

function minimizar_dv_chat(roomx)
{//roomx
console.log("a minimizar_dv_chat:"+roomx)
jQuery(function($)
{
var dv_chat_room_tit_min_= "#dv_chat_room_tit_min_"+roomx;
var dv_chat_room_= "#dv_chat_room_"+roomx;
var dv_chat_room_con_user_= "#dv_chat_room_con_user_"+roomx;
var dv_chat_room_msg_= "#dv_chat_room_msg_"+roomx;
if($(dv_chat_room_tit_min_).html() == '-')
{
$(dv_chat_room_).height(30);
$(dv_chat_room_tit_min_).html('+');
$(dv_chat_room_con_user_).hide();
$(dv_chat_room_msg_).hide();
$(dv_chat_room_).resizable("disable");
$(dv_chat_room_).css('z-index', 9999);

}//if -
else
{
$(dv_chat_room_).height(320);
$(dv_chat_room_tit_min_).html('-');
$(dv_chat_room_con_user_).show();
$(dv_chat_room_msg_).show();
$(dv_chat_room_).resizable("enable");
}//else +
});//jQuery
}//minimizar_dv_chat




function restaurar_tam_chat(roomx)
{//roomx
console.log("a restaurar_tam_chat:"+roomx)
var dv_chat_room_= document.querySelector("#dv_chat_room_"+roomx);
if(dv_chat_room_.offsetWidth < dv_con_chat.offsetWidth)
{
dv_chat_room_.style.height= dv_con_chat.offsetHeight+"px";
dv_chat_room_.style.width= dv_con_chat.offsetWidth+"px";
dv_chat_room_.style.left= 0;
dv_chat_room_.style.top= 0;
}//if pequeño
else
{
dv_chat_room_.removeAttribute("style");
}//else retorna
}//restaurar_tam_chat



function cerrar_dv_chat(roomx)
{//roomx
console.log("a cerrar_dv_chat: "+roomx)
var dv_chat_room_= document.querySelector("#dv_chat_room_"+roomx);
dv_con_chat.removeChild(dv_chat_room_);
socket_client.emit("cerrar room",roomx);  
}//cerrar_dv_chat



//botones chat, como zumbido, bell, volume-up

function es_boton_vacio()
{
console.log("a es_boton_vacio")
alert("Empty Button :)");
}//es_boton_vacio



//........


function enviar_msg(ev, roomx)
{//event,roomx
console.log("a enviar_msg: ev, "+roomx)
ev.preventDefault();
var in_chat_room_msg_= document.querySelector("#in_chat_room_msg_"+roomx);
var type_room;
if(rooms[roomx])
{
type_room= "public";
}else
{
type_room= "secret";
}//else
if(in_chat_room_msg_.value != "")
{
socket_client.emit("enviar msg al room",
{
msg: in_chat_room_msg_.value,
room: roomx,
type_room: type_room
});
//in_chat_room_msg_.getAttribute("data-room")
}//if no vacio
in_chat_room_msg_.value= "";
}//enviar_msg



socket_client.on('recibir msg en room', function(obj_msgf) 
{
//obj_msgf{msg,nick,room}
console.log("on: recibe msg en room")
if(!document.hasFocus())
{
favicon.href="data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////8AAAAAAAAAAAD////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP///8AAAD////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP////////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP////////bcJPbcJMAAAAAAAAAAADbcJPbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAAAAAAAAAADbcJPbcJMAAP8AAP8AAP8AAP8AAP8AAP8AAP8AAP/////bcJPbcJMAAADbcJPbcJMAAADbcJMAAP////8AAP8AAP8AAP8AAP////8AAP/////bcJPbcJMAAADbcJPbcJMAAADbcJMAAP////8AAP8AAP8AAP////////8AAP/////bcJMAAAAAAAAAAAAAAADbcJPbcJMAAP////8AAP8AAP////8AAP////8AAP/////bcJPbcJPbcJPbcJPbcJPbcJPbcJMAAP////8AAP////8AAP8AAP////8AAP/////bcJPbcJPbcJPbcJPbcJPbcJPbcJMAAP////////8AAP8AAP8AAP////8AAP8AAAD////bcJPbcJPbcJPbcJPbcJPbcJMAAP////8AAP8AAP8AAP8AAP////8AAP8AAAAAAAD///////////////////////8AAP8AAP8AAP8AAP8AAP8AAP8AAP8AAP/AAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAADAAAAA";
}//if not focus
var dv_chat_room_con_= "#dv_chat_room_con_"+obj_msgf.room;
jQuery(function($)
{
$(dv_chat_room_con_).append('<b>'+obj_msgf.nick+":</b> "+obj_msgf.msg+"<br/>");
$(dv_chat_room_con_).stop().animate({scrollTop: $(dv_chat_room_con_)[0].scrollHeight}, 200);
});//jQuery
});//skcl recibir msg en room



//cambia icono de nuevo mensaje
window.onfocus= function()
{
if(favicon.href != "data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////8AAAAAAAAAAAD////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP///8AAAD////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP////////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP////////bcJPbcJMAAAAAAAAAAADbcJPbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAAAAAAAAAADbcJPbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJMAAAAAAAAAAAAAAADbcJPbcJMAAAAAAAAAAAAAAAAAAADbcJPbcJP////////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP////////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP///8AAAD////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP///8AAAAAAAAAAAD///////////////////////////////////////////////8AAAAAAADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAADAAwAA")
favicon.href="data:image/x-icon;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////8AAAAAAAAAAAD////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP///8AAAD////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP////////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP////////bcJPbcJMAAAAAAAAAAADbcJPbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAAAAAAAAAADbcJPbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJPbcJMAAADbcJPbcJMAAADbcJPbcJPbcJMAAADbcJPbcJPbcJPbcJP////////bcJMAAAAAAAAAAAAAAADbcJPbcJMAAAAAAAAAAAAAAAAAAADbcJPbcJP////////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP////////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP///8AAAD////bcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJPbcJP///8AAAAAAAAAAAD///////////////////////////////////////////////8AAAAAAADAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAADAAwAA";
}//tornar el favicon a la normalidad



//quien escribe, en evento attached
function esta_tipeando(in_chat_msgf)
{
socket_client.emit("typing", {room: in_chat_msgf.getAttribute("data-room")});
in_chat_msgf.removeEventListener("keydown", esta_tipeando);
setTimeout(function()
{
in_chat_msgf.addEventListener("keydown", esta_tipeando);
},1000)
}//esta_tipeando typing



socket_client.on("who type", function(obj_roomf)
{
//obj_roomf{firstname,room}
//console.log(obj_roomf+" is typing");
/*  
var nudiv= document.createElement("div");
nudiv.id= "dv_typ_"+obj_roomf.room;
nudiv.setAttribute("class","cl_who_type"); 
nudiv.innerHTML="<b>"+obj_roomf.firstname+"</b>"+"<span  style='color:grey'> is typing...</span>"+
'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg>';//pencil
var dv_chat_room_con_user_= document.getElementById("dv_chat_room_con_user_"+obj_roomf.room);
dv_chat_room_con_user_.appendChild(nudiv);
*/
console.log("on: who type")
var sp_escr_= document.querySelector("#sp_escr_"+obj_roomf.room+"_"+obj_roomf.firstname)
var nu_sp_escr_= document.querySelector("#nu_sp_escr_"+obj_roomf.room+"_"+obj_roomf.firstname)
if(!nu_sp_escr_)
{  
nu_sp_escr_= document.createElement("span")
nu_sp_escr_.id= "nu_sp_escr_"+obj_roomf.room+"_"+obj_roomf.firstname
nu_sp_escr_.innerHTML= '<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg> ';//pencil
sp_escr_.appendChild(nu_sp_escr_);
setTimeout(function()
{
//dv_chat_room_con_user_.removeChild(nudiv);
sp_escr_.removeChild(nu_sp_escr_);  
},1000);
}//if no nu_sp_escr  
});//skcl who type


//---------

function ir_a_secret_room()
{
console.log("a ir_a_secret_room")
var secret_room= in_secret_room.value.replace(/\s/g,"_");
crear_room(secret_room);
in_secret_room.value="";
socket_client.emit("entrar a secret room", secret_room);
}//ir_a_secret_room



function crear_room(roomx)
{
console.log("a crear_room: "+roomx)
var dv_chat_room_= document.getElementById("dv_chat_room_"+roomx);
if(!dv_chat_room_)
{
var dvs= document.querySelectorAll("#dv_con_chat>div");
for(var i=0; i < dvs.length; i++)
{
dvs[i].classList.remove("al_frente");
}//for   
var nudiv= document.createElement("DIV");
nudiv.id= "dv_chat_room_"+roomx;
nudiv.setAttribute("class", "cl_chat_room_x al_frente")
nudiv.innerHTML= '<div class="cl_chat_room_cab_x">'
+'<div class="cl_chat_room_tit_x bac_bestalk">'
+(rooms[roomx]||roomx)+'</div>'
+'<div id="dv_chat_room_tit_min_'+roomx
+'" class="cl_chat_room_tit_bts_x"'
+' onclick="minimizar_dv_chat(\''+roomx+'\')">-</div>'//\''+roomx+'\'
+'<div class="cl_chat_room_tit_bts_x"'
+' onclick="restaurar_tam_chat(\''+roomx+'\')">L</div>'
+'<div class="cl_chat_room_tit_bts_x bor_r0500 bac_col_crr_chat_g whi"'
+' onclick="cerrar_dv_chat(\''+roomx+'\')">X</div>'
+'</div>'//dv_chat_room_tit
+'<div id="dv_chat_room_con_user_'+roomx
+'" class="cl_chat_room_con_user_x">'
+'<div id="dv_chat_room_con_'+roomx+'" class="cl_chat_room_con_x bac_col_con_chat_g"></div>'
+'<div id="dv_chat_room_user_'+roomx+'" class="cl_chat_room_user_x bac_col_usr_chat_g">'
+'<div id="dv_chat_room_username_'+roomx
+'" class="pos_a"></div>'
+'</div>'//dv_chat_room_user
+'</div>'//dv_chat_room_con_user
+'<div id="dv_chat_room_msg_'+roomx
+'" class="cl_chat_room_msg_x">'
+'<div class="cl_chat_room_msg_dv70">'
+'<form class="wh" onsubmit="enviar_msg(event,\''+roomx+'\')">'
+'<div class="cl_chat_room_msg_dvin"><input type="text" id="in_chat_room_msg_'+roomx+'" class="wh pos_a" autocorrect="off" autocomplete="off"'
+' data-room="'+roomx+'" placeholder="write your message"></div>'
+'<button id="bt_chat_room_msg_'+roomx+'" class="cl_bt_chat_room_msg_x" type="submit" >'
+'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"/></svg>'//paper-plane
+'</button>'
+'</form></div>'
+'<div id="dv_chat_room_user_bts_'+roomx+'" class="cl_chat_room_msg_dv30 bac_col_usr_chat_g">'
+'<button class="cl_bts_chat_room_msg_x" onclick="seleccionar_emoji(\''+roomx+'\')">'
+'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1262 1075q-37 121-138 195t-228 74-228-74-138-195q-8-25 4-48.5t38-31.5q25-8 48.5 4t31.5 38q25 80 92.5 129.5t151.5 49.5 151.5-49.5 92.5-129.5q8-26 32-38t49-4 37 31.5 4 48.5zm-494-435q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm512 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm256 256q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>'//smile-o
+'</button>'
+'<input type="button" class="cl_bts_chat_room_msg_x pos_a" value="_" onclick="es_boton_vacio()">'
+'</div>'
+'</div>';
dv_con_chat.appendChild(nudiv);
nudiv.addEventListener("click", function()
{
var cls_act= nudiv.getAttribute("class");
var re= new RegExp("al_frente", "i");
if(!re.test(cls_act))
{
var dvs= document.querySelectorAll("#dv_con_chat>div");
for(var i=0; i < dvs.length; i++)
{
dvs[i].classList.remove("al_frente");
}//for
this.classList.add("al_frente");
//console.log("al frente");
}//if no cls act
});//click, poner al frente    
jQuery(function($)
{
var draggableDiv =  $('#dv_chat_room_'+roomx).draggable();
$('#dv_chat_room_con_'+roomx, draggableDiv)
.mousedown(function(ev)
{
draggableDiv.draggable('disable');
})//mousedown
.mouseup(function(ev)
{
draggableDiv.draggable('enable');
});//mouseup
$('#dv_chat_room_'+roomx).resizable();
var in_chat_room_msg_= document.getElementById("in_chat_room_msg_"+roomx);
in_chat_room_msg_.addEventListener("keydown", function()
{
esta_tipeando(in_chat_room_msg_);
});//addeventlistener keydown tyP
});//jQuery
}//if no dv_chat_room
}//crear_room


function seleccionar_emoji(roomf)
{
//hay div, no, crea div
console.log("a seleccionar_emoji")
var dv_chat_room_user_= document.getElementById("dv_chat_room_user_"+roomf);
var dv_emj_= document.getElementById("dv_emj_"+roomf);
if(!dv_emj_)
{
var nudiv= document.createElement("div");
nudiv.id= "dv_emj_"+roomf;
nudiv.setAttribute("class","pos_a bot");
nudiv.innerHTML= '<input type="button" value="😄" onclick="meter_emoji(\''+roomf+'\',\'smile\')">'
+'<input type="button" value="😠" onclick="meter_emoji(\''+roomf+'\',\'angry\')">'
+'<input type="button" value="😆" onclick="meter_emoji(\''+roomf+'\',\'laughing\')">'
+'<input type="button" value="👍" onclick="meter_emoji(\''+roomf+'\',\'thumbsup\')">';
dv_chat_room_user_.appendChild(nudiv);
}//if no dvemj_
else
{
dv_chat_room_user_.removeChild(dv_emj_);
}//else quitarlo
}//seleccionar_emoji


function meter_emoji(roomf,pal_emj)
{
console.log("a meter_emoji: "+roomf+"/-/"+pal_emj)
var in_chat_room_msg_= document.getElementById("in_chat_room_msg_"+roomf);
in_chat_room_msg_.value+= ":"+pal_emj+":";
var dv_emj_= document.getElementById("dv_emj_"+roomf);
var dv_chat_room_user_= document.getElementById("dv_chat_room_user_"+roomf);
dv_chat_room_user_.removeChild(dv_emj_);
}//meter_emoji




socket_client.on("recibir usuarios en secret room", function(obj_room_secretf)
{
//obj_room_secretf{users_room,skt_id,room}
console.log("on: recibir usuarios en secret room")
var usersg= "";
for(var nombr in obj_room_secretf.users_room)
{
usersg+= '<span id="sp_escr_'+obj_room_secretf.room+'_'
+obj_room_secretf.users_room[nombr]
+'"></span>'+obj_room_secretf.users_room[nombr]
+"<br>";
}//for
var dv_chat_room_username_= document.getElementById("dv_chat_room_username_"+obj_room_secretf.room);
dv_chat_room_username_.innerHTML= "";
dv_chat_room_username_.innerHTML= usersg;
/*
var dv_chat_room_user_bts_= document.getElementById("dv_chat_room_user_bts_"+obj_room_secretf.room);
dv_chat_room_user_bts_.innerHTML= '<button id="bt_call_secret_'+obj_room_secretf.room
//  '" data-room="'+obj_room_secretf.room+
+'" onclick="juntarse_llamada_secret(this,\''+obj_room_secretf.room+'\')">'
+'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"/></svg>'//phone
+'</button>'
+'<button id="bt_mte_call_secret_'+obj_room_secretf.room+'" class="cl_bt_mte_call">'
+'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M463 945l-101 101q-42-103-42-214v-128q0-26 19-45t45-19 45 19 19 45v128q0 53 15 113zm1114-602l-361 361v128q0 132-94 226t-226 94q-55 0-109-19l-96 96q97 51 205 51 185 0 316.5-131.5t131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-125-13-235-81l-254 254q-10 10-23 10t-23-10l-82-82q-10-10-10-23t10-23l1234-1234q10-10 23-10t23 10l82 82q10 10 10 23t-10 23zm-380-132l-621 621v-512q0-132 94-226t226-94q102 0 184.5 59t116.5 152z"/></svg>'//microphhone-slash
+'</button>'
+'<audio id="lclaud" style="display:none" oncontextmenu="return false;" disabled></audio>'+''; 
*/  
});//skcl recibir usuarios en secret room
          





function mandar_chat_request_profile(ele)
{
console.log("a mandar_chat_request_profile");
var skt_id_rcv= ele.getAttribute("data-skt-id-rcv");
var user_id_rcv= ele.getAttribute("data-user-id-rcv");  
socket_client.emit("mandar chat request",
{
skt_id_rcv: skt_id_rcv,
user_id_rcv: user_id_rcv,
skt_id_mnd: socket_client.id
});
cerrar_profile_user();
}//mandar_chat_request_profile


function cerrar_profile_user()
{
console.log("a cerrar_profile_user")
dv_con_chat.removeChild(dv_profile_user);
}//cerrar_profile_user


function cerrar_inf_user()
{
console.log("a cerrar_inf_user")
dv_con_chat.removeChild(dv_inf_user);
}//cerrar inf profile y chat request



socket_client.on("recibir chat request",function(obj_roomf)
{
//obj_roomf{nme_mnd,id_rcv,skt_id_mnd,skt_id_rcv,room_bth}
console.log("on: 3recibe chat request");
console.log(JSON.stringify(obj_roomf));
var nudiv= document.createElement("div");
nudiv.id= "dv_chat_request_of_"+obj_roomf.room_bth;
nudiv.setAttribute("class","flex_row pos_a top bor_1p_grey bor_r"); 
nudiv.setAttribute("style","justify-content:space-evenly;width:200px")
nudiv.innerHTML= '<div id="dv_chat_request_of_t" class="ali_cen w80 bac_285 whi">Chat request from '
+obj_roomf.nme_mnd+'</div>'
+'<div id="dv_chat_request_of_m" class="ali_cen w10" onclick="aceptar_chat_request(\''
+obj_roomf.room_bth+'\')">+</div>'
+'<div id="dv_chat_request_of_x" class="ali_cen w10 bac_800 whi" onclick="cancelar_chat_request_of(\''+obj_roomf.room_bth+"\',\'"
+obj_roomf.skt_id_rcv+"\',\'"+obj_roomf.skt_id_mnd+'\')">X</div>';
dv_con_chat.appendChild(nudiv);
});//skclon recibir chat request



function aceptar_chat_request(room_bthx)
{
console.log("a aceptar_chat_request")
eliminar_chat_request_of(room_bthx)
socket_client.emit("aceptar chat request", {room_bth: room_bthx})
}//aceptar_chat_request



socket_client.on("crear chat privado", function(obj_roomf)
{
//obj_roomf{room_bth}
console.log("on: crear chat privado")
crear_chat_privado(obj_roomf.room_bth);
});//skclon crear chat privado





function cancelar_chat_request_of(room_bthx, skt_id_rcvf, skt_id_mndf)
{
console.log("a cancelar_chat_request_of")
socket_client.emit("cancelar chat request of",
{
skt_id_mnd: skt_id_mndf,
skt_id_rcv: skt_id_rcvf,
room_bth: room_bthx
})
}//cancelar_chat_request_of



socket_client.on("cancelar chat request of", function(obj_roomf)
{
//obj_roomf{room_bth,skt_id_mnd,skt_id_rcv}
console.log("on: cancela chat request of")
cerrar_waiting(obj_roomf.skt_id_rcv, obj_roomf.room_bth)
});//skon cancelar chat request of



function crear_chat_privado(room_bthx)
{
console.log("a crear_chat_privado")
var dv_chat_room_= document.getElementById("dv_chat_room_"+room_bthx);
if(!dv_chat_room_)
{
var dvs= document.querySelectorAll("#dv_con_chat>div");
for(var i=0; i < dvs.length; i++)
{
dvs[i].classList.remove("al_frente");
}//for    
var nudiv= document.createElement("DIV");
nudiv.id= "dv_chat_room_"+room_bthx;
nudiv.setAttribute("class","pos_a_i top_10 lef_10 w80 h60 bor_r bor_s bac_whi")
nudiv.innerHTML= '<div class="tab h30p w pos_a fon_ari bor_r">'
+'<div class="tab_cel ali_cen ali_mid w70 pos_r h cur_mov bac_col_tit_chat_prv whi bor_r5000 fon_ari fon_bol">Chat with</div>'
+'<div id="dv_chat_room_tit_min_'+room_bthx
+'" class="tab_cel ali_cen ali_mid w10 pos_r h"'
+' onclick="minimizar_dv_chat(\''+room_bthx+'\')">-</div>'
+'<div class="tab_cel ali_cen ali_mid w10 pos_r h"'
+' onclick="restaurar_tam_chat(\''+room_bthx+'\')">L</div>'
+'<div class="tab_cel ali_cen ali_mid w10 pos_r h bor_r0500 bac_col_crr_chat_p whi"'
+' onclick="cerrar_dv_chat(\''+room_bthx+'\')">x</div>'
+'</div>'//dv_chat_room_tit
+'<div id="dv_chat_room_con_user_'+room_bthx
+'" class="pos_a top_30p bot_30p w">'
+'<div id="dv_chat_room_con_'+room_bthx+'" class="h w70 inl_blo pos_r bac_col_con_chat_prv wor_wra ove_y"></div>'
+'<div id="dv_chat_room_user_'+room_bthx+'" class="h w30 inl_blo pos_r bac_col_usr_chat_prv fon_bol wor_wra ove_y">'
+'<div id="dv_chat_room_username_'+room_bthx+'" class="cl_dv_chat_room_username" class="pos_a"></div>'
+'</div>'//_user
+'</div>'//_con_user
+'<div id="dv_chat_room_msg_'+room_bthx+'" class="pos_a bot h30p w">'
+'<div class="h w70 inl_blo pos_r">'
+'<form class="h w" onsubmit="enviar_msg_prv(event,\''+room_bthx+'\')">'
+'<div class="h pos_a lef rig_30p">'
+'<input type="text" id="in_chat_room_msg_'+room_bthx+'" class="w h pos_a" autocorrect="off" autocomplete="off"'
+' data-room="'+room_bthx
+'" placeholder="write your message..."></div>'
+'<button id="btn_chat_room_msg_'+room_bthx+'" class="w30p h pos_a rig" type="submit" >'
+'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"/></svg>'//paper-plane
+'</button>'
+'</form></div>'
+'<div class="h inl_blo pos_a w30 bac_col_usr_chat_prv">'
+'<button class="w30p h"  onclick="seleccionar_emoji(\''+room_bthx+'\')">'
+'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1262 1075q-37 121-138 195t-228 74-228-74-138-195q-8-25 4-48.5t38-31.5q25-8 48.5 4t31.5 38q25 80 92.5 129.5t151.5 49.5 151.5-49.5 92.5-129.5q8-26 32-38t49-4 37 31.5 4 48.5zm-494-435q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm512 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm256 256q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>'+//smile-o
'</button>'/*
'<button id="bt_call_'+room_bthx+
'" class="h" onclick="solicitar_llamada(this,\''+room_bthx+'\')">'+
'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"/></svg>'+//phone
'</button>'+
'<button id="bt_mte_call_'+room_bthx+'" class="h">'+
'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M463 945l-101 101q-42-103-42-214v-128q0-26 19-45t45-19 45 19 19 45v128q0 53 15 113zm1114-602l-361 361v128q0 132-94 226t-226 94q-55 0-109-19l-96 96q97 51 205 51 185 0 316.5-131.5t131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-125-13-235-81l-254 254q-10 10-23 10t-23-10l-82-82q-10-10-10-23t10-23l1234-1234q10-10 23-10t23 10l82 82q10 10 10 23t-10 23zm-380-132l-621 621v-512q0-132 94-226t226-94q102 0 184.5 59t116.5 152z"/></svg>'+//microphhone-slash
'</button>'+
'<audio id="lcl_aud" style="display:none" oncontextmenu="return false;" disabled></audio>'+  */
+'</div>'//_user_bts
+'</div>';    
dv_con_chat.appendChild(nudiv);
nudiv.addEventListener("click", function()
{
var cls_act= nudiv.getAttribute("class");
var re= new RegExp("al_frente", "i");
if(!re.test(cls_act))
{
var dvs= document.querySelectorAll("#dv_con_chat>div");
for(var i= 0; i < dvs.length; i++)
{
dvs[i].classList.remove("al_frente");
}//for
this.classList.add("al_frente");
//console.log("al frente");
}//if no la tiene
});//click, poner al frente     
jQuery(function($)
{
var dv_chat_room_= "#dv_chat_room_"+room_bthx;
var dv_chat_room_con_= "#dv_chat_room_con_"+room_bthx;  
var draggableDiv= $(dv_chat_room_).draggable();
$(dv_chat_room_con_, draggableDiv)
.mousedown(function(ev)
{
draggableDiv.draggable('disable');
}).mouseup(function(ev)
{
draggableDiv.draggable('enable');
});
$(dv_chat_room_).resizable();
var in_chat_room_msg_= document.getElementById("in_chat_room_msg_"+room_bthx);
in_chat_room_msg_.addEventListener("keydown", function()
{
esta_tipeando(in_chat_room_msg_);
});//addeventlistener keydown tyP  
});//jQuery
socket_client.emit("mandar usuarios al chat privado", {room_bth: room_bthx})
}//if dv_chat_room_ no creado
}//crear_chat_privado



socket_client.on("esperar chat request", function(obj_roomf)
{
//obj_roomf{id_mnd,id_rcv,skt_id_mnd,skt_id_rcv,nme_rcv,room_bth}
//if(obj_roomf.skt_id_mnd == socket_client.id){
console.log("on: 3espera chat request");
console.log(JSON.stringify(obj_roomf));
var dv_waiting_= document.getElementById("dv_waiting_"+obj_roomf.room_bth);
if(!dv_waiting_)
{ 
var nudiv= document.createElement("div");
nudiv.id= "dv_waiting_"+obj_roomf.room_bth;
nudiv.setAttribute("class", "flex_row pos_a bot bor_1p_grey bor_r");
nudiv.setAttribute("style", "justify-content:space-evenly;width:200px")
nudiv.innerHTML= '<div id="dv_waiting_t" class="ali_cen w90 bac_285 whi">Waiting for '+obj_roomf.nme_rcv+'...</div>'
+'<div id="dv_waiting_x" class="ali_cen w10 bac_800 whi" onclick=\'cerrar_waiting("'
+obj_roomf.skt_id_rcv+'","'
+obj_roomf.room_bth
+'")\'>X</div>';
dv_con_chat.appendChild(nudiv);
}//if dv_waiting no creado
//}//if es el que espera
});//skcl esperar chat request



function cerrar_waiting(skt_id_rcvf,room_bthf)
{
console.log("a cerrar_waiting")
eliminar_waiting(room_bthf)
socket_client.emit("cancel chat request",
{skt_id_rcv: skt_id_rcvf, room_bth: room_bthf});
}//cerrar_waiting



socket_client.on("cerrar waiting", function(obj_roomf)
{
console.log("on: cerrar waiting")
eliminar_waiting(obj_roomf.room_bth)
});//skclon cerrar waiting



function eliminar_waiting(room_bthx)
{
console.log("a eliminar_waiting")
var dv_waiting= document.getElementById("dv_waiting_"+room_bthx);
dv_con_chat.removeChild(dv_waiting)
}//eliminar_waiting



socket_client.on("eliminar chat request", function(obj_roomf)
{
//obj_roomf{room_bth}
console.log("on: eliminar chat request")
var dv_chat_request_of= document.getElementById("dv_chat_request_of_"+obj_roomf.room_bth);
dv_con_chat.removeChild(dv_chat_request_of);
});//skcl eliminar chat request



function eliminar_chat_request_of(room_bthx)
{
console.log("a eliminar_chat_request_of")
var dv_chat_request_of= document.getElementById("dv_chat_request_of_"+room_bthx);
dv_con_chat.removeChild(dv_chat_request_of);
}//eliminar_chat_request


socket_client.on("acepta chat request",function(obj_roomf)
{
//obj_roomf{nme_mnd,nme_rcv,skt_id_rcv,skt_id_mnd,room_bth}
console.log("on: 5acepta chat request");
console.log(JSON.stringify(obj_roomf));
var dv_waiting= document.getElementById("dv_waiting_"+obj_roomf.room_bth);
dv_con_chat.removeChild(dv_waiting);
//socket_client.emit("users al chat request",obj_roomf);  
});//skcon acepta chat reqquest



socket_client.on("meter usuarios al chat privado", function(obj_roomf)
{
//obj_user{m_names,room_bth,chat_prv}
//obj_roomf{nme_mnd,nme_rcv,skt_id_rcv,skt_id_mnd,room_bth,chat_prv}
console.log("on: 7meter usuarios al chat privado");
console.log(obj_roomf);
//m_names[[firstname, skt_id], ...]
var dv_chat_room_username_= document.getElementById("dv_chat_room_username_"+obj_roomf.room_bth);
dv_chat_room_username_.innerHTML= '<span id="sp_escr_'+obj_roomf.room_bth+'_'
+obj_roomf.m_names[1][0]+'"></span>'+obj_roomf.m_names[1][0]+"<br>"
+'<span id="sp_escr_'+obj_roomf.room_bth+'_'
+obj_roomf.m_names[0][0]+'"></span>'+obj_roomf.m_names[0][0]+"<br>";
  
  /*obj_roomf.m_names[1][0]+"<br id='br_rcv' data-skt-id='"
+obj_roomf.m_names[1][1]+"'/>"
+obj_roomf.m_names[0][0]+"<br id='br_mnd' data-skt-id='"+obj_roomf.m_names[0][1]+"'/>";*/
var li_chat="";
for(var msg_chat in obj_roomf.chat_prv)
{
li_chat+= obj_roomf.chat_prv[msg_chat]+"<br>";
}//for
var dv_chat_room_con_= document.getElementById("dv_chat_room_con_"+obj_roomf.room_bth);
dv_chat_room_con_.innerHTML= li_chat;
});//skcl meter users chat request



function enviar_msg_prv(ev, room_bthx)
{
console.log("a enviar_msg_prv: "+room_bthx)
ev.preventDefault();
var in_chat_room_msg_= document.querySelector("#in_chat_room_msg_"+room_bthx);
if(in_chat_room_msg_.value != "")
{
socket_client.emit("send message chat r",
{msg: in_chat_room_msg_.value, room_bth: room_bthx});
//inr_msg.getAttribute("data-room")  
}//if no vacio
in_chat_room_msg_.value= "";
}//enviar_msg_prv chat prv



socket_client.on("new msg chat request", function(obj_msgf)
{
//obj_msgf{msg,nick,room}
console.log("on: new msg chat request")
jQuery(function($)
{
var dv_chat_room_con_= "#dv_chat_room_con_"+obj_msgf.room;
$(dv_chat_room_con_).append('<b>'+obj_msgf.nick+":</b> "+obj_msgf.msg+"<br/>");
$(dv_chat_room_con_).stop().animate({scrollTop: $(dv_chat_room_con_)[0].scrollHeight}, 200);
});//jQuery
});//skcl new msg chat request msg privado

//...chat...

//---play---


function mostrar_etw_game_opt()
{
console.log("a mostrar_etw_game_opt");
if(typeof(dv_create_game) == "undefined")
{
var nudiv= document.createElement("DIV");
nudiv.id= "dv_create_game";
nudiv.setAttribute("class", "inl_blo ali_cen bor")
nudiv.innerHTML= '<div id="dv_tit_opt_game" class="flex_row">'
+'<div id="dv_tit_opt_game_nme" class="inl_blo ali_cen w bac_bla whi">Game Options</div>'
+'<div id="dv_tit_opt_game_x" class="inl_blo ali_cen w50p cur_poi" onclick="cerrar_game_opt()">X</div></div>'
+'<div style="display:inline-block">'
+'<span>Select word list:</span><br>'
+'<select id="sl_list">'
+'<option id="nros">20 numbers</option>'
+'<option id="essentials">essentials</option>'
+'<option id="business">business</option>'
+'<option id="sharedlingo">sharedlingo\'s words</option>'
+'<option id="proposed">proposed words</option>'
+'<option id="opt_ld">load list, in future</option>'
+'</select></div>'
+'<div style="display:inline-block;text-align:center">'
+'<span>Nro of players:</span><br>'
+'<select id="sl_nro_player">'
+'<option id="opt2">2</option>'
+'<option id="opt3">3</option>'
+'<option id="opt4">4</option>'
+'<option id="opt5">5</option>'
+'<option id="opt6">6</option>'
+'<option id="opt8">8</option>'
+'</select></div><br>'
+'<label><input type="checkbox" id="in_ch_vce">By Voice</label><br>'
+'<div id="dv_rdy_game" class="ali_cen">'
+'<input type="button" id="bt_rdy_game" class="w_" value="Create" onclick="solicitar_juego()">'
+'</div></div>';
dv_con_play.appendChild(nudiv);
}//if dv_create_game no existe
}//mostrar_etwgameopt



function cerrar_game_opt()
{
console.log("a cerrar_game_opt")
dv_con_play.removeChild(dv_create_game);
}//cerrar_gameopt



function solicitar_juego()
{
console.log("a solicitar_juego")
//var typegame= sltypgame.options[sltypgame.selectedIndex].value;
var type_game= in_ch_vce.checked ? "Explain The Word (By Voice)" : "Explain The Word"; 
var list_word= sl_list.options[sl_list.selectedIndex].id;
var nro_player= sl_nro_player.options[sl_nro_player.selectedIndex].value;
dv_con_play.removeChild(dv_create_game);  
socket_client.emit("solicitar game",
{
type_game: type_game,
list_word: list_word,
nro_player: nro_player
});
}//solicitar_juego



socket_client.on("crear juego", function(obj_gamef)
{
//obj_gamef{nro_game,type_game,list_word,nro_player}
console.log("on: 2crea juego");
console.log(JSON.stringify(obj_gamef));
crear_juego(
obj_gamef.nro_game,
obj_gamef.type_game,
obj_gamef.list_word,
obj_gamef.nro_player
); 
});//skcl crear juego



socket_client.on("los demas bar jue", function(obj_bar_juef)
{
//obj_bar_juef{nro_game,type_game,list_word_name,nro_player}
console.log("on: los demas bar jue");
console.log(JSON.stringify(obj_bar_juef));
dar_bar_jue(
obj_bar_juef.nro_game,
obj_bar_juef.type_game,
obj_bar_juef.list_word_name,
obj_bar_juef.nro_player
);
});//skcl los demas bar jue



function dar_bar_jue(roomjf, nme_juef, lis_juef, nro_playerf)
{
console.log("a dar_bar_jue:"+roomjf+"/-/"+nme_juef+"/-/"+lis_juef+"/-/"+nro_playerf);
var dv_game_bar_= document.getElementById("dv_game_bar_"+roomjf);
if(!dv_game_bar_)
{
var nudiv= document.createElement("DIV");
nudiv.id= "dv_game_bar_"+roomjf;
nudiv.setAttribute("class", "bor");
nudiv.setAttribute("style", "display:table")
nudiv.setAttribute("onclick", "juntarse_a_juego(\'"+roomjf+"\',\'"
+nme_juef+"\',\'"
+lis_juef+"\',\'"
+nro_playerf+"\')");
nudiv.setAttribute("data-id-gm", roomjf);
nudiv.innerHTML= '<div id="dv_bar_jue_nm" class="inl_blo bor">'
+nme_juef+'</div>'
+'<div id="dv_bar_jue_lis" class="inl_blo bor">'+lis_juef
+'</div>'
+'<div id="dv_bar_jue_nro_player" class="inl_blo bor">1/' //nrojug/totjug
+'<span id="sp_nro_player">'+ nro_playerf
+'</span>'+'</div>';
dv_con_play.appendChild(nudiv);
}//if no esta la barra
}//dar_bar_jue



function juntarse_a_juego(roomjf, nme_juef, lis_juef, nro_playerf)
{
console.log("a juntarse_a_juego:"+roomjf+"/-/"+nme_juef+"/-/"+lis_juef+"/-/"+nro_playerf);
crear_juego(roomjf, nme_juef, lis_juef, nro_playerf);
}//juntarse o spectate



function crear_juego(roomjf, nme_juef, lis_juef, nro_playerf)
{
console.log("a crear_juego:"+roomjf+"/-/"+nme_juef+"/-/"+lis_juef+"/-/"+nro_playerf);
if(typeof(dv_jue) == "undefined")
{
var nudivj= document.createElement("DIV");
nudivj.id= "dv_jue";
nudivj.setAttribute("class", "flex_col pos_a_i top_10 bor_r bor_1p_grey bac_db82")
//nudivj.classList.add("flex_col","pos_absi","top_10","bor_r","bor_1p_grey","bac_col_db82")
nudivj.setAttribute("style", "width:270px;height:250px")
nudivj.innerHTML= '<div id="dv_jue_cab">'
+'<div id="dv_jue_tit" class="flex_row ali_cen fon_ari">'
+'<div id="dv_jue_tit_nm" class="w ali_cen bor_r5000 bac_285 whi cur_mov">'+nme_juef+'</div>'
+'<div id="dv_jue_tit_rsz" class="ali_cen w30p cur_poi" onclick="restaurar_tam_jue()">L</div>'
+'<div id="dv_jue_tit_cerrar" class="ali_cen w30p cur_poi bac_800 whi bor_r0500" onclick="cerrar_juego(\''+roomjf+'\')">X</div>'
+'</div>'
+'<div id="dv_jue_exp">Explains: <span id="sp_word_to_guess">wordX</span'
+'><span id="sp_timer" class="flo_rig bor_1p_bla">00</span></div>'
+'</div>'//dv_jue_cab
+'<div id="dv_jue_con_user" class="flex_row pos_a top_50p bot_30p w">'
+'<div id="dv_jue_con" class="ove_y wor_wra w bor_1p_grey"></div>'
+'<div id="dv_jue_user" class="wor_wra pos_rel fon_bol bor_1p_grey" style="width:100px">'
+'<div id="dv_jue_username_'+roomjf+'" class="cl_dv_chat_room_username"></div>'
+'<div id="dv_jue_user_bts_'+roomjf+'" class="cl_dv_chat_room_user_bts">'
+'<input type="button" value="_"'
+' onclick="es_boton_vacio()"></div>'
+'</div>'
+'</div>'//_con_user
+'<div id="dv_jue_msg" class="pos_a bot h30p flex_row w90">'
+'<form id="fm_jue_msg" class="pos_a lef top bot rig_30p" onsubmit="enviar_msg_jue(event)">'
+'<div class="pos_a top bot lef rig_30p">'
+'<input type="text" id="in_jue_msg" class="w h" placeholder="write your text..." data-room="'+roomjf+'"></div>'
+'<button id="btn_jue_snd_msg" class="pos_a rig h w30p" type="submit" >'
+'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"/></svg>'//paper-plane
+'</button></form>'
+'<button class="pos_a rig h"  onclick="seleccionar_emoji_jue()">'
+'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1262 1075q-37 121-138 195t-228 74-228-74-138-195q-8-25 4-48.5t38-31.5q25-8 48.5 4t31.5 38q25 80 92.5 129.5t151.5 49.5 151.5-49.5 92.5-129.5q8-26 32-38t49-4 37 31.5 4 48.5zm-494-435q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm512 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm256 256q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>'//smile-o
+'</button>'
+'</div>';
dv_con_play.appendChild(nudivj);
socket_client.emit("entrar roomj",
{
nro_game: roomjf, //idjue
type_game: nme_juef,
list_word: lis_juef,
nro_player: nro_playerf
});
jQuery(function($)
{
var draggableDiv = $('#dv_jue').draggable();
$('#dv_jue_con', draggableDiv)
.mousedown(function(ev)
{
draggableDiv.draggable('disable');
}).mouseup(function(ev)
{
draggableDiv.draggable('enable');
});
var draggableDiv = $('#dv_jue').draggable(); 
$('#dv_jue_exp', draggableDiv)
.mousedown(function(ev)
{
draggableDiv.draggable('disable');
}).mouseup(function(ev)
{
draggableDiv.draggable('enable');
});  
$("#dv_jue").resizable();
});//jQuery
}//if no esta, crea
};//crear_juego



socket_client.on("manda user al juego", function(obj_gamef)
{
/*obj_gamef{users_jue{user_id[fn,skt_id]}},
nro_game,type_game,list_word,nro_player}*/
console.log("on: 4manda user al juego");
console.log(JSON.stringify(obj_gamef));
var userj= "";
for(var nom in obj_gamef.users_jue)
{
userj+= '<div id="dv_jue_pnt_'+nom+'" class="inl_blo ali_cen w30p bor_1p_bla bor_r_">0</div>'
+obj_gamef.users_jue[nom][0]+"<br>";
}//for
var dv_jue_username_= document.getElementById("dv_jue_username_"+obj_gamef.nro_game);
dv_jue_username_.innerHTML= "";
dv_jue_username_.innerHTML= userj;
if(obj_gamef.typegame != "Explain The Word")
{
var dv_jue_user_bts_= document.getElementById("dv_jue_user_bts_"+obj_gamef.nro_game);
  /*
dv_jue_user_bts_.innerHTML= '<button id="bt_call_secret_'+obj_gamef.nro_game+
//  '" data-room="'+objgamef.room+
'" onclick="juntarse_llamada_secret(this,\''+obj_gamef.nro_game+'\')">'+
'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"/></svg>'+//phone
'</button>'+
'<button id="bt_mte_call_secret_'+obj_gamef.nro_game+'" class="cl_bt_mte_call">'+
'<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M463 945l-101 101q-42-103-42-214v-128q0-26 19-45t45-19 45 19 19 45v128q0 53 15 113zm1114-602l-361 361v128q0 132-94 226t-226 94q-55 0-109-19l-96 96q97 51 205 51 185 0 316.5-131.5t131.5-316.5v-128q0-26 19-45t45-19 45 19 19 45v128q0 221-147.5 384.5t-364.5 187.5v132h256q26 0 45 19t19 45-19 45-45 19h-640q-26 0-45-19t-19-45 19-45 45-19h256v-132q-125-13-235-81l-254 254q-10 10-23 10t-23-10l-82-82q-10-10-10-23t10-23l1234-1234q10-10 23-10t23 10l82 82q10 10 10 23t-10 23zm-380-132l-621 621v-512q0-132 94-226t226-94q102 0 184.5 59t116.5 152z"/></svg>'+//microphhone-slash
'</button>'+
'<audio id="lcl_aud" style="display:none" oncontextmenu="return false;" disabled></audio>'+
''; */
}//if es voice  
});//manda user al juego



socket_client.on("ya comenzo jue", function(obj_msgf)
{
//obj_msgf{msg} 
console.log("on: ya comenzo jue")
alert(obj_msgf.msg);
});//skcl ya comenzo juego, esta completo
     
          

socket_client.on("el del turno", function(obj_wordf)
{
//objwordf{word}
console.log("on: el del turno, te toca");
sp_word_to_guess.innerHTML= obj_wordf.word;
});//skcl el del turno



socket_client.on("corre reloj", function(obj_tmpf)
{
//objtmpf{tiempo}
sp_timer.innerHTML= obj_tmpf.tiempo;
});//skcl empieza a correr el reloj



socket_client.on("los que adivinan", function(obj_user_explf)
{
//obj_userexplf{userexpl}
console.log("on: los que adivinan: "+JSON.stringify(obj_user_explf));
sp_word_to_guess.innerHTML= obj_user_explf.userexpl;
dv_jue_con.innerHTML= "";
});//skcl los que adivinan



socket_client.on("no se adivino", function(obj_word_to_guessf)
{
//obj_word_to_guessf{word_to_guess}
console.log("on: no se adivino");
dv_jue_con.innerHTML+= "The word was <b>"
+obj_word_to_guessf.word_to_guess+"</b><br>";
jQuery(function($)
{
$("#dv_jue_con").stop().animate({scrollTop: $("#dv_jue_con")[0].scrollHeight}, 100);
});//jquery
});//skcl si no se adivina



socket_client.on("actualiza puntaje", function(obj_pntf)
{
//obj_pntf{user_id,pnt_player}
console.log("on: acutaliza puntaje: "+JSON.stringify(obj_pntf))
var dv_jue_pnt= document.getElementById("dv_jue_pnt_"+obj_pntf.user_id);
dv_jue_pnt.innerHTML= obj_pntf.pnt_player;
});//skcl actualiza puntaje



socket_client.on("quien gano", function(obj_winnerf)
{
//obj_winnerf{winner_nme}
console.log("on: quien gano: "+obj_winnerf)
dv_jue_con.innerHTML= "The winner is: <b>"+obj_winnerf.winner_nme+"</b>!<br>";
});//skcl quien gano




function restaurar_tam_jue()
{
console.log("a restaurar_tam_jue")
if(dv_jue.offsetWidth<dv_con_play.offsetWidth)
{
dv_jue.style.height= dv_con_play.offsetHeight+"px";
dv_jue.style.width= dv_con_play.offsetWidth+"px";
dv_jue.style.left= 0;
dv_jue.style.top= 0;
}//if pequeño
else
{
dv_jue.removeAttribute("style");
dv_jue.setAttribute("style", "width:270px;height:250px");
}//else retorna
}//restaurar tamaño del juego


function cerrar_juego(roomj)
{
console.log("a cerrar_juego:"+roomj)
dv_con_play.removeChild(dv_jue);
socket_client.emit("salir del juego", {room: roomj});
}//cerrar juego



socket_client.on("eliminar game bar", function(obj_room_gamef)
{
//obj_room_gamef{room_game}
console.log("on: elimina game bar")
var dv_game_bar= document.getElementById("dv_game_bar_"+obj_room_gamef.room_game);
dv_con_play.removeChild(dv_game_bar);
});//skcl eliminar game bar



function enviar_msg_jue(ev)
{
console.log("a enviar_msg_jue")
ev.preventDefault();
if(in_jue_msg.value != "")
{
var msg= in_jue_msg.value;	
var pal= sp_word_to_guess.innerHTML;
var pal_val= pal[0] != pal[0].toUpperCase();
if(pal_val)
{
var re= new RegExp("\\b"+pal+"\\b","i");
if(re.test(msg))
{
alert("can't say the word, explain it!");
}//if esta, alerta
else
{
socket_client.emit("send message jue",
{msg: in_jue_msg.value, nro_game: in_jue_msg.getAttribute("data-room")});
}//else
}//if pal val true p dif P
else{
socket_client.emit("send message jue",
{msg: in_jue_msg.value, nro_game: in_jue_msg.getAttribute("data-room")});
}//else enviar normal
}//if no vacio
in_jue_msg.value= "";
}//on send msg jue, del form enviar_msg_jue(event)



socket_client.on('new message jue', function(obj_msg_gamef)
{
//obj_msg_gamef{msg,nro_game,nick,guess}
console.log("on: new message jue")
if(obj_msg_gamef.guess)
{
dv_jue_con.innerHTML+= "<b>"+obj_msg_gamef.nick+":</b> "
+obj_msg_gamef.msg+"<br/>"
+"BINGO, you guessed the word!<br>";
socket_client.emit("10 seg", {nro_game: obj_msg_gamef.nro_game});
}else
{
dv_jue_con.innerHTML+= "<b>"+obj_msg_gamef.nick+":</b> "+obj_msg_gamef.msg+"<br/>";
}//else no bingo
jQuery(function($)
{
$("#dv_jue_con").stop().animate({scrollTop: $("#dv_jue_con")[0].scrollHeight}, 100);
});//jquery
});//on receive msg juego


function seleccionar_emoji_jue()
{
console.log("a seleccionar_emoji_jue")
alert("emojies in construction, write :smile: for :)\n\nlist: https://www.webpagefx.com/tools/emoji-cheat-sheet/");
}//select emjoy

//https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/svg/pencil.svg


//...play...

//---dict---

//definicion wordnik wordnet.3.0
function definir_wordnik(word)
{
console.log("a definir_wordnik:"+word)
var hk= "https://cors-anywhere.herokuapp.com/";     
var url1= "http://api.wordnik.com:80/v4/word.json/";
//var url2="/hyphenation?useCanonical=true&limit=50&api_key="+
var url2= "/definitions?sourceDictionaries=wordnet&useCanonical=true&includeRelated=true"+"&api_key=b986324a786a6d94d00060ded100c020a49a6a49d8f93c9b3";
//"a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";  //de prueba
var xhr= new XMLHttpRequest();
xhr.open("GET", hk+url1+word+url2, true);   
dv_result_dict.innerHTML= "loading...";    
xhr.onload = function()
{  
//console.log(this.response);
var resp= JSON.parse(this.response);//matriz objetos
var list= "";
for(var pr in resp)
{
var rel_words= "";
//console.log(resp[pr].relatedWords[0].words)

if(resp[pr].relatedWords[0].words)
resp[pr].relatedWords[0].words.forEach(function(v)
{
rel_words+= v+", "
});//for each
list+= resp[pr].partOfSpeech+". "
+resp[pr].text+"<br>"
+"["+rel_words+"]<br>";
}//for
dv_result_dict.innerHTML= list;
};//onload
xhr.send();
}//definir_wordnik



function definir_yandex(word)
{
console.log("a definir_yandex:"+word)
var apik= "dict.1.1.20171201T200832Z.77f7f25aec7d41b6.7bf840f1b594d83a20e756ec3117a3f6393466b0";
var url1= "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?";
var lang_from= in_list_lang_from.value||"en";
var lang_to= in_list_lang_to.value||"es";
var url2= "key="+apik+"&text="+word+"&lang="+lang_from+"-"+lang_to;
var xhr= new XMLHttpRequest();
xhr.open("POST", url1, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send(url2);
dv_result_dict.innerHTML="loading...";
xhr.onload= function()
{
//console.log(this.response);
var resp= JSON.parse(this.response);
var result= "";
for(var i in resp.def)
{
result+= resp.def[i].pos+". "
+resp.def[i].text+" / "
+resp.def[i].ts+"<br>";
for(var j in resp.def[i].tr)
{
result+= "  "+resp.def[i].tr[j].text+"<br> syn: ";
for(var l in resp.def[i].tr[j].syn)
{
result+= resp.def[i].tr[j].syn[l].text+", ";
}//for l
result+= "<br> mean: ";
for(var k in resp.def[i].tr[j].mean){
result+= resp.def[i].tr[j].mean[k].text+", ";
}//for k
result+= "<br>";
}//for j
}//for i
dv_result_dict.innerHTML= result;
};//onload
}//definir_yandex



function traducir_frase(phr)
{
console.log("a traducir_frase:"+phr)
var apik= "trnsl.1.1.20151020T150119Z.a9c85d2a39f6fe5d.c34e526096f815916127444ce3d86ab82e945c35";
var url1= "https://translate.yandex.net/api/v1.5/tr.json/translate?";
var lang_from= in_list_lang_from.value || "en";
var lang_to= in_list_lang_to.value || "es";
var url2= "key="+apik+"&text="+phr+"&lang="+lang_from+"-"+lang_to;
var xhr= new XMLHttpRequest();
xhr.open("POST", url1, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send(url2);
dv_result_dict.innerHTML= "loading...";
xhr.onload= function()
{
//console.log(this.response);
//{code,lang,text}
var resp= JSON.parse(this.response);
dv_result_dict.innerHTML= resp.text;
};//onload
}//traducir_frase

//...dict...

//---nota---

function editar_nota()
{
console.log("a editar_nota")
ta_notes_con.removeAttribute("readonly");
bt_notes_edit.style.display= "none";
bt_notes_save.style.display= "inline-block";
}//editar_nota


function guardar_nota()
{
console.log("a guardar_nota")
socket_client.emit("save note",{nte: ta_notes_con.value}); 
ta_notes_con.setAttribute("readonly","");
bt_notes_edit.style.display= "inline-block";
bt_notes_save.style.display= "none";
}//guardar_nota

//...nota...

//---pie---

function enviar_reporte()
{
console.log("a enviar_reporte")
socket_client.emit("reporte",
{tit: in_reporte_tit.value, rpt: ta_reporte.value});
alert("Thanks for your report");
cerrar_reporte();  
}//enviar_reporte

//...pie...

//---generales---

function nooP(){}//no operations, for swap functions

//dv dictionary, movible y resizable
jQuery(function($)
{
var draggableDiv = $('#dv_dict').draggable();
$('#dv_result_dict', draggableDiv)
.mousedown(function(ev)
{
draggableDiv.draggable('disable');
})//mousedown
.mouseup(function(ev)
{
draggableDiv.draggable('enable');
});//mouseup
$('#dv_dict').resizable();
var draggableDivnts = $('#dv_nts_wrp').draggable();
$('#dv_nts_con', draggableDivnts)
.mousedown(function(ev)
{
draggableDivnts.draggable('disable');
})//mousedown
.mouseup(function(ev)
{
draggableDivnts.draggable('enable');
});//mouseup
$('#dv_nts_wrp').resizable();  
});//dvdict y dvntswrp, movibles y resizable


/*
setTimeout(function()
{
if(typeof(scr_rtc) == "undefined")
{
console.log("mete scripts rtc");
var scr1= document.createElement("script");
scr1.id= "scr_rtc"
scr1.src= "https://simplewebrtc.com/latest-v2.js";
var scr2= document.createElement("script");
scr2.id= "scr_rtc_hec"
scr2.src= "scripts/web_rtc.js";
document.querySelector("body").appendChild(scr1);
document.querySelector("body").appendChild(scr2);
}//if no script rtc  
},2000);//pa mete scripts webrtc
*/


socket_client.on("se desconecto", function(obj_msgf)
{
//obj_msgf{msg}
console.log("on: se desconecto: "+ JSON.stringify(obj_msgf));
alert("lost connection, for appear on the user table again, click on the chat tab"); 
});//skcl se desconecto o cerro

