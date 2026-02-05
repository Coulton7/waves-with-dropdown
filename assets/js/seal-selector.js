document.addEventListener("DOMContentLoaded", function() {
    const { liteClient: algoliasearch } = window["algoliasearch/lite"];
    const searchClient = algoliasearch('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

    window.dataLayer = window.dataLayer || [];
    const { connectClearRefinements } = instantsearch.connectors;
    const { createDropdown } = instantsearch.connectors;

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

    const shaftDropdown = createDropdown(
        instantsearch.widgets.refinementList,
        { closeOnChange: true }
    );

    const sternDropdown = createDropdown(
        instantsearch.widgets.refinementList,
        { closeOnChange: true }
    );

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

        instantsearch.widgets.refinementList({
            container: document.querySelector("#measurementType"),
            attribute: "Measurement",
        }),
        shaftDropdown({
            container: document.querySelector("#shaftDiameter"),
            attribute: "Shaft Diameter*",
        }),
        sternDropdown({
            container: document.querySelector("#sternTube"),
            attribute: "Stern Tube Diameter*",
        }),
        instantsearch.widgets.hits({
            container: document.querySelector("#seal-selection"),
        })

    ])

    sealSelector.start();
    
});