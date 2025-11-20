document.addEventListener("DOMContentLoaded", function() {

    var urlArray = window.location.pathname.split('/');
    var urlLang = urlArray[1];
    var filterLang = urlLang;

    var popSearch = document.getElementById('popular-searches');

    let globeSearch = document.getElementById('hits');
    let usSearch = document.getElementById('usHits');
    let gerSearch = document.getElementById('deHits');
    let inSearch = document.getElementById('inHits');
    let zaSearch = document.getElementById('zaHits');
    let uaeSearch = document.getElementById('aeHits');
    let resSearch = document.getElementById('resHits');
    let franSearch = document.getElementById('frHits');
    let canSearch = document.getElementById('caHits');
    let sweSearch = document.getElementById('seHits');
    let malaySearch = document.getElementById('myHits');
    let toriSearch = document.getElementById('jaHits');
    let articleSearch = document.getElementById('newsHits');

    function revealForm() {
        if(document.querySelector('#parts-form')){ 
            document.querySelector('#parts-form').classList.add('d-block');
        } else if (document.querySelector('#search-parts-form')) {
            document.querySelector('#search-parts-form').classList.add('d-block');
        }

        document.querySelector('.ais-Pagination').classList.add('d-none');
    }

    function hideForm() {
        if(document.querySelector('#parts-form')){ 
            if(document.querySelector('#parts-form').classList.contains('d-block')){
                document.querySelector('#parts-form').classList.remove('d-block');
            }
        } else if (document.querySelector('#search-parts-form')) {
            if (document.querySelector('#search-parts-form').classList.contains('d-block')) {
                document.querySelector('#search-parts-form').classList.remove('d-block');
            }
        }
        if (document.querySelector('.ais-Pagination').classList.contains('d-none')) {
            document.querySelector('.ais-Pagination').classList.remove('d-none');
        }
    }

    window.dataLayer = window.dataLayer || [];
    const { liteClient: algoliasearch } = window["algoliasearch/lite"];
    const { connectSearchBox } = instantsearch.connectors;
    const { connectStats } = instantsearch.connectors;
    const { connectClearRefinements } = instantsearch.connectors;
    const { EXPERIMENTAL_autocomplete } = instantsearch.widgets;
    
    const searchClient = algoliasearch('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

    const renderSearchBox = (renderOptions, isFirstRender) => {
        const { query, refine, clear, isSearchStalled, widgetParams } = renderOptions;

        if (isFirstRender) {
            const input = document.createElement('input');
            input.classList.add('ais-SearchBox-input');
            input.classList.add('form-control');
            input.setAttribute("type", "text")

            const searchButton = document.createElement('button');
            searchButton.classList.add('ais-SearchBox-submit');
            searchButton.classList.add('btn');
            searchButton.classList.add('btn-danger');
            searchButton.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

            const loadingIndicator = document.createElement('span');
            loadingIndicator.textContent = 'Loading...';

            searchButton.addEventListener('click', event => {
                refine(input.value);
            });

            input.addEventListener('keydown', function(e){
                if(e.code === "Enter") {
                    refine(input.value);
                }
            });

            widgetParams.container.appendChild(input);
            widgetParams.container.appendChild(searchButton);
            widgetParams.container.appendChild(loadingIndicator);
        }

        widgetParams.container.querySelector('input').value = query;
        widgetParams.container.querySelector('span').hidden = !isSearchStalled;
    };

    const renderClearRefinements = (renderOptions, isFirstRender) => {
        const {canRefine, refine, widgetParams} = renderOptions;

        if(isFirstRender) {
            const clearButton = document.createElement('button');
            clearButton.classList.add("btn", "btn-primary", "mt-5");
            if(filterLang == 'en'){
                clearButton.textContent = 'Clear Refinements';
            } else if(filterLang == ''){
                clearButton.textContent = 'Clear Refinements';
            } else if(filterLang == 'es'){
                clearButton.textContent = 'Refinamientos claros'
            } else if(filterLang == 'fr'){
                clearButton.textContent = 'Raffinements clairs'
            } else if(filterLang == 'de'){
                clearButton.textContent = 'Klare Verfeinerungen'
            } else if(filterLang == 'it'){
                clearButton.textContent = 'Rifiniture chiare'
            } else if(filterLang == 'pl'){
                clearButton.textContent = 'Wyraźne udoskonalenia';
            } else if(filterLang == 'tr'){
                clearButton.textContent = 'Açık İfadeler';
            } else if(filterLang == 'zh-hans'){
                clearButton.textContent = '清除细化';
            } else if(filterLang == 'ar'){
                clearButton.textContent = 'تنقيحات واضحة';
            } else if(filterLang == 'nb'){
                clearButton.textContent = 'Tydelige avgrensninger';
            } else if(filterLang == 'pt-br'){
                clearButton.textContent = 'Limpar refinamentos';
            } else if(filterLang == 'pt'){
                clearButton.textContent = 'Limpar refinamentos';
            } else if(filterLang == 'cz'){
                clearButton.textContent = 'Jasné upřesnění';
            } else if(filterLang == 'nl'){
                clearButton.textContent = 'Duidelijke Verfijningen';
            } else if(filterLang == 'ja'){
                clearButton.textContent = '明確な絞り込み';
            } else if(filterLang == 'sv'){
                clearButton.textContent = 'Tydliga förbättringar';
            } else {
                clearButton.textContent = 'Clear Refinements';
            }

            clearButton.addEventListener('click', () => {
                refine();
            });
            widgetParams.container.appendChild(clearButton);
        }
        widgetParams.container.querySelector('button').disabled = !canRefine;
    }

    const renderStats = (renderOptions, isFirstRender) => {
        const { nbHits, processingTimeMS, widgetParams, query } = renderOptions;

        if (isFirstRender) {
            return;
        }

        let count = '';

        if (query === '') return []

        if (nbHits > 1) {
            if(filterLang == 'en') {
                count += `${nbHits} results`;
            } else if(filterLang == '') {
                count += `${nbHits} results`;
            } else if (filterLang == 'es') {
                count += `${nbHits} resultados`;
            } else if (filterLang == 'fr') {
                count += `${nbHits} résultats`;
            } else if (filterLang == 'de') {
                count += `${nbHits} resultate`;
            } else if (filterLang == 'it') {
                count += `${nbHits} risultati`;
            } else if (filterLang == 'pl') {
                count += `${nbHits} wyniki`;
            } else if (filterLang == 'tr') {
                count += `${nbHits} sonuçlar`;
            } else if (filterLang == 'zh-hans') {
                count += `${nbHits} 成果`;
            } else if (filterLang == 'ar') {
                count += `النتائج ${nbHits}`;
            } else if (filterLang == 'nb') {
                count += `${nbHits} resultater`;
            } else if (filterLang == 'pt-br') {
                count += `${nbHits} resultados`;
            } else if (filterLang == 'pt') {
                count += `${nbHits} resultados`;
            } else if (filterLang == 'cz') {
                count += `${nbHits} výsledky`;
            } else if (filterLang == 'nl') {
                count += `${nbHits} resultaten`;
            } else if (filterLang == 'ja') {
                count += `${nbHits} 結果`;
            } else if (filterLang == 'sv') {
                count += `${nbHits} resultat`;
            } else {
                count += `${nbHits} results`;
            }
        } else if (nbHits === 1) {
            if(filterLang == 'en') {
                count += `1 result`;
            } else if (filterLang == '') {
                count += `1 result`;
            } else if (filterLang == 'es') {
                count += `1 resultado`;
            } else if (filterLang == 'fr') {
                count += `1 résultat`;
            } else if (filterLang == 'de') {
                count += `1 resultat`;
            } else if (filterLang == 'it') {
                count += `1 risultato`;
            } else if (filterLang == 'pl') {
                count += `1 wynik`;
            } else if (filterLang == 'tr') {
                count += `1 sonuç`;
            } else if (filterLang == 'zh-hans') {
                count += `1 项成果`;
            } else if (filterLang == 'ar') {
                count += `1 نتيجة`;
            } else if (filterLang == 'nb') {
                count += `1 resultat`;
            } else if (filterLang == 'pt-br') {
                count += `1 resultado`;
            } else if (filterLang == 'pt') {
                count += `1 resultado`;
            } else if (filterLang == 'cz') {
                count += `1 výsledek`;
            } else if (filterLang == 'nl') {
                count += `1 resultaat`;
            } else if (filterLang == 'ja') {
                count += `1件`;
            } else if (filterLang == 'sv') {
                count += `1 resultat`;
            } else {
                count += `1 result`;
            }
        } else {
            if(filterLang == 'en') {
                count += `no results`;
            } else if (filterLang == '') {
                count += `no results`;
            } else if (filterLang == 'es') {
                count += `sin resultados`;
            } else if (filterLang == 'fr') {
                count += `pas de résultat`;
            } else if (filterLang == 'de') {
                count += `keine resultate`;
            } else if (filterLang == 'it') {
                count += `nessun risultato`;
            } else if (filterLang == 'pl') {
                count += `brak wyników`;
            } else if (filterLang == 'tr') {
                count += `sonuç yok`;
            } else if (filterLang == 'zh-hans') {
                count += `无结果`;
            } else if (filterLang == 'ar') {
                count += `لا توجد نتائج`;
            } else if (filterLang == 'nb') {
                count += `ingen resultater`;
            } else if (filterLang == 'pt-br') {
                count += `sem resultados`;
            } else if (filterLang == 'pt') {
                count += `sem resultados`;
            } else if (filterLang == 'cz') {
                count += `žádné výsledky`;
            } else if (filterLang == 'nl') {
                count += `geen resultaten`;
            } else if (filterLang == 'ja') {
                count += `結果なし`;
            } else if (filterLang == 'sv') {
                count += `inga resultat`;
            } else {
                count += `no results`;
            }
        }

        if(filterLang == 'en') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} found in ${processingTimeMS}ms</p>`
        } else if(filterLang == '') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} found in ${processingTimeMS}ms</p>`
        } else if(filterLang == 'es') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} encontrado en ${processingTimeMS}ms</p>`
        } else if(filterLang == 'fr') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} trouvé dans ${processingTimeMS}ms</p>`
        } else if(filterLang == 'de') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} gefunden in ${processingTimeMS}ms</p>`
        } else if(filterLang == 'it') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} trovato in ${processingTimeMS}ms</p>`
        } else if(filterLang == 'pl') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} znaleziony w ${processingTimeMS}ms</p>`
        } else if(filterLang == 'tr') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} içinde bulundu ${processingTimeMS}ms</p>`
        } else if(filterLang == 'zh-hans') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} 在 ${processingTimeMS}ms</p>`
        } else if(filterLang == 'ar') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} موجودة في ${processingTimeMS}ms</p>`
        } else if(filterLang == 'nb') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} funnet i ${processingTimeMS}ms</p>`
        } else if(filterLang == 'pt-br') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} encontrado em ${processingTimeMS}ms</p>`
        } else if(filterLang == 'pt') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} encontrado em ${processingTimeMS}ms</p>`
        } else if(filterLang == 'cz') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} nalezené v ${processingTimeMS}ms</p>`
        } else if(filterLang == 'nl') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} gevonden in ${processingTimeMS}ms</p>`
        } else if(filterLang == 'ja') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} で見つかった。 ${processingTimeMS}ms</p>`
        } else if(filterLang == 'sv') {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} finns i ${processingTimeMS}ms</p>`
        } else {
            widgetParams.container.innerHTML =
            `<p class="text-white">${count} found in ${processingTimeMS}ms</p>`
        }
    }

    const renderHits = (renderOptions, isFirstRender) => {
        const { nbHits, widgetParams, query } = renderOptions;
        if(isFirstRender) {
            return;
        }
        let count = "";

        if (query === '') return [];

        if (nbHits > 1) {
            count += `${nbHits}`;
        } else if (nbHits === 1) {
            count += `1`;
        } else {
            count += `0`;
        }
        widgetParams.container.innerHTML = `${count}`;
    }


    const customStats = connectStats(renderStats);

    const numberOfHits = connectStats(renderHits);

    const customClearRefinements = connectClearRefinements(renderClearRefinements);

    const mainSearchBox = connectSearchBox(renderSearchBox);

    let typeMapping;
    let vidMapping;
    let pdfLangMapping;

    let natTypeMapping

    natTypeMapping = {
        'page' : 'Web Page',
        'article' : 'Article',
        'casestudies' : 'Case Studies',
        'case_studies' : 'Case Studies'
    }

    pdfLangMapping = {
        'de-DE' : 'DE',
        'en-US' : 'EN',
        'en-GB' : 'EN',
        'fr-FR' : 'FR'
    }

    if (filterLang == "en") {
        typeMapping = {
            '3dmodels': '3D Models',
            'academy': 'Academy',
            'announcements': 'Announcements',
            'apiplans': 'API Plans',
            'article': 'Article',
            'bearingprotection': 'Bearing Protection',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals',
            'casestudies': 'Case Studies',
            'case_studies': 'Case Studies',
            'componentseals': 'Component Seals',
            'corpbrochure': 'Corporate Brochure',
            'elastomers': 'Elastomers',
            'gasseals': 'Gas Seals',
            'glandpacking': 'Gland Packing',
            'industryguides': 'Industry Guides',
            'locations': 'Locations',
            'page': 'Web Page',
            'policies': 'Policies',
            'productbrochure': 'Product Brochure',
            'productcertificates': 'Product Certificates',
            'servicesbrochure' : 'Services Brochure',
            'sealsupportsystems': 'Seal Support Systems',
            'technicaldrawings': 'Technical Drawing',
            'video': 'Video',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Industry',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    } else if (filterLang =="") {
        typeMapping = {
            '3dmodels': '3D Models',
            'academy': 'Academy',
            'announcements': 'Announcements',
            'apiplans': 'API Plans',
            'article': 'Article',
            'bearingprotection': 'Bearing Protection',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals',
            'casestudies': 'Case Studies',
            'componentseals': 'Component Seals',
            'corpbrochure': 'Corporate Brochure',
            'elastomers': 'Elastomers',
            'gasseals': 'Gas Seals',
            'glandpacking': 'Gland Packing',
            'industryguides': 'Industry Guides',
            'locations': 'Locations',
            'page': 'Web Page',
            'policies': 'Policies',
            'productbrochure': 'Product Brochure',
            'productcertificates': 'Product Certificates',
            'sealsupportsystems': 'Seal Support Systems',
            'technicaldrawings': 'Technical Drawing',
            'video': 'Video',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Industry',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    } else if (filterLang == "es") {
        typeMapping = {
            '3dmodels': 'Modelos 3D',
            'academy': 'Academia',
            'announcements': 'Anuncios',
            'apiplans': 'API Plans',
            'article': 'Artículo',
            'bearingprotection': 'Protección de Rodamientos',
            'cartridgemechanicalseals': 'Cierre mecánico de cartucho',
            'casestudies': 'Casos prácticos',
            'componentseals': 'Cierres de Componentes',
            'corpbrochure': 'Folleto corporativo',
            'elastomers': 'Elastómeros',
            'gasseals': 'Cierres de gas seco',
            'glandpacking': 'Empaquetadura',
            'industryguides': 'Guías del sector',
            'locations': 'Ubicaciones',
            'page': 'Página web',
            'policies': 'Políticas',
            'productbrochure': 'Catálogos de productos',
            'productcertificates': 'Certificados de producto',
            'sealsupportsystems': 'Sistemas de soporte de cierre',
            'technicaldrawings': 'Dibujo técnico',
            'video': 'Películas',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Industria',
        }
    } else if (filterLang == "fr") {
        typeMapping = {
            '3dmodels': 'Modèles 3D',
            'academy': 'Académie',
            'announcements': 'Annonces',
            'apiplans': 'API Plans',
            'article': 'Article',
            'bearingprotection': 'Protections de Paliers',
            'cartridgemechanicalseals': 'Garnitures cartouches',
            'casestudies': 'Études de cas',
            'componentseals': 'Garnitures mécaniques bi-composants',
            'corpbrochure': 'Brochure de la société',
            'elastomers': 'Élastomères',
            'gasseals': 'Garnitures gaz',
            'glandpacking': 'Tresses d’étanchéité',
            'industryguides': 'Guides du secteur',
            'locations': 'Emplacement',
            'page': 'Web Page',
            'policies': 'Políticas',
            'productbrochure': 'Brochures des produits',
            'productcertificates': 'Certificats de produit',
            'sealsupportsystems': 'Systèmes d’exploitation',
            'technicaldrawings': 'Dessin technique',
            'video': 'Vidéos',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Industrie',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    } else if (filterLang == "de") {
        typeMapping = {
            '3dmodels': '3D-Modelle',
            'academy': 'Akademie',
            'announcements': 'Ankündigungen',
            'apiplans': 'API Plans',
            'article': 'Artikel',
            'bearingprotection': 'Lagerschutzdichtungen',
            'cartridgemechanicalseals': 'Patronendichtungen',
            'casestudies': 'Fallstudien',
            'componentseals': 'Komponentendichtungen',
            'corpbrochure': 'Broschüre für Unternehmen',
            'elastomers': 'Elastomere',
            'gasseals': 'Gasgeschmierte Dichtungen',
            'glandpacking': 'Stopfbuchspackungen',
            'industryguides': 'Branchenführer',
            'locations': 'Standort',
            'page': 'Web Seite',
            'policies': 'Politiken',
            'productbrochure': 'Produkt-Broschüre',
            'productcertificates': 'Produktzertifikate',
            'sealsupportsystems': 'Versorgungssysteme',
            'technicaldrawings': 'Technische Zeichnung',
            'video': 'Filme',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Branchen',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    } else if (filterLang == "it") {
        typeMapping = {
            '3dmodels': 'Modelli 3D',
            'academy': 'Accademia',
            'announcements': 'Annunci',
            'apiplans': 'API Plans',
            'article': 'Articolo',
            'bearingprotection': 'Protettori per cuscinetti',
            'cartridgemechanicalseals': 'Tenute meccaniche a cartuccia',
            'casestudies': 'Casi di studio',
            'componentseals': 'Tenute a componenti',
            'corpbrochure': 'Opuscolo aziendale',
            'elastomers': 'Elastomers',
            'gasseals': 'Tenute a gas',
            'glandpacking': 'Baderna',
            'industryguides': 'Guide del settore',
            'locations': 'Luoghi',
            'page': 'Pagina web',
            'policies': 'Politiche',
            'productbrochure': 'Opuscolo del prodotto',
            'productcertificates': 'Certificati di prodotto',
            'sealsupportsystems': 'Sistemi di supporto per le tenute',
            'technicaldrawings': 'Disegno tecnico',
            'video': 'Film',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Industria',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    }
    else if (filterLang == "pl") {
        typeMapping = {
            '3dmodels': 'Modele 3D',
            'academy': 'Akademia',
            'announcements': 'Ogłoszenia',
            'apiplans': 'API Plans',
            'article': 'Artykuł',
            'bearingprotection': 'Ochrona łożysk',
            'cartridgemechanicalseals': 'Uszczelnienia mechaniczne kompaktowe',
            'casestudies': 'Studia przypadków',
            'componentseals': 'Uszczelnienia komponentowe',
            'corpbrochure': 'Broszura korporacyjna',
            'elastomers': 'Elastomery',
            'gasseals': 'Uszczelnienia gazowe',
            'glandpacking': 'Sznury dławicowe',
            'industryguides': 'Przewodniki branżowe',
            'locations': 'Lokalizacje',
            'page': 'Web Page',
            'policies': 'Polityka',
            'productbrochure': 'Broszura produktu',
            'productcertificates': 'Certyfikaty produktów',
            'sealsupportsystems': 'Systemy wspomagające uszczelnienia',
            'technicaldrawings': 'Rysunek techniczny',
            'video': 'Filmy',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Przemysł',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    }
    else if (filterLang == "tr") {
        typeMapping = {
            '3dmodels': '3D Modeller',
            'academy': 'Akademi',
            'announcements': 'Duyurular',
            'apiplans': 'API Plans',
            'article': 'Makale',
            'bearingprotection': 'Rulman Koruyucu',
            'cartridgemechanicalseals': 'Kartuş Mekanik Salmastralar',
            'casestudies': 'Vaka Çalışmaları',
            'componentseals': 'Komponent Salmastralar',
            'corpbrochure': 'Kurumsal broşür',
            'elastomers': 'Elastomers',
            'gasseals': 'Gaz Salmastraları',
            'glandpacking': 'Yumuşak Salmastralar',
            'industryguides': 'Endüstri Kılavuzları',
            'locations': 'Konumlar',
            'page': 'Web sayfası',
            'policies': 'Politikalar',
            'productbrochure': 'Ürün Broşürü',
            'productcertificates': 'Ürün Sertifikaları',
            'sealsupportsystems': 'Salmastra Destek Sistemleri',
            'technicaldrawings': 'Teknik Çizim',
            'video': 'Filmler',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Sanayi',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    }
    else if (filterLang == "zh-hans") {
        typeMapping = {
            '3dmodels': '三维模型',
            'academy': '学院',
            'announcements': '公告',
            'apiplans': 'API Plans',
            'article': '文章',
            'bearingprotection': '轴承保护器',
            'cartridgemechanicalseals': '集装式机械密封',
            'casestudies': '案例研究',
            'componentseals': '两部件密封',
            'corpbrochure': '企业宣传册',
            'elastomers': '弹性体',
            'gasseals': '干气密封',
            'glandpacking': '盘根',
            'industryguides': '行业指南',
            'locations': '地点',
            'page': '网页',
            'policies': '政策',
            'productbrochure': '产品手册',
            'productcertificates': '产品证书',
            'sealsupportsystems': '密封辅助系统',
            'technicaldrawings': '技术图纸',
            'video': '短片',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': '行业',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    } else if (filterLang =="ar") {
        typeMapping = {
            '3dmodels': 'نماذج 3D',
            'academy': 'الأكاديمية',
            'announcements': 'إعلانات',
            'apiplans': 'خطط API',
            'article': 'المادة',
            'bearingprotection': 'حماية المحمل',
            'cartridgemechanicalseals': 'الأختام الميكانيكية للخرطوشة',
            'casestudies': 'دراسات الحالة',
            'componentseals': 'أختام المكونات',
            'corpbrochure': 'كتيب الشركات',
            'elastomers': 'اللدائن',
            'gasseals': 'موانع تسرب الغاز',
            'glandpacking': 'تعبئة الغدة',
            'industryguides': 'أدلة الصناعة',
            'locations': 'المواقع',
            'page': 'صفحة الويب',
            'policies': 'السياسات',
            'productbrochure': 'كتيب المنتج',
            'productcertificates': 'شهادات المنتج',
            'sealsupportsystems': 'أنظمة دعم الأختام',
            'technicaldrawings': 'الرسم الفني',
            'video': 'فيديو',
            'whitepaper': 'ورقة بيضاء',
        }
    } else if (filterLang =="nb") {
        typeMapping = {
            '3dmodels': '3D-modeller',
            'academy': 'Akademiet',
            'announcements': 'Kunngjøringer',
            'apiplans': 'API Plans',
            'article': 'Artikkel',
            'bearingprotection': 'Beskyttelse av lager',
            'cartridgemechanicalseals': 'Mekaniske tetninger for patroner',
            'casestudies': 'Casestudier',
            'componentseals': 'Komponentforseglinger',
            'corpbrochure': 'Bedriftsbrosjyre',
            'elastomers': 'Elastomers',
            'gasseals': 'Gasstetninger',
            'glandpacking': 'Pakking av kjertler',
            'industryguides': 'Bransjeveiledninger',
            'locations': 'Steder',
            'page': 'Nettside',
            'policies': 'Retningslinjer',
            'productbrochure': 'Produktbrosjyre',
            'productcertificates': 'Produktsertifikater',
            'sealsupportsystems': 'Støttesystemer for tetninger',
            'technicaldrawings': 'Teknisk tegning',
            'video': 'Video',
            'whitepaper': 'Hvitbok',
        }
    } else if (filterLang =="pt-br") {
        typeMapping = {
            '3dmodels': 'Modelos 3D',
            'academy': 'Academia',
            'announcements': 'Anúncios',
            'apiplans': 'API Plans',
            'article': 'Artigo',
            'bearingprotection': 'Proteção do rolamento',
            'cartridgemechanicalseals': 'Selas mecânicas de cartucho',
            'casestudies': 'Estudos de caso',
            'componentseals': 'Vedações de componentes',
            'corpbrochure': 'Folheto corporativo',
            'elastomers': 'Elastomers',
            'gasseals': 'Selos de gás',
            'glandpacking': 'Engaxetamento de glândulas',
            'industryguides': 'Guias do setor',
            'locations': 'Locais',
            'page': 'Página da Web',
            'policies': 'Políticas',
            'productbrochure': 'Brochuras de produtos',
            'productcertificates': 'Certificados de produtos',
            'sealsupportsystems': 'Sistemas de suporte de vedação',
            'technicaldrawings': 'Desenho técnico',
            'video': 'Vídeo',
            'whitepaper': 'Whitepaper',
        }
    } else if (filterLang =="pt") {
        typeMapping = {
            '3dmodels': 'Modelos 3D',
            'academy': 'Academia',
            'announcements': 'Anúncios',
            'apiplans': 'API Plans',
            'article': 'Artigo',
            'bearingprotection': 'Proteção dos rolamentos',
            'cartridgemechanicalseals': 'Vedantes mecânicos de cartucho',
            'casestudies': 'Estudos de caso',
            'componentseals': 'Vedações de componentes',
            'corpbrochure': 'Brochura da empresa',
            'elastomers': 'Elastomers',
            'gasseals': 'Vedantes de gás',
            'glandpacking': 'Enchimento de bucins',
            'industryguides': 'Guias do sector',
            'locations': 'Localizações',
            'page': 'Página Web',
            'policies': 'Políticas',
            'productbrochure': 'Brochura de produtos',
            'productcertificates': 'Certificados de produto',
            'sealsupportsystems': 'Sistemas de suporte de vedação',
            'technicaldrawings': 'Desenho técnico',
            'video': 'Vídeo',
            'whitepaper': 'Whitepaper',
        }
    } else if (filterLang =="cz") {
        typeMapping = {
            '3dmodels': '3D modely',
            'academy': 'Akademie',
            'announcements': 'Oznámení',
            'apiplans': 'API Plans',
            'article': 'Článek',
            'bearingprotection': 'Ochrana ložisek',
            'cartridgemechanicalseals': 'Mechanická těsnění kazet',
            'casestudies': 'Případové studie',
            'componentseals': 'Těsnění součástí',
            'corpbrochure': 'Firemní brožura',
            'elastomers': 'Elastomers',
            'gasseals': 'Plynová těsnění',
            'glandpacking': 'Balení vývodek',
            'industryguides': 'Průvodci odvětvím',
            'locations': 'Lokality',
            'page': 'Webová stránka',
            'policies': 'Zásady',
            'productbrochure': 'Brožura o produktu',
            'productcertificates': 'Certifikáty výrobků',
            'sealsupportsystems': 'Systémy podpory těsnění',
            'technicaldrawings': 'Technický výkres',
            'video': 'Video',
            'whitepaper': 'Bílá kniha',
        }
    } else if (filterLang =="nl") {
        typeMapping = {
            '3dmodels': '3D-modellen',
            'academy': 'Academie',
            'announcements': 'Aankondigingen',
            'apiplans': 'API Plans',
            'article': 'Artikel',
            'bearingprotection': 'Lagerbescherming',
            'cartridgemechanicalseals': 'Mechanische afdichtingen',
            'casestudies': 'Casestudies',
            'componentseals': 'Componentafdichtingen',
            'corpbrochure': 'Bedrijfsbrochure',
            'elastomers': 'Elastomers',
            'gasseals': 'Gasafdichtingen',
            'glandpacking': 'Klierpakking',
            'industryguides': 'Industriële gidsen',
            'locations': 'Locaties',
            'page': 'Webpagina',
            'policies': 'Beleid',
            'productbrochure': 'Product Brochure',
            'productcertificates': 'Productcertificaten',
            'sealsupportsystems': 'Ondersteuningssystemen voor afdichtingen',
            'technicaldrawings': 'Technische tekening',
            'video': 'Video',
            'whitepaper': 'Whitepaper',
        }
        
    } else if (filterLang =="ja") {
        typeMapping = {
            '3dmodels': '3Dモデル',
            'academy': 'アカデミー',
            'announcements': 'お知らせ',
            'apiplans': 'API Plans',
            'article': '記事',
            'bearingprotection': 'ベアリング保護',
            'cartridgemechanicalseals': 'カートリッジ・メカニカルシール',
            'casestudies': 'ケーススタディ',
            'componentseals': 'コンポーネント・シール',
            'corpbrochure': '会社案内',
            'elastomers': 'Elastomers',
            'gasseals': 'ガスシール',
            'glandpacking': 'グランドパッキン',
            'industryguides': '業界ガイド',
            'locations': '所在地',
            'page': 'ウェブページ',
            'policies': 'ポリシー',
            'productbrochure': '製品パンフレット',
            'productcertificates': '製品証明書',
            'sealsupportsystems': 'シール・サポート・システム',
            'technicaldrawings': '技術図面',
            'video': 'ビデオ',
            'whitepaper': 'Whitepaper',
        }
    } else {
        typeMapping = {
            '3dmodels': '3D Models',
            'academy': 'Academy',
            'announcements': 'Announcements',
            'apiplans': 'API Plans',
            'article': 'Article',
            'bearingprotection': 'Bearing Protection',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals',
            'casestudies': 'Case Studies',
            'componentseals': 'Component Seals',
            'corpbrochure': 'Corporate Brochure',
            'elastomers': 'Elastomers',
            'gasseals': 'Gas Seals',
            'glandpacking': 'Gland Packing',
            'industryguides': 'Industry Guides',
            'locations': 'Locations',
            'page': 'Web Page',
            'policies': 'Policies',
            'productbrochure': 'Product Brochure',
            'productcertificates': 'Product Certificates',
            'sealsupportsystems': 'Seal Support Systems',
            'technicaldrawings': 'Technical Drawing',
            'video': 'Video',
            'whitepaper': 'Whitepaper',
        }
        vidMapping = {
            'industry': 'Industry',
            'glandpacking': 'Gland Packing Category',
            'sealsupportsystems': 'Seal Support Systems Category',
            'bearingprotectioncategories': 'Bearing Protection Category',
            'cartridgemechanicalseals': 'Cartridge Mechanical Seals Category',
            'gasseals': 'Gas Seals Category',
            'componentseals': 'Component Seals Category',
        }
    }

    const langlistPanel = instantsearch.widgets.panel ({
        hidden: function(options) {
            if (options.results.query === '' &&  !window.location.search.includes('type[')){
                return [];
            } else {
                return options.results.nbHits === 0;
            }
        },
        templates: {
            header( options, { html }) {
                if (filterLang == 'en'){
                    return html `<h4>Select your Language</h4>`
                } else if (filterLang == ''){
                    return html `<h4>Select your Language</h4>`
                } else if (filterLang == 'es'){
                    return html `<h4>Seleccione su idioma</h4>`
                } else if (filterLang == 'fr'){
                    return html `<h4>Sélectionnez votre langue</h4>`
                } else if (filterLang == 'de'){
                    return html `<h4>Wählen Sie Ihre Sprache</h4>`
                } else if (filterLang == 'it'){
                    return html `<h4>Selezionare la lingua</h4>`
                } else if (filterLang == 'pl'){
                    return html `<h4>Wybierz język</h4>`
                } else if (filterLang == 'zh-hans'){
                    return html `<h4>选择语言</h4>`
                } else if (filterLang == 'ar'){
                    return html `<h4>اختر لغتك</h4>`
                } else if (filterLang == 'nb'){
                    return html `<h4>Velg språk</h4>`
                } else if (filterLang == 'pt-br'){
                    return html `<h4>Selecione seu idioma</h4>`
                } else if (filterLang == 'pt'){
                    return html `<h4>Selecione o seu idioma</h4>`
                } else if (filterLang == 'cz'){
                    return html `<h4>Vyberte jazyk</h4>`
                } else if (filterLang == 'nl'){
                    return html `<h4>Selecteer uw taal</h4>`
                } else if (filterLang == 'ja'){
                    return html `<h4>言語の選択</h4>`
                } else {
                    return html `<h4>Select your Language</h4>`
                }
            },
        },cssClasses: {
            root: 'pt-5'
        }
    })(instantsearch.widgets.refinementList);

    const typelistPanel = instantsearch.widgets.panel ({
        hidden: function(options) {
            if (options.results.query === '' &&  !window.location.search.includes('type[')){
                return [];
            } else {
                return options.results.nbHits === 0;
            }
        },
        templates: {
            header( options, { html }) {
                if (filterLang == 'en'){
                    return html `<h4>Filter by Content Type</h4>`
                } else if (filterLang == ''){
                    return html `<h4>Filter by Content Type</h4>`
                } else if (filterLang == 'es'){
                    return html `<h4>Filtrar por tipo de contenido</h4>`
                } else if (filterLang == 'fr'){
                    return html `<h4>Filtrer par type de contenu</h4>`
                } else if (filterLang == 'de'){
                    return html `<h4>Nach Inhaltstyp filtern</h4>`
                } else if (filterLang == 'it'){
                    return html `<h4>Filtrare per tipo di contenuto</h4>`
                } else if (filterLang == 'pl'){
                    return html `<h4>Filtruj według typu zawartości</h4>`
                } else if (filterLang == 'zh-hans'){
                    return html `<h4>按内容类型筛选</h4>`
                } else if (filterLang == 'ar'){
                    return html `<h4>التصفية حسب نوع المحتوى</h4>`
                } else if (filterLang == 'nb'){
                    return html `<h4>Filtrer etter innholdstype</h4>`
                } else if (filterLang == 'pt-br'){
                    return html `<h4>Filtrar por tipo de conteúdo</h4>`
                } else if (filterLang == 'pt'){
                    return html `<h4>Filtrar por tipo de conteúdo</h4>`
                } else if (filterLang == 'cz'){
                    return html `<h4>Filtrování podle typu obsahu</h4>`
                } else if (filterLang == 'nl'){
                    return html `<h4>Filter op inhoudstype</h4>`
                } else if (filterLang == 'ja'){
                    return html `<h4>コンテンツ・タイプによるフィルタリング</h4>`
                } else {
                    return html `<h4>Filter by Content Type</h4>`
                }
            }
        },cssClasses: {
                root: 'pt-3'
        }
    })(instantsearch.widgets.refinementList);

    const gloablTypelistPanel = instantsearch.widgets.panel ({
        hidden: function(options) {
            if (options.results.query === '' &&  !window.location.search.includes('type[')){
                return [];
            } else {
                return options.results.nbHits === 0;
            }
        },
        templates: {
            header( options, { html }) {
                if (filterLang == 'en'){
                    return html `<h4>Filter Global Site by Resource Type</h4>`
                } else if (filterLang == ''){
                    return html `<h4>Filter Global Site by Resource Type</h4>`
                } else if (filterLang == 'es'){
                    return html `<h4>Filtrar el sitio global por tipo de recurso</h4>`
                } else if (filterLang == 'fr'){
                    return html `<h4>Filtrer le site global par type de ressource</h4>`
                } else if (filterLang == 'de'){
                    return html `<h4>Globale Website nach Ressourcentyp filtern</h4>`
                } else if (filterLang == 'it'){
                    return html `<h4>Filtrare il sito globale per tipo di risorsa</h4>`
                } else if (filterLang == 'pl'){
                    return html `<h4>Filtrare il sito globale per tipo di risorsa</h4>`
                } else if (filterLang == 'zh-hans'){
                    return html `<h4>按资源类型筛选全球网站</h4>`
                } else if (filterLang == 'ar'){
                    return html `<h4>تصفية الموقع العالمي حسب نوع المورد</h4>`
                } else if (filterLang == 'nb'){
                    return html `<h4>Filtrer globalt nettsted etter ressurstype</h4>`
                } else if (filterLang == 'pt-br'){
                    return html `<h4>Filtrar site global por tipo de recurso</h4>`
                } else if (filterLang == 'pt'){
                    return html `<h4>Filtrar sítio global por tipo de recurso</h4>`
                } else if (filterLang == 'cz'){
                    return html `<h4>Filtrování globálního webu podle typu zdroje</h4>`
                } else if (filterLang == 'nl'){
                    return html `<h4>Filter Globale site op type bron</h4>`
                } else if (filterLang == 'ja'){
                    return html `<h4>リソースタイプによるグローバルサイトのフィルタリング</h4>`
                } else {
                    return html `<h4>Filter Global Site by Resource Type</h4>`
                }
            },
        },
        cssClasses: {
            root: 'pt-3'
        }
    })(instantsearch.widgets.refinementList);

    const globalLanglistPanel = instantsearch.widgets.panel ({
        hidden: function(options) {
            if (options.results.query === '' &&  !window.location.search.includes('type[')){
                return [];
            } else {
                return options.results.nbHits === 0;
            }
        },
        templates: {
            header( options, { html }) {
                if (filterLang == 'en'){
                    return html `<h4>Select your Language</h4>`
                } else if (filterLang == ''){
                    return html `<h4>Select your Language</h4>`
                } else if (filterLang == 'es'){
                    return html `<h4>Seleccione su idioma</h4>`
                } else if (filterLang == 'fr'){
                    return html `<h4>Sélectionnez votre langue</h4>`
                } else if (filterLang == 'de'){
                    return html `<h4>Wählen Sie Ihre Sprache</h4>`
                } else if (filterLang == 'it'){
                    return html `<h4>Selezionare la lingua</h4>`
                } else if (filterLang == 'pl'){
                    return html `<h4>Wybierz język</h4>`
                } else if (filterLang == 'zh-hans'){
                    return html `<h4>选择语言</h4>`
                } else if (filterLang == 'ar'){
                    return html `<h4>اختر لغتك</h4>`
                } else if (filterLang == 'nb'){
                    return html `<h4>Velg språk</h4>`
                } else if (filterLang == 'pt-br'){
                    return html `<h4>Selecione seu idioma</h4>`
                } else if (filterLang == 'pt'){
                    return html `<h4>Selecione o seu idioma</h4>`
                } else if (filterLang == 'cz'){
                    return html `<h4>Vyberte jazyk</h4>`
                } else if (filterLang == 'nl'){
                    return html `<h4>Selecteer uw taal</h4>`
                } else if (filterLang == 'ja'){
                    return html `<h4>言語の選択</h4>`
                } else {
                    return html `<h4>Select your Language</h4>`
                }
            },
        },cssClasses: {
            root: 'pt-5'
        }
    })(instantsearch.widgets.refinementList);

    const pagination = instantsearch.widgets.panel ({
        hidden: function(options) {
            if (options.results.query === '' &&  !window.location.search.includes('type[')){
                return [];
            } else {
                return options.results.nbHits === 0;
            }
        },
    })(instantsearch.widgets.pagination)

    const nationalPagination = instantsearch.widgets.panel ({
        hidden: function(options) {
            if (options.results.query === '' &&  !window.location.search.includes('type[')){
                return [];
            } else {
                return options.results.nbHits === 0;
            }
        },
    })(instantsearch.widgets.pagination);
    
    if(!!globeSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const search = instantsearch({
            searchClient,
            indexName: 'aesseal',
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history(),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal'] || {};
                        return{
                            q: indexUiState.query,
                            page:indexUiState.page,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal']: {
                                query: routeState.q,
                                page:routeState.page,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        });

        search.addWidgets([{
            init: function(options) {
                if(!document.location.href.includes('lang%5B')){
                    if(filterLang == "en")
                    {
                        options.helper.toggleRefinement('search_api_language', 'en');
                    }
                    else if(filterLang == "")
                    {
                        options.helper.toggleRefinement('search_api_language', 'en');
                    }
                    else if(filterLang == "es")
                    {
                        options.helper.toggleRefinement('search_api_language', 'es');
                    }
                    else if (filterLang === "fr") {
                        options.helper.toggleRefinement('search_api_language', 'fr');
                    }
                    else if (filterLang === "de") {
                        options.helper.toggleRefinement('search_api_language', 'de');
                    }
                    else if(filterLang == "it")
                    {
                        options.helper.toggleRefinement('search_api_language', 'it');
                    }
                    else if(filterLang == "pl")
                    {
                        options.helper.toggleRefinement('search_api_language', 'pl');
                    }
                    else if(filterLang == "tr")
                    {
                        options.helper.toggleRefinement('search_api_language', 'tr');
                    }
                    else if(filterLang == "zh-hans")
                    {
                        options.helper.toggleRefinement('search_api_language', 'zh-hans');
                    } else {
                        options.helper.toggleRefinement('search_api_language', 'en');
                    }
                }
            }
        }]);
        
        search.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 20,
                attributesToSnippet: ['field_summary:120', 'summary:120'],
                page: 0,
            }),

            customClearRefinements({
                container: document.querySelector('#clear-refinements'),
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items, { results }){
                    if(window.location.search.includes('type[')){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    } else {
                        if(results.query === '') return [];
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    }
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    searchableNoResults(data, { html }) {
                        return html `<p>No Results</p>`
                    },
                },
                transformItems(items, { results }){
                    if(window.location.search.includes('type[')){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    } else {
                    if(results.query === '') return [];
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                    }
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),
        
            pagination({
                container: '#pagination',
                totalPages: 3,
                scrollTo: '#searchbox',
            }),

            EXPERIMENTAL_autocomplete() ({
                container: document.querySelector('#searchbox'),
                indices: [{
                    indexName: 'aesseal',
                    getQuery: (item) => item.name,
                    getURL: (item) => `?q=${item.name}`,
                    templates: {
                        header: (_, {html}) => html `<div>Search Suggestions</div>`,
                        item: ({ item,onSelect}, {html}) => html`div onClick=${onSelect}>${item.name}</div>`,
                    },
                }]
            }),
        
            /*mainSearchBox({
                container: document.querySelector('#searchbox'),
                 searchAsYouType: false,
            }),*/

            customStats({
                container: document.querySelector("#stats"),
            }),
        
            instantsearch.widgets.hits ({
                container: '#hits',
                templates:{
                    item(data, { html, components }){
                        if(filterLang == 'en'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Read More</a>                       
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Read More</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'waves-with-dropdown'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Read More</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Read More</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'es'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Seguir leyendo</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Seguir leyendo</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Seguir leyendo</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Seguir leyendo</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'fr'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">En savoir plus</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">En savoir plus</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">En savoir plus</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">En savoir plus</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'de'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Mehr lesen</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Mehr lesen</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Mehr lesen</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Mehr lesen</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'it'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Per saperne di più</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Per saperne di più</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Per saperne di più</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Per saperne di più</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'pl'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Czytaj więcej</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Czytaj więcej</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Czytaj więcej</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Czytaj więcej</a>
                                        </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'tr'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Daha Fazla Oku</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Daha Fazla Oku</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Daha Fazla Oku</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Daha Fazla Oku</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'zh-hans'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                        <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">更多信息</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">更多信息</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">更多信息</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">更多信息</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.api_plan_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.api_plan_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.video_thumbnail_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.video_thumbnail_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.og_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.og_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.about_us_service_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.about_us_service_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.bearing_product_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.bearing_product_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.comp_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.comp_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.elastomers_image_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.elastomers_image_uri}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gas_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gas_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.gland_packing_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.gland_packing_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.cart_seal_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.cart_seal_preview_image}" height="420" width="420" alt="${data.title}" />
                                        <img class="${data.seal_support_preview_image ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.seal_support_preview_image}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        }
                    },
                    empty(results, { html }){
                        if (results.query === '') return null;
                        if(filterLang == 'en'){
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if(filterLang == '') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if (filterLang == 'es') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No se han encontrado resultados que coincidan ${results.query}</p>
                            <p>Lo sentimos, no hemos encontrado ningún resultado para su búsqueda. Intente buscar de nuevo, revisando su búsqueda en busca de errores ortográficos y/o reduciendo el número de palabras clave utilizadas. También puede intentar utilizar una frase de búsqueda más amplia.</p>
                            </div>
                            <p class="h3">¿Busca un número de pieza o de serie?</p>`;
                        }
                        else if (filterLang == 'fr') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Aucun résultat trouvé correspondant ${results.query}</p>
                            <p>Nous sommes désolés de ne pas avoir trouvé de résultat pour votre recherche. Essayez d'effectuer une nouvelle recherche en vérifiant les fautes d'orthographe et/ou en réduisant le nombre de mots-clés utilisés. Vous pouvez également essayer d'utiliser une phrase de recherche plus large.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                        }
                        else if (filterLang == 'de') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Keine passenden Ergebnisse gefunden ${results.query}</p>
                            <p>Wir konnten leider kein Ergebnis für Ihre Suche finden. Versuchen Sie, die Suche zu wiederholen, indem Sie Ihre Suche auf Rechtschreibfehler überprüfen und/oder die Anzahl der verwendeten Schlüsselwörter reduzieren. Sie können auch versuchen, einen umfassenderen Suchbegriff zu verwenden.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                        }
                        else if (filterLang == 'it') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Nessun risultato trovato corrispondente ${results.query}</p>
                            <p>Siamo spiacenti di non aver trovato un risultato per la vostra ricerca. Provi a effettuare una nuova ricerca, controllando che non vi siano errori di ortografia e/o riducendo il numero di parole chiave utilizzate. Potete anche provare a utilizzare una frase di ricerca più ampia.</p>
                            </div>
                            <p class="h3">State cercando un numero di parte o un numero di serie?</p>`;
                        }
                        else if (filterLang == 'pl') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Nie znaleziono pasujących wyników ${results.query}</p>
                            <p>Przepraszamy, nie mogliśmy znaleźć wyniku wyszukiwania. Spróbuj wyszukać ponownie, sprawdzając wyszukiwanie pod kątem błędów ortograficznych i/lub zmniejszając liczbę użytych słów kluczowych. Możesz także spróbować użyć szerszej frazy wyszukiwania.</p>
                            </div>
                            <p class="h3">Szukasz numeru części lub numeru seryjnego?</p>`;
                        }
                        else if (filterLang == 'tr') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Eşleşen sonuç bulunamadı ${results.query}</p>
                            <p>Üzgünüz, aramanız için bir sonuç bulamadık. Aramanızı yazım hatalarına karşı kontrol ederek ve/veya kullanılan anahtar kelime sayısını azaltarak tekrar aramayı deneyin. Daha geniş bir arama cümlesi kullanmayı da deneyebilirsiniz.</p>
                            </div>
                            <p class="h3">Bir Parça Numarası veya Seri Numarası mı arıyorsunuz?</p>`;
                        }
                        else if (filterLang == 'zh-hans') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">未找到匹配结果 ${results.query}</p>
                            <p>很抱歉，我们找不到您的搜索结果。请再次尝试搜索，检查拼写错误和/或减少使用的关键词数量。您还可以尝试使用更宽泛的搜索短语。</p>
                            </div>
                            <p class="h3">您在搜索零件编号或序列号吗？</p>`;
                        }
                        else {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                    },
                },
                transformItems(items, { results }){
                    if(window.location.search.includes('type[')){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    } else {
                        if(results.query === '') return [];
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    }
                    
                },
            }),
        ]);
        search.start();
        document.querySelector('.ais-SearchBox-input').focus();
        
        if(popSearch) {
            var popSearchButtons = document.querySelectorAll('.prefill-btn');
            var popSearchButton = document.querySelector('.pop-search-button');
            var popSearchBar = document.querySelector('#popular-search-input');
            for (var i = 0; i < popSearchButtons.length; i++) {
                popSearchButtons[i].addEventListener('click', function(){
                    var searchQuery = this.getAttribute('data-search-query');
                    search.helper.setQuery(searchQuery).search();
                });
                popSearchBar.addEventListener('keydown', function(e){
                    if(e.key === 'Enter'){
                        var searchQuery = popSearchBar.value;
                        search.helper.setQuery(searchQuery).search();
                    }
                });
                popSearchButton.addEventListener('click', function(){
                    var searchQuery = popSearchBar.value;
                    search.helper.setQuery(searchQuery).search();
                });
            }
        }
    }

    if(!!usSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const usaSearch = instantsearch({
            indexName: 'aesseal us',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal us'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal us']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })
        
        usaSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'NOT field_global_article: "true"',
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#usPagination',
                totalPages: 3,
                scrollTo: '#usSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#usSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#usStats"),
            }),

            numberOfHits({
                container: document.querySelector("#intResultsNum"),
            }),

            instantsearch.widgets.hits ({
                container: '#usHits',
                templates:{
                    item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                            <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p class="lead">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                            <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                        </div>`
                    },
                    empty(results, { html }){
                        revealForm();
                        return html`<p class="h3 mt-3">No results found matching ${results.query}</p>
                    <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                    <div class="text-center  py-5">
                        <p class="h3">Would you like to search our Global site?</p>
                        <a href="https://www.aesseal.com/en/search" class="btn btn-danger" target="_blank" rel="noopener">Search our Global site</a>
                    </div>
                    <p class="h3 pt-4">Are you searching for a Part Number or Serial Number?</p>`;
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: typeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'pdf_brochures_xml_crawler' })
                .addWidgets([

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['content:80'],
                    page: 0,
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#usSearchbox'
                }),

                globalLanglistPanel({
                    container: '#pdfLang-list',
                    attribute: 'dclanguage',
                    templates: {
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                        ...item,
                        label: pdfLangMapping[item.label],
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                numberOfHits({
                    container: document.querySelector("#globalResultsNum"),
            }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(hit, { html, components }){
                            return html `<div class="search-result" data-insights-object-id="${hit.objectID}" data-insights-position="${hit.__position}" data-insights-query-id="${hit.__queryID}">
                                    <small>${hit.url}</small>
                                    <p class="h3 ${hit.title ? '' : 'd-none'}">${hit.title}</p>                                
                                    <p class=${hit.content ? '' : 'd-none'}>${components.Snippet({
                                        attribute: "content",
                                        hit: hit,
                                        highlightedTagName: 'strong'
                                    })}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${hit.url}">Open PDF</a>
                            </div>`
                        }, empty(results, { html }){
                                revealForm();
                                return html`<p class="h3 mt-3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            <div class="text-center  py-5">
                                <p class="h3">Would you like to search our Global site?</p>
                                <a href="https://www.aesseal.com/en/search" class="btn btn-danger" target="_blank" rel="noopener">Search our Global site</a>
                            </div>
                            <p class="h3 pt-4">Are you searching for a Part Number or Serial Number?</p>`;
                        },
                    }
                }),
            ])
        ]);
        usaSearch.start();
    }

    if(!!inSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const indiaSearch = instantsearch({
            indexName: 'aesseal in',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal in'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal in']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })
        
        indiaSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'field_global_article: "false"',
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#inPagination',
                totalPages: 3,
                scrollTo: '#inSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#inSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#inStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#inHits',
                templates:{
                    item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                            <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p class="lead">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                            <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                        </div>`
                    },
                    empty(results, { html }){
                        revealForm();
                        return html`<p class="h3">No results found matching ${results.query}</p>
                    <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                    <div class="text-center  py-5">
                        <p class="h3">Would you like to search our Global site?</p>
                        <a href="https://www.aesseal.com/en/search" class="btn btn-danger" target="_blank" rel="noopener">Search our Global site</a>
                    </div>
                    <p class="h3 pt-4">Are you searching for a Part Number or Serial Number?</p>`;
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                langlistPanel({
                    container: '#lang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#inSearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small>https://www.aesseal.com${data.url}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="btn btn-danger view-details align-self-end" href="https://www.aesseal.com${data.url}" target="_blank">Read More</a>
                        </div>`
                        },
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        indiaSearch.start();
        document.querySelector('.ais-SearchBox-input').focus();
    }

    if(!!zaSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const southafricaSearch = instantsearch({
            indexName: 'aesseal za',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal za'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal za']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })
        
        southafricaSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'field_global_article: "false"',
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#zaPagination',
                totalPages: 3,
                scrollTo: '#zaSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#zaSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#zaStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#zaHits',
                templates:{
                    item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                            <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p class="lead">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                            <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                        </div>`
                    },
                    empty(results, { html }){
                        revealForm();
                        return html`<p class="h3">No results found matching ${results.query}</p>
                    <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                    <div class="text-center  py-5">
                        <p class="h3">Would you like to search our Global site?</p>
                        <a href="https://www.aesseal.com/en/search" class="btn btn-danger" target="_blank" rel="noopener">Search our Global site</a>
                    </div>
                    <p class="h3 pt-4">Are you searching for a Part Number or Serial Number?</p>`;
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                langlistPanel({
                    container: '#lang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#zaSearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small>https://www.aesseal.com${data.url}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="btn btn-danger view-details align-self-end" href="https://www.aesseal.com${data.url}" target="_blank">Read More</a>
                        </div>`
                        },
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        southafricaSearch.start();
        document.querySelector('.ais-SearchBox-input').focus();
    }

    if(!!malaySearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const mySearch = instantsearch({
            indexName: 'aesseal my',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal my'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal my']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })
        
        mySearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'field_global_article: "false"',
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#myPagination',
                totalPages: 3,
                scrollTo: '#mySearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#mySearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#myStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#myHits',
                templates:{
                    item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                            <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p class="lead">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                            <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                        </div>`
                    },
                    empty(results, { html }){
                        revealForm();
                        return html`<p class="h3">No results found matching ${results.query}</p>
                    <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                    <div class="text-center  py-5">
                        <p class="h3">Would you like to search our Global site?</p>
                        <a href="https://www.aesseal.com/en/search" class="btn btn-danger" target="_blank" rel="noopener">Search our Global site</a>
                    </div>
                    <p class="h3 pt-4">Are you searching for a Part Number or Serial Number?</p>`;
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                langlistPanel({
                    container: '#lang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#mySearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small>https://www.aesseal.com${data.url}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="btn btn-danger view-details align-self-end" href="https://www.aesseal.com${data.url}" target="_blank">Read More</a>
                        </div>`
                        },
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        mySearch.start();
        document.querySelector('.ais-SearchBox-input').focus();
    }

    if(!!gerSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const deSearch = instantsearch({
            indexName: 'aesseal de',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal de'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal de']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })

        deSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'field_global_article: "false"',
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: item.label.toUpperCase(),
                    }));
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#dePagination',
                totalPages: 3,
                scrollTo: '#deSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#deSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#deStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#deHits',
                templates:{
                    item(data, { html, components }){
                        if(filterLang == 'en'){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if (filterLang == ''){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if(filterLang == 'de'){
                            hideForm();
                            return html`
                            <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Mehr lesen</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">PDF öffnen</a>
                            </div>`

                        }
                    },
                    empty(results, { html }){
                        if(filterLang == 'en'){
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if(filterLang == '') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if (filterLang == 'de') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Keine passenden Ergebnisse gefunden ${results.query}</p>
                            <p>Wir konnten leider kein Ergebnis für Ihre Suche finden. Versuchen Sie, die Suche zu wiederholen, indem Sie Ihre Suche auf Rechtschreibfehler überprüfen und/oder die Anzahl der verwendeten Schlüsselwörter reduzieren. Sie können auch versuchen, einen umfassenderen Suchbegriff zu verwenden.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                        }
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if (filterLang === "de") {
                            options.helper.toggleRefinement('search_api_language', 'de');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                globalLanglistPanel({
                    container: '#globalLang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#deSearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){
                            if(filterLang == 'en'){
                                return html `<div class="search-result">
                                    <small>${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                </div>`
                                } else if(filterLang == '') {
                                    return html `<div class="search-result">
                                        <small>${data.url}</small>
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                    </div>`
                                } else if(filterLang == 'de'){
                                return html `<div class="search-result">
                                    <small>${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Mehr lesen</a>
                                </div>`
    
    
                            }
                        },
                        empty(results, { html }){
                            if(filterLang == 'en'){
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if(filterLang == '') {
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if (filterLang == 'de') {
                                return html`<div class="no-result"><p class="h3">Keine passenden Ergebnisse gefunden ${results.query}</p>
                                <p>Wir konnten leider kein Ergebnis für Ihre Suche finden. Versuchen Sie, die Suche zu wiederholen, indem Sie Ihre Suche auf Rechtschreibfehler überprüfen und/oder die Anzahl der verwendeten Schlüsselwörter reduzieren. Sie können auch versuchen, einen umfassenderen Suchbegriff zu verwenden.</p>
                                </div>
                                <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                            }
                        }
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        deSearch.start();
    }

    if(!!uaeSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const aeSearch = instantsearch({
            indexName: 'aesseal ae',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal ae'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal ae']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })

        aeSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'field_global_article: "false"',
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: item.label.toUpperCase(),
                    }));
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#aePagination',
                totalPages: 3,
                scrollTo: '#aeSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#aeSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#aeStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#aeHits',
                templates:{
                    item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                            <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p class="lead">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                            <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                        </div>`
                    },
                    empty(results, { html }){
                        revealForm();
                        return html`<p class="h3">No results found matching ${results.query}</p>
                    <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                    <div class="text-center  py-5">
                        <p class="h3">Would you like to search our Global site?</p>
                        <a href="https://www.aesseal.com/en/search" class="btn btn-danger" target="_blank" rel="noopener">Search our Global site</a>
                    </div>
                    <p class="h3 pt-4">Are you searching for a Part Number or Serial Number?</p>`;
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                globalLanglistPanel({
                    container: '#globalLang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#aeSearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){ 
                        hideForm();
                        return html`
                        <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small>https://www.aesseal.com${data.url}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                            <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                            <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                            <a class="btn btn-danger view-details align-self-end" href="https://www.aesseal.com${data.url}" target="_blank">Read More</a>
                        </div>`
                        },
                        empty(results, { html }){
                            revealForm();
                            return html`<p class="h3">No results found matching ${results.query}</p>
                        <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                        <p class="h3 pt-4">Are you searching for a Part Number or Serial Number?</p>`;
                        },
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        aeSearch.start();
        document.querySelector('.ais-SearchBox-input').focus();
    }
    
    if(!!franSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const frSearch = instantsearch({
            indexName: 'aesseal fr',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal fr'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal fr']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })

        frSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'field_global_article: "false"',
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: item.label.toUpperCase(),
                    }));
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#frPagination',
                totalPages: 3,
                scrollTo: '#frSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#frSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#frStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#frHits',
                templates:{
                    item(data, { html, components }){
                        if(filterLang == 'en'){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if (filterLang == ''){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if(filterLang == 'fr'){
                            hideForm();
                            return html`
                            <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Lire la suite</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Ouvrir le PDF</a>
                            </div>`

                        }
                    },
                    empty(results, { html }){
                        if(filterLang == 'en'){
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if(filterLang == '') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if (filterLang == 'fr') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Aucun résultat trouvé correspondant ${results.query}</p>
                            <p>Nous sommes désolés de ne pas avoir trouvé de résultat pour votre recherche. Essayez d'effectuer une nouvelle recherche en vérifiant les fautes d'orthographe et/ou en réduisant le nombre de mots-clés utilisés. Vous pouvez également essayer d'utiliser une phrase de recherche plus large.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                        }
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if (filterLang === "fr") {
                            options.helper.toggleRefinement('search_api_language', 'fr');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                globalLanglistPanel({
                    container: '#globalLang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#frSearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){
                            if(filterLang == 'en'){
                                return html `<div class="search-result">
                                    <small>https://www.aesseal.com${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                </div>`
                                } else if(filterLang == '') {
                                    return html `<div class="search-result">
                                        <small>https://www.aesseal.com${data.url}</small>
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                    </div>`
                                } else if(filterLang == 'fr'){
                                return html `<div class="search-result">
                                    <small>https://www.aesseal.com${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Lire la suite</a>
                                </div>`
    
    
                            }
                        },
                        empty(results, { html }){
                            if(filterLang == 'en'){
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if(filterLang == '') {
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if (filterLang == 'fr') {
                                return html`<div class="no-result"><p class="h3">Aucun résultat trouvé correspondant ${results.query}</p>
                            <p>Nous sommes désolés de ne pas avoir trouvé de résultat pour votre recherche. Essayez d'effectuer une nouvelle recherche en vérifiant les fautes d'orthographe et/ou en réduisant le nombre de mots-clés utilisés. Vous pouvez également essayer d'utiliser une phrase de recherche plus large.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                            }
                        }
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        frSearch.start();
    }

    if(!!canSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const caSearch = instantsearch({
            indexName: 'aesseal ca',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal ca'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal ca']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })

        caSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'field_global_article: "false"',
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: item.label.toUpperCase(),
                    }));
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#caPagination',
                totalPages: 3,
                scrollTo: '#caSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#caSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#caStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#caHits',
                templates:{
                    item(data, { html, components }){
                        if(filterLang == 'en'){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if (filterLang == ''){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if(filterLang == 'fr'){
                            hideForm();
                            return html`
                            <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Lire la suite</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Ouvrir le PDF</a>
                            </div>`

                        }
                    },
                    empty(results, { html }){
                        if(filterLang == 'en'){
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if(filterLang == '') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if (filterLang == 'fr') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Aucun résultat trouvé correspondant ${results.query}</p>
                            <p>Nous sommes désolés de ne pas avoir trouvé de résultat pour votre recherche. Essayez d'effectuer une nouvelle recherche en vérifiant les fautes d'orthographe et/ou en réduisant le nombre de mots-clés utilisés. Vous pouvez également essayer d'utiliser une phrase de recherche plus large.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                        }
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if (filterLang === "fr") {
                            options.helper.toggleRefinement('search_api_language', 'fr');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                globalLanglistPanel({
                    container: '#globalLang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#caSearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){
                            if(filterLang == 'en'){
                                return html `<div class="search-result">
                                    <small>https://www.aesseal.com${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                </div>`
                                } else if(filterLang == '') {
                                    return html `<div class="search-result">
                                        <small>https://www.aesseal.com${data.url}</small>
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                    </div>`
                                } else if(filterLang == 'fr'){
                                return html `<div class="search-result">
                                    <small>https://www.aesseal.com${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Lire la suite</a>
                                </div>`
    
    
                            }
                        },
                        empty(results, { html }){
                            if(filterLang == 'en'){
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if(filterLang == '') {
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if (filterLang == 'fr') {
                                return html`<div class="no-result"><p class="h3">Aucun résultat trouvé correspondant ${results.query}</p>
                            <p>Nous sommes désolés de ne pas avoir trouvé de résultat pour votre recherche. Essayez d'effectuer une nouvelle recherche en vérifiant les fautes d'orthographe et/ou en réduisant le nombre de mots-clés utilisés. Vous pouvez également essayer d'utiliser une phrase de recherche plus large.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                            }
                        }
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        caSearch.start();
    }    

    if(!!sweSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const seSearch = instantsearch({
            indexName: 'aesseal_se',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal_se'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal_se']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })

        seSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
                filters: 'field_global_article: "false"',
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: item.label.toUpperCase(),
                    }));
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#sePagination',
                totalPages: 3,
                scrollTo: '#seSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#seSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#seStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#seHits',
                templates:{
                    item(data, { html, components }){
                        if(filterLang == 'en'){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if (filterLang == ''){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if(filterLang == 'sv'){
                            hideForm();
                            return html`
                            <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">CLäs mer om</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Öppna PDF</a>
                            </div>`

                        }
                    },
                    empty(results, { html }){
                        if(filterLang == 'en'){
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if(filterLang == '') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if (filterLang == 'sv') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Inga resultat hittades som matchade ${results.query}</p>
                            <p>Tyvärr kunde vi inte hitta något resultat för din sökning. Försök att söka igen genom att kontrollera din sökning efter stavfel och/eller minska antalet nyckelord som används. Du kan också försöka använda en bredare sökfras.</p>
                            </div>
                            <p class="h3">Söker du efter ett artikelnummer eller serienummer?</p>`;
                        }
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if (filterLang === "se") {
                            options.helper.toggleRefinement('search_api_language', 'se');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                globalLanglistPanel({
                    container: '#globalLang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#seSearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){
                            if(filterLang == 'en'){
                                return html `<div class="search-result">
                                    <small>https://www.aesseal.com${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                </div>`
                                } else if(filterLang == '') {
                                    return html `<div class="search-result">
                                        <small>https://www.aesseal.com${data.url}</small>
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                    </div>`
                                } else if(filterLang == 'sv'){
                                return html `<div class="search-result">
                                    <small>https://www.aesseal.com${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Läs mer om</a>
                                </div>`
    
    
                            }
                        },
                        empty(results, { html }){
                            if(filterLang == 'en'){
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if(filterLang == '') {
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if (filterLang == 'sv') {
                                return html`<div class="no-result"><p class="h3">Inga resultat hittades som matchade ${results.query}</p>
                                <p>Tyvärr kunde vi inte hitta något resultat för din sökning. Försök att söka igen genom att kontrollera din sökning efter stavfel och/eller minska antalet nyckelord som används. Du kan också försöka använda en bredare sökfras.</p>
                                </div>
                                <p class="h3">Söker du efter ett artikelnummer eller serienummer?</p>`;
                            }
                        }
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        seSearch.start();
    }

    if(!!toriSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const jpSearch = instantsearch({
            indexName: 'torishima aesseal',
            searchClient,
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['torishima aesseal'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['torishima aesseal']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        })

        jpSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 10,
                attributesToSnippet: ['body:80'],
                page: 0,
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: item.label.toUpperCase(),
                    }));
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            nationalPagination({
                container: '#jaPagination',
                totalPages: 3,
                scrollTo: '#jaSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#jaSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#jaStats"),
            }),

            instantsearch.widgets.hits ({
                container: '#jaHits',
                templates:{
                    item(data, { html, components }){
                        hideForm();
                        if(filterLang == 'en'){
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if (filterLang == ''){
                            hideForm();
                            return html ` <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">Open PDF</a>
                            </div>`
                        } else if(filterLang == 'ja'){
                            hideForm();
                            return html`
                            <div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Case Studies" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_s3_link ? '' : 'd-none'}">${data.field_s3_link}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="lead">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="${data.type != "Case Studies" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.url}">続きを読む</a>
                                <a class="${data.field_s3_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_s3_link}">PDFを開く</a>
                            </div>`

                        }
                    },
                    empty(results, { html }){
                        if(filterLang == 'en'){
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if(filterLang == '') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        }
                        else if (filterLang == 'ja') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">一致する結果は見つかりませんでした ${results.query}</p>
                            <p>検索結果が見つかりませんでした。スペルミスがないか、キーワードの数を減らして再度検索してみてください。また、より広い検索フレーズを使用してみることもできます。</p>
                            </div>
                            <p class="h3">部品番号またはシリアル番号をお探しですか？</p>`;
                        }
                    },
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        type: natTypeMapping[item.type],
                    }))
                },
            }),

            instantsearch.widgets
                .index({ indexName: 'aesseal' })
                .addWidgets([{
                    init: function(options) {
                        if(filterLang == "en")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if(filterLang == "")
                        {
                            options.helper.toggleRefinement('search_api_language', 'en');
                        }
                        else if (filterLang === "se") {
                            options.helper.toggleRefinement('search_api_language', 'ja');
                        }
                    }
                },

                instantsearch.widgets.configure({
                    clickAnalytics: true,
                    userToken: 'user-1',
                    hitsPerPage: 10,
                    attributesToSnippet: ['field_summary:80', 'body:80'],
                    page: 0,
                    filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
                }),

                gloablTypelistPanel({
                    container: '#globalType-list',
                    attribute: 'type',
                    templates: {
                        header: 'Filter Global Site by Content Type',
                        item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: typeMapping[item.label],
                        }));
                    },
                    cssClasses: {
                        item: ['types-item']
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                globalLanglistPanel({
                    container: '#globalLang-list',
                    attribute: 'search_api_language',
                    templates: {
                        header: 'Select your Language',
                        item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            label: item.label.toUpperCase(),
                        }));
                    },
                    sortBy: ['isRefined', 'count:desc', 'name:asc']
                }),

                pagination({
                    container: '#pagination',
                    totalPages: 3,
                    scrollTo: '#jaSearchbox'
                }),

                customStats({
                    container: document.querySelector("#globalStats"),
                }),

                instantsearch.widgets.hits ({
                    container: '#globalHits',
                    templates:{
                        item(data, { html, components }){
                            if(filterLang == 'en'){
                                return html `<div class="search-result">
                                    <small>https://www.aesseal.com${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                </div>`
                                } else if(filterLang == '') {
                                    return html `<div class="search-result">
                                        <small>https://www.aesseal.com${data.url}</small>
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                    </div>`
                                } else if(filterLang == 'ja'){
                                return html `<div class="search-result">
                                    <small>https://www.aesseal.com${data.url}</small>
                                    <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                    <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                    <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                    <a class="btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">続きを読む</a>
                                </div>`
    
    
                            }
                        },
                        empty(results, { html }){
                            if(filterLang == 'en'){
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if(filterLang == '') {
                                return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                                <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                                </div>
                                <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                            }
                            else if (filterLang == 'ja') {
                                return html`<div class="no-result"><p class="h3">一致する結果は見つかりませんでした ${results.query}</p>
                                <p>検索結果が見つかりませんでした。スペルミスがないか、キーワードの数を減らして再度検索してみてください。また、より広い検索フレーズを使用してみることもできます。</p>
                                </div>
                                <p class="h3">部品番号またはシリアル番号をお探しですか？</p>`;
                            }
                        }
                    },
                    transformItems(items){
                        return items.map(item => ({
                            ...item,
                            type: typeMapping[item.type],
                            vid: vidMapping[item.vid]
                        }))
                    },
                })
            ])
        ]);
        jpSearch.start();
    }

    if(!!resSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const resourceSearch = instantsearch({
            searchClient,
            indexName: 'aesseal',
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            searchFunction(helper) {
                if (helper.state.query === '')
                {
                    return;
                }
                helper.search();
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        });

        resourceSearch.addWidgets([{
            init: function(options) {
                if(filterLang == "en")
                {
                    options.helper.toggleRefinement('search_api_language', 'en');
                }
                else if(filterLang == "")
                {
                    options.helper.toggleRefinement('search_api_language', 'en');
                }
                else if(filterLang == "es")
                {
                    options.helper.toggleRefinement('search_api_language', 'es');
                }
                else if (filterLang === "fr") {
                    options.helper.toggleRefinement('search_api_language', 'fr');
                }
                else if (filterLang === "de") {
                    options.helper.toggleRefinement('search_api_language', 'de');
                }
                else if(filterLang == "it")
                {
                    options.helper.toggleRefinement('search_api_language', 'it');
                }
                else if(filterLang == "pl")
                {
                    options.helper.toggleRefinement('search_api_language', 'pl');
                }
                else if(filterLang == "tr")
                {
                    options.helper.toggleRefinement('search_api_language', 'tr');
                }
                else if(filterLang == "zh-hans")
                {
                    options.helper.toggleRefinement('search_api_language', 'zh-hans');
                }
            }
        }]);
        
        resourceSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 20,
                attributesToSnippet: ['field_summary:80', 'body:80'],
                page: 0,
                filters: '(type:casestudies OR type:productbrochure OR type:video OR type:industryguides OR type:corpbrochure)', 
            }),

            customClearRefinements({
                container: document.querySelector('#clear-refinements'),
            }),

            langlistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: item.label.toUpperCase(),
                    }));
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),

            typelistPanel({
                container: '#type-list',
                attribute: 'type',
                templates: {
                    item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                transformItems(items){
                    return items.map(item => ({
                        ...item,
                        label: typeMapping[item.label],
                    }));
                },
                cssClasses: {
                    item: ['types-item']
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),
        
            pagination({
                container: '#resPagination',
                totalPages: 3,
                scrollTo: '#resSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#resSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#resStats"),
            }),
        
            instantsearch.widgets.hits ({
                container: '#resHits',
                templates:{
                    item(data, { html, components }){
                        if(filterLang == 'en'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                            </div>`
                        } else if(filterLang == ''){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                            </div>`
                        } else if(filterLang == 'es'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Seguir leyendo</a>
                            </div>`
                        } else if(filterLang == 'fr'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">En savoir plus</a>
                            </div>`
                        } else if(filterLang == 'de'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Mehr lesen</a>
                            </div>`
                        } else if(filterLang == 'it'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Per saperne di più</a>
                            </div>`
                        } else if(filterLang == 'tr'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Daha Fazla Oku</a>
                            </div>`
                        } else if(filterLang == 'zh-hans'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">更多信息</a>
                            </div>`
                        }  else if(filterLang == 'pl'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Czytaj więcej</a>
                            </div>`
                        } else if(filterLang == 'ar'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p class="h3 ${data.name_1 ? '' : 'd-none'}">${data.name_1}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p id="vocabCat" class="lead ${data.vid ? '' : 'd-none'}">${data.vid}</p>
                                <p class=${data.field_summary ? '' : 'd-none'}>${data.field_summary}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">قراءة المزيد</a>
                            </div>`
                        } else if(filterLang == 'nb'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Les mer</a>
                            </div>`
                        } else if(filterLang == 'pt-br'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Leia mais</a>
                            </div>`
                        } else if(filterLang == 'pt'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Ler mais</a>
                            </div>`
                        } else if(filterLang == 'nl'){
                            hideForm();
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small>${data.url}</small>
                                <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                <a class="btn btn-primary view-details align-self-end" href="${data.url}">Meer lezen</a>
                            </div>`
                        }
                    },
                    empty(results, { html }){
                        if(results.query === '') return null;
                        if(filterLang == 'en'){
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        } else if(filterLang == '') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>
                            <p class="h3">Are you searching for a Part Number or Serial Number?</p>`;
                        } else if (filterLang == 'es') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">No se han encontrado resultados que coincidan ${results.query}</p>
                            <p>Lo sentimos, no hemos encontrado ningún resultado para su búsqueda. Intente buscar de nuevo, revisando su búsqueda en busca de errores ortográficos y/o reduciendo el número de palabras clave utilizadas. También puede intentar utilizar una frase de búsqueda más amplia.</p>
                            </div>
                            <p class="h3">¿Busca un número de pieza o de serie?</p>`;
                        } else if (filterLang == 'fr') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Aucun résultat trouvé correspondant ${results.query}</p>
                            <p>Nous sommes désolés de ne pas avoir trouvé de résultat pour votre recherche. Essayez d'effectuer une nouvelle recherche en vérifiant les fautes d'orthographe et/ou en réduisant le nombre de mots-clés utilisés. Vous pouvez également essayer d'utiliser une phrase de recherche plus large.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                        } else if (filterLang == 'de') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Keine passenden Ergebnisse gefunden ${results.query}</p>
                            <p>Wir konnten leider kein Ergebnis für Ihre Suche finden. Versuchen Sie, die Suche zu wiederholen, indem Sie Ihre Suche auf Rechtschreibfehler überprüfen und/oder die Anzahl der verwendeten Schlüsselwörter reduzieren. Sie können auch versuchen, einen umfassenderen Suchbegriff zu verwenden.</p>
                            </div>
                            <p class="h3">Vous recherchez un numéro de pièce ou un numéro de série ?</p>`;
                        } else if (filterLang == 'it') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Nessun risultato trovato corrispondente ${results.query}</p>
                            <p>Siamo spiacenti di non aver trovato un risultato per la vostra ricerca. Provi a effettuare una nuova ricerca, controllando che non vi siano errori di ortografia e/o riducendo il numero di parole chiave utilizzate. Potete anche provare a utilizzare una frase di ricerca più ampia.</p>
                            </div>
                            <p class="h3">State cercando un numero di parte o un numero di serie?</p>`;
                        } else if (filterLang == 'tr') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Eşleşen sonuç bulunamadı ${results.query}</p>
                            <p>Üzgünüz, aramanız için bir sonuç bulamadık. Aramanızı yazım hatalarına karşı kontrol ederek ve/veya kullanılan anahtar kelime sayısını azaltarak tekrar aramayı deneyin. Daha geniş bir arama cümlesi kullanmayı da deneyebilirsiniz.</p>
                            </div>
                            <p class="h3">Bir Parça Numarası veya Seri Numarası mı arıyorsunuz?</p>`;
                        } else if (filterLang == 'zh-hans') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">未找到匹配结果 ${results.query}</p>
                            <p>很抱歉，我们找不到您的搜索结果。请再次尝试搜索，检查拼写错误和/或减少使用的关键词数量。您还可以尝试使用更宽泛的搜索短语。</p>
                            </div>
                            <p class="h3">您在搜索零件编号或序列号吗？</p>`;
                        }  else if (filterLang == 'pl') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Nie znaleziono pasujących wyników ${results.query}</p>
                            <p>Przepraszamy, nie mogliśmy znaleźć wyniku wyszukiwania. Spróbuj wyszukać ponownie, sprawdzając wyszukiwanie pod kątem błędów ortograficznych i/lub zmniejszając liczbę użytych słów kluczowych. Możesz także spróbować użyć szerszej frazy wyszukiwania.</p>
                            </div>
                            <p class="h3">Szukasz numeru części lub numeru seryjnego?</p>`;
                        } else if(filterLang == 'ar') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">لم يتم العثور على نتائج مطابقة لـ ${results.query}</p>
                            <p>نأسف لعدم تمكننا من العثور على نتيجة لبحثك. حاول البحث مرة أخرى عن طريق التدقيق في بحثك بحثاً عن الأخطاء الإملائية و/أو تقليل عدد الكلمات الرئيسية المستخدمة. يمكنك أيضاً محاولة استخدام عبارة بحث أوسع نطاقاً.</p>
                            </div>
                            <p class="h3">هل تبحث عن رقم الجزء أو الرقم التسلسلي؟</p>`;
                        } else if(filterLang == 'nb') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Ingen resultater funnet som samsvarer med ${results.query}</p>
                            <p>Vi fant dessverre ikke noe resultat for søket ditt. Prøv å søke på nytt ved å kontrollere søket for stavefeil og/eller redusere antall søkeord. Du kan også prøve å bruke en bredere søkefrase.</p>
                            </div>
                            <p class="h3">Leter du etter et delenummer eller serienummer?</p>`;
                        } else if(filterLang == 'pt-br') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Não foram encontrados resultados correspondentes a ${results.query}</p>
                            <p>Lamentamos não ter encontrado um resultado para sua pesquisa. Tente pesquisar novamente, verificando se há erros de ortografia em sua pesquisa e/ou reduzindo o número de palavras-chave usadas. Você também pode tentar usar uma frase de pesquisa mais ampla.</p>
                            </div>
                            <p class="h3">Você está procurando um número de peça ou um número de série?</p>`;
                        } else if(filterLang == 'pt') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Não foram encontrados resultados correspondentes a ${results.query}</p>
                            <p>Lamentamos não ter encontrado um resultado para a sua pesquisa. Tente pesquisar novamente, verificando se existem erros ortográficos na sua pesquisa e/ou reduzindo o número de palavras-chave utilizadas. Também pode tentar utilizar uma frase de pesquisa mais abrangente.</p>
                            </div>
                            <p class="h3">Está à procura de um número de peça ou de série?</p>`;
                        }  else if(filterLang == 'cz') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Nebyly nalezeny žádné výsledky odpovídající ${results.query}</p>
                            <p>Omlouváme se, že jsme nenašli výsledek vašeho hledání. Zkuste hledat znovu, zkontrolujte, zda ve vyhledávání nejsou pravopisné chyby, a/nebo snižte počet použitých klíčových slov. Můžete také zkusit použít širší vyhledávací frázi.</p>
                            </div>
                            <p class="h3">Está à procura de um número de peça ou de série?</p>`;
                        } else if(filterLang == 'nl') {
                            revealForm();
                            return html`<div class="no-result"><p class="h3">Geen resultaten gevonden die overeenkomen met ${results.query}</p>
                            <p>Sorry, we konden geen resultaat vinden voor je zoekopdracht. Probeer opnieuw te zoeken door je zoekopdracht te controleren op spelfouten en/of het aantal gebruikte trefwoorden te verminderen. U kunt ook proberen een bredere zoekterm te gebruiken.</p>
                            </div>
                            <p class="h3">Ben je op zoek naar een onderdeelnummer of serienummer?</p>`;
                        }
                    },
                }
            }),
        ]);
        resourceSearch.start();
        document.querySelector('.ais-SearchBox-input').focus();
    }

    if(!!articleSearch){
        window.dataLayer.push({
            algoliaUserToken: 'user-1',
        });

        const newsSearch = instantsearch({
            searchClient,
            indexName: 'aesseal',
            typoTolerance: 'strict',
            paginationLimitedTo: 80,
            newsSearch(requests) {
                if(requests.every(({ params }) => !params.query)) {
                    return Promise.resolve({
                        results: requests.map(() => ({
                            hits: [],
                            nbHits: 0,
                            nbPages: 0,
                            page: 0,
                            hitsPerPage: 0,
                            processingTimeMS: 0,
                            widgetParams: 0,
                            query: '',
                            params: '',
                        })),
                    });
                }
                return searchClient.newsSearch(requests);
            },
            insights: {
                onEvent(event) {
                    const { widgetType, eventType, payload, hits } = event;
                    if (widgetType == 'ais.hits' && eventType === 'view') {
                        dataLayer.push({ event: 'Hits Viewed' });
                    }
                }
            },
            routing: {
                router: instantsearch.routers.history({

                    createURL({ qsModule, routeState, location }) {
                        const { origin, pathname, hash} = location;
                        const queryParameters = {};

                        if(routeState.q) {
                            queryParameters.q = encodeURIComponent(routeState.q);
                        }
                        if(routeState.type) {
                            queryParameters.type = routeState.type.map(encodeURIComponent);
                        }
                        if(routeState.lang) {
                            queryParameters.lang = routeState.lang.map(encodeURIComponent);
                        }

                        const queryString = qsModule.stringify(queryParameters, {
                            addQueryPrefix: true,
                            arrayFormat: 'indices'
                        });

                        return `${origin}${pathname}${queryString}`;
                    },

                    parseUrl({ qsModule, location }) {
                        const { q = '', type = [], lang =[] } = qsModule.parse(
                            location.search.slice(1)
                        );
                        const allType = Array.isArray(type)
                            ? type
                            : [type].filter(Boolean);
                        const allLang = Array.isArray(lang)
                            ? lang
                            :[lang].filter(Boolean);
                        return {
                            q: decodeURIComponent(q),
                            type: allType.map(decodeURIComponent),
                            lang: allLang.map(decodeURIComponent)
                        };
                    },
                    writeDelay: 400,
                    cleanUrlOnDispode: true,
                }),
                stateMapping: {
                    stateToRoute(uiState){
                        const indexUiState = uiState['aesseal'] || {};
                        return{
                            q: indexUiState.query,
                            type: indexUiState.refinementList && indexUiState.refinementList.type,
                            lang: indexUiState.refinementList && indexUiState.refinementList.search_api_language
                        }
                    },
                    routeToState(routeState) {
                        return{
                            ['aesseal']: {
                                query: routeState.q,
                                refinementList: {
                                    type: routeState.type,
                                    search_api_language: routeState.lang
                                }
                            },
                        };
                    },
                },
            },
        });

        newsSearch.addWidgets([{
            init: function(options) {
                if(filterLang == "en")
                {
                    options.helper.toggleRefinement('search_api_language', 'en');
                }
                else if(filterLang == "")
                {
                    options.helper.toggleRefinement('search_api_language', 'en');
                }
                else if(filterLang == "es")
                {
                    options.helper.toggleRefinement('search_api_language', 'es');
                }
                else if (filterLang === "fr") {
                    options.helper.toggleRefinement('search_api_language', 'fr');
                }
                else if (filterLang === "de") {
                    options.helper.toggleRefinement('search_api_language', 'de');
                }
                else if(filterLang == "it")
                {
                    options.helper.toggleRefinement('search_api_language', 'it');
                }
                else if(filterLang == "pl")
                {
                    options.helper.toggleRefinement('search_api_language', 'pl');
                }
                else if(filterLang == "tr")
                {
                    options.helper.toggleRefinement('search_api_language', 'tr');
                }
                else if(filterLang == "zh-hans")
                {
                    options.helper.toggleRefinement('search_api_language', 'zh-hans');
                }
            }
        }]);
        
        newsSearch.addWidgets([
            instantsearch.widgets.configure({
                clickAnalytics: true,
                userToken: 'user-1',
                hitsPerPage: 20,
                attributesToSnippet: ['field_summary:80', 'body:80'],
                page: 0,
                filters: '(type:article OR type:announcements)', 
            }),

            customClearRefinements({
                container: document.querySelector('#clear-refinements'),
            }),

            globalLanglistPanel({
                container: '#lang-list',
                attribute: 'search_api_language',
                templates: {
                    header: 'Select your Language',
                    item: '<input type="checkbox" data-insights-filter="${`search_api_language:${value}`}" class="ais-refinement-list--checkbox lang-item" value="{{label}}" {{#isRefined}}checked="true"{{/isRefined}}> {{label}} <span class="ais-refinement-list--count">({{count}})</span>',
                },
                sortBy: ['isRefined', 'count:desc', 'name:asc']
            }),
        
            pagination({
                container: '#newsPagination',
                totalPages: 3,
                scrollTo: '#newsSearchbox'
            }),
        
            mainSearchBox({
                container: document.querySelector('#newsSearchbox'),
                 searchAsYouType: false,
            }),

            customStats({
                container: document.querySelector("#newsStats"),
            }),
        
            instantsearch.widgets.hits ({
                container: '#newsHits',
                templates:{
                    item(data, { html, components }){
                        if(filterLang == 'en'){
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">https://www.aesseal.com${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Read More</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Read More</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == ''){
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Read More</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Read More</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Read More</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'es'){
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">https://www.aesseal.com${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Seguir leyendo</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Seguir leyendo</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Seguir leyendo</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Seguir leyendo</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'fr'){
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">https://www.aesseal.com${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">En savoir plus</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">En savoir plus</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">En savoir plus</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">En savoir plus</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'de'){
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">https://www.aesseal.com${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Mehr lesen</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Mehr lesen</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Mehr lesen</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Mehr lesen</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'it'){
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">https://www.aesseal.com${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Per saperne di più</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Per saperne di più</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Per saperne di più</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Per saperne di più</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'tr'){
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">https://www.aesseal.com${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">Daha Fazla Oku</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">Daha Fazla Oku</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">Daha Fazla Oku</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">Daha Fazla Oku</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        } else if(filterLang == 'zh-hans'){
                            return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                                <small class="${data.type != "Announcements" ? '' : 'd-none'}">https://www.aesseal.com${data.url}</small>
                                <small class="${data.field_website_link ? '' : 'd-none'}">${data.field_website_link}</small>
                                <small class="${data.field_ext_site_link_address ? '' : 'd-none'}">${data.field_ext_site_link_address}</small>
                                <div class="row">
                                    <div class="col-md-9 col-8 d-flex flex-column">
                                        <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>
                                        <p id="contentCat" class="lead ${data.type ? '' : 'd-none'}">${data.type}</p>
                                        <p class=${data.summary ? '' : 'd-none'}>${data.summary}</p>
                                        <a class="${data.field_ext_site_link_address ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_ext_site_link_address}">更多信息</a>
                                        <a class="${data.field_website_link ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="${data.field_website_link}">更多信息</a>
                                        <a class="${data.field_brochure_link_address ? '' : 'd-none' } btn btn-primary view-details align-self-end" href="${data.field_brochure_link_address}">更多信息</a>
                                        <a class="${data.type != "Announcements" ? '' : 'd-none'} btn btn-primary view-details align-self-end" href="https://www.aesseal.com${data.url}">更多信息</a>
                                    </div>
                                    <div class="col-md-3 col-4">
                                        <img class="${data.news_node_thumb_uri ? '' : 'd-none'} img-fluid ratio ratio-1x1 overflow-hidden" src="${data.news_node_thumb_uri}" height="420" width="420" alt="${data.title}" />
                                    </div>
                                </div>
                            </div>`
                        }
                    },
                    empty(results, { html }){
                        if(filterLang == 'en'){
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>`;
                        } else if(filterLang == '') {
                            return html`<div class="no-result"><p class="h3">No results found matching ${results.query}</p>
                            <p>Sorry we couldn’t find a result for your search. Try to search again by, checking your search for spelling mistakes and/or reducing the number of keywords used. You can also try using a broader search phrase.</p>
                            </div>`;
                        } else if (filterLang == 'es') {
                            return html`<div class="no-result"><p class="h3">No se han encontrado resultados que coincidan ${results.query}</p>
                            <p>Lo sentimos, no hemos encontrado ningún resultado para su búsqueda. Intente buscar de nuevo, revisando su búsqueda en busca de errores ortográficos y/o reduciendo el número de palabras clave utilizadas. También puede intentar utilizar una frase de búsqueda más amplia.</p>
                            </div>`;
                        } else if (filterLang == 'fr') {
                            return html`<div class="no-result"><p class="h3">Aucun résultat trouvé correspondant ${results.query}</p>
                            <p>Nous sommes désolés de ne pas avoir trouvé de résultat pour votre recherche. Essayez d'effectuer une nouvelle recherche en vérifiant les fautes d'orthographe et/ou en réduisant le nombre de mots-clés utilisés. Vous pouvez également essayer d'utiliser une phrase de recherche plus large.</p>
                            </div>`;
                        } else if (filterLang == 'de') {
                            return html`<div class="no-result"><p class="h3">Keine passenden Ergebnisse gefunden ${results.query}</p>
                            <p>Wir konnten leider kein Ergebnis für Ihre Suche finden. Versuchen Sie, die Suche zu wiederholen, indem Sie Ihre Suche auf Rechtschreibfehler überprüfen und/oder die Anzahl der verwendeten Schlüsselwörter reduzieren. Sie können auch versuchen, einen umfassenderen Suchbegriff zu verwenden.</p>
                            </div>`;
                        } else if (filterLang == 'it') {
                            return html`<div class="no-result"><p class="h3">Nessun risultato trovato corrispondente ${results.query}</p>
                            <p>Siamo spiacenti di non aver trovato un risultato per la vostra ricerca. Provi a effettuare una nuova ricerca, controllando che non vi siano errori di ortografia e/o riducendo il numero di parole chiave utilizzate. Potete anche provare a utilizzare una frase di ricerca più ampia.</p>
                            </div>`;
                        } else if (filterLang == 'tr') {
                            return html`<div class="no-result"><p class="h3">Eşleşen sonuç bulunamadı ${results.query}</p>
                            <p>Üzgünüz, aramanız için bir sonuç bulamadık. Aramanızı yazım hatalarına karşı kontrol ederek ve/veya kullanılan anahtar kelime sayısını azaltarak tekrar aramayı deneyin. Daha geniş bir arama cümlesi kullanmayı da deneyebilirsiniz.</p>
                            </div>`;
                        } else if (filterLang == 'zh-hans') {
                            return html`<div class="no-result"><p class="h3">未找到匹配结果 ${results.query}</p>
                            <p>很抱歉，我们找不到您的搜索结果。请再次尝试搜索，检查拼写错误和/或减少使用的关键词数量。您还可以尝试使用更宽泛的搜索短语。</p>
                            </div>`;
                        } else if(filterLang == 'ar') {
                            return html`<div class="no-result"><p class="h3">لم يتم العثور على نتائج مطابقة لـ ${results.query}</p>
                            <p>نأسف لعدم تمكننا من العثور على نتيجة لبحثك. حاول البحث مرة أخرى عن طريق التدقيق في بحثك بحثاً عن الأخطاء الإملائية و/أو تقليل عدد الكلمات الرئيسية المستخدمة. يمكنك أيضاً محاولة استخدام عبارة بحث أوسع نطاقاً.</p>
                            </div>`;
                        } else if(filterLang == 'nb') {
                            return html`<div class="no-result"><p class="h3">Ingen resultater funnet som samsvarer med ${results.query}</p>
                            <p>Vi fant dessverre ikke noe resultat for søket ditt. Prøv å søke på nytt ved å kontrollere søket for stavefeil og/eller redusere antall søkeord. Du kan også prøve å bruke en bredere søkefrase.</p>
                            </div>`;
                        } else if(filterLang == 'pt-br') {
                            return html`<div class="no-result"><p class="h3">Não foram encontrados resultados correspondentes a ${results.query}</p>
                            <p>Lamentamos não ter encontrado um resultado para sua pesquisa. Tente pesquisar novamente, verificando se há erros de ortografia em sua pesquisa e/ou reduzindo o número de palavras-chave usadas. Você também pode tentar usar uma frase de pesquisa mais ampla.</p>
                            </div>`;
                        } else if(filterLang == 'pt') {
                            return html`<div class="no-result"><p class="h3">Não foram encontrados resultados correspondentes a ${results.query}</p>
                            <p>Lamentamos não ter encontrado um resultado para a sua pesquisa. Tente pesquisar novamente, verificando se existem erros ortográficos na sua pesquisa e/ou reduzindo o número de palavras-chave utilizadas. Também pode tentar utilizar uma frase de pesquisa mais abrangente.</p>
                            </div>`;
                        }  else if(filterLang == 'cz') {                            return html`<div class="no-result"><p class="h3">Nebyly nalezeny žádné výsledky odpovídající ${results.query}</p>
                            <p>Omlouváme se, že jsme nenašli výsledek vašeho hledání. Zkuste hledat znovu, zkontrolujte, zda ve vyhledávání nejsou pravopisné chyby, a/nebo snižte počet použitých klíčových slov. Můžete také zkusit použít širší vyhledávací frázi.</p>
                            </div>`;
                        } else if(filterLang == 'nl') {                            return html`<div class="no-result"><p class="h3">Geen resultaten gevonden die overeenkomen met ${results.query}</p>
                            <p>Sorry, we konden geen resultaat vinden voor je zoekopdracht. Probeer opnieuw te zoeken door je zoekopdracht te controleren op spelfouten en/of het aantal gebruikte trefwoorden te verminderen. U kunt ook proberen een bredere zoekterm te gebruiken.</p>
                            </div>`;
                        }
                    },
                },
                transformItems(items, { results }){
                    return items.map(item => ({
                        ...item,
                        type: typeMapping[item.type],
                        vid: vidMapping[item.vid]
                    }))            
                },
            }),
        ]);
        newsSearch.start();
        document.querySelector('.ais-SearchBox-input').focus();
    }
});