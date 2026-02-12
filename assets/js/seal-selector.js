document.addEventListener("DOMContentLoaded", function() {
    const { liteClient: algoliasearch } = window["algoliasearch/lite"];
    const searchClient = algoliasearch('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

    window.dataLayer = window.dataLayer || [];
    const { connectClearRefinements } = instantsearch.connectors;
    const { panel } = instantsearch.widgets;
    const { menu } = instantsearch.widgets;
    const { menuSelect } = instantsearch.widgets;

    const isAttributeRefined = (results, attribute) => {
        const facet = results.getFacetValues(attribute);
        return Array.isArray(facet) && facet.some   (f => f.isRefined);
    };
    
    const renderClearRefinements = (renderOptions, isFirstRender) => {
        const {canRefine, refine, widgetParams} = renderOptions;
        if(isFirstRender) {
            const clearButton = document.createElement('button');
            clearButton.classList.add("btn", "btn-primary", "mt-5");
            clearButton.textContent = 'Reset';
            clearButton.addEventListener('click', () => {
                refine();
                document.querySelector("#shaftDiameter .ais-Panel").setAttribute("hidden", "");
            });
            widgetParams.container.appendChild(clearButton);
        }
        widgetParams.container.querySelector('button').disabled = !canRefine;
    }

    const customClearRefinements = connectClearRefinements(renderClearRefinements);

    const shaftPanel = panel({
        templates: {
            header: 'Shaft Diameter',
        },
        hidden(options){
            const currentMeasurement = options.results.disjunctiveFacets.find( (f) => f.name === "Metric");
            return !currentMeasurement || !currentMeasurement.data.some( item => item.isRefined);
        },
    })(menuSelect);

    const sternTubePanel = panel({
        templates: {
            header: 'Stern Tube Diameter',
        },
        hidden(options){
            const currentShaft = options.results.disjunctiveFacets.find( facet => facet.name === "Shaft Diameter*");
            return !currentShaft || !currentShaft.data.some( item => item.isRefined);
        },
    })(menuSelect);

    window.dataLayer.push({
        algoliaUserToken: 'user-1',
    });

    const sealSelector = instantsearch({
        searchClient,
        indexName: 'pss_seal_selector',
        typoTolerance: 'strict',
        paginationLimitedTo: 80,
        searchFunction(helper) {
            if (helper.state.query === "")
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

        menu({
            container: document.querySelector("#measurementType"),
            attribute: "Measurement",
            sortBy: ["name:asc"],
            cssClasses: {
                root: "measurement-refinement-container",
                list: "measurement-item-list",
                item: "measurement-item",
                selectedItem: "measurement-item--selected",
            },
            templates: {
                item: '<input type="checkbox" data-insights-filter="${`type:${value}`}" class="ais-refinement-list--checkbox m-checkbox" {{#isRefined}}checked="true"{{/isRefined}}> {{label}}',
            }
        }),

        shaftPanel({
            hidden(options){
                return !isAttributeRefined(options.results, "Measurement");
            },
            container: document.querySelector("#shaftDiameter"),
            attribute: "Shaft Diameter*",
            sortBy: ["name:asc"],
            limit: 55,
            cssClasses: {
                root: "shaft-diameter-select",
            },
            templates: {
                item(item, { html }) {
                    return html`<span>${item.label}</span>`;
                },
                defaultOption(data, { html }) {
                    return html`<span>Choose a Shaft Diameter</span>`;
                },
            }
        }),
        sternTubePanel({
            hidden(options){
                return !isAttributeRefined(options.results, "Shaft Diameter*");
            },
            container: document.querySelector("#sternTube"),
            attribute: "Stern Tube Diameter*",
            sortBy: ["name:asc"],
            limit: 26,
            cssClasses: {
                root: "stern-tube-select",
            },
            templates: {
                item(item, { html }) {
                    return html`<span>${item.label}</span>`;
                },
                defaultOption(data, { html }) {
                    return html`<span>Choose a Stern Tube Diameter</span>`;
                },
            }
        }),
        instantsearch.widgets.hits({
            container: document.querySelector("#seal-selection"),
            templates: {
                item(hit, {html}){
                    return html`
                    <a href="${hit["Type A Part Shopify URL*"]}" class="${hit["Type A Part Shopify URL*"] ? '' : 'd-none'} btn btn-danger seal-option me-3" data-insights-hits="${hit.objectID}">${hit["Type A Part Number*"]}</a>
                    <a href="${hit["Type A Maintenance Kit Part Shopify URL"]}" class="${hit["Type A Maintenance Kit Part Shopify URL"] ? '' : 'd-none'} btn btn-danger seal-option me-3" data-insights-hits="${hit.objectID}">${hit["Type A Maintenance Kit Part Number"]}</a>
                    <a href="${hit["Pro Part Shopify URL"]}" class="${hit["Pro Part Shopify URL"] ? '' : 'd-none'} btn btn-danger seal-option me-3" data-insights-hits="${hit.objectID}">${hit["Pro Part Number"]}</a>
                    <a href="${hit["Pro Maintenance Kit Part Shopify URL"]}" class="${hit["Pro Maintenance Kit Part Shopify URL"] ? '' : 'd-none'} btn btn-danger seal-option" data-insights-hits="${hit.objectID}">${hit["Pro Maintenance Kit Part Number"]}</a>
                    `
                },
            },
        }),

    ])
    sealSelector.start();

    document.querySelector("#measurementType").addEventListener("click", function(event) {
        if (event.target.matches(".ais-refinement-list--checkbox")) {
            document.querySelector("#shaftDiameter .ais-Panel").removeAttribute("hidden");
            document.querySelector("#shaftDiameter .ais-Panel").classList.remove("ais-Panel--noRefinement");
        }
    }, false);

    document.querySelector("#measurementType").addEventListener("click", function(event) {
        if (event.target.matches(".ais-MenuSelect-option")) {
            document.querySelector("#sternTube .ais-Panel").removeAttribute("hidden");
            document.querySelector("#sternTube .ais-Panel").classList.remove("ais-Panel--noRefinement");
        }
    }, false);
});

