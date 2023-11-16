const { faker } = require('@faker-js/faker');
const http = require('http');
const url = require('url');

http.createServer((req, moz) => {
    const query = url.parse(req.url, true).query;
    const num = query.number;
    const ip = faker.internet.ipv4();
    const email = faker.internet.email();
    const name = faker.internet.displayName();
    const pass = faker.internet.password();
    const user = faker.internet.userAgent();
    const names = faker.person.firstName();
    const last = faker.person.lastName();
    moz.write("number => ");
    moz.write(num);
    moz.write("\n");
    moz.write("first name => ");
    moz.write(names);
    moz.write("\n");
    moz.write("last name => ");
    moz.write(last);
    moz.write("\n");
    moz.write("ID => ");
    moz.write(name);
    moz.write("\n");
    moz.write("IP => ");
    moz.write(ip);
    moz.write("\n");
    moz.write("system => ");
    moz.write(user);
    moz.write("\n");
    moz.write("email => ");
    moz.write(email);
    moz.write("\n");
    moz.write("password => ");
    moz.end(pass);
}).listen(8080)
