db.createUser(
    {
        user: process.env.MONGOOSE_USER,
        pwd: process.env.MONGOOSE_PASSWORD,
        roles: [
            {
                role: "readWrite",
                db: process.env.MONGOOSE_DATABASE
            }
        ]
    }
);