document.addEventListener('DOMContentLoaded', () => {
    // 1. 获取所有的作品摘要元素
    const workSummaries = document.querySelectorAll('.work-summary');

    // 2. 遍历每一个摘要元素，并为其添加点击事件监听器
    workSummaries.forEach(summary => {
        summary.addEventListener('click', () => {
            // 3. 获取被点击摘要的父元素，即整个 .work-item
            const workItem = summary.parentElement;

            // 4. 为该 .work-item 切换 'active' 类
            //    - 如果已经有 'active' 类，则移除它（收起）
            //    - 如果没有 'active' 类，则添加它（展开）
            workItem.classList.toggle('active');

            // (可选增强功能): 如果希望每次只展开一个，可以取消下面的注释
            /*
            closeAllOtherItems(workItem);
            */
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