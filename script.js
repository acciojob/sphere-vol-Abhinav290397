function volume_sphere() {
    //Write your code here
	const Form = document.querySelector("#MyForm");
	event.preventDefault();
	const Rad = Form.radius.value;
	const Vol = 1.33*Math.PI*Rad*Rad*Rad;
    Form.volume.value = Vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
