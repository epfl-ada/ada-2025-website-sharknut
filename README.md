---
layout: default
title: Cross-species analysis of Alzheimer’s pathology
---

# Cross-species analysis of Alzheimer’s pathology
**ADA 2025 — EPFL**  
**Team:** Sharknut  
**Project focus:** Assessing the relevance of the TgCRND8 mouse model for Alzheimer’s disease using Xenium spatial transcriptomics.

---

## Motivation
Alzheimer’s disease (AD) is a complex neurodegenerative disorder whose molecular mechanisms remain only partially understood. Mouse models are widely used to study AD pathology, yet their relevance for human disease—particularly at the level of cell-type-specific transcriptional programs—remains an open question.

Recent advances in spatial transcriptomics, such as 10x Genomics Xenium, enable high-resolution, in situ profiling of gene expression across intact tissue sections. This provides a unique opportunity to directly compare disease-associated transcriptional changes across species within a shared anatomical context.

In this project, we investigate to what extent the TgCRND8 mouse model recapitulates human AD-related transcriptional alterations in the cortex.

---

## Data
We analyze two Xenium spatial transcriptomics datasets:

- **Mouse:** TgCRND8 (AD model) vs WT mice at multiple ages  
- **Human:** Alzheimer’s disease vs healthy control cortical samples  

For each dataset, we use:
- Cell segmentation and cell-type annotations
- A predefined gene panel shared across samples
- Spatially resolved gene expression at single-cell resolution

Only cortical cells are retained for downstream analyses.

---

## Research questions
- **RQ1:** How do cell-type compositions differ between disease and control conditions across species?
- **RQ2:** To what extent are disease-associated transcriptional programs conserved between mouse and human cortical cell types?

This website focuses primarily on **RQ2**.

---

## Methods overview
At a high level, our analysis pipeline includes:
- Quality control and gene filtering based on expression prevalence
- Cell-class stratification into major neuronal and glial populations
- Differential expression analysis within each species and cell class
- Pathway enrichment analysis of up- and down-regulated genes
- Cross-species comparison of transcriptional signals at gene and pathway levels

Detailed implementation is available in the project repository.

---

# RQ2 — Cross-species transcriptional convergence

### What does “convergence” mean?
We define cross-species convergence as the presence of transcriptional changes that are:
- Associated with disease status in both species
- Observed within the same broad cell class
- Directionally consistent (up- or down-regulated)

We assess convergence at both the **gene level** and the **pathway level**.

---

## RQ2.1 — Gene filtering and differential expression context
Before comparing transcriptional signals across species, it is essential to contextualize:
- How many genes pass expression filters in each species
- How many of these genes are identified as differentially expressed (DE)

This step determines the depth and sensitivity of downstream pathway analyses.

<!-- FIGURE: gene filtering + DE context -->

*Figure X: Fraction of genes retained after filtering and number of differentially expressed genes across species and cell classes.*

**Key observation:**  
*(1–2 sentences summarizing the main pattern you observe here.)*

---

## RQ2.2 — Pathway-level overlap across species
To move beyond individual genes, we perform pathway enrichment analysis separately in mouse and human for each cell class.

We then quantify cross-species overlap between enriched pathways, accounting for differences in enrichment depth across species.

<!-- FIGURE: pathway overlap / similarity -->

*Figure X: Cross-species pathway overlap across cell classes.*

**Key observation:**  
*(1–2 sentences summarizing glial vs neuronal patterns, or convergence vs divergence.)*

---

## RQ2.3 — Concordant genes and Alzheimer’s relevance
At the gene level, we examine which differentially expressed genes are:
- Shared between species
- Directionally concordant
- Associated with Alzheimer’s disease

Particular attention is given to genes with known AD relevance.

<!-- FIGURE: concordance scatter / APOE highlight -->

*Figure X: Gene-level concordance between mouse and human.*

**Key observation:**  
*(1–2 sentences highlighting scarcity of concordant genes and any standout examples.)*

---

## RQ2 wrap-up
Across cortical cell classes, we observe:
- Limited gene-level concordance between mouse and human
- Stronger alignment at the pathway level, particularly in glial populations
- Marked differences between neuronal and non-neuronal cell classes

Together, these results suggest that while the TgCRND8 model captures certain higher-level disease-associated processes, substantial species-specific regulation persists.

---

## Limitations
Several limitations should be considered:
- The analysis is restricted to a predefined Xenium gene panel
- Differential expression yield differs markedly between species
- Human and mouse samples differ in age structure and disease progression
- Cell-type annotations may not be perfectly aligned across species

---

## Key takeaways
- Cross-species transcriptional convergence in AD is limited at the gene level
- Pathway-level signals reveal partial conservation, especially in glial cells
- Neuronal populations show weaker cross-species alignment
- The TgCRND8 model captures aspects of AD biology but does not fully recapitulate human disease
