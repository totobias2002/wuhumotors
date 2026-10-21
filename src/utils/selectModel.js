// Avisa a la seccion de modelos que muestre un modelo y baja hasta ella.
export const SELECT_MODEL_EVENT = 'wuhu:select-model';

export function selectModel(id) {
  window.dispatchEvent(new CustomEvent(SELECT_MODEL_EVENT, { detail: { id } }));
  // Con el menu movil abierto el body esta congelado (position:fixed); al cerrarse se restaura el
  // scroll en el siguiente render, asi que se espera un instante antes de bajar.
  setTimeout(() => {
    document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 90);
}
