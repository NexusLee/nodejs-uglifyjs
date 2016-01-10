'use strict';

function book(){
    return [
        {head:'Ç°ÑÔ',page:'/views/tpl/book-r1/preface.html',active:false},
        {head:'Ä¿Â¼',page:'/views/tpl/book-r1/contents.html',active:true},
        {head:'´úÂë',page:'/views/tpl/book-r1/code.html',active:false},
        {head:'ÊÔ¶Á',page:'/views/tpl/book-r1/sample.html',active:false},
        {head:'¿±Îó',page:'/views/tpl/book-r1/mistake.html',active:false}
    ];
}

var tab=function(arr,idx){
	for(var i=0;i<arr.length;i++){
		arr[i].active = (idx==i?true:false);
	}
	return arr;
}

console.log(tab(book(),3));

