class ToggleButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>
            .show {
                display: block
            }

            .hide {
                display: none
            }
        </style>
        
        <div>
            <button>SHOW</button>
            <p><slot>This is default toggleable text</slot></p>
        </div>
    `;
  }

  connectedCallback() {
    const show = this.getAttribute("show");
    const p = this.shadowRoot.querySelector("p");
    const button = this.shadowRoot.querySelector("button");

    button.addEventListener("click", evt => {
      const text = button.innerHTML;

      if (text === "SHOW") {
        p.className = "show";
        button.innerHTML = "HIDE";
      } else if (text === "HIDE") {
        p.className = "hide";
        button.innerHTML = "SHOW";
      }
    });

    if (show === "true") {
      p.className = "show";
      button.innerHTML = "HIDE";
    } else {
      p.className = "hide";
      button.innerHTML = "SHOW";
    }
  }
}

customElements.define("toggle-button", ToggleButton);
