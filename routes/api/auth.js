const express = require('express');
const router = express.Router();
const brypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//Item Model
const User = require('../../models/Users');

// @route   POST api/ath
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    //Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ msg: 'User does not exist' });
            }

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw error
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    emai: user.email
                                }
                            });
                        }
                    )
                })

        })
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Public
router.get('/user', auth, (red, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user =>res.json(user));
})

module.exports = router;