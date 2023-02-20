var fonts = ["font-family: 'Rubik Microbe', cursive;", "font-family: 'Rubik Marker Hatch', cursive;", "font-family: 'Rubik Glitch', cursive", "font-family: 'Rubik Dirt', cursive;", "font-family: 'Rock Salt', curseive;", "font-family: 'Press Start 2P', cursive;", "font-family: 'Orbitron', sans-serif;", "font-family: 'Nerko One', cursive;", "font-family: 'Monoton', cursive;", "font-family: 'Fredericka the Great', cursive;", "font-family: 'Dancing Script', cursive;", "font-family: 'Press Start 2P', cursive;", "font-family: 'Mrs Saint Delafield', cursive;", "font-family: 'Pirata One', cursive;", "font-family: 'Homemade Apple', cursive;", "font-family: 'Nabla', cursive;", "font-family: 'Press Start 2P', cursive;", "font-family: 'Bungee Shade', cursive;", "font-family: 'UnifrakturMaguntia', cursive;", "font-family: 'Pirata One', cursive;", "font-family: 'Rubik Burned', cursive;", "font-family: 'Eater', cursive;", "font-family: 'Cinzel', serif;", "font-family: 'Bungee Inline', cursive;", "font-family: 'Black Ops One', cursive;", "font-family: 'BhuTuka Expanded One', cursive;", "font-family: 'Creepster', cursive;"];
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
'#E6B333', '#3366E6', '#999966',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
function GenerateCard() {
  for (let i = 0; i < fonts.length; i++) {
    const font = fonts[i];
    createCard("WELCOME", i, font);
  }
}
function createCard(sentence, i, font) {
  const card = document.createElement('div');
  card.classList.add('card', 'has-text-centered', 'customize-card', 'mx-2');
  ran = getRandomItem(colorArray)
  card.id = `card${i}`
  card.style = `font-size: 1.5em;${font};width:260px;background-color:${ran};color:white;`
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const content = document.createElement('p');
  content.textContent = sentence;

  cardContent.appendChild(content);
  card.appendChild(cardContent);

  const column = document.createElement('div');
  column.classList.add('column', 'is-narrow')
  column.appendChild(card)

  document.getElementById('cards').appendChild(column);
  return card;
}

function Showdata() {
  var text = document.getElementById('input').value;
  for (let i = 0; i < fonts.length; i++) {
    document.getElementById(`card${i}`).innerHTML = text;
  }
}

function Lunicode(){this.tools={flip:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(b){for(var c=[],a,d=0,e=b.length;d<e;d++)a=b.charAt(d),0<d&&("\u0324"==a||"\u0317"==a||"\u0316"==a||"\u032e"==a)?(a=this.map[b.charAt(d-1)+a],c.pop()):(a=this.map[a],"undefined"==typeof a&&(a=b.charAt(d))),c.push(a);return c.reverse().join("")},decode:function(b){for(var c=[],a,d=0,e=b.length;d<e;d++)a=b.charAt(d),0<d&&("\u0324"==a||"\u0317"==a||"\u0316"==a||"\u032e"==a)?(a=this.map[b.charAt(d-
  1)+a],c.pop()):(a=this.map[a],"undefined"==typeof a&&(a=b.charAt(d))),c.push(a);return c.reverse().join("")},map:{a:"\u0250",b:"q",c:"\u0254",d:"p",e:"\u01dd",f:"\u025f",g:"\u0253",h:"\u0265",i:"\u0131",j:"\u027e",k:"\u029e",l:"l",m:"\u026f",n:"u",r:"\u0279",t:"\u0287",v:"\u028c",w:"\u028d",y:"\u028e",A:"\u2200",B:"\u1660",C:"\u0186",D:"\u15e1",E:"\u018e",F:"\u2132",G:"\u2141",J:"\u017f",K:"\u22ca",L:"\u02e5",M:"W",P:"\u0500",Q:"\u038c",R:"\u1d1a",T:"\u22a5",U:"\u2229",V:"\u039b",Y:"\u2144",1:"\u21c2",
  2:"\u1105",3:"\u0190",4:"\u3123",5:"\u078e",6:"9",7:"\u3125","&":"\u214b",".":"\u02d9",'"':"\u201e",";":"\u061b","[":"]","(":")","{":"}","?":"\u00bf","!":"\u00a1","'":",","<":">","\u203e":"_","\u00af":"_","\u203f":"\u2040","\u2045":"\u2046","\u2234":"\u2235","\r":"\n","\u00df":"\u1660","\u0308":"\u0324","\u00e4":"\u0250\u0324","\u00f6":"o\u0324","\u00fc":"n\u0324","\u00c4":"\u2200\u0324","\u00d6":"O\u0324","\u00dc":"\u2229\u0324","\u00b4":" \u0317","\u00e9":"\u01dd\u0317","\u00e1":"\u0250\u0317",
  "\u00f3":"o\u0317","\u00fa":"n\u0317","\u00c9":"\u018e\u0317","\u00c1":"\u2200\u0317","\u00d3":"O\u0317","\u00da":"\u2229\u0317","`":" \u0316","\u00e8":"\u01dd\u0316","\u00e0":"\u0250\u0316","\u00f2":"o\u0316","\u00f9":"n\u0316","\u00c8":"\u018e\u0316","\u00c0":"\u2200\u0316","\u00d2":"O\u0316","\u00d9":"\u2229\u0316","^":" \u032e","\u00ea":"\u01dd\u032e","\u00e2":"\u0250\u032e","\u00f4":"o\u032e","\u00fb":"n\u032e","\u00ca":"\u018e\u032e","\u00c2":"\u2200\u032e","\u00d4":"O\u032e","\u00db":"\u2229\u032e"}},
  mirror:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(b){for(var c=[],a,d=[],e=0,f=b.length;e<f;e++)a=b.charAt(e),0<e&&("\u0308"==a||"\u0300"==a||"\u0301"==a||"\u0302"==a)?(a=this.map[b.charAt(e-1)+a],c.pop()):(a=this.map[a],"undefined"==typeof a&&(a=b.charAt(e))),"\n"==a?(d.push(c.reverse().join("")),c=[]):c.push(a);d.push(c.reverse().join(""));return d.join("\n")},decode:function(b){for(var c=[],a,d=[],e=0,f=b.length;e<f;e++)a=b.charAt(e),0<e&&("\u0308"==a||"\u0300"==
  a||"\u0301"==a||"\u0302"==a)?(a=this.map[b.charAt(e-1)+a],c.pop()):(a=this.map[a],"undefined"==typeof a&&(a=b.charAt(e))),"\n"==a?(d.push(c.reverse().join("")),c=[]):c.push(a);d.push(c.reverse().join(""));return d.join("\n")},map:{a:"\u0252",b:"d",c:"\u0254",e:"\u0258",f:"\u13b8",g:"\u01eb",h:"\u029c",j:"\ua781",k:"\u029e",l:"|",n:"\u1d0e",p:"q",r:"\u027f",s:"\ua645",t:"\u019a",y:"\u028f",z:"\u01b9",B:"\u1660",C:"\u0186",D:"\u15e1",E:"\u018e",F:"\ua7fb",G:"\u13ae",J:"\u10b1",K:"\u22ca",L:"\u2143",
  N:"\u0376",P:"\ua7fc",Q:"\u1ecc",R:"\u042f",S:"\ua644",Z:"\u01b8",1:"",2:"",3:"",4:"",5:"",6:"",7:"","&":"",";":"","[":"]","(":")","{":"}","?":"\u2e2e","<":">","\u00e4":"\u0252\u0308","\u00df":"\u1660","\u00b4":"`","\u00e9":"\u0258\u0300","\u00e1":"\u0252\u0300","\u00f3":"\u00f2","\u00fa":"\u00f9","\u00c9":"\u018e\u0300","\u00c1":"\u00c0","\u00d3":"\u00d2","\u00da":"\u00d9","`":"\u00b4","\u00e8":"\u0258\u0301","\u00e0":"\u0252\u0301","\u00c8":"\u018e\u0301","\u00ea":"\u0258\u0302","\u00e2":"\u0252\u0302",
  "\u00ca":"\u018e\u0302","\u00d8":"\u1d13","\u00f8":"\u1d13"}},creepify:{init:function(){for(var b=768;789>=b;b++)this.diacriticsTop.push(String.fromCharCode(b));for(b=790;819>=b;b++)794!=b&&795!=b&&this.diacriticsBottom.push(String.fromCharCode(b));this.diacriticsTop.push(String.fromCharCode(794));this.diacriticsTop.push(String.fromCharCode(795));for(b=820;824>=b;b++)this.diacriticsMiddle.push(String.fromCharCode(b));for(b=825;828>=b;b++)this.diacriticsBottom.push(String.fromCharCode(b));for(b=829;836>=
  b;b++)this.diacriticsTop.push(String.fromCharCode(b));this.diacriticsTop.push(String.fromCharCode(836));this.diacriticsBottom.push(String.fromCharCode(837));this.diacriticsTop.push(String.fromCharCode(838));this.diacriticsBottom.push(String.fromCharCode(839));this.diacriticsBottom.push(String.fromCharCode(840));this.diacriticsBottom.push(String.fromCharCode(841));this.diacriticsTop.push(String.fromCharCode(842));this.diacriticsTop.push(String.fromCharCode(843));this.diacriticsTop.push(String.fromCharCode(844));
  this.diacriticsBottom.push(String.fromCharCode(845));this.diacriticsBottom.push(String.fromCharCode(846));this.diacriticsTop.push(String.fromCharCode(848));this.diacriticsTop.push(String.fromCharCode(849));this.diacriticsTop.push(String.fromCharCode(850));this.diacriticsBottom.push(String.fromCharCode(851));this.diacriticsBottom.push(String.fromCharCode(852));this.diacriticsBottom.push(String.fromCharCode(853));this.diacriticsBottom.push(String.fromCharCode(854));this.diacriticsTop.push(String.fromCharCode(855));
  this.diacriticsTop.push(String.fromCharCode(856));this.diacriticsBottom.push(String.fromCharCode(857));this.diacriticsBottom.push(String.fromCharCode(858));this.diacriticsTop.push(String.fromCharCode(859));this.diacriticsBottom.push(String.fromCharCode(860));this.diacriticsTop.push(String.fromCharCode(861));this.diacriticsTop.push(String.fromCharCode(861));this.diacriticsBottom.push(String.fromCharCode(863));this.diacriticsTop.push(String.fromCharCode(864));this.diacriticsTop.push(String.fromCharCode(865))},
  encode:function(b){var c="",a;for(i in b){a=b[i];this.options.middle&&(a+=this.diacriticsMiddle[Math.floor(Math.random()*this.diacriticsMiddle.length)]);if(this.options.top)for(var d=this.diacriticsTop.length-1,e=0,f=this.options.maxHeight-Math.random()*(this.options.randomization/100)*this.options.maxHeight;e<f;e++)a+=this.diacriticsTop[Math.floor(Math.random()*d)];if(this.options.bottom)for(d=this.diacriticsBottom.length-1,e=0,f=this.options.maxHeight-Math.random()*(this.options.randomization/100)*
  this.options.maxHeight;e<f;e++)a+=this.diacriticsBottom[Math.floor(Math.random()*d)];c+=a}return c},decode:function(b){var c="",a;for(i in b)if(a=b[i].charCodeAt(0),768>a||865<a)c+=b[i];return c},diacriticsTop:[],diacriticsMiddle:[],diacriticsBottom:[],options:{top:!0,middle:!0,bottom:!0,maxHeight:15,randomization:100}},bubbles:{init:function(){for(var b=49;57>=b;b++)this.map[String.fromCharCode(b)]=String.fromCharCode(b+9263);this.map["0"]="\u24ea";for(b=65;90>=b;b++)this.map[String.fromCharCode(b)]=
  String.fromCharCode(b+9333);for(b=97;122>=b;b++)this.map[String.fromCharCode(b)]=String.fromCharCode(b+9327);for(b in this.map)this.mapInverse[this.map[b]]=b},encode:function(b){var c="",a,d=!0;for(i in b)a=this.map[b[i]],"undefined"==typeof a&&(33<=b[i].charCodeAt(0)?(a=b[i]+String.fromCharCode(8413),d||(a=String.fromCharCode(8239)+String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(8239)+a)):a=b[i]),c+=a,d="\n"==a;return c},decode:function(b){var c="",a,d="";for(i in b)a=this.mapInverse[b[i]],
  c+="undefined"==typeof a?b[i]:a;for(i in c)a=c[i].charCodeAt(0),160!=a&&8239!=a&&8413!=a&&(d+=c[i]);return d},map:{},mapInverse:{}},squares:{init:function(){},encode:function(b){var c="",a,d=!0;for(i in b)33<=b[i].charCodeAt(0)?(a=b[i]+String.fromCharCode(8414),d||(a=String.fromCharCode(8239)+String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(8239)+a)):a=b[i],c+=a,d="\n"==a;return c},decode:function(b){var c="",a;for(i in b)a=b[i].charCodeAt(0),160!=a&&8239!=a&&8414!=a&&(c+=b[i]);
  return c}},roundsquares:{init:function(){},encode:function(b){var c="",a,d=!0;for(i in b)33<=b[i].charCodeAt(0)?(a=b[i]+String.fromCharCode(8419),d||(a=String.fromCharCode(160)+String.fromCharCode(160)+String.fromCharCode(160)+a)):a=b[i],c+=a,d="\n"==a;return c},decode:function(b){var c="",a;for(i in b)a=b[i].charCodeAt(0),160!=a&&8239!=a&&8419!=a&&(c+=b[i]);return c}},bent:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(b){for(var c="",a,d=0,e=b.length;d<e;d++)a=this.map[b.charAt(d)],
  "undefined"==typeof a&&(a=b.charAt(d)),c+=a;return c},decode:function(b){for(var c="",a,d=0,e=b.length;d<e;d++)a=this.map[b.charAt(d)],"undefined"==typeof a&&(a=b.charAt(d)),c+=a;return c},map:{a:"\u0105",b:"\u048d",c:"\u00e7",d:"\u056a",e:"\u04bd",f:"\u0192",g:"\u0581",h:"\u0570",i:"\u00ec",j:"\u029d",k:"\u049f",l:"\u04c0",m:"\u028d",n:"\u0572",o:"\u0585",p:"\u0584",q:"\u0566",r:"\u027e",s:"\u0282",t:"\u0567",u:"\u0574",v:"\u0475",w:"\u0561",x:"\u00d7",y:"\u057e",z:"\u0540",A:"\u023a",B:"\u03b2",
  C:"\u21bb",D:"\u13a0",E:"\u0190",F:"\u0191",G:"\u0193",H:"\u01f6",I:"\u012f",J:"\u0644",K:"\u04a0",L:"\ua748",M:"\u2c6e",N:"\u17a0",O:"\u0da7",P:"\u03c6",Q:"\u04a8",R:"\u0f60",S:"\u03da",T:"\u0372",U:"\u0531",V:"\u1efc",W:"\u0c1a",X:"\u10ef",Y:"\u04cb",Z:"\u0240",0:"\u2298",1:"\ud835\udfd9",2:"\u03e9",3:"\u04e0",4:"\u096b",5:"\u01bc",6:"\u03ec",7:"7",8:"\ud835\udfe0",9:"\u096f","&":"\u214b","(":"{",")":"}","{":"(","}":")","\u00e4":"\u0105\u0308","\u00f6":"\u0585\u0308","\u00fc":"\u0574\u0308","\u00c4":"\u023a\u0308",
  "\u00d6":"\u0da7\u0308","\u00dc":"\u0531\u0308","\u00e9":"\u04bd\u0301","\u00e1":"\u0105\u0301","\u00f3":"\u0585\u0301","\u00fa":"\u0574\u0301","\u00c9":"\u0190\u0301","\u00c1":"\u023a\u0301","\u00d3":"\u0da7\u0301","\u00da":"\u0531\u0301","\u00e8":"\u04bd\u0300","\u00e0":"\u0105\u0300","\u00f2":"\u0585\u0300","\u00f9":"\u0574\u0300","\u00c8":"\u0190\u0300","\u00c0":"\u023a\u0300","\u00d2":"\u0da7\u0300","\u00d9":"\u0531\u0300","\u00ea":"\u04bd\u0302","\u00e2":"\u0105\u0302","\u00f4":"\u0585\u0302",
  "\u00fb":"\u0574\u0302","\u00ca":"\u0190\u0302","\u00c2":"\u023a\u0302","\u00d4":"\u0da7\u0302","\u00db":"\u0531\u0302"}},tiny:{init:function(){for(i in this.map)this.map[this.map[i]]=i},encode:function(b){var c="",a;b=b.toUpperCase();for(var d=0,e=b.length;d<e;d++)a=this.map[b.charAt(d)],"undefined"==typeof a&&(a=b.charAt(d)),c+=a;return c},decode:function(b){for(var c="",a,d=0,e=b.length;d<e;d++)a=this.map[b.charAt(d)],"undefined"==typeof a&&(a=b.charAt(d)),c+=a;return c},map:{A:"\u1d00",B:"\u0299",
  C:"\u1d04",D:"\u1d05",E:"\u1d07",F:"\ua730",G:"\u0262",H:"\u029c",I:"\u026a",J:"\u1d0a",K:"\u1d0b",L:"\u029f",M:"\u1d0d",N:"\u0274",O:"\u1d0f",P:"\u1d18",Q:"Q",R:"\u0280",S:"\ua731",T:"\u1d1b",U:"\u1d1c",V:"\u1d20",W:"\u1d21",X:"x",Y:"\u028f",Z:"\u1d22"}}};for(i in this.tools)this.tools[i].init();this.getHTML=function(b){for(var c="",a,d=!0,e=0,f=0,g=0,h=b.length;g<h;g++)a=b.charCodeAt(g),10==a||13==a?(c+="<br>\n",d=!0):32==a?d?(c+=" ",d=!1):(c+="&nbsp;",d=!0):(55296<=a&&56319>=a?(e=a,f=0):0<e?(56320<=
  a&&57343>=a&&(f=1024*(e-55296)+(a-56320)+65536),e=0):f=a,0!=f&&(c+="&#x"+f.toString(16)+";",d=!0));return c}};