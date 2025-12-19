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
***Figure 1: Projected prevalence of Alzheimer’s disease in the United States by age group.**
The number of people living with Alzheimer’s disease is expected to rise sharply over the coming decades, driven primarily by population aging. Source: Alzheimer’s Association, 2020 Alzheimer's disease facts and figures - [link](https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12068).*

At the biological level, Alzheimer’s disease is not the result of a single malfunction. Although amyloid plaques and tau tangles are its most recognizable features, the disease unfolds through widespread changes in the brain’s cellular ecosystem. Neurons, glial cells, and immune cells do not simply degenerate or activate in isolation: their abundance shifts, their molecular programs are altered, and their spatial relationships within tissue are reorganized. Together, these changes shape how the disease emerges, propagates, and ultimately disrupts brain function.

Because access to living human brain tissue is inherently limited, much of our understanding of these processes comes from animal models. Over the years, a wide range of mouse models has been developed to study Alzheimer’s disease, each designed to capture specific aspects of pathology, such as amyloid accumulation, tau-related changes, or neuroinflammatory responses. Mouse models such as TgCRND8 have been instrumental in dissecting amyloid-driven mechanisms and testing therapeutic hypotheses. At the same time, mouse and human brains differ in key ways, such as their cellular composition, transcriptional regulation, and tissue organization, meaning that not all disease features observed in mice translate directly to human patients.

This diversity of models highlights an important point: Alzheimer’s disease cannot be reduced to a single biological readout, and no model is expected to reproduce all of its facets simultaneously. Rather than treating model validity as an all-or-nothing concept, a more informative question is which dimensions of the disease a given model captures, and which it does not. In this project, we adopt this perspective by comparing TgCRND8 mouse and human Alzheimer’s brain across three complementary scales: cellular composition and activation, transcriptional programs within cell types, and local spatial organization, using spatial transcriptomics to identify both points of convergence and sources of divergence.
![Analysis layers]({{ site.baseurl }}/assets/figures/01_2_analysis_layers.png)
***Figure 2: Multiscale framework for evaluating mouse model relevance in Alzheimer’s disease.**
Alzheimer’s disease affects the brain across multiple biological scales, from cellular composition to gene regulation and spatial organization. We assess the relevance of the TgCRND8 mouse model by comparing mouse and human Alzheimer’s brains independently at each of these scales.*

---

## 2. The data: matched spatial transcriptomics across species
<a id="data"></a>

To investigate Alzheimer’s disease across cellular, molecular, and spatial dimensions, we rely on spatial transcriptomics, a technology that measures gene expression directly in intact tissue while preserving spatial context. This approach makes it possible to identify cell types, quantify their transcriptional states, and examine how cells are organized relative to one another, all within the same tissue section.
![Dataset Overview]({{ site.baseurl }}/assets/figures/02_1_dataset.png)
***Figure 3: Overview of spatial transcriptomics datasets analyzed in this study.**
One wild-type mouse (13.4 months), one TgCRND8 mouse (17.9 months), one human Alzheimer’s disease sample, and one healthy human control were profiled using the Xenium In Situ gene expression platform. All analyses focus on cortical tissue.*
  
For the mouse data, we focus on the TgCRND8 model of Alzheimer’s disease, a widely used transgenic model carrying human APP with the Swedish (KM670/671NL) and Indiana (V717F) mutations. These mutations drive early and robust amyloid pathology, making TgCRND8 a popular model for studying amyloid-related mechanisms in Alzheimer’s disease. One TgCRND8 mouse (17.9 months) was compared to one wild-type control (13.4 months).

Human data consist of post-mortem cortical tissue sections from one individual diagnosed with Alzheimer’s disease and one neurologically healthy control, obtained from the Human Xenium Brain dataset provided by 10x Genomics. While limited in sample number, these data provide high-resolution spatial transcriptomic measurements that enable a detailed comparison of disease-associated cellular, molecular, and spatial features within human cortex.

Both mouse and human samples were generated using the Xenium In Situ gene expression platform, which profiles a targeted panel of genes selected to capture major cell types and disease-relevant biological pathways. Using the same spatial transcriptomics technology across species ensures comparable data structure, quality metrics, and spatial resolution, forming a solid foundation for meaningful cross-species comparison.

---

## 3. Making mouse and human data comparable
<a id="harmonization"></a>

Comparing Alzheimer’s disease across species is inherently challenging. Mouse and human brains differ not only biologically, but also in how data are generated, annotated, and spatially sampled. Without careful alignment, apparent differences could reflect technical artifacts rather than genuine disease-related effects. A central goal of this project was therefore to transform heterogeneous Xenium outputs into a common, analysis-ready representation that supports meaningful cross-species comparison.

### Quality control and reliable cell selection
Spatial transcriptomics data combine molecular, spatial, and morphological information at single-cell resolution. However, not all segmented cells provide equally reliable measurements. To ensure that downstream analyses were driven by biologically meaningful signal, we first assessed data quality at the level of individual cells.
Using cell-level metrics such as transcript counts, number of detected genes, cell and nuclear areas, and background signal from negative controls, we identified and removed low-confidence or poorly segmented cells. Rather than targeting subtle differences within the bulk of the data, this step primarily removed clear outliers. Transcripts were retained only if they belonged to high-quality cells, ensuring consistency between quality control and the resulting expression matrices.
As a result, quality control improved data reliability while preserving the core transcriptional structure of each sample.

<iframe
  src="{{ site.baseurl }}/assets/plotly/qc_overview_prepost.html"
  width="100%"
  height="560"
  style="border:0; border-radius:12px;"
  loading="lazy">
</iframe>

***Figure 4: Effect of quality control filtering across mouse and human Xenium samples.**
Quality control removes low-confidence cells while preserving the majority of transcriptomic signal across all samples. Comparable retention patterns between mouse and human data indicate that filtering improves data consistency without distorting biological content.*

### Harmonizing cell types across species
Even after quality control, direct comparison between mouse and human data is complicated by differences in cell-type annotation. Mouse cell types were provided with relatively fine granularity, whereas human cell types were inferred computationally using Harmony-based integration. These annotation schemes do not align one-to-one. To overcome this mismatch, we defined a shared broad cell-class taxonomy that captures major cortical populations common to both species, including excitatory and inhibitory neurons, astrocytes, oligodendrocyte–OPC lineage cells, and immune/microglia. By performing all cross-species comparisons at this level, we preserve biological interpretability while ensuring that mouse and human cell populations are directly comparable.

### Aligning anatomical scope
An additional challenge arises from differences in spatial coverage. Human Xenium samples consist of localized cortical tissue sections, whereas mouse samples span an entire brain hemisphere and include both cortical and non-cortical regions. Without correction, this discrepancy would introduce a strong anatomical bias.
To establish a common spatial basis for comparison, analyses were restricted to the cortex in both species. In mouse samples, a cortex mask was manually defined based on tissue morphology and spatial context, and only cells located within this region were retained. Within the cortex, analyses focused on neuronal, glial, and immune populations, which are most relevant to Alzheimer’s disease pathology. Human samples were already restricted to cortical tissue by design.
This step ensures that observed differences reflect disease and species effects rather than gross anatomical mismatches.

<iframe
  src="{{ site.baseurl }}/assets/plotly/cortex.html"
  width="100%"
  height="560"
  style="border:0; border-radius:12px;"
  loading="lazy">
</iframe>

***Figure 5: Cortex restriction of mouse spatial transcriptomics data.**
Cell locations are shown before and after applying a cortex mask to the mouse Xenium sample. Excluding non-cortical regions aligns the anatomical scope of mouse data with human cortical tissue, enabling meaningful cross-species comparison.*

### Building standardized expression matrices
Following quality control, cell-type harmonization, and cortical restriction, we constructed standardized cell × gene expression matrices for each subject and species. To reduce noise from extremely sparse genes, filtering was applied consistently at the species level and propagated to all subject-level matrices. Expression values were then normalized using counts per million followed by log transformation.
For each species, multiple versions of the matrices were retained (raw, QC-filtered, and QC-filtered normalized) allowing the same harmonized data foundation to be reused consistently across all downstream analyses.
Together, these steps produce a unified representation of mouse and human spatial transcriptomics data, enabling transparent and reproducible comparison of cellular composition, transcriptional programs, and spatial organization in Alzheimer’s disease.

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
