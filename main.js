'use strict';

function book(){
    return [
        {head:'ǰ��',page:'/views/tpl/book-r1/preface.html',active:false},
        {head:'Ŀ¼',page:'/views/tpl/book-r1/contents.html',active:true},
        {head:'����',page:'/views/tpl/book-r1/code.html',active:false},
        {head:'�Զ�',page:'/views/tpl/book-r1/sample.html',active:false},
        {head:'����',page:'/views/tpl/book-r1/mistake.html',active:false}
    ];
}

var tab=function(arr,idx){
	for(var i=0;i<arr.length;i++){
		arr[i].active = (idx==i?true:false);
	}
	return arr;
}

console.log(tab(book(),3));

