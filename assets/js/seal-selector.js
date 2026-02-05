document.addEventListener("DOMContentLoaded", function() {
    const { liteClient: algoliasearch } = window["algoliasearch/lite"];
    const searchClient = algoliasearch('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

    window.dataLayer = window.dataLayer || [];
    const { connectClearRefinements } = instantsearch.connectors;
    const { refinementList } = instantsearch.widgets;

    const renderClearRefinements = (renderOptions, isFirstRender) => {
        const {canRefine, refine, widgetParams} = renderOptions;
        if(isFirstRender) {
            const clearButton = document.createElement('button');
            clearButton.classList.add("btn", "btn-primary", "mt-5");
            clearButton.textContent = 'Reset';
            clearButton.addEventListener('click', () => {
                refine();
            });
            widgetParams.container.appendChild(clearButton);
        }
        widgetParams.container.querySelector('button').disabled = !canRefine;
    }

    const customClearRefinements = connectClearRefinements(renderClearRefinements);

    window.dataLayer.push({
        algoliaUserToken: 'user-1',
    });

    const sealSelector = instantsearch({
        searchClient,
        indexName: 'pss_seal_selector',
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
        
    sealSelector.addWidgets([
        customClearRefinements({
                container: document.querySelector('#reset-options'),
            }),

        refinementList({
            container: document.querySelector("#measurementType"),
            attribute: "Measurement",
        }),
        refinementList({
            container: document.querySelector("#shaftDiameter"),
            attribute: "Shaft Diameter*",
        }),
        refinementList({
            container: document.querySelector("#sternTube"),
            attribute: "Stern Tube Diameter*",
        }),
        instantsearch.widgets.hits({
            container: document.querySelector("#seal-selection"),
        })

    ])

    sealSelector.start();
    
});