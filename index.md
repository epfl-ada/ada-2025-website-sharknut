---
layout: default
title: "Cross-species spatial transcriptomics of Alzheimer’s disease"
---

# Cross-species spatial transcriptomics reveals partial convergence of Alzheimer’s pathology

*A data-driven evaluation of the TgCRND8 mouse model using Xenium In Situ gene expression.*

---

## 1. Why model relevance matters in Alzheimer’s disease
<a id="why-models"></a>
Alzheimer’s disease (AD) is the most common cause of dementia worldwide, characterized by progressive memory loss, cognitive decline, and behavioral changes that ultimately impair daily life. Today, tens of millions of people live with the disease, and this number is expected to rise sharply as populations age. Beyond the personal and emotional toll on patients and families, Alzheimer’s represents a growing public health challenge, with enormous social and economic consequences. Yet despite decades of research, there is still no cure, and disease-modifying treatments remain limited.
![AD prevalence]({{ site.baseurl }}/assets/figures/01_1_AD_prevalence.png)
*Figure 1: **Projected prevalence of Alzheimer’s disease in the United States by age group.**
The number of people living with Alzheimer’s disease is expected to rise sharply over the coming decades, driven primarily by population aging. Source: Alzheimer’s Association, 2020 Alzheimer's disease facts and figures - [link](https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12068).*

At the biological level, Alzheimer’s disease is not the result of a single malfunction. Although amyloid plaques and tau tangles are its most recognizable features, the disease unfolds through widespread changes in the brain’s cellular ecosystem. Neurons, glial cells, and immune cells do not simply degenerate or activate in isolation: their abundance shifts, their molecular programs are altered, and their spatial relationships within tissue are reorganized. Together, these changes shape how the disease emerges, propagates, and ultimately disrupts brain function.

Because access to living human brain tissue is inherently limited, much of our understanding of these processes comes from animal models. Over the years, a wide range of mouse models has been developed to study Alzheimer’s disease, each designed to capture specific aspects of pathology, such as amyloid accumulation, tau-related changes, or neuroinflammatory responses. Mouse models such as TgCRND8 have been instrumental in dissecting amyloid-driven mechanisms and testing therapeutic hypotheses. At the same time, mouse and human brains differ in key ways, such as their cellular composition, transcriptional regulation, and tissue organization, meaning that not all disease features observed in mice translate directly to human patients.

This diversity of models highlights an important point: Alzheimer’s disease cannot be reduced to a single biological readout, and no model is expected to reproduce all of its facets simultaneously. Rather than treating model validity as an all-or-nothing concept, a more informative question is which dimensions of the disease a given model captures, and which it does not. In this project, we adopt this perspective by comparing TgCRND8 mouse and human Alzheimer’s brain across three complementary scales: cellular composition and activation, transcriptional programs within cell types, and local spatial organization, using spatial transcriptomics to identify both points of convergence and sources of divergence.
![Analysis layers]({{ site.baseurl }}/assets/figures/01_2_analysis_layers.png)
*Figure 2: **Multiscale framework for evaluating mouse model relevance in Alzheimer’s disease.**
Alzheimer’s disease affects the brain across multiple biological scales, from cellular composition to gene regulation and spatial organization. We assess the relevance of the TgCRND8 mouse model by comparing mouse and human Alzheimer’s brains independently at each of these scales.*

---

## 2. The data: matched spatial transcriptomics across species
<a id="data"></a>

**Goal:** Establish credibility and comparability

Text:
- Xenium In Situ gene expression
- TgCRND8 vs WT mice
- AD vs healthy human cortex
- Same technology, comparable output structure

**Visuals**
- Sample overview grid
- Representative Xenium images (mouse & human)

---

## 3. Making mouse and human comparable
<a id="harmonization"></a>

**Goal:** Shared analytical foundation for all RQs

Text:
- Cortex masking to align anatomy
- Broad cell-class taxonomy shared across species
- Human cell labels inferred; mouse labels curated
- One-to-one human–mouse ortholog mapping

**Visuals**
- Cortex mask overlay (before / after)
- Cell-class composition barplots (mouse vs human)

---

# Research Question 1 — Cellular composition and activation
<a id="rq1"></a>

## 4. How does Alzheimer’s disease reshape cortical cell populations?

**Goal:** RQ1 main result

Text:
- Changes in abundance of major cell classes
- Evidence of disease-related activation
- Mouse vs human comparison

**Visuals**
- Stacked barplots of cell-type proportions
- Activation marker expression plots

**Takeaway (1–2 lines, bold)**
> Alzheimer’s disease alters cortical cellular composition in both species, with partially conserved but species-specific patterns.

---

# Research Question 2 — Transcriptional programs within cell types
<a id="rq2"></a>

## 5. Disease-related transcriptional changes differ strongly by species

**Goal:** Set up DE asymmetry

Text:
- DE performed independently per species
- Human shows much stronger transcriptional perturbation
- Cell-type-specific variation (e.g. OPC lineage)

**Visuals**
- DE gene count barplots by cell class
- Volcano plot examples (mouse vs human)

---

## 6. From genes to pathways: assessing biological convergence

**Goal:** Pathway-level insight

Text:
- Motivation for pathway analysis
- Enrichment performed within each species
- Size-normalized overlap used for comparison

**Visuals**
- Pathway overlap dot plots
- Heatmaps of enriched pathways by cell class

**Takeaway**
> Some biological programs converge across species despite strong gene-level divergence.

---

## 7. Alzheimer’s disease genes in context: the case of APOE

**Goal:** Anchor biology

Text:
- Role of APOE in AD
- Astrocyte-specific regulation
- Stronger effect in human

**Visuals**
- APOE expression maps
- Cross-species logFC comparison

**Takeaway**
> Conserved regulation of APOE highlights selective molecular overlap between TgCRND8 and human AD.

---

# Research Question 3 — Local spatial organization
<a id="rq3"></a>

## 8. Does Alzheimer’s disease reshape local cellular micro-architecture?

**Goal:** RQ3 main result

Text:
- Definition of local neighborhoods
- Cell–cell proximity and spatial interactions
- Mouse vs human comparison

**Visuals**
- Spatial interaction maps
- Distance / neighborhood enrichment plots

**Takeaway**
> Alzheimer’s disease alters local cellular organization, with only partial spatial conservation across species.

---

## 9. Integrative assessment of TgCRND8 model relevance
<a id="integration"></a>

**Goal:** Bring the three RQs together

Text:
- One short paragraph per RQ
- Emphasize partial, scale-dependent relevance
- Highlight translational implications

**Visuals**
- Summary matrix (RQ × conserved / divergent)
- Final schematic overview

---

## 10. Take-home messages
<a id="take-home"></a>

**Bulleted summary**
- Cross-species relevance depends on biological scale
- Transcriptional and spatial signals are stronger in human AD
- TgCRND8 captures selected but not all AD hallmarks

Links:
- 📓 Analysis notebook
- 💻 GitHub repository

---
