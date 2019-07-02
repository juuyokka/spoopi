const multer = require('multer');
const sharp = require('sharp');

const upload = multer();

module.exports = router => {
	router.post('/api/spoopi', upload.single('image'), async (req, res) => {
		const { file } = req;

		// console.log(file);

		const result = await sharp(file.buffer)
			.flatten()
			.negate()
			.modulate({
				hue: 180,
			})
			.toBuffer({ resolveWithObject: true });

		res.send({
			mimetype: `image/${result.info.format}`,
			base64: result.data.toString('base64'),
		});
	});
};
