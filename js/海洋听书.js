var rule = {
    title: '海洋听书',
    编码: 'gb18030',
    host: 'http://m.ychy.org/',
    homeUrl: '/best.html', // 首页地址
    url: '/list/{id}.html', // 分类列表页地址，{id}将被替换为具体的分类ID
    searchUrl: '/search.asp?page=fypage&searchword=**&searchtype=-1', // 搜索页地址
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    class_name: '网络玄幻&恐怖悬疑&评书下载&儿童读物&相声戏曲&传统武侠&都市言情&历史军事&人物传记&广播剧&百家讲坛&有声文学&探险盗墓&职场商战',
    class_url: '52&17&3&4&7&12&13&15&16&18&32&41&45&81', // 分类ID，确保与网站实际分类ID一致
    play_parse: true,
    lazy: '',
    limit: 6,
    double: true,
    推荐: '*',
    一级: '.book-list ul li;a .book-title&&Text;img&&src;a .book-desc&&Text;a&&href', // 一级页面解析规则
    二级: {
        title: 'h2&&Text;.info div:eq(4)&&Text', // 二级页面标题解析规则
        img: '.bookimg img&&src', // 二级页面图片解析规则
        desc: '.info div:eq(3)&&Text;;;.info div:eq(2)&&Text;.info div:eq(1)&&Text', // 二级页面描述解析规则
        content: '.book_intro&&Text', // 二级页面内容解析规则
        tabs: '.sub_tit', // 二级页面标签解析规则
        lists: '#playlist li' // 二级页面列表解析规则
    },
    搜索: "js:let d=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;log(input);let html=request(input);var list=pdfa(html,'.book_slist&&.bookbox');list.forEach(function(it){d.push({title:pdfh(it,'h4&&Text'),desc:pdfh(it,'.update&&Text'),pic_url:pd(it,'img&&orgsrc'),url:'http://m.ychy.org/book/'+pdfh(it,'.bookbox&&bookid')+'.html'})});setResult(d);"
};
