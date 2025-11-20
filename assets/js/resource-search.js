document.addEventListener("DOMContentLoaded", function() {

    window.dataLayer = window.dataLayer || [];
    const { connectSearchBox } = instantsearch.connectors;

    const searchClient = algoliasearch('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

    const renderSearchBox = (renderOptions, isFirstRender) => {
        const { query, refine, clear, isSearchStalled, widgetParams } = renderOptions;

        if (isFirstRender) {
            const input = document.createElement('input');
            input.classList.add('ais-SearchBox-input');
            input.classList.add('form-control');

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

    const customSearchBox = connectSearchBox (
        renderSearchBox
    );

    const pagination = instantsearch.widgets.panel ({
        hidden: ({ results }) => results.nbPages === 1,
    })(instantsearch.widgets.pagination)

    window.dataLayer.push({
        algoliaUserToken: 'user-1',
    });

    const pdfSearch = instantsearch({
        searchClient,
        indexName: 'pdf_brochures_xml_crawler',
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
    });

    pdfSearch.addWidgets([
        instantsearch.widgets.configure({
            hitsPerPage: 20,
            attributesToSnippet: ['content:80'],
            page: 0,
        }),

        pagination({
            container: '#pagination',
            totalPages: 3,
            scrollTo: '#pdfSearchbox'
        }),

        customSearchBox({
            container: document.querySelector('#pdfSearchbox'),
                searchAsYouType: false,
        }),

        instantsearch.widgets.stats({
            container: '#stats',
            templates: {
                text(data, { html }) {
                    let count = '';
                    if (data.hasManyResults) {
                        count += `${data.nbHits} results`
                    } else if (data.hasOneResult) {
                        count += `1 result`
                    } else {
                        count += `no result`;
                    }

                    return html`<span class="stat-text">${count} found in ${data.processingTimeMS}ms</span>`;
                }
            }
        }),

        instantsearch.widgets.hits ({
            container: '#hits',
            templates:{
                item(data, { html, components }){
                    return html `<div class="search-result" data-insights-object-id="${data.objectID}" data-insights-position="${data.__position}" data-insights-query-id="${data.__queryID}">
                            <small>${data.url}</small>
                            <p class="h3 ${data.title ? '' : 'd-none'}">${data.title}</p>                                
                            <p class=${data.content ? '' : 'd-none'}>${components.Snippet({
                                attribute: "content",
                                hit: data,
                                highlightedTagName: 'strong'
                            })}</p>
                        <a class="btn btn-primary view-details align-self-end" href="${data.url}">Read More</a>
                    </div>`
                }
            }
        })
    ]);
    pdfSearch.start();
    document.querySelector('.ais-SearchBox-input').focus();
});