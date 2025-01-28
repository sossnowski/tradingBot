db.createUser(
    {
        user: "usertest",
        pwd: "pAssw0rd",
        roles: [
            {
                role: "readWrite",
                db: "bot"
            }
        ]
    }
);