document.addEventListener("DOMContentLoaded", function() {
    const { liteClient: algoliasearch } = window["algoliasearch/lite"];
    const searchClient = algoliasearch('ZUQNGEX563', '23e29710cc4469dec35bd50bc2164b3a');

    window.dataLayer = window.dataLayer || [];
    const { connectClearRefinements } = instantsearch.connectors;
    const { connectRefinementList } = instantsearch.connectors;
    const { menu } = instantsearch.widgets;
    const { menuSelect } = instantsearch.widgets;
    
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

        menuSelect({
            container: document.querySelector("#shaftDiameter"),
            attribute: "Shaft Diameter*",
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
        menuSelect({
            container: document.querySelector("#sternTube"),
            attribute: "Stern Tube Diameter*",
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
                    <a href="${hit["Type A Maintenance Kit Part Shopify URL*"]}" class="${hit["Type A Maintenance Kit Part Shopify URL*"] ? '' : 'd-none'} btn btn-danger seal-option me-3" data-insights-hits="${hit.objectID}">${hit["Type A Maintenance Kit Part Number"]}</a>
                    <a href="${hit["Pro Part Shopify URL"]}" class="${hit["Pro Part Shopify URL"] ? '' : 'd-none'} btn btn-danger seal-option me-3" data-insights-hits="${hit.objectID}">${hit["Pro Part Number"]}</a>
                    <a href="${hit["Pro Maintenance Kit Part Shopify URL"]}" class="${hit["Pro Maintenance Kit Part Shopify URL"] ? '' : 'd-none'} btn btn-danger seal-option" data-insights-hits="${hit.objectID}">${hit["Pro Maintenance Kit Part Number"]}</a>
                    `

                },
            },
        }),

    ])

    // Disable dependent selects until a measurement option is selected
    function getDependentSelects() {
        const shaftSelect = document.querySelector('#shaftDiameter select');
        const sternSelect = document.querySelector('#sternTube select');
        return { shaftSelect, sternSelect };
    }

    function setDependentDisabled(disabled) {
        const { shaftSelect, sternSelect } = getDependentSelects();
        if (shaftSelect) {
            shaftSelect.disabled = disabled;
            if (disabled) shaftSelect.selectedIndex = 0;
        }
        if (sternSelect) {
            sternSelect.disabled = disabled;
            if (disabled) sternSelect.selectedIndex = 0;
        }
    }

    function updateDependentState() {
        const measurementContainer = document.querySelector('#measurementType');
        if (!measurementContainer) return;
        const anyChecked = !!measurementContainer.querySelector('input[type="checkbox"]:checked');
        setDependentDisabled(!anyChecked);
    }

    // Listen for changes on the measurement menu (checkboxes are rendered by the menu widget)
    const measurementContainer = document.querySelector('#measurementType');
    if (measurementContainer) {
        measurementContainer.addEventListener('change', updateDependentState);
    }

        // Ensure selects are disabled by default until a measurement is chosen
    // Use a short timeout to allow instantsearch to render the select elements
    setTimeout(updateDependentState, 100);
    

    // Start the search and initialize state after widgets render
    sealSelector.start();


});

