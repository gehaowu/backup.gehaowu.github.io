var pub_img_current_image;
function backgroundImage(){
var pub_img_path='images/';

var pub_img_num = 3;

var pub_img_current_no=function(){return Math.floor(Math.random()*pub_img_num+1);};

var pub_img_url=function(){return pub_img_path+'pub_'+pub_img_current_no()+'.jpg';};

if (pub_img_current_image === undefined ) pub_img_current_image = pub_img_url();

if ('querySelector' in document) {
	var body = document.querySelector('body').style;
} else {
	var body = document.body.style;
}
body.backgroundSize = 'cover';
body.backgroundRepeat = 'no-repeat';
body.backgroundImage = 'url('+ pub_img_current_image +')';

var span = document.getElementById('img_placer');
span.innerHTML = '<span style="background-image: url('+(pub_img_current_image=pub_img_url())+');width: 0px;height: 0px;display: inline;"></span>';
}
backgroundImage();

var up = document.getElementById('up-arrow');
var upStatus = 0;

up.addEventListener('click',function(){
	if(upStatus === 0){
		var container = document.getElementById('container');
		container.setAttribute('class', 'folded');
		up.style.backgroundImage = 'url(../images/down.png)';
        up.style.cursor = 's-resize'; 
	} else{
		var container = document.getElementById('container');
		container.removeAttribute('class');
		up.style.backgroundImage = 'url(../images/up.png)';
        up.style.cursor = 'n-resize';
	}
	upStatus = ~ upStatus;
});
