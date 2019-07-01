const submit = async () => {
	const formData = new FormData();
	const fileField = document.querySelector('input[type="file"]#img');

	formData.append('image', fileField.files[0]);

	const image = await fetch('/api/spoopi', {
		method: 'POST',
		body: formData,
	}).then(res => res.json());

	const imageData = `data:${image.mimetype};base64,${image.base64}`;

	if (!document.querySelector('img#disp')) {
		const oImg = document.createElement('img');
		oImg.setAttribute('src', imageData);
		oImg.setAttribute('id', 'disp');
		document.querySelector('div#app').appendChild(oImg);
	} else {
		document.querySelector('img#disp').setAttribute('src', imageData);
	}
};

document.getElementById('submit').addEventListener('click', submit);
