document.addEventListener('DOMContentLoaded', () => {
    // 1. 获取所有的展开/收起图标元素
    const expandIcons = document.querySelectorAll('.expand-icon');

    // 2. 遍历每一个加号图标，并为其添加点击事件监听器
    expandIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            // 阻止事件冒泡到父元素（work-summary），确保只响应加号的点击
            // 这对于防止点击加号时，触发到标题链接的点击（虽然这里标题点击只负责跳转，但也是好的实践）
            event.stopPropagation();

            // 获取加号的父元素（work-summary），再获取其父元素（work-item）
            const workItem = icon.closest('.work-item');

            // 切换 .work-item 的 'active' 类
            workItem.classList.toggle('active');

            // (可选增强功能): 如果希望每次只展开一个，可以取消下面的注释
            /*
            closeAllOtherItems(workItem);
            */
        });
    });

    // 3. 获取所有作品标题中的链接
    const titleLinks = document.querySelectorAll('.work-info h3 a');

    // 4. 为每个标题链接添加点击事件监听器
    titleLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // 阻止事件冒泡到父元素，防止它触发任何不相关的点击事件
            // 例如，如果 work-summary 也有点击事件，这里阻止可以确保只处理链接跳转
            event.stopPropagation();
            // 默认行为就是跳转链接，所以这里不需要额外代码
            // 浏览器会自动处理 href 属性的跳转
        });
    });

    /*
    // (可选增强功能)
    // 这个函数会关闭除了当前点击项之外的所有项
    function closeAllOtherItems(currentItem) {
        const allItems = document.querySelectorAll('.work-item');
        allItems.forEach(item => {
            if (item !== currentItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
    }
    */
});