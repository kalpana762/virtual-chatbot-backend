module.exports. handleChat= (req, res) => {
    const {message}=req.body;
    if(message && message.toLowerCase()=='hi'){
        return res.json({reply:'Hello!How can I help you today?'});

    }
    res.json({reply:'I did not understand that.'});

};
