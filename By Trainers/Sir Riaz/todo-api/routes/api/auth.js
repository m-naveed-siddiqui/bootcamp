const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const { jwtSecretKey } = require('../../config/keys');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});


// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post('/', [
	check('user_name', 'Username is required').exists(),
	check('password', 'Password is required').isLength({ min: 6 })
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { user_name, password } = req.body;

	try {
		let user = await User.findOne({ user_name });

		if (!user) {
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
		};

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
		}

		const payload = {
			user: {
				id: user.id
			}
		}

		jwt.sign(payload, jwtSecretKey, {
			expiresIn: 360000
		}, (err, token) => {
			if (err) throw err;
			res.json({ token })
		});

	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}

});

module.exports = router;