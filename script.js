function volume_sphere() {
    //Write your code here
	const Form = document.querySelector("#MyForm");
	event.preventDefault();
	const Rad = parseFloat(Form.radius.value);
	const Vol = (4/3)*(Math.PI)*Rad*Rad*Rad;
    Form.volume.value = Vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
