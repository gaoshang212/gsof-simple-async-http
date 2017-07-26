import { http } from '../'


async function test() {
    let body = await http.request('http://www.baidu.com');
    console.log(body);

    let json = await http.json('https://mobi.koolearn.com/');
    console.log(json);
}

test();