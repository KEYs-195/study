// 定义一个异步函数 getData()
async function getData() {

    // 用 fetch() API 获取远程数据的响应
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // 把 response 返回的数据流转成json 调用json()函数
    const posts = await response.json();

    // console.log(posts);

    // 获取容器
    const root = document.querySelector('#root');

    // 创建ul
    const ul = document.createElement('ul');

    // 遍历post
    posts.forEach(post => {

        // 创建li
        const li = document.createElement('li');
        // 创建a
        const anchor = document.createElement('a');

        // 将标题放入a中
        anchor.appendChild(document.createTextNode(post.title));
        // 设置对应a标签的href
        anchor.setAttribute('href', `https://jsonplaceholder.typicode.com/posts/${post.id}`);

        // 把a放入li中
        li.appendChild(anchor);
        // 把li放入ul中
        ul.appendChild(li);
    });

    // 把ul放入root容器中
    root.appendChild(ul);
}

getData();