export const DB = {
    host: "localhost",
    port: 5432,
    username: "render_user",
    password: "123456",
    database: "render_db",
    dialect: "postgres",
    timezone: "Asia/Shanghai",
    typeValidation: true
};

export const Session = {
    key: '20NestSoft:session17',
    maxAge: 86400000,
};