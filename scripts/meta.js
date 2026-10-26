(function setDynamicMetaTags() {
    const BOARD = window.CURRENT_BOARD || 'b';
    
    const boardNames = {
        'b': '/b/ - Разное',
        'g': '/g/ - Технологии и программирование',
        'a': '/a/ - Аниме и манга',
        'pol': '/pol/ - Политика',
        'd': '/d/ - Изображения',
        'k': '/k/ - Оружие',
        'c': '/c/ - Creepypasta'
    };
    
    const boardDescriptions = {
        'b': 'Главная доска для мемов, обсуждений и всего подряд. Анонимно и без цензуры.',
        'g': 'Технологии, программирование, железо, софт и IT-новости.',
        'a': 'Аниме, манга, ранобэ, вейфу и обсуждение сезонов.',
        'pol': 'Политические дискуссии, новости, аналитика и мировые события.',
        'd': 'Картинки, обои, арты, фотографии и креатив.',
        'k': 'Оружие, военная техника, стрельбища и история вооружений.',
        'c': 'Страшные истории, крипипасты, мистика и ужасы.'
    };
    
    const title = boardNames[BOARD] || `/${BOARD}/ - 9chan`;
    const description = boardDescriptions[BOARD] || `Доска /${BOARD}/ на 9chan. Анонимное общение и свобода слова.`;
    const imageUrl = `https://rasko6.github.io/9chan/${BOARD}.png`;
    const pageUrl = `https://rasko6.github.io/9chan/board/${BOARD}.html`;
    
    function setMetaTag(property, content, isName = false) {
        let selector = isName ? `meta[name="${property}"]` : `meta[property="${property}"]`;
        let meta = document.querySelector(selector);
        
        if(!meta) {
            meta = document.createElement('meta');
            if(isName) {
                meta.setAttribute('name', property);
            } else {
                meta.setAttribute('property', property);
            }
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    }
    
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', imageUrl);
    setMetaTag('og:image:width', '726');
    setMetaTag('og:image:height', '231');
    setMetaTag('og:url', pageUrl);
    setMetaTag('og:type', 'website');
  
    // for twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', imageUrl, true);
})();
