const userData = require('./arrays');


const analyzeUserData = function (dataArray) {

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    activeUse = dataArray.filter((user) => {
        post = new Date(user.post.timestamp)
    })
}
