

const title=document.createElement('p');
title.classList.add('title');
const textarea=document.createElement('textarea');
textarea.style.border='2px solid black';
textarea.setAttribute('autofocus',true);
textarea.classList.add('textarea');
textarea.classList.add('body--textarea');
textarea.id='textarea';
textarea.setAttribute('rows',5)
textarea.setAttribute('cols',50)
textarea.style.cursor="text";

title.innerHTML="RSS Виртуальная клавиатура (WINDOWS)";

const body=document.querySelector('body');

const container=document.createElement('div');
container.classList.add('container');
body.appendChild(container);
container.appendChild(title);
container.appendChild(textarea);

const keyboard=document.createElement('div');
keyboard.classList.add('keyboard');
keyboard.classList.add('body--keyboard');
keyboard.id='keyboard';
container.appendChild(keyboard);

const about=document.createElement('div');
about.classList.add('about');
about.innerHTML='Shortcut for switching a language: CtrlLeft + ShiftLeft';
container.appendChild(about);
/*
const sorry=document.createElement('div');
sorry.classList.add('sorry');
sorry.innerHTML='Приношу извинения за некорректно работающую клавишу Shift. Постараюсь исправить в ближайшее время.';
container.appendChild(sorry);
*/
let rows=[];
for(let i=0;i<5;i++)
{
	rows[i]=document.createElement('div');
	rows[i].classList.add('keyboard--row');
	rows[i].classList.add('row');
	keyboard.appendChild(rows[i]);
}

let row1=[];
let row2=[];
let row3=[];
let row4=[];
let row5=[];

for(let i=0;i<14;i++)
{
	row1[i]=document.createElement('div');
	row1[i].classList.add('keyboard--key');
	row1[i].classList.add('key');
	rows[0].appendChild(row1[i]);
}

row1[0].classList.add('Backquote', 'text');
for(let i=0;i<9;i++)
{
	row1[i+1].classList.add(`Digit${i}`);
	row1[i+1].classList.add('text');
}
row1[10].classList.add('Digit0', 'text');
row1[11].classList.add('Minus', 'text');
row1[12].classList.add('Equal', 'text');
row1[13].classList.add('Backspace');



for(let i=0;i<15;i++)
{
	row2[i]=document.createElement('div');
	row2[i].classList.add('keyboard--key');
	row2[i].classList.add('key');
	rows[1].appendChild(row2[i]);
}

row2[0].classList.add('Tab');
row2[1].classList.add('KeyQ', 'text');
row2[2].classList.add('KeyW', 'text');
row2[3].classList.add('KeyE', 'text');
row2[4].classList.add('KeyR', 'text');
row2[5].classList.add('KeyT', 'text');
row2[6].classList.add('KeyY', 'text');
row2[7].classList.add('KeyU', 'text');
row2[8].classList.add('KeyI', 'text');
row2[9].classList.add('KeyO', 'text');
row2[10].classList.add('KeyP', 'text');
row2[11].classList.add('BracketLeft', 'text');
row2[12].classList.add('BracketRight', 'text');
row2[13].classList.add('Backslash', 'text');
row2[14].classList.add('Delete');

for(let i=0;i<13;i++)
{
	row3[i]=document.createElement('div');
	row3[i].classList.add('keyboard--key');
	row3[i].classList.add('key');
	rows[2].appendChild(row3[i]);
}

row3[0].classList.add('CapsLock');
row3[1].classList.add('KeyA', 'text');
row3[2].classList.add('KeyS', 'text');
row3[3].classList.add('KeyD', 'text');
row3[4].classList.add('KeyF', 'text');
row3[5].classList.add('KeyG', 'text');
row3[6].classList.add('KeyH', 'text');
row3[7].classList.add('KeyJ', 'text');
row3[8].classList.add('KeyK', 'text');
row3[9].classList.add('KeyL', 'text');
row3[10].classList.add('Semicolon', 'text');
row3[11].classList.add('Quote', 'text');
row3[12].classList.add('Enter');

for(let i=0;i<13;i++)
{
	row4[i]=document.createElement('div');
	row4[i].classList.add('keyboard--key');
	row4[i].classList.add('key');
	rows[3].appendChild(row4[i]);
}

row4[0].classList.add('ShiftLeft');
row4[1].classList.add('KeyZ', 'text');
row4[2].classList.add('KeyX', 'text');
row4[3].classList.add('KeyC', 'text');
row4[4].classList.add('KeyV', 'text');
row4[5].classList.add('KeyB', 'text');
row4[6].classList.add('KeyN', 'text');
row4[7].classList.add('KeyM', 'text');
row4[8].classList.add('Comma', 'text');
row4[9].classList.add('Period', 'text');
row4[10].classList.add('Slash', 'text');
row4[11].classList.add('ArrowUp', 'text');
row4[12].classList.add('ShiftRight');

for(let i=0;i<9;i++)
{
	row5[i]=document.createElement('div');
	row5[i].classList.add('keyboard--key');
	row5[i].classList.add('key');
	rows[4].appendChild(row5[i]);
}

row5[0].classList.add('ControlLeft');
row5[1].classList.add('MetaLeft');
row5[2].classList.add('AltLeft');
row5[3].classList.add('Space', 'text');
row5[4].classList.add('AltRight');
row5[5].classList.add('ArrowLeft', 'text');
row5[6].classList.add('ArrowDown', 'text');
row5[7].classList.add('ArrowRight', 'text');
row5[8].classList.add('ControlRight');

let allKeys = document.querySelectorAll('.key');
allKeys.forEach((e) => {
let rus=document.createElement('span');
let eng=document.createElement('span');
eng.classList.add('eng');
eng.classList.add('hidden');
rus.classList.add('rus');

let ruscaseDown=document.createElement('span');
let rusCaseUp=document.createElement('span');
let ruscaps=document.createElement('span');
let russhiftCaps=document.createElement('span');
let engcaseDown=document.createElement('span');
let engCaseUp=document.createElement('span');
let engcaps=document.createElement('span');
let engshiftCaps=document.createElement('span');

ruscaseDown.classList.add('caseDown');
engcaseDown.classList.add('caseDown');
rusCaseUp.classList.add('caseUp');
engCaseUp.classList.add('caseUp');
ruscaps.classList.add('caps');
engcaps.classList.add('caps');
russhiftCaps.classList.add('shiftCaps');
engshiftCaps.classList.add('shiftCaps');

//engcaseDown.classList.add('hidden');
rusCaseUp.classList.add('hidden');
engCaseUp.classList.add('hidden');
ruscaps.classList.add('hidden');
engcaps.classList.add('hidden');
russhiftCaps.classList.add('hidden');
engshiftCaps.classList.add('hidden');

rus.appendChild(ruscaseDown);
rus.appendChild(rusCaseUp);
rus.appendChild(ruscaps);
rus.appendChild(russhiftCaps);

eng.appendChild(engcaseDown);
eng.appendChild(engCaseUp);
eng.appendChild(engcaps);
eng.appendChild(engshiftCaps);

e.appendChild(rus);
e.appendChild(eng);
})

caseDowns=document.querySelectorAll('.rus .caseDown');
caseDowns[0].innerHTML='ё';
caseDowns[1].innerHTML='1';
caseDowns[2].innerHTML='2';
caseDowns[3].innerHTML='3';
caseDowns[4].innerHTML='4';
caseDowns[5].innerHTML='5';
caseDowns[6].innerHTML='6';
caseDowns[7].innerHTML='7';
caseDowns[8].innerHTML='8';
caseDowns[9].innerHTML='9';
caseDowns[10].innerHTML='0';
caseDowns[11].innerHTML='-';
caseDowns[12].innerHTML='=';
caseDowns[13].innerHTML='Backspace';
caseDowns[14].innerHTML='Tab';
caseDowns[15].innerHTML='й';
caseDowns[16].innerHTML='ц';
caseDowns[17].innerHTML='у';
caseDowns[18].innerHTML='к';
caseDowns[19].innerHTML='е';
caseDowns[20].innerHTML='н';
caseDowns[21].innerHTML='г';
caseDowns[22].innerHTML='ш';
caseDowns[23].innerHTML='щ';
caseDowns[24].innerHTML='з';
caseDowns[25].innerHTML='х';
caseDowns[26].innerHTML='ъ';
caseDowns[27].innerHTML='\\';
caseDowns[28].innerHTML='Del';

caseDowns[29].innerHTML='CapsLock';
caseDowns[30].innerHTML='ф';
caseDowns[31].innerHTML='ы';
caseDowns[32].innerHTML='в';
caseDowns[33].innerHTML='а';
caseDowns[34].innerHTML='п';
caseDowns[35].innerHTML='р';
caseDowns[36].innerHTML='о';
caseDowns[37].innerHTML='л';
caseDowns[38].innerHTML='д';
caseDowns[39].innerHTML='ж';
caseDowns[40].innerHTML='э';
caseDowns[41].innerHTML='Enter';

caseDowns[42].innerHTML='Shift';
caseDowns[43].innerHTML='я';
caseDowns[44].innerHTML='ч';
caseDowns[45].innerHTML='с';
caseDowns[46].innerHTML='м';
caseDowns[47].innerHTML='и';
caseDowns[48].innerHTML='т';
caseDowns[49].innerHTML='ь';
caseDowns[50].innerHTML='б';
caseDowns[51].innerHTML='ю';
caseDowns[52].innerHTML='.';
caseDowns[53].innerHTML='▲';
caseDowns[54].innerHTML='Shift';

caseDowns[55].innerHTML='Ctrl';
caseDowns[56].innerHTML='Win';
caseDowns[57].innerHTML='Alt';
caseDowns[58].innerHTML='&nbsp';
caseDowns[59].innerHTML='Alt';
caseDowns[60].innerHTML='◄';
caseDowns[61].innerHTML='▼';
caseDowns[62].innerHTML='►';
caseDowns[63].innerHTML='Ctrl';


caseUps=document.querySelectorAll('.rus .caseUp');
caseUps[0].innerHTML='Ё';
caseUps[1].innerHTML='!';
caseUps[2].innerHTML='"';
caseUps[3].innerHTML='№';
caseUps[4].innerHTML=';';
caseUps[5].innerHTML='%';
caseUps[6].innerHTML=':';
caseUps[7].innerHTML='?';
caseUps[8].innerHTML='*';
caseUps[9].innerHTML='(';
caseUps[10].innerHTML=')';
caseUps[11].innerHTML='_';
caseUps[12].innerHTML='+';
caseUps[13].innerHTML='Backspace';
caseUps[14].innerHTML='Tab';
caseUps[15].innerHTML='Й';
caseUps[16].innerHTML='Ц';
caseUps[17].innerHTML='У';
caseUps[18].innerHTML='К';
caseUps[19].innerHTML='Е';
caseUps[20].innerHTML='Н';
caseUps[21].innerHTML='Г';
caseUps[22].innerHTML='Ш';
caseUps[23].innerHTML='Щ';
caseUps[24].innerHTML='З';
caseUps[25].innerHTML='Х';
caseUps[26].innerHTML='Ъ';
caseUps[27].innerHTML='/';
caseUps[28].innerHTML='Del';

caseUps[29].innerHTML='CapsLock';
caseUps[30].innerHTML='Ф';
caseUps[31].innerHTML='Ы';
caseUps[32].innerHTML='В';
caseUps[33].innerHTML='А';
caseUps[34].innerHTML='П';
caseUps[35].innerHTML='Р';
caseUps[36].innerHTML='О';
caseUps[37].innerHTML='Л';
caseUps[38].innerHTML='Д';
caseUps[39].innerHTML='Ж';
caseUps[40].innerHTML='Э';
caseUps[41].innerHTML='Enter';

caseUps[42].innerHTML='Shift';
caseUps[43].innerHTML='Я';
caseUps[44].innerHTML='Ч';
caseUps[45].innerHTML='С';
caseUps[46].innerHTML='М';
caseUps[47].innerHTML='И';
caseUps[48].innerHTML='Т';
caseUps[49].innerHTML='Ь';
caseUps[50].innerHTML='Б';
caseUps[51].innerHTML='Ю';
caseUps[52].innerHTML=',';
caseUps[53].innerHTML='▲';
caseUps[54].innerHTML='Shift';

caseUps[55].innerHTML='Ctrl';
caseUps[56].innerHTML='Win';
caseUps[57].innerHTML='Alt';
caseUps[58].innerHTML='&nbsp';
caseUps[59].innerHTML='Alt';
caseUps[60].innerHTML='◄';
caseUps[61].innerHTML='▼';
caseUps[62].innerHTML='►';
caseUps[63].innerHTML='Ctrl';



Caps=document.querySelectorAll('.rus .caps');
Caps[0].innerHTML='Ё';
Caps[1].innerHTML='1';
Caps[2].innerHTML='2';
Caps[3].innerHTML='3';
Caps[4].innerHTML='4';
Caps[5].innerHTML='5';
Caps[6].innerHTML='6';
Caps[7].innerHTML='7';
Caps[8].innerHTML='8';
Caps[9].innerHTML='9';
Caps[10].innerHTML='0';
Caps[11].innerHTML='-';
Caps[12].innerHTML='=';
Caps[13].innerHTML='Backspace';
Caps[14].innerHTML='Tab';
Caps[15].innerHTML='Й';
Caps[16].innerHTML='Ц';
Caps[17].innerHTML='У';
Caps[18].innerHTML='К';
Caps[19].innerHTML='Е';
Caps[20].innerHTML='Н';
Caps[21].innerHTML='Г';
Caps[22].innerHTML='Ш';
Caps[23].innerHTML='Щ';
Caps[24].innerHTML='З';
Caps[25].innerHTML='Х';
Caps[26].innerHTML='Ъ';
Caps[27].innerHTML='\\';
Caps[28].innerHTML='Del';

Caps[29].innerHTML='CapsLock';
Caps[30].innerHTML='Ф';
Caps[31].innerHTML='Ы';
Caps[32].innerHTML='В';
Caps[33].innerHTML='А';
Caps[34].innerHTML='П';
Caps[35].innerHTML='Р';
Caps[36].innerHTML='О';
Caps[37].innerHTML='Л';
Caps[38].innerHTML='Д';
Caps[39].innerHTML='Ж';
Caps[40].innerHTML='Э';
Caps[41].innerHTML='Enter';

Caps[42].innerHTML='Shift';
Caps[43].innerHTML='Я';
Caps[44].innerHTML='Ч';
Caps[45].innerHTML='С';
Caps[46].innerHTML='М';
Caps[47].innerHTML='И';
Caps[48].innerHTML='Т';
Caps[49].innerHTML='Ь';
Caps[50].innerHTML='Б';
Caps[51].innerHTML='Ю';
Caps[52].innerHTML='.';
Caps[53].innerHTML='▲';
Caps[54].innerHTML='Shift';

Caps[55].innerHTML='Ctrl';
Caps[56].innerHTML='Win';
Caps[57].innerHTML='Alt';
Caps[58].innerHTML='&nbsp';
Caps[59].innerHTML='Alt';
Caps[60].innerHTML='◄';
Caps[61].innerHTML='▼';
Caps[62].innerHTML='►';
Caps[63].innerHTML='Ctrl';



shiftCaps=document.querySelectorAll('.rus .shiftCaps');
shiftCaps[0].innerHTML='ё';
shiftCaps[1].innerHTML='!';
shiftCaps[2].innerHTML='"';
shiftCaps[3].innerHTML='№';
shiftCaps[4].innerHTML=';';
shiftCaps[5].innerHTML='%';
shiftCaps[6].innerHTML=':';
shiftCaps[7].innerHTML='?';
shiftCaps[8].innerHTML='*';
shiftCaps[9].innerHTML='(';
shiftCaps[10].innerHTML=')';
shiftCaps[11].innerHTML='_';
shiftCaps[12].innerHTML='+';
shiftCaps[13].innerHTML='Backspace';
shiftCaps[15].innerHTML='й';
shiftCaps[16].innerHTML='ц';
shiftCaps[17].innerHTML='у';
shiftCaps[18].innerHTML='к';
shiftCaps[19].innerHTML='е';
shiftCaps[20].innerHTML='н';
shiftCaps[21].innerHTML='г';
shiftCaps[22].innerHTML='ш';
shiftCaps[23].innerHTML='щ';
shiftCaps[24].innerHTML='з';
shiftCaps[25].innerHTML='х';
shiftCaps[26].innerHTML='ъ';
shiftCaps[27].innerHTML='/';
shiftCaps[28].innerHTML='Del';

shiftCaps[29].innerHTML='CapsLock';
shiftCaps[30].innerHTML='ф';
shiftCaps[31].innerHTML='ы';
shiftCaps[32].innerHTML='в';
shiftCaps[33].innerHTML='а';
shiftCaps[34].innerHTML='п';
shiftCaps[35].innerHTML='р';
shiftCaps[36].innerHTML='о';
shiftCaps[37].innerHTML='л';
shiftCaps[38].innerHTML='д';
shiftCaps[39].innerHTML='ж';
shiftCaps[40].innerHTML='э';
shiftCaps[41].innerHTML='Enter';

shiftCaps[42].innerHTML='Shift';
shiftCaps[43].innerHTML='я';
shiftCaps[44].innerHTML='ч';
shiftCaps[45].innerHTML='с';
shiftCaps[46].innerHTML='м';
shiftCaps[47].innerHTML='и';
shiftCaps[48].innerHTML='т';
shiftCaps[49].innerHTML='ь';
shiftCaps[50].innerHTML='б';
shiftCaps[51].innerHTML='ю';
shiftCaps[52].innerHTML=',';
shiftCaps[53].innerHTML='▲';
shiftCaps[54].innerHTML='Shift';

shiftCaps[55].innerHTML='Ctrl';
shiftCaps[56].innerHTML='Win';
shiftCaps[57].innerHTML='Alt';
shiftCaps[58].innerHTML='&nbsp';
shiftCaps[59].innerHTML='Alt';
shiftCaps[60].innerHTML='◄';
shiftCaps[61].innerHTML='▼';
shiftCaps[62].innerHTML='►';
shiftCaps[63].innerHTML='Ctrl';






















caseDownsEng=document.querySelectorAll('.eng .caseDown');
caseDownsEng[0].innerHTML='`';
caseDownsEng[1].innerHTML='1';
caseDownsEng[2].innerHTML='2';
caseDownsEng[3].innerHTML='3';
caseDownsEng[4].innerHTML='4';
caseDownsEng[5].innerHTML='5';
caseDownsEng[6].innerHTML='6';
caseDownsEng[7].innerHTML='7';
caseDownsEng[8].innerHTML='8';
caseDownsEng[9].innerHTML='9';
caseDownsEng[10].innerHTML='0';
caseDownsEng[11].innerHTML='-';
caseDownsEng[12].innerHTML='=';
caseDownsEng[13].innerHTML='Backspace';
caseDownsEng[14].innerHTML='Tab';
caseDownsEng[15].innerHTML='q';
caseDownsEng[16].innerHTML='w';
caseDownsEng[17].innerHTML='e';
caseDownsEng[18].innerHTML='r';
caseDownsEng[19].innerHTML='t';
caseDownsEng[20].innerHTML='y';
caseDownsEng[21].innerHTML='u';
caseDownsEng[22].innerHTML='i';
caseDownsEng[23].innerHTML='o';
caseDownsEng[24].innerHTML='p';
caseDownsEng[25].innerHTML='[';
caseDownsEng[26].innerHTML=']';
caseDownsEng[27].innerHTML='\\';
caseDownsEng[28].innerHTML='Del';

caseDownsEng[29].innerHTML='CapsLock';
caseDownsEng[30].innerHTML='a';
caseDownsEng[31].innerHTML='s';
caseDownsEng[32].innerHTML='d';
caseDownsEng[33].innerHTML='f';
caseDownsEng[34].innerHTML='g';
caseDownsEng[35].innerHTML='h';
caseDownsEng[36].innerHTML='j';
caseDownsEng[37].innerHTML='k';
caseDownsEng[38].innerHTML='l';
caseDownsEng[39].innerHTML=';';
caseDownsEng[40].innerHTML='&#8242';
caseDownsEng[41].innerHTML='Enter';

caseDownsEng[42].innerHTML='Shift';
caseDownsEng[43].innerHTML='z';
caseDownsEng[44].innerHTML='x';
caseDownsEng[45].innerHTML='c';
caseDownsEng[46].innerHTML='v';
caseDownsEng[47].innerHTML='b';
caseDownsEng[48].innerHTML='n';
caseDownsEng[49].innerHTML='m';
caseDownsEng[50].innerHTML=',';
caseDownsEng[51].innerHTML='.';
caseDownsEng[52].innerHTML='/';
caseDownsEng[53].innerHTML='▲';
caseDownsEng[54].innerHTML='Shift';

caseDownsEng[55].innerHTML='Ctrl';
caseDownsEng[56].innerHTML='Win';
caseDownsEng[57].innerHTML='Alt';
caseDownsEng[58].innerHTML='&nbsp';
caseDownsEng[59].innerHTML='Alt';
caseDownsEng[60].innerHTML='◄';
caseDownsEng[61].innerHTML='▼';
caseDownsEng[62].innerHTML='►';
caseDownsEng[63].innerHTML='Ctrl';

caseUpsEng=document.querySelectorAll('.eng .caseUp');
caseUpsEng[0].innerHTML='~';
caseUpsEng[1].innerHTML='!';
caseUpsEng[2].innerHTML='@';
caseUpsEng[3].innerHTML='#';
caseUpsEng[4].innerHTML='$';
caseUpsEng[5].innerHTML='%';
caseUpsEng[6].innerHTML='^';
caseUpsEng[7].innerHTML='&';
caseUpsEng[8].innerHTML='*';
caseUpsEng[9].innerHTML='(';
caseUpsEng[10].innerHTML=')';
caseUpsEng[11].innerHTML='_';
caseUpsEng[12].innerHTML='+';
caseUpsEng[13].innerHTML='Backspace';
caseUpsEng[14].innerHTML='Tab';
caseUpsEng[15].innerHTML='Q';
caseUpsEng[16].innerHTML='W';
caseUpsEng[17].innerHTML='E';
caseUpsEng[18].innerHTML='R';
caseUpsEng[19].innerHTML='T';
caseUpsEng[20].innerHTML='Y';
caseUpsEng[21].innerHTML='U';
caseUpsEng[22].innerHTML='I';
caseUpsEng[23].innerHTML='O';
caseUpsEng[24].innerHTML='P';
caseUpsEng[25].innerHTML='{';
caseUpsEng[26].innerHTML='}';
caseUpsEng[27].innerHTML='|';
caseUpsEng[28].innerHTML='Del';

caseUpsEng[29].innerHTML='CapsLock';
caseUpsEng[30].innerHTML='A';
caseUpsEng[31].innerHTML='S';
caseUpsEng[32].innerHTML='D';
caseUpsEng[33].innerHTML='F';
caseUpsEng[34].innerHTML='G';
caseUpsEng[35].innerHTML='H';
caseUpsEng[36].innerHTML='J';
caseUpsEng[37].innerHTML='K';
caseUpsEng[38].innerHTML='L';
caseUpsEng[39].innerHTML=':';
caseUpsEng[40].innerHTML='"';
caseUpsEng[41].innerHTML='Enter';

caseUpsEng[42].innerHTML='Shift';
caseUpsEng[43].innerHTML='Z';
caseUpsEng[44].innerHTML='X';
caseUpsEng[45].innerHTML='C';
caseUpsEng[46].innerHTML='V';
caseUpsEng[47].innerHTML='B';
caseUpsEng[48].innerHTML='N';
caseUpsEng[49].innerHTML='M';
caseUpsEng[50].innerHTML='<';
caseUpsEng[51].innerHTML='>';
caseUpsEng[52].innerHTML='?';
caseUpsEng[53].innerHTML='▲';
caseUpsEng[54].innerHTML='Shift';

caseUpsEng[55].innerHTML='Ctrl';
caseUpsEng[56].innerHTML='Win';
caseUpsEng[57].innerHTML='Alt';
caseUpsEng[58].innerHTML='&nbsp';
caseUpsEng[59].innerHTML='Alt';
caseUpsEng[60].innerHTML='◄';
caseUpsEng[61].innerHTML='▼';
caseUpsEng[62].innerHTML='►';
caseUpsEng[63].innerHTML='Ctrl';




CapsEng=document.querySelectorAll('.eng .caps');
CapsEng[0].innerHTML='`';
CapsEng[1].innerHTML='1';
CapsEng[2].innerHTML='2';
CapsEng[3].innerHTML='3';
CapsEng[4].innerHTML='4';
CapsEng[5].innerHTML='5';
CapsEng[6].innerHTML='6';
CapsEng[7].innerHTML='7';
CapsEng[8].innerHTML='8';
CapsEng[9].innerHTML='9';
CapsEng[10].innerHTML='0';
CapsEng[11].innerHTML='-';
CapsEng[12].innerHTML='=';
CapsEng[13].innerHTML='Backspace';
CapsEng[14].innerHTML='Tab';
CapsEng[15].innerHTML='Q';
CapsEng[16].innerHTML='W';
CapsEng[17].innerHTML='E';
CapsEng[18].innerHTML='R';
CapsEng[19].innerHTML='T';
CapsEng[20].innerHTML='Y';
CapsEng[21].innerHTML='U';
CapsEng[22].innerHTML='I';
CapsEng[23].innerHTML='O';
CapsEng[24].innerHTML='P';
CapsEng[25].innerHTML='[';
CapsEng[26].innerHTML=']';
CapsEng[27].innerHTML='\\';
CapsEng[28].innerHTML='Del';

CapsEng[29].innerHTML='CapsLock';
CapsEng[30].innerHTML='A';
CapsEng[31].innerHTML='S';
CapsEng[32].innerHTML='D';
CapsEng[33].innerHTML='F';
CapsEng[34].innerHTML='G';
CapsEng[35].innerHTML='H';
CapsEng[36].innerHTML='J';
CapsEng[37].innerHTML='K';
CapsEng[38].innerHTML='L';
CapsEng[39].innerHTML=';';
CapsEng[40].innerHTML='&#8242';
CapsEng[41].innerHTML='Enter';

CapsEng[42].innerHTML='Shift';
CapsEng[43].innerHTML='Z';
CapsEng[44].innerHTML='X';
CapsEng[45].innerHTML='C';
CapsEng[46].innerHTML='V';
CapsEng[47].innerHTML='B';
CapsEng[48].innerHTML='N';
CapsEng[49].innerHTML='M';
CapsEng[50].innerHTML=',';
CapsEng[51].innerHTML='.';
CapsEng[52].innerHTML='/';
CapsEng[53].innerHTML='▲';
CapsEng[54].innerHTML='Shift';

CapsEng[55].innerHTML='Ctrl';
CapsEng[56].innerHTML='Win';
CapsEng[57].innerHTML='Alt';
CapsEng[58].innerHTML='&nbsp';
CapsEng[59].innerHTML='Alt';
CapsEng[60].innerHTML='◄';
CapsEng[61].innerHTML='▼';
CapsEng[62].innerHTML='►';
CapsEng[63].innerHTML='Ctrl';





shiftCapsEng=document.querySelectorAll('.eng .shiftCaps');
caseUpsEng[0].innerHTML='~';
caseUpsEng[1].innerHTML='!';
caseUpsEng[2].innerHTML='@';
caseUpsEng[3].innerHTML='#';
caseUpsEng[4].innerHTML='$';
caseUpsEng[5].innerHTML='%';
caseUpsEng[6].innerHTML='^';
caseUpsEng[7].innerHTML='&';
caseUpsEng[8].innerHTML='*';
caseUpsEng[9].innerHTML='(';
caseUpsEng[10].innerHTML=')';
caseUpsEng[11].innerHTML='_';
caseUpsEng[12].innerHTML='+';
shiftCapsEng[13].innerHTML='Backspace';
shiftCapsEng[14].innerHTML='Tab';
caseDownsEng[15].innerHTML='q';
caseDownsEng[16].innerHTML='w';
caseDownsEng[17].innerHTML='e';
caseDownsEng[18].innerHTML='r';
caseDownsEng[19].innerHTML='t';
caseDownsEng[20].innerHTML='y';
caseDownsEng[21].innerHTML='u';
caseDownsEng[22].innerHTML='i';
caseDownsEng[23].innerHTML='o';
caseDownsEng[24].innerHTML='p';
caseDownsEng[25].innerHTML='{';
caseDownsEng[26].innerHTML='}';
caseDownsEng[27].innerHTML='|';
caseDownsEng[28].innerHTML='Del';

caseDownsEng[29].innerHTML='CapsLock';
caseDownsEng[30].innerHTML='a';
caseDownsEng[31].innerHTML='s';
caseDownsEng[32].innerHTML='d';
caseDownsEng[33].innerHTML='f';
caseDownsEng[34].innerHTML='g';
caseDownsEng[35].innerHTML='h';
caseDownsEng[36].innerHTML='j';
caseDownsEng[37].innerHTML='k';
caseDownsEng[38].innerHTML='l';
caseDownsEng[39].innerHTML=':';
caseDownsEng[40].innerHTML='"';
caseDownsEng[41].innerHTML='Enter';

caseDownsEng[42].innerHTML='Shift';
caseDownsEng[43].innerHTML='z';
caseDownsEng[44].innerHTML='x';
caseDownsEng[45].innerHTML='c';
caseDownsEng[46].innerHTML='v';
caseDownsEng[47].innerHTML='b';
caseDownsEng[48].innerHTML='n';
caseDownsEng[49].innerHTML='m';
shiftCapsEng[50].innerHTML='<';
shiftCapsEng[51].innerHTML='>';
shiftCapsEng[52].innerHTML='?';
shiftCapsEng[53].innerHTML='▲';
shiftCapsEng[54].innerHTML='Shift';

shiftCapsEng[55].innerHTML='Ctrl';
shiftCapsEng[56].innerHTML='Win';
shiftCapsEng[57].innerHTML='Alt';
shiftCapsEng[58].innerHTML='&nbsp';
shiftCapsEng[59].innerHTML='Alt';
shiftCapsEng[60].innerHTML='◄';
shiftCapsEng[61].innerHTML='▼';
shiftCapsEng[62].innerHTML='►';
shiftCapsEng[63].innerHTML='Ctrl';


if (localStorage.getItem('lang') == 'eng') {
SwitchLang();
}

let rus=document.querySelectorAll('.rus');

if(rus[0].classList.contains('hidden'))
localStorage.setItem('lang', 'eng');
else localStorage.setItem('lang', 'rus');

function SwitchLang(){
	let rus=document.querySelectorAll('.rus');
	let eng=document.querySelectorAll('.eng');

	rus.forEach((e) =>{
	e.classList.toggle('hidden');
	})
	eng.forEach((e) =>{
		e.classList.toggle('hidden');
		})
		if(rus[0].classList.contains('hidden')) localStorage.setItem('lang', 'eng');
		else localStorage.setItem('lang', 'rus');
		
}

function Unclick(element){
	if(element.classList.contains('ShiftLeft') || element.classList.contains('ShiftRight')){
{forShift();}
	}
	if(element.classList.contains('text'))
	element.style.background='#444444';
	else if((!(element.code == 'CapsLock' || element.classList.contains('CapsLock')))) {element.style.background='#222222';}
	else {
		t=document.querySelectorAll('.caseDown');
		if((!(t[0].classList.contains('hidden')))) {element.style.background='#222222';}}
	element.style.borderRadius='0';
	
	element.addEventListener('mouseover', () =>{
		if(!(element.code == 'CapsLock') || (element.code == 'CapsLock' && element.style.background=='#222222')) {element.style.background='#79aa89';}
	})
	element.addEventListener('mouseout', () =>{
		if(element.classList.contains('text'))
	element.style.background='#444444';
	else  element.style.background='#222222';
	})
}

function forCaps(){
	let t=[];
	t[0]=document.querySelectorAll('.caseDown');
t[1]=document.querySelectorAll('.caseUp');
t[3]=document.querySelectorAll('.caps');
t[2]=document.querySelectorAll('.shiftCaps');



t[0].forEach((e) =>{
e.classList.toggle('hidden');
})
for(let i=1;i<3;i++)
{
t[i].forEach((e) =>{
e.classList.add('hidden')
})
}
t[3].forEach((e) =>{
e.classList.toggle('hidden');
})
}

function forShift(){
	let t=[];
	t[0]=document.querySelectorAll('.caseDown');
t[1]=document.querySelectorAll('.caseUp');
t[3]=document.querySelectorAll('.caps');
t[2]=document.querySelectorAll('.shiftCaps');



t[0].forEach((e) =>{
e.classList.toggle('hidden');
})
t[1].forEach((e) =>{
	e.classList.toggle('hidden');
	})
for(let i=2;i<4;i++)
{
t[i].forEach((e) =>{
e.classList.add('hidden')
})
}
}

function forShiftCaps(){
	let t=[];
	t[0]=document.querySelectorAll('.caseDown');
t[1]=document.querySelectorAll('.caseUp');
t[3]=document.querySelectorAll('.caps');
t[2]=document.querySelectorAll('.shiftCaps');



t[0].forEach((e) =>{
e.classList.toggle('hidden');
})
t[1].forEach((e) =>{
	e.classList.toggle('hidden');
	})
for(let i=2;i<4;i++)
{
t[i].forEach((e) =>{
e.classList.add('hidden')
})
}
}

function Click(element, fromButton){

	if(element.classList.contains('CapsLock') && element.style.borderRadius=='50px'){
		element.style.background='#222222';
		element.style.borderRadius='0px';
		forCaps();
		return;
	}
	element.style.background='#28fd73';
	element.style.borderRadius='50px';

	//for text symbols
	if(element.classList.contains('text'))
	{textarea.value+=element.innerText;}
	else{
		if(element.classList.contains('Tab')) textarea.value+="    ";
		if(element.classList.contains('Backspace')) textarea.value = textarea.value.substring(0, textarea.value.length - 1);
		if(element.classList.contains('CapsLock')) 
		{
			forCaps();
		}
		if((element.classList.contains('ShiftLeft')) || (element.classList.contains('ShiftRight')) )
		{
			forShift();
		}
		if(element.classList.contains('Delete') && textarea.selectionStart >0) 
		{
			let u=textarea.selectionStart;
			textarea.value=textarea.value.slice(0, u) + textarea.value.slice(u+1, textarea.value.length);
			textarea.selectionStart=u;
			textarea.selectionEnd=u;
		}
		if(element.classList.contains('Enter')) {
			let u=textarea.selectionStart;
			textarea.value=textarea.value.slice(0, u) +"\n" + textarea.value.slice(u, textarea.value.length);
			textarea.selectionStart=u+1;
			textarea.selectionEnd=u+1;
			//textarea.value+="\n";
	
	}
	}


	if(!element.classList.contains('CapsLock')) window.addEventListener('mouseup', function(event) {
		
		if(element.classList.contains('ShiftLeft') || element.classList.contains('ShiftRight')) {
			element.style.background='#222222';
			element.style.borderRadius='0';
			forShift();
		}
		else Unclick(element);
		console.log(9);
		this.removeEventListener('mouseup', arguments.callee)})
	
}

Array.from(document.getElementsByClassName('key')).forEach(element =>{
	element.addEventListener('mousedown', () => {Click(element, false);
		/*if(element.classList.contains('CapsLock')){
			window.addEventListener('mousedown', () => function() {console.log(11);Unclick(element);
				//this.removeEventListener('mousedown', arguments.callee)
			})
		}*/
	})
})

let flagCaps=true;

document.addEventListener('keydown', event => {
	event.preventDefault();
	if(flagCaps)
{
	//console.log(789);
	//console.log(document.getElementsByClassName(`${event.code}`)[0].innerText);
	Click(document.getElementsByClassName(`${event.code}`)[0], true);
	if(event.code == 'CapsLock') {flagCaps=false;
		}


	document.addEventListener('keyup', function(event) {
		if((event.code != 'ShiftLeft') && (event.code != 'ShiftRight')) Unclick(document.querySelector(`.${event.code}`));
else {document.querySelector(`.${event.code}`).style.background='#222222';
document.querySelector(`.${event.code}`).style.borderRadius='0';forShift();}
		flagCaps=true;
	this.removeEventListener('keyup', arguments.callee);
})
/*else
{
	document.addEventListener('keydown', function(event) {
		if(event.code=='CapsLock') 
		{
		forCaps();
		Unclick(document.querySelector(`.${event.code}`));
		this.removeEventListener('keydown', arguments.callee);
		flagCaps=true;
		//console.log(8);
		}
	});
}*/

let t=[]; let b=null;
t[0]='ShiftLeft';t[1]='ControlLeft';
for(let j=0;j<2;j++){

}
	if(event.code =='ShiftLeft') {
		//console.log(444);
		document.addEventListener('keydown', () => {
			if(event.code == 'ControlLeft'){
				document.addEventListener('keyup', function(event) {
					SwitchLang();
					this.removeEventListener('keyup', arguments.callee);
				})
			}
			//Press(event, 'ControlLeft');
		//console.log(22);
		document.addEventListener('keyup', function(event) {
			//console.log(888);
			this.removeEventListener('keydown', Press(event, 'ControlLeft'));
			this.removeEventListener('keyup', arguments.callee);
		})
	})

	
	}
else if(event.code =='ControlLeft') {
//	console.log(333);
	document.addEventListener('keydown', () => {
		if(event.code == 'ShiftLeft'){
				document.addEventListener('keyup', function(event) {
					SwitchLang();
					this.removeEventListener('keyup', arguments.callee);
				})
			}
		//Press(event, 'ShiftLeft');
	//console.log(44);
	document.addEventListener('keyup', function(event) {
		//console.log(999);
		this.removeEventListener('keydown', Press(event, 'ShiftLeft'));
			this.removeEventListener('keyup', arguments.callee);
	})})
	
}


}});

function Press(t, a){
//	console.log(4444444);
	if(t.code ==a)
			{
				//console.log(444);
				SwitchLang();
				//this.removeEventListener('keydown', arguments.callee);
				
			}

}
/*
function Press(t, c){
	document.addEventListener('keydown', (event) => {
		Press2(event,t[c]);
	})
	document.addEventListener('keyup', (event) => {
	document.removeEventListener('keydown', Press2(event,t[c]));
})
	
}

function Press2(e, t){
	if(e.code == t) SwitchLang();
}

*/
