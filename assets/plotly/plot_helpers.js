const CLASS_COLORS = {
  "Astrocytes": "#2A9D8F",
  "Excitatory Neurons": "#E76F51",
  "Inhibitory Neurons": "#577590",
  "OPC-Oligo": "#F4A261",
  "Immune/Microglia": "#B56576",
  "Vascular": "#264653",
  "Other": "#8D99AE",
  "Unassigned": "#B7B7B7",
};

const SPECIES_COLORS = {
  human: "#2A9D8F",
  mouse: "#E76F51",
};

const PLOTLY_CONFIG = {
  displayModeBar: false,
  responsive: true,
};

function parseDelimited(text, delimiter) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  const headers = lines.shift().split(delimiter);
  return lines.map((line) => {
    const values = line.split(delimiter);
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = values[idx] ?? "";
    });
    return obj;
  });
}

function loadDelimited(path, delimiter) {
  return fetch(path)
    .then((res) => res.text())
    .then((text) => parseDelimited(text, delimiter));
}

function asNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function getOrCreate(map, key, createValue) {
  if (!map[key]) {
    map[key] = createValue();
  }
  return map[key];
}
