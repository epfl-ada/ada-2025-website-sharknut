----
layout : default
----
## Making mouse and human data comparable
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

