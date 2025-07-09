import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class EspeCourseCard extends LitElement {
  static styles = css`
  :host {
    display: block;
    font-family: 'Arial', 'Roboto', sans-serif;
    --card-bg: white;
    --muted-text: #666;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--card-bg);
    color: var(--text-color);
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    width: 280px;
  }

  .image-placeholder {
    background-color: #bbb;
    height: 150px;
    position: relative;
  }

  .options-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  }

  .content {
    padding: 16px;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .badge {
    font-size: 0.8rem;
    padding: 2px 8px;
    border-radius: 12px;
    border: 1px solid;
  }

  /* Colores para el badge de progreso */
  .badge.yellow {
    background-color: #ffc107;
    color: #333;
    border-color: #ffc107;
  }

  .badge.green {
    background-color: #28a745;
    color: white;
    border-color: #28a745;
  }

  .badge.red {
    background-color: #dc3545;
    color: white;
    border-color: #dc3545;
  }


  .description {
    font-size: 0.9rem;
    color: var(--muted-text);
    margin: 10px 0;
  }

  .progress-bar {
    height: 4px;
    border-radius: 4px;
    margin: 6px 0 12px;
    position: relative;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 4px;
  }

  .button-area {
    border-top: 1px solid var(--border-color);
    text-align: center;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 0;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.9rem;
    gap: 6px;
  }

  /* Colores para los botones */
  .btn.yellow {
    background-color: #ffc107;
    color: #333;
  }

  .btn.green {
    background-color: #28a745;
    color: white;
  }
`;


  @property({ type: String }) title = 'Programación';
  @property({ type: String }) description = 'Diseño e implementación de algoritmos';
  @property({ type: Number }) progress = 40;
  @property({ type: String }) buttonTheme: 'green' | 'yellow' = 'green';
  @property({ type: String }) imageUrl = '';


  render() {
    const btnClass = this.buttonTheme === 'yellow' ? 'btn yellow' : 'btn green';

    return html`
      <div class="card">
        <div class="image-placeholder">
            ${this.imageUrl
            ? html`<img src="${this.imageUrl}" alt="Imagen del curso" class="card-image" />`
            : ''}
          <div class="options-btn">⋮</div>
        </div>
        <div class="content">
          <div class="title-row">
            <span class="title">${this.title}</span>
            <span class="badge ${this.progressColor}">${this.progress} %</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${this.progress}%; background-color: ${fillColor};"></div>
          </div>
          <div class="description">${this.description}</div>
        </div>
        <div class="button-area">
          <button class="${btnClass}">
            Ver detalles 👁
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('espe-course-card', EspeCourseCard);