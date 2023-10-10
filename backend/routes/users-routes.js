const express = require('express');

const router = express.Router();

const DUMMY_USERS = [{
    id: 'u1',
    model: 'givi'
}]

router.get('/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const user = DUMMY_USERS.find(user => user.id === userId)

    if(!load){
        return res.status(404).json({message: "Couldn't find a load for the provided id"});
      }

    res.json({user: user});
})

module.exports = router;