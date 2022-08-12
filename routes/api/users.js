<<<<<<< HEAD
<<<<<<< HEAD
const { application } = require("express");
const express = require("express");
const router = express.Router();

//Item Model
const User = require("../../models/User");

// @route   GET api/users
// @desc    Register new user
// @access  Public
router.get("/", (req, res) => {
  res.send("register");
});

module.exports = router;
=======
=======
>>>>>>> parent of b32aa9a (Revert "added jsonwebtoken and auth in the backend")
const express = require('express');
const router = express.Router();
const brypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

//Item Model
const User = require('../../models/Users');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    //Simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({ msg: 'Already a user with that email' });
            }

            const newUser = new User({
                name,
                email,
                password
            });

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

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
                        });
                })
            })
        })
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> parent of b32aa9a (Revert "added jsonwebtoken and auth in the backend")
=======
module.exports = router;
>>>>>>> parent of b32aa9a (Revert "added jsonwebtoken and auth in the backend")
