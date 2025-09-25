const sel = document.getElementById('version');
const container = '#vis';
const actions = { export: true, source: true, compiled: true, editor: true };

async function render(specUrl) {
  try {
    console.log('Embedding spec:', specUrl);
    await vegaEmbed(container, specUrl, { actions });
  } catch (e) {
    console.error('Embed error:', e);
    document.querySelector(container).innerHTML =
      '<pre style="color:#c00;white-space:pre-wrap">' + String(e) + '</pre>';
  }
}

document.addEventListener('DOMContentLoaded', () => render(sel.value));
sel.addEventListener('change', () => render(sel.value));
