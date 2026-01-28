class ProductSearchForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  static get observedAttributes() {
    return ['url'];
  }

  async connectedCallback() {
    this.url = this.getAttribute('url');
    this.shadowRoot.innerHTML = `
      <slot></slot>
      <style>
      :host {
        display: block;
        font-family: system-ui, sans-serif;
      }

      form#productForm {
        padding: 8px;
        background: #fafafa;
        background-image: linear-gradient(90deg, #fafafa 0%, #f5f5f5 100%);
        border: 1px solid #999;
        border-radius: 4px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        position: relative;

      }
      .form-margin { margin-bottom: 28px; }
      .row { display: grid; grid-template-columns: repeat(12, 1fr); gap: 28px 16px; }
      .col-md-6 { grid-column: span 6; }
      .col-md-12 { grid-column: span 12; }
      @media (max-width: 1064px) {
        .col-md-6, .col-md-12 { grid-column: span 12; }
      }
      select {
        width: 100%;
        padding: 8px 12px;
        font-size: 16px;
        line-height: 1.5;
        color: #111827; /* Tailwind's gray-900 */
        background-color: #fff;
        border: 1px solid #d1d5db; /* Tailwind's gray-300 */
        border-radius: 4px; /* Tailwind's rounded-lg */
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='none' stroke='%236B7280' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 8px center;
        background-size: 16px 16px;
        padding-right: 40px;
      }
      .flex-group {
        display: flex; flex-wrap: wrap; gap: 24px;
      }
      .radio-inline {
        display: flex;
        align-items: center;
        gap: 8px; /* equivalent to Tailwind's gap-x-3 */
        font-size: 16px; /* text-sm */
        line-height: 1.5;
        font-weight: 500;
        color: #111827; /* gray-900 */
      }

      .radio-inline input[type="radio"] {
        appearance: none;
        position: relative;
        width: 18px;
        height: 18px;
        border-radius: 9999px; /* rounded-full */
        border: 1px solid #d1d5db; /* gray-300 */
        background-color: #fff;
        cursor: pointer;
        display: inline-block;
        flex-shrink: 0;
        margin: 0;
      }

      .radio-inline input[type="radio"]::before {
        content: "";
        position: absolute;
        inset: 4px;
        border-radius: 9999px;
        background-color: white;
        display: block;
      }

      .radio-inline input[type="radio"]:checked {
        background-color: #0066cc;
        border-color: #0066cc;
      }

      .radio-inline input[type="radio"]:checked::before {
        background-color: #fff; /* creates visible center dot */
      }

      .radio-inline input[type="radio"]:focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }

      fieldset {
        border: none;
        padding: 0;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
      }
      .btn-reset {
        padding: 4px 8px;
        background: #cc2a2a;
        border: 1px solid #931616;
        border-radius: 4px;
        cursor: pointer;
        color: #fff;
        margin-bottom: 16px;
      }
      @media (min-width: 900px) {
        .btn-reset { position: absolute; top: 8px; right: 8px;}
      }
      .btn-reset:focus {
        outline: 2px solid #931616;
        outline-offset: 2px;
      }
      .btn-reset:hover {
        background: #931616;
      }
      .results {
        margin-top: 28px;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        border: 1px solid #999;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        &.none { display: none; }
      }

      .results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        max-width: 100%;
      }

      @media (min-width: 900px) {
        .results-grid.results1 {
          grid-template-columns: repeat(auto-fit, minmax(200px, 280px));
        }
      }      

      .results a {
        display: block;
        margin-bottom: 0;
        color: #fff;
        background: #BF2222;
        text-decoration: none;
        padding: 4px;
        border-radius: 3px;
        border: 1px solid #a42121;
        font-weight: 500;
        font-size: 19px;
        line-height: 1.1;
      }
      .results a:hover {
        text-decoration: none;
        background: #a42121;
      }
      .results a:focus {
        outline: 2px solid #a42121;
        outline-offset: 2px;
      }
      .results a span {
        font-weight: 500;
        margin-bottom: 1px;
        font-size: 14px;
        display: block;
      }
      select:disabled {
        background: #f5f5f5;
        cursor: not-allowed;
      }
      select:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      .form-group {
        margin-bottom: 0;
      }
      .form-label {
        display: flex;
        flex-wrap: nowrap;
        gap: 8px;
        align-items: center;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 16px;
        font-size: clamp(14px, 1vw + 0.25rem, 18px);
        text-wrap: pretty;
        color: #000;
      }

      .form-label span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 100%;
        background-color: #1c283d;
        color: white;
        font-size: 14px;
        font-weight: 600;
        flex-shrink: 0;
        border: 1px solid #1c283d;
        transition: background-color 0.25s ease-in-out; /* 👈 smooth fade */
      }
      .form-label span.completed {
        background-color: #abe435;
        border-color: #557c18;
        color: #1e2e0a;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      legend {
        padding: 0;
      }
      .pl-1 { padding-left: 4px;}

      </style>

      <form id="productForm" role="form" aria-label="Product Search Form">
        <button type="button" id="resetBtn" style="display: none;" class="btn-reset" aria-label="Reset search form">
          Reset Search
        </button>

        <div class="row">
          <div class="col-md-12">
            <fieldset class="form-margin">
              <legend class="form-label"><span>1</span>Do You Need Imperial or Metric Sizing?</legend>
              <div role="radiogroup" aria-label="Measurement system selection" class="flex-group pl-1">
                <label class="radio-inline">
                  <input type="radio" name="shaft_diameter_metric" value="false" aria-label="Imperial measurement">
                  Imperial
                </label>
                <label class="radio-inline">
                  <input type="radio" name="shaft_diameter_metric" value="true" aria-label="Metric measurement">
                  Metric
                </label>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label id="shaft-diameter-label" class="form-label" for="shaft-diameter">
                <span>2</span> Select Your Shaft Diameter
              </label>
              <select
                id="shaft-diameter"
                name="shaft_diameter"
                disabled
                aria-labelledby="shaft-diameter-label"
                aria-describedby="shaft-diameter-help"
              >
                <option value="">Choose a Shaft Diameter</option>
              </select>
              <div id="shaft-diameter-help" class="sr-only">
                First select a measurement system, then choose your shaft diameter
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label id="stern-tube-label" class="form-label" for="stern-tube-diameter">
                <span>3</span> Select the Outside Diameter of Your Stern Tube (Shaft Log):
              </label>
              <select
                id="stern-tube-diameter"
                name="stern_tube_diameter"
                disabled
                aria-labelledby="stern-tube-label"
                aria-describedby="stern-tube-help"
              >
                <option value="">Choose a Stern Tube Diameter</option>
              </select>
              <div id="stern-tube-help" class="sr-only">
                Select a shaft diameter first, then choose your stern tube diameter
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="results none" role="region" aria-live="polite" aria-label="Product Search Results"></div>
    `;

    this.setupEventListeners();
    this.shadowRoot.querySelector('slot').remove();
  }

  setupEventListeners() {
    const form = this.shadowRoot.getElementById('productForm');
    const resetBtn = this.shadowRoot.getElementById('resetBtn');

    form.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', () => {
        this.resetDependentFields();
        this.handleUpdate('shaft_diameter_metric');
      });
    });

    form.querySelector('select[name="shaft_diameter"]').addEventListener('change', () => {
      this.clearSternTubeSelection();
      this.handleUpdate('shaft_diameter');
    });

    form.querySelector('select[name="stern_tube_diameter"]').addEventListener('change', () =>
      this.handleUpdate('stern_tube_diameter')
    );

    resetBtn.addEventListener('click', () => this.resetForm());
  }

  updateCompletionIndicator(field) {
    const stepMap = {
      shaft_diameter_metric: 1,
      shaft_diameter: 2,
      stern_tube_diameter: 3
    };

    const currentStep = stepMap[field];
    const allSteps = Array.from(this.shadowRoot.querySelectorAll('.form-label span'));

    allSteps.forEach(span => {
      const stepNumber = parseInt(span.textContent.trim(), 10);

      if (stepNumber === currentStep) {
        span.classList.add('completed');
      } else if (stepNumber > currentStep) {
        span.classList.remove('completed');
      }
    });
  }

  resetDependentFields() {
    const shaftSelect = this.shadowRoot.querySelector('select[name="shaft_diameter"]');
    const sternSelect = this.shadowRoot.querySelector('select[name="stern_tube_diameter"]');

    shaftSelect.innerHTML = '<option value="">Select Your Shaft Diameter</option>';
    sternSelect.innerHTML = '<option value="">Select Stern Tube Diameter</option>';

    shaftSelect.disabled = true;
    sternSelect.disabled = true;

    this.shadowRoot.querySelector('.results').innerHTML = '';
    this.shadowRoot.querySelector('.results').classList.add('none');
  }

  clearSternTubeSelection() {
    const sternSelect = this.shadowRoot.querySelector('select[name="stern_tube_diameter"]');
    sternSelect.innerHTML = '<option value="">Select Stern Tube Diameter</option>';
    sternSelect.disabled = true;
    this.shadowRoot.querySelector('.results').innerHTML = '';
    this.shadowRoot.querySelector('.results').classList.add('none');
  }

  async handleUpdate(field) {
    const form = this.shadowRoot.getElementById('productForm');
    const formData = new FormData(form);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (value) params.append(key, value);
    }

    try {
      const response = await fetch(`${this.url}?${params.toString()}`);
      const products = await response.json();

      if (field === 'shaft_diameter_metric') {
        this.updateShaftDiameterOptions(products);
      } else if (field === 'shaft_diameter') {
        this.updateSternTubeDiameterOptions(products);
      } else if (field === 'stern_tube_diameter') {
        this.displayProducts(products);
      }

      this.shadowRoot.getElementById('resetBtn').style.display = 'block';
      this.updateCompletionIndicator(field);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  updateShaftDiameterOptions(products) {
    const select = this.shadowRoot.querySelector('select[name="shaft_diameter"]');
    const uniqueDiameters = [...new Set(products.map(p => p.shaft_diameter_per_mill))];

    select.innerHTML = `
      <option value="">Select Your Shaft Diameter</option>
      ${uniqueDiameters.map(value => `
        <option value="${value}">
          ${products.find(p => p.shaft_diameter_per_mill === value).shaft_diameter}
        </option>
      `).join('')}
    `;

    select.disabled = false;
    this.shadowRoot.querySelector('select[name="stern_tube_diameter"]').disabled = true;
    this.shadowRoot.querySelector('.results').innerHTML = '';
    this.shadowRoot.querySelector('.results').classList.add('none');
  }

  updateSternTubeDiameterOptions(products) {
    const select = this.shadowRoot.querySelector('select[name="stern_tube_diameter"]');
    const uniqueDiameters = [...new Set(products.map(p => p.stern_tube_diameter_per_mill))];

    select.innerHTML = `
      <option value="">Select Stern Tube Diameter</option>
      ${uniqueDiameters.map(value => `
        <option value="${value}">
          ${products.find(p => p.stern_tube_diameter_per_mill === value).stern_tube_diameter}
        </option>
      `).join('')}
    `;

    select.disabled = false;
    this.shadowRoot.querySelector('.results').innerHTML = '';
    this.shadowRoot.querySelector('.results').classList.add('none');
  }

  displayProducts(products) {
    const resultsDiv = this.shadowRoot.querySelector('.results');

    if (products.length === 0) {
      resultsDiv.innerHTML = '<p>No products found</p>';
      return;
    }

    const product = products[0];
    const links = [];

    if (product.type_a_part_shopify_url) {
      links.push(`
        <a href="${product.type_a_part_shopify_url}"
           title="Order this PSS Shaft Seal Product on our shopify store"
           class="product-btn"
           rel="noopener noreferrer"
           target="_blank">
          <span class="block btn-info">PSS Shaft Seal:</span>
          ${product.type_a_part_number}
        </a>
      `);
    }

    if (product.type_a_maintenance_kit_shopify_url) {
      links.push(`
        <a href="${product.type_a_maintenance_kit_shopify_url}"
           title="Order this PSS Maintenance Kit on our Shopify store"
           class="product-btn"
           rel="noopener noreferrer"
           target="_blank">
          <span class="block btn-info">PSS Maintenance Kit:</span>
          ${product.type_a_maintenance_kit_part_number}
        </a>
      `);
    }

    if (product.pro_part_shopify_url) {
      links.push(`
        <a href="${product.pro_part_shopify_url}"
           title="Order this PSS PRO Shaft Seal Product on our Shopify store"
           class="product-btn"
           rel="noopener noreferrer"
           target="_blank">
          <span class="block btn-info">PSS PRO Shaft Seal:</span>
          ${product.pro_part_number}
        </a>
      `);
    }

    if (product.pro_maintenance_kit_shopify_url) {
      links.push(`
        <a href="${product.pro_maintenance_kit_shopify_url}"
           title="Order this PSS PRO Maintenance Kit on our Shopify store"
           class="product-btn"
           rel="noopener noreferrer"
           target="_blank">
          <span class="block btn-info">PSS PRO Maintenance Kit:</span>
          ${product.pro_maintenance_kit_part_number}
        </a>
      `);
    }
    const linkCount = links.length;

    resultsDiv.innerHTML = `
      <div class="form-label">
        <span>4</span> Browse Available Parts
      </div>
      <div class="results-grid results${linkCount}">${links.join('')}</div>
    `;
    this.shadowRoot.querySelector('.results').classList.remove('none');
  }

  resetForm() {
    const form = this.shadowRoot.getElementById('productForm');
    form.reset();

    this.shadowRoot.querySelector('select[name="shaft_diameter"]').disabled = true;
    this.shadowRoot.querySelector('select[name="stern_tube_diameter"]').disabled = true;
    this.shadowRoot.querySelector('.results').innerHTML = '';
    this.shadowRoot.querySelector('.results').classList.add('none');
    this.shadowRoot.getElementById('resetBtn').style.display = 'none';

    this.shadowRoot.querySelectorAll('.form-label span.completed').forEach(span => {
      span.classList.remove('completed');
    });
  }
}

customElements.define('product-search-form', ProductSearchForm);