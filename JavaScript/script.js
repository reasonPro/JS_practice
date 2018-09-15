function getId(a){
	return document.getElementById(a);
}



/* кнопка "редагувати". Клік відкриє блок з редактором коду а основний закриє. 
дістає текст з верхнього блоку і розміщує його в редакторі.
 */
getId('edit').onclick = function(){
	getId('changeTextBlock').style.display = 'block';
	getId('changeStyleBlock').style.display = 'none';
	let text = getId('box1').innerHTML;
	getId('textArea').value = text;
}

/* кнопка "Зберегти". передає все що знаходиться в редакторі у верхній блок 
і закриває редактор коду
*/
getId('saveText').onclick = function(){
	let newText = getId('textArea').value;
	getId('box1').innerHTML = newText;
	getId('textArea').value = "";
	getId('changeTextBlock').style.display = 'none';
}

/* Кнопка "додати" закриває всі основні блоки і відприває блок
для вибору створення таблиці або списку
 */
getId('addOption').onclick = function(){
	getId('optionBox').style.display = 'block';
	getId('mainBoxes').style.display = 'none';

}

/* Закриває редактор коду і відкриває блок стилізації */
getId('style').onclick = function(){
	getId('changeTextBlock').style.display = 'none';
	getId('changeStyleBlock').style.display = 'block';
}


let radioForm = document.forms['radioForm'];
/* радіо кнопки які будуть змінювати величину шрифту */
for(let i = 0; i<radioForm.length; i++){
	radioForm.elements[i].addEventListener('click', function(){
		getId('box1').style.fontSize = this.value;
	})
}

let formSerif = document.forms.formSerif;
/* select для зміни шрифту */
formSerif.serif.onchange = function(){
	for(let i=0; i<serif.length; i++){
		if (formSerif.serif.options[i].selected){
			getId('box1').style.fontFamily = this.value;
		}
	}
}

let box = document.querySelectorAll('.box');
/* зміна кольору тексту */
for(let i=0; i<box.length; i++){
  box[i].onclick = function(){
  	getId('box1').style.color = this.style.color
    getId('blockTextColor').style.display = 'none';
  }
}

let boxBack = document.querySelectorAll('.boxBack');
/* зміна кольору фону основного верхнього блока */
for(let i=0; i<boxBack.length; i++){
  boxBack[i].onclick = function(){
  	getId('box1').style.background = this.style.background
  	getId('blockBackgroundColor').style.display = 'none';
  }
}



/* відкриває вікно для вибору кольору тексту у верхньому блоці */
getId('textColorClick').onclick = function(){
   getId('blockBackgroundColor').style.display = 'none';
   getId('blockTextColor').style.display = 'flex';
 
}

/* відкриває вікно для вибору кольору фону у верньому блоці */
getId('textbackgroundClick').onclick = function(){
	getId('blockTextColor').style.display = 'none';
    getId('blockBackgroundColor').style.display = 'flex';
 
}

document.body.onclick = function (e) {
        e = e || window.event;
       target = e.target || e.srcElement;
       if (target.id == "textColorClick") {
           getId('blockTextColor').style.display = 'flex';
       } else {
           getId('blockTextColor').style.display = 'none';
       }
       if (target.id == "textbackgroundClick") {
           getId('blockBackgroundColor').style.display = 'flex';
       } else {
           getId('blockBackgroundColor').style.display = 'none';
       }
   }

/* зміна тексту на жирний і курсивний */
let textStyle = document.forms['textStyle'];
textStyle.checkBold.onclick = function(){
	 if(textStyle.checkBold.checked){
	 	getId('box1').style.fontWeight = 'bold';
	 }
	 else{
	 	getId('box1').style.fontWeight = 'normal';
	 }
}
   
textStyle.checkItalic.onclick = function(){
	 if(textStyle.checkItalic.checked){
	 	getId('box1').style.fontStyle = 'italic';
	 }
	 else{
	 	getId('box1').style.fontStyle = 'normal';
	 }
}

/* вибір створення таблиці */
getId('choiceUlOrTable').onclick = function(){
	if(getId('choiceOfTable').checked){
		getId('tableOption').style.display = 'block';
 		getId('ulOption').style.display = 'none';
	}
}
/* вибір створення списку */
getId('choiceOfUl').onclick = function(){
	if(getId('choiceOfUl').checked){
		getId('ulOption').style.display = 'block';
 		getId('tableOption').style.display = 'none';
	}
}


/* Кнопка створення таблиці */
getId('createTable').onclick = function(){

	let trTable = getId('rowElementsTable').value;
	let tdTable = getId('colElementsTable').value;
	let widthTable = getId('widthColTable').value;
	let heightTable = getId('heightColTable').value;
	let weightTable = getId('weightLine').value;
	let typeLine = getId('lineType').value;
	let colorLine = getId('lineColor').value;


	getId('optionBox').style.display = 'none';
	getId('mainBoxes').style.display = 'block';

	getId('textArea').value += '<table style="border:'+weightTable+'px '+typeLine+' '+colorLine+'; border-collapse: collapse;">';

	for(let i = 1; i<=trTable; i++){

		getId('textArea').value += '<tr>';

		for(let i = 1; i<=tdTable; i++){
			getId('textArea').value += '<td style="width: '+widthTable+'px; height:'+heightTable+'px; border:'+weightTable
		+'px '+typeLine+' '+colorLine+';">some text</td>';
		}
		getId('textArea').value += '</tr>';
	}
	getId('textArea').value += '</table>';

}
/* кнопка створення списку */
getId('createUl').onclick = function(){

	let elementsUl = getId('elementsUl').value;
	let markType = getId('markType').value;

	getId('optionBox').style.display = 'none';
	getId('mainBoxes').style.display = 'block';

	getId('textArea').value += '<ul>';

	for(let i = 1; i<=elementsUl; i++){

		getId('textArea').value += '<li type="'+markType+'">Текст</li>'
	}

	getId('textArea').value += '</ul>';
}








