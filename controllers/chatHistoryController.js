module.exports.getChatHistory = (req, res) => {
    const dummyChat =[
               {sender: 'Alice',message: 'Hello there!'},
               {sender:'Bob',message:'Hi,how are you?'}
    ];
    res.json(dummyChat);
};
