var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "my name"
    };
    setTimeout(() => {
        callback(user);

    }, 2000);
};

getUser(1, (userObj) => {
    console.log(userObj);
});