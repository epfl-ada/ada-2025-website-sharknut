# How Well Does a Mouse Model Capture Human Alzheimer’s Disease?

*A data-driven evaluation of the TgCRND8 mouse model using Xenium In Situ gene expression.*

---

## Introduction

### **Why model relevance matters in Alzheimer’s disease**

Alzheimer’s disease (AD) is the most common cause of dementia worldwide, characterized by progressive memory loss, cognitive decline, and behavioral changes that ultimately impair daily life. Today, tens of millions of people live with the disease, and this number is expected to rise sharply as populations age. Beyond the personal and emotional toll on patients and families, Alzheimer’s represents a growing public health challenge, with enormous social and economic consequences. Yet despite decades of research, there is still no cure, and disease-modifying treatments remain limited.

![***Figure 1: Projected prevalence of Alzheimer’s disease in the United States by age group.** The number of people living with Alzheimer’s disease is expected to rise sharply over the coming decades, driven primarily by population aging. Source: Alzheimer’s Association, 2020 Alzheimer’s disease facts and figures - [link](https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12068).*](How%20Well%20Does%20a%20Mouse%20Model%20Capture%20Human%20Alzheime/image.png)

***Figure 1: Projected prevalence of Alzheimer’s disease in the United States by age group.** The number of people living with Alzheimer’s disease is expected to rise sharply over the coming decades, driven primarily by population aging. Source: Alzheimer’s Association, 2020 Alzheimer’s disease facts and figures - [link](https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12068).*

At the biological level, Alzheimer’s disease is not the result of a single malfunction. Although amyloid plaques and tau tangles are its most recognizable features, the disease unfolds through widespread changes in the brain’s cellular ecosystem. Neurons, glial cells, and immune cells do not simply degenerate or activate in isolation: their abundance shifts, their molecular programs are altered, and their spatial relationships within tissue are reorganized. Together, these changes shape how the disease emerges, propagates, and ultimately disrupts brain function.

Because access to living human brain tissue is inherently limited, much of our understanding of these processes comes from animal models. Over the years, a wide range of mouse models has been developed to study Alzheimer’s disease, each designed to capture specific aspects of pathology, such as amyloid accumulation, tau-related changes, or neuroinflammatory responses. Mouse models such as TgCRND8 have been instrumental in dissecting amyloid-driven mechanisms and testing therapeutic hypotheses. At the same time, mouse and human brains differ in key ways, such as their cellular composition, transcriptional regulation, and tissue organization, meaning that not all disease features observed in mice translate directly to human patients.

This diversity of models highlights an important point: Alzheimer’s disease cannot be reduced to a single biological readout, and no model is expected to reproduce all of its facets simultaneously. Rather than treating model validity as an all-or-nothing concept, a more informative question is which dimensions of the disease a given model captures, and which it does not. In this project, we adopt this perspective by comparing TgCRND8 mouse and human Alzheimer’s brain across three complementary scales: cellular composition and activation, transcriptional programs within cell types, and local spatial organization, using spatial transcriptomics to identify both points of convergence and sources of divergence.

![***Figure 2: Multiscale framework for evaluating mouse model relevance in Alzheimer’s disease.** Alzheimer’s disease affects the brain across multiple biological scales, from cellular composition to gene regulation and spatial organization. We assess the relevance of the TgCRND8 mouse model by comparing mouse and human Alzheimer’s brains independently at each of these scales.*](How%20Well%20Does%20a%20Mouse%20Model%20Capture%20Human%20Alzheime/image%201.png)

***Figure 2: Multiscale framework for evaluating mouse model relevance in Alzheimer’s disease.** Alzheimer’s disease affects the brain across multiple biological scales, from cellular composition to gene regulation and spatial organization. We assess the relevance of the TgCRND8 mouse model by comparing mouse and human Alzheimer’s brains independently at each of these scales.*

---

### **The data: matched spatial transcriptomics across species**

To investigate Alzheimer’s disease across cellular, molecular, and spatial dimensions, we rely on spatial transcriptomics, a technology that measures gene expression directly in intact tissue while preserving spatial context. This approach makes it possible to identify cell types, quantify their transcriptional states, and examine how cells are organized relative to one another, all within the same tissue section. 

![***Figure 3: Overview of spatial transcriptomics datasets analyzed in this study.** One wild-type mouse (13.4 months), one TgCRND8 mouse (17.9 months), one human Alzheimer’s disease sample, and one healthy human control were profiled using the Xenium In Situ gene expression platform. All analyses focus on cortical tissue.*](How%20Well%20Does%20a%20Mouse%20Model%20Capture%20Human%20Alzheime/image%202.png)

***Figure 3: Overview of spatial transcriptomics datasets analyzed in this study.** One wild-type mouse (13.4 months), one TgCRND8 mouse (17.9 months), one human Alzheimer’s disease sample, and one healthy human control were profiled using the Xenium In Situ gene expression platform. All analyses focus on cortical tissue.*

For the mouse data, we focus on the TgCRND8 model of Alzheimer’s disease, a widely used transgenic model carrying human APP with the Swedish (KM670/671NL) and Indiana (V717F) mutations. These mutations drive early and robust amyloid pathology, making TgCRND8 a popular model for studying amyloid-related mechanisms in Alzheimer’s disease. One TgCRND8 mouse (17.9 months) was compared to one wild-type control (13.4 months).

Human data consist of post-mortem cortical tissue sections from one individual diagnosed with Alzheimer’s disease and one neurologically healthy control, obtained from the Human Xenium Brain dataset provided by 10x Genomics. While limited in sample number, these data provide high-resolution spatial transcriptomic measurements that enable a detailed comparison of disease-associated cellular, molecular, and spatial features within human cortex.

Both mouse and human samples were generated using the Xenium In Situ gene expression platform, which profiles a targeted panel of genes selected to capture major cell types and disease-relevant biological pathways. Using the same spatial transcriptomics technology across species ensures a shared data structure, comparable quality metrics, and similar spatial resolution. This provides a necessary technical foundation for cross-species analysis.

---

### **Making mouse and human data comparable**

Despite this shared technological framework, meaningful comparison between mouse and human Alzheimer’s disease remains challenging. Differences in brain anatomy, cell-type annotation strategies, and spatial sampling mean that raw Xenium outputs are not directly comparable across species. Without additional alignment steps, observed differences could reflect biological context or sampling bias rather than disease-related effects.

A central goal of this project was therefore to move beyond technical compatibility and construct a biologically aligned, analysis-ready representation of the data. This required careful quality control, harmonization of cell-type definitions, and restriction to comparable anatomical regions, ensuring that downstream comparisons reflect genuine cross-species similarities and differences in Alzheimer’s pathology.

**Quality control and reliable cell selection**

Spatial transcriptomics data combine molecular, spatial, and morphological information at single-cell resolution. However, not all segmented cells provide equally reliable measurements. To ensure that downstream analyses were driven by biologically meaningful signal, we first assessed data quality at the level of individual cells. Using cell-level metrics such as transcript counts, number of detected genes, cell and nuclear areas, and background signal from negative controls, we identified and removed low-confidence or poorly segmented cells. Rather than targeting subtle differences within the bulk of the data, this step primarily removed clear outliers. Transcripts were retained only if they belonged to high-quality cells, ensuring consistency between quality control and the resulting expression matrices. As a result, quality control improved data reliability while preserving the core transcriptional structure of each sample. 

[***Figure 4: Effect of quality control filtering across mouse and human Xenium samples.** Quality control removes low-confidence cells while preserving the majority of transcriptomic signal across all samples. Comparable retention patterns between mouse and human data indicate that filtering improves data consistency without distorting biological content.*](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/qc_overview_prepost.html)

***Figure 4: Effect of quality control filtering across mouse and human Xenium samples.** Quality control removes low-confidence cells while preserving the majority of transcriptomic signal across all samples. Comparable retention patterns between mouse and human data indicate that filtering improves data consistency without distorting biological content.*

**Harmonizing cell types across species**

Even after quality control, direct comparison between mouse and human data is complicated by differences in cell-type annotation. Mouse cell types were provided with relatively fine granularity, whereas human cell types were inferred computationally using Harmony-based integration. These annotation schemes do not align one-to-one. To overcome this mismatch, we defined a shared broad cell-class taxonomy that captures major cortical populations common to both species, including excitatory and inhibitory neurons, astrocytes, oligodendrocyte–OPC lineage cells, and immune/microglia. By performing all cross-species comparisons at this level, we preserve biological interpretability while ensuring that mouse and human cell populations are directly comparable.

**Aligning anatomical scope**

An additional challenge arises from differences in spatial coverage. Human Xenium samples consist of localized cortical tissue sections, whereas mouse samples span an entire brain hemisphere and include both cortical and non-cortical regions. Without correction, this discrepancy would introduce a strong anatomical bias. To establish a common spatial basis for comparison, analyses were restricted to the cortex in both species. In mouse samples, a cortex mask was manually defined based on tissue morphology and spatial context, and only cells located within this region were retained. Within the cortex, analyses focused on neuronal, glial, and immune populations, which are most relevant to Alzheimer’s disease pathology. Human samples were already restricted to cortical tissue by design. This step ensures that observed differences reflect disease and species effects rather than gross anatomical mismatches

[***Figure 5: Cortex restriction of mouse spatial transcriptomics data.** Cell locations are shown before and after applying a cortex mask to the mouse Xenium sample. Excluding non-cortical regions aligns the anatomical scope of mouse data with human cortical tissue, enabling meaningful cross-species comparison.*](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/cortex.html)

***Figure 5: Cortex restriction of mouse spatial transcriptomics data.** Cell locations are shown before and after applying a cortex mask to the mouse Xenium sample. Excluding non-cortical regions aligns the anatomical scope of mouse data with human cortical tissue, enabling meaningful cross-species comparison.*

**Spatial Atlas**

- Mouse AD *TgCRND8 17.9 months*
    
    [https://eliesamilliti.github.io/sharknut_website/plots/plot1-mouse-al.html](https://eliesamilliti.github.io/sharknut_website/plots/plot1-mouse-al.html)
    
- Mouse WT 13.4 months
    
    [https://eliesamilliti.github.io/sharknut_website/plots/plot1-mouse-wt.html](https://eliesamilliti.github.io/sharknut_website/plots/plot1-mouse-wt.html)
    
- Human AD
    
    [https://eliesamilliti.github.io/sharknut_website/plots/plot1-human-al.html](https://eliesamilliti.github.io/sharknut_website/plots/plot1-human-al.html)
    
- Human healthy
    
    [https://eliesamilliti.github.io/sharknut_website/plots/plot1.html](https://eliesamilliti.github.io/sharknut_website/plots/plot1.html)
    

**Building standardized expression matrices**

Following quality control, cell-type harmonization, and cortical restriction, we constructed standardized cell × gene expression matrices for each subject and species. To reduce noise from extremely sparse genes, filtering was applied consistently at the species level and propagated to all subject-level matrices. Expression values were then normalized using counts per million followed by log transformation. For each species, multiple versions of the matrices were retained (raw, QC-filtered, and QC-filtered normalized) allowing the same harmonized data foundation to be reused consistently across all downstream analyses. Together, these steps produce a unified representation of mouse and human spatial transcriptomics data, enabling transparent and reproducible comparison of cellular composition, transcriptional programs, and spatial organization in Alzheimer’s disease.

## **Research Question 1 — Cellular composition and activation**

**How does Alzheimer’s disease reshape cortical cell populations?**

Alzheimer’s disease is accompanied by widespread changes in the brain’s cellular ecosystem. Beyond molecular dysregulation within individual cells, the disease may also reshape the relative abundance of major cortical cell populations. In this section, we examine whether Alzheimer’s disease is associated with changes in broad cell-class composition and activation, and whether these changes differ between human cortex and the TgCRND8 mouse model.

### **Baseline differences between mouse and human cortex**

Before interpreting disease-associated effects, it is important to note that mouse and human cortex differ substantially in baseline cellular composition. Human samples exhibit a large contribution of OPC–oligodendrocyte lineage cells, whereas mouse cortex is dominated by astrocytes and excitatory neurons, with minimal OPC–oligo representation. These baseline differences likely reflect species-specific cortical organization as well as differences in sampling and annotation resolution, and should be considered when evaluating disease-related changes.

### Changes in abundance of major cell classes

We quantified the relative proportions of major cortical cell classes after quality control and restriction to cortical tissue. In the human samples, the Alzheimer’s disease cortex differs from the healthy control in broad cell-class proportions. The OPC–oligodendrocyte lineage represents a large fraction of the human cortical composition in both conditions and remains prominent in the Alzheimer’s disease sample, alongside differences in neuronal populations and immune/microglial cells. These patterns suggest disease-associated shifts in cellular balance, although conclusions are limited by the small number of subjects.

In the mouse samples, astrocytes dominate cortical composition in both TgCRND8 and wild-type animals, while immune/microglia proportions remain similar between genotypes. Differences are most visible in astrocytes and neuronal fractions, with changes on the order of several percentage points (up to 10 percentage points for astrocytes). 

Overall, these results show that Alzheimer’s disease is associated with measurable, but moderate, shifts in broad cell-class proportions within each species. To make the direction and magnitude of these shifts explicit, we summarize disease–control differences as Δ proportions for human (AD − Healthy) and mouse (TgCRND8 − WT) (Figures 7–8).

![***Figure 6: Cell-type composition per subject (cortex).*** *Relative proportions of broad cell classes across human and mouse subjects after cortex restriction.*](How%20Well%20Does%20a%20Mouse%20Model%20Capture%20Human%20Alzheime/image%203.png)

***Figure 6: Cell-type composition per subject (cortex).*** *Relative proportions of broad cell classes across human and mouse subjects after cortex restriction.*

![***Figure 7: Human Δ composition (AD − Healthy).**
Broad cell-class proportion differences between AD and healthy human cortex, highlighting the direction and magnitude of compositional shifts observed between the two human samples.*](How%20Well%20Does%20a%20Mouse%20Model%20Capture%20Human%20Alzheime/image%204.png)

***Figure 7: Human Δ composition (AD − Healthy).**
Broad cell-class proportion differences between AD and healthy human cortex, highlighting the direction and magnitude of compositional shifts observed between the two human samples.*

![***Figure 8: Mouse Δ composition (TgCRND8 − WT).**
Broad cell-class proportion differences between TgCRND8 and WT cortex, highlighting the direction and magnitude of compositional shifts* observed between TgCRND8 and WT mice.](How%20Well%20Does%20a%20Mouse%20Model%20Capture%20Human%20Alzheime/image%205.png)

***Figure 8: Mouse Δ composition (TgCRND8 − WT).**
Broad cell-class proportion differences between TgCRND8 and WT cortex, highlighting the direction and magnitude of compositional shifts* observed between TgCRND8 and WT mice.

---

### Cell Activation

We study the activation of three different cell types : Astrocytes, Microglia and Oligodendrocytes. Astrocytes are the synaptic support cells of neurons, enabling their protection and supporting their metabolic balance. When they become reactive, they can get overly protective and impair a neuron’s ability to communicate and survive. Microglia are the brain’s immune system. They survey the environment and remove dead cells. In early Alzheimer’s disease, they can be more protective, but can shift later into a disease-associated state, where they tend to stop  performing their homeostatic duties and cluster near amyloid plaques, disrupting neuron communication**.**  Oligodendrocytes produce a very important membrane called myelin, which wraps around neuronal connections, accelerating the speed of the signals. Dysregulation and increased reactivity of oligodendrocytes is therefore incredibly detrimental. 

We choose the most relevant activation marker genes for each of these cell types, from the list of genes that are present in both mouse and human datasets. We also include some more general markers of inflammation, that we study for both Microglia and Oligodendrocytes. For each cell, we compute an activation score, based on the mean of the gene expression, and plot the activation across cells in a violin plot.

![***Figure 9 : Distribution of cell-type-specific activation scores.**
For each cell, an activation score was computed based on the expression of a predefined activation gene panel for the corresponding cell type. Violin plots show the distribution of activation scores across individual cells.*](How%20Well%20Does%20a%20Mouse%20Model%20Capture%20Human%20Alzheime/image%206.png)

***Figure 9 : Distribution of cell-type-specific activation scores.**
For each cell, an activation score was computed based on the expression of a predefined activation gene panel for the corresponding cell type. Violin plots show the distribution of activation scores across individual cells.*

![*Figure 10 : **Violin plots showing WT-normalized activation score distributions.**
Activation scores were calculated per cell using cell-type–specific activation gene panels restricted to genes expressed in the WT baseline, enabling normalization to WT levels. Each violin represents the distribution of scores across individual cells.*](How%20Well%20Does%20a%20Mouse%20Model%20Capture%20Human%20Alzheime/image%207.png)

*Figure 10 : **Violin plots showing WT-normalized activation score distributions.**
Activation scores were calculated per cell using cell-type–specific activation gene panels restricted to genes expressed in the WT baseline, enabling normalization to WT levels. Each violin represents the distribution of scores across individual cells.*

We observe that the main difference between the species is with the microglial cells, which exhibit far less activation in humans than in mice during Alzheimer’s disease. One explanation is that the Microglial cells are actually mostly still in the protective state in the human tissue, and the disease-associated state is not reached.  The astrocytes, however, are more consistently activated in humans. There is no data to suggest any differences for oligodendrocytes or immune reactions in all microglial cells. Another interesting result is the stratification of the cells for the human Alzheimer tissue, as cells seem to follow separate distinct activation trajectories, which is not the case for the healthy human cells. This kind of clustering  also exists for the oligodendrocytes and for the immune response, but across both species and both disease states. This indicates that mouse disease-associated microglial signatures may not directly translate to humans, emphasising the need for caution when extrapolating mouse microglial activation programs to human disease. Astrocyte activation is better conserved across species than microglia activation.

<aside>
🧬

**RQ1 -** **Cellular composition and activation: Take-away**

- Mouse and human cortex exhibit strong baseline differences in cellular composition, which complicate direct cross-species comparison and must be considered when interpreting disease-associated shifts.
- Within each species, disease–control comparisons show measurable but moderate changes in broad cell-class proportions (on the order of several percentage points, up to 10 percentage points in some classes).
- The direction of composition shifts differs between the single human and mouse comparisons, suggesting limited conservation of broad cell-class abundance changes across species.
- Marker-based activation patterns reveal clearer disease-related signals than cell abundance alone, especially within glial populations.
- Microglial activation is markedly stronger in the TgCRND8 mouse, whereas astrocytic activation appears more prominent and consistent in human Alzheimer’s cortex, highlighting partial but uneven cross-species correspondence.
</aside>

## **Research Question 2 — Transcriptional programs within cell types**

**Are disease-related transcriptional programs conserved across cell types between mouse and human?**

Alzheimer’s disease profoundly reshapes how brain cells function, leaving a strong transcriptional footprint across neurons and glial cells. Mouse models are widely used to study these changes, but an important question remains: **do mouse and human brain cells respond to Alzheimer’s disease in the same way, or do they arrive at similar outcomes through different molecular routes?**

In this section, we explore this idea at the level of individual cell types, comparing disease-associated transcriptional changes in the TgCRND8 mouse model and in human Alzheimer’s brains. Rather than asking whether the *same genes* are altered in both species (a comparison known to yield limited overlap) we ask whether *similar biological programs* are engaged, even if the underlying gene-level signals differ.

By examining transcriptional changes across matched cell classes, moving from individual genes to coordinated pathways and finally to Alzheimer’s disease–associated orthologs, we aim to understand where cross-species similarity truly lies, and where it breaks down. This perspective allows us to assess not only whether the TgCRND8 model captures aspects of human Alzheimer’s disease, but which cellular processes it captures well, and which it does not.

---

### **Disease-related transcriptional changes differ strongly by species**

Across all cell classes, human Alzheimer’s samples consistently exhibit substantially more differentially expressed genes than TgCRND8 mice. This imbalance is observed in both neuronal and glial populations, indicating that transcriptional remodeling in human disease is broader and more pronounced than in the mouse model.

[***Figure 11: Gene filtering and differential expression yield by cell class.** Bars show the fraction of genes from the Xenium panel that were filtered out, retained without differential expression, or identified as differentially expressed (DE) in mouse and human for each broad cell class. Across all cell classes, human Alzheimer’s samples exhibit a substantially higher proportion of DE genes than TgCRND8 mice, indicating broader transcriptional remodeling in human disease across both neuronal and glial populations.*](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq2_de_context_panel_kept_de.html)

***Figure 11: Gene filtering and differential expression yield by cell class.** Bars show the fraction of genes from the Xenium panel that were filtered out, retained without differential expression, or identified as differentially expressed (DE) in mouse and human for each broad cell class. Across all cell classes, human Alzheimer’s samples exhibit a substantially higher proportion of DE genes than TgCRND8 mice, indicating broader transcriptional remodeling in human disease across both neuronal and glial populations.*

This strong asymmetry has important consequences for cross-species comparison. When one species exhibits a much larger pool of differentially expressed genes, direct gene-by-gene overlap becomes inherently limited, even if similar biological processes are affected. As a result, gene-level concordance alone provides an incomplete and potentially misleading view of cross-species similarity.

---

### **From genes to pathways: assessing biological convergence**

To move beyond the limitations of gene-level comparison, we examined transcriptional changes at the pathway level, where coordinated groups of genes are interpreted as functional biological programs. Pathway enrichment analyses were performed independently within each species and cell class, allowing comparison of disease-associated processes while accounting for the strong imbalance in gene-level signal between mouse and human.

At the pathway level, evidence for cross-species convergence becomes apparent. Within several cell classes, mouse and human Alzheimer’s samples share dysregulated pathways despite limited overlap at the individual gene level. These shared pathways frequently involve immune-related processes, cellular stress responses, and metabolic or homeostatic functions, suggesting that Alzheimer’s disease can perturb similar biological programs across species even when different genes drive the response.

[https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/figuresshared_reactome_tables.html](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/figuresshared_reactome_tables.html)

***Figure 12: Pathway-level convergence across species and cell classes.** Interactive tables show Reactome pathways enriched in mouse and human Alzheimer’s samples by cell class and regulation direction. FDR values indicate pathway enrichment significance within each species, while the score summarizes pathway-level similarity based on gene-set overlap. Despite limited gene-level overlap, several cell classes exhibit convergence at the level of coordinated biological programs, particularly immune- and stress-related pathways.*

However, pathway-level convergence is neither uniform nor global. The number of enriched pathways, their statistical strength, and their direction of regulation differ markedly between mouse and human, and these differences vary across cell classes. In some cases, pathways enriched in human Alzheimer’s samples have no counterpart in the mouse model, while in others, overlap is observed but with weaker or opposite directional signals. Notably, pathway-level overlap is largely confined to glial populations, whereas neuronal cell classes show little to no shared pathway enrichment across species.

[https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq2_layer1_plotly_coverage_scatter.html](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq2_layer1_plotly_coverage_scatter.html)

***Figure 13: Cell-class–specific pathway overlap between mouse and human Alzheimer’s samples.** Coverage of shared significant pathways varies widely across cell classes and remains partial, indicating uneven pathway-level convergence between species. Point size encodes the overall cross-species similarity (Reactome Jaccard overlap), allowing coverage and overlap strength to be interpreted together.*

---

### **Focusing on orthologous Alzheimer’s disease–associated genes**

Building on the pathway-level convergence observed above, we next refined the analysis at the gene level by focusing on curated mouse–human orthologs, with particular attention to genes previously implicated in Alzheimer’s disease. This step asks a more stringent question: are the shared transcriptional programs observed across species driven by conserved regulation of individual disease-related genes, or does convergence primarily emerge at the level of broader biological processes?

To address this, differential expression results from mouse and human were compared within each cell class using a stepwise filtering strategy. Starting from a fixed set of curated ortholog pairs, genes were progressively filtered based on whether they were significantly differentially expressed in mouse, in human, in both species, and finally whether they were regulated in the same direction across species. Alzheimer’s disease–associated genes were tracked explicitly throughout this process.

[https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq2_layer2_funnel.html](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq2_layer2_funnel.html)

***Figure 14: Ortholog filtering funnel by cell class.** For each broad cell class, bars show the number of curated mouse–human orthologs retained after successive filtering steps: genes differentially expressed (DE) in mouse, in human, in both species, and finally genes that are both significant and regulated in the same direction. Conserved Alzheimer’s disease–associated genes are highlighted separately. Across all cell classes, gene counts decrease sharply with increasing stringency, indicating that gene-level cross-species conservation is rare; only a single AD-associated gene remains after all filtering steps.*

This filtering reveals a sharp and consistent collapse in gene counts across all cell classes. While many orthologous genes are detected and some are differentially expressed in either species, very few satisfy both significance and directional concordance in mouse and human. Importantly, the number of conserved genes annotated as Alzheimer’s disease–associated is extremely limited. Across all examined cell classes, only a single AD-associated gene remains after all filtering steps.

To further characterize gene-level cross-species concordance, mouse and human disease-associated log fold-changes were compared directly for orthologous Alzheimer’s disease–associated genes using quadrant scatter plots. This analysis confirms that APOE is the only AD-related gene that is both significantly differentially expressed and regulated in the same direction across species, and that this signal is restricted to astrocytes.

[https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq2_layer2_quadrant_tabs.html](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq2_layer2_quadrant_tabs.html)

***Figure 15: Gene-level cross-species concordance across cell classes.** Each panel shows mouse–human orthologous genes positioned by their disease-associated log fold-change in mouse and human for a given cell class. Dashed lines mark significance thresholds, and genes significant in both species with the same direction of regulation are highlighted. Across cell classes, concordant gene-level regulation is rare; among Alzheimer’s disease–associated genes, only APOE in astrocytes ****shows significant and directionally consistent regulation across species.*

In both species, astrocytic APOE expression is reduced in Alzheimer’s disease, with a modest effect size in the TgCRND8 mouse model (logFC ≈ −1.0) and a markedly stronger effect in human Alzheimer’s samples (logFC ≈ −12.1). This striking difference in magnitude mirrors the broader asymmetry in transcriptional remodeling observed between species, even when the direction of regulation is conserved. 

APOE encodes a lipid-transport protein predominantly expressed by astrocytes in the central nervous system and represents the strongest genetic risk factor for late-onset Alzheimer’s disease in humans. Its expression is closely linked to astrocyte reactivity, neuroinflammatory responses, and amyloid-β metabolism. Importantly, altered Apoe expression has been reported repeatedly in amyloid-driven mouse models, including TgCRND8, and is thought to reflect astrocytic responses to amyloid pathology. In this context, the selective conservation of APOE across species is biologically plausible and consistent with the design of TgCRND8 as a model that primarily captures amyloid-associated disease mechanisms.

More broadly, the extreme scarcity of conserved Alzheimer’s disease–associated genes, despite robust pathway-level convergence, suggests that cross-species similarity in Alzheimer’s disease arises primarily from shared cellular programs rather than widespread conservation of individual disease risk genes. This distinction highlights the importance of multiscale analysis when evaluating the translational relevance of mouse models, and underscores that model validity may depend on which aspects of the disease are being probed.

<aside>
🧬

**RQ2 - Transcriptional programs : Take-away**

- Human Alzheimer’s samples exhibit substantially broader and stronger transcriptional changes than the TgCRND8 mouse model across all examined cell classes.
- Despite limited overlap at the level of individual differentially expressed genes, partial convergence emerges at the pathway level, particularly for immune-related and stress-response programs.
- Pathway-level convergence is uneven and cell-class–specific, indicating that some biological programs are captured more faithfully than others by the mouse model.
- Gene-level cross-species conservation is extremely rare: among Alzheimer’s disease–associated genes, **only APOE shows significant and directionally concordant regulation**, and this effect is restricted to astrocytes.
- The selective conservation of APOE is biologically consistent with TgCRND8 as an amyloid-driven model, underscoring that model relevance depends on the disease mechanisms being probed.
</aside>

## **Research Question 3 — Local spatial organization**

**Does Alzheimer’s disease reshape local cellular micro-architecture?**

In the brain, cells don't exist in isolation. They form intricate spatial networks where their physical organization reflects their function and interactions. In Alzheimer's disease, this delicate micro-architecture can be profoundly disrupted, potentially contributing to cognitive decline.

To understand how Alzheimer's reshapes the cellular landscape, we investigate local spatial organization at two complementary levels:

- RQ3.1 — Gene Expression Spatial Patterns : 
Do cells expressing AD-associated genes cluster together or disperse in diseased tissue?
- RQ3.2 — Cell-Cell Spatial Interactions :
How do different cell types organize relative to each other? Does Alzheimer's alter their spatial neighborhoods?

By comparing mouse cortex and human brain tissue, we can identify which spatial reorganization patterns are conserved across species and which are mouse-specific artifacts that may not translate to human pathology.

### RQ3.1 — Gene Expression Spatial Patterns

### Research Focus

We analyze the spatial distribution of cells expressing three key Alzheimer's-associated genes:

- **APOE** (Apolipoprotein E) - 102 AD associations - Major role in lipid transport
- **MOBP** (Myelin-associated Oligodendrocyte Basic Protein) - 39 associations - Involved in myelination
- **TREM2** (Triggering Receptor Expressed on Myeloid cells 2) - 28 associations - Immune receptor

**Why These Genes Matter:**
**APOE :**
- Strongest genetic risk factor for late-onset Alzheimer's
- Involved in lipid transport, amyloid clearance, and neuroinflammation
- Clustering may reflect apolipoprotein accumulation at plaques
**MOBP:**
- Critical for myelin integrity in oligodendrocytes
- Clustering suggests white matter reorganization or damage response
- May indicate compensatory remyelination attempts
**TREM2:**
- Microglial receptor for detecting cellular debris
- TREM2 variants increase AD risk 2-4 fold
- Clustering indicates immune cell recruitment to pathology sites

### Methodology

**Ripley's K & L Function Analysis**

We use spatial point pattern analysis to quantify clustering:

- **L(r) > 0**: Cells are clustered (aggregated)
- **L(r) < 0**: Cells are dispersed
- **L(r) = 0**: Random distribution (CSR - Complete Spatial Randomness)

**Spatial Reorganization (ΔL)**

- **ΔL > 0** : More clustering in AL
- **ΔL < 0** : More dispersion in AL

---

### Results by Gene

Use the buttons below to explore the spatial distribution patterns for each gene. Select a gene to view:
- Left panels (Mouse): L-function curves and spatial reorganization (ΔL) in mouse cortex
- Right panels (Human): L-function curves and spatial reorganization (ΔL) in human tissue

*Note: Click on “View Original” to better see the entire Figure.*  

[https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/RQ3_1_interactive_dropdown.html](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/RQ3_1_interactive_dropdown.html)

***Figure 15: Spatial reorganization of AD-associated gene expression in mouse and human tissue.*** 
*Interactive visualization showing Ripley's L-function analysis for three Alzheimer's-associated genes (APOE, MOBP, TREM2). **Top-left:** Mouse L-function curves comparing wild-type (WT, blue) vs. Alzheimer's-like (AL, red) conditions, L(r) > 0 indicates clustering at distance r. **Bottom-left:** Human L-function curves comparing healthy (green) vs. AL (dark red) tissue. **Top-right:** Mouse spatial reorganization (ΔL) showing the difference between AL and WT—red bars indicate increased clustering in disease. **Bottom-right:** Human spatial reorganization (ΔL) comparing AL vs. healthy. Use the buttons above to toggle between genes. Click on “View Original” to better see the entire Figure.*  

**Key Findings by Gene**

- APOE-expressing cells show pronounced clustering in mouse AL cortex, likely reflecting the aggregation of apolipoprotein-producing cells around amyloid plaques. This spatial reorganization is **not conserved** in human tissue, suggesting species-specific differences in how APOE-expressing cells respond to Alzheimer's pathology.
- MOBP shows the most dramatic spatial reorganization in mouse AL (+70 µm), potentially indicating oligodendrocyte clustering around areas of myelin damage or white matter pathology. In human tissue, this effect is nearly absent (+7 µm), suggesting that oligodendrocyte spatial responses differ fundamentally between species or that human tissue captures different disease stages.
- TREM2-expressing cells (primarily microglia) exhibit strong clustering in mouse AL cortex (+71 µm), consistent with microglial recruitment to sites of neuroinflammation and plaque formation. Strikingly, this immune cell reorganization is **completely absent** in human tissue, raising important questions about the translational validity of mouse models for studying neuroinflammatory responses in Alzheimer's disease.

<aside>
🧬

**RQ3.1 - Gene Expression Spatial Patterns: Take-away**

- All three Alzheimer's-associated genes (APOE, MOBP, TREM2) exhibit significant spatial clustering in mouse AL cortex compared to wild-type controls, with reorganization distances ranging from +47 to +71 µm.
- MOBP and TREM2 show the strongest clustering effects in mouse (+70-71 µm), potentially reflecting oligodendrocyte reorganization around myelin damage and microglial recruitment to inflammatory sites, respectively.
- In stark contrast, none of these spatial clustering patterns are conserved in human tissue, where all three genes show negligible reorganization (<10 µm) between healthy and AL conditions.
- The complete absence of cross-species conservation at the spatial organization level suggests that mouse models exhibit fundamentally different cellular architectural responses to Alzheimer's pathology compared to human disease.
- This species-specific discrepancy raises critical translational concerns: therapeutic strategies targeting spatial clustering mechanisms in mouse models (e.g., disrupting microglial aggregates, preventing oligodendrocyte reorganization) may not translate effectively to human Alzheimer's disease.
- The pronounced local architectural changes in mouse models may represent artifacts of transgenic overexpression systems rather than authentic features of human neurodegeneration, highlighting the need for cross-species validation of spatial phenotypes before clinical translation.
</aside>

### RQ3.2 — **Local cell-type proximity enrichment**

Alzheimer’s disease does not only change *which* cell types are present or *which genes* they express. It may also alter the tissue’s **micro-architecture**, i.e., how different cell types are spatially arranged and how often they appear near each other. Here, we ask a simple question: **are some cell types found as neighbors more (or less) often than expected by chance — and does Alzheimer’s shift these neighborhood patterns in a similar way in mouse and human cortex?**

To quantify “neighborhoods”, we define two cells as neighbors if they are within **80 µm** of each other. For each ordered pair of cell types (A → B), we count how many B-type cells tend to lie near A-type cells, and we compare this to a null model obtained by **randomly shuffling cell-type labels** while keeping the same spatial coordinates. This gives an **enrichment ratio per cell**:

- Enrichment ≈ 1: no evidence of preferential proximity (close to chance)
- Enrichment > 1: A and B are neighbors more often than expected (local clustering)
- Enrichment < 1: A and B are neighbors less often than expected (local avoidance)

[https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq3-enrichment-ratio.html](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq3-enrichment-ratio.html)

***Figure 16 — Cell-type proximity enrichment across datasets.** Enrichment ratio per cell for ordered cell-type pairs (A → B), computed using an 80 µm neighborhood radius. The dashed line marks the null expectation (enrichment = 1) obtained by shuffling cell-type labels while preserving spatial coordinates. Values >1 indicate that two cell types appear as neighbors more often than expected by chance.*

In contrast, most cross-type pairs lie closer to the null baseline (~1), meaning that at this coarse cell-type resolution, many mixed neighborhoods are not strongly enriched relative to chance. Overall, this plot describes the **baseline micro-architecture** within each dataset, but it does not yet tell us whether Alzheimer’s changes these patterns in a conserved way across species.

[https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq3-delta-concordance.html](https://epfl-ada.github.io/ada-2025-website-sharknut/assets/plotly/rq3-delta-concordance.html)

If the mouse model captured human-like spatial remodeling, cell-type pairs that increase (or decrease) in proximity in human AD would tend to change in the same direction in mouse AD. However, we observe **weak cross-species concordance**: with only **16 shared cell-type pairs**, correlations between human and mouse deltas are low and not significant (Pearson r = 0.20, p = 0.47; Spearman ρ = 0.04, p = 0.89). This suggests that, at this neighborhood radius and using broad cell-type labels, AD-driven changes in local cellular proximity are **not consistently conserved** between mouse and human in our data.

A key limitation is statistical power and resolution: the overlap of comparable pairs is small (n = 16), the labels are coarse, and neighborhood metrics can be sensitive to the chosen radius. Therefore, we interpret this as **limited evidence for conserved AD-related micro-architectural changes**, rather than definitive proof that no spatial remodeling exists.

🧬 **RQ3 — Local Cellular Micro-architecture (Cell-type Proximity)- Take Away :**

- We quantified local micro-architecture by measuring whether pairs of broad cell classes (A → B) occur as neighbors more often than expected by chance, using an 80 µm neighborhood radius and a label-shuffling null model (enrichment ratio; null ≈ 1).
- Across all datasets, proximity structure is dominated by baseline tissue organization, with the strongest enrichments largely reflecting within-class clustering (e.g., excitatory–excitatory and inhibitory–inhibitory neighborhoods), a pattern consistent with spatial segregation of major cortical cell classes.
- When focusing on Alzheimer’s-related changes (Δhuman = AD − healthy; Δmouse = AD − WT), cross-species agreement is weak: only 16 shared cell-type pairs are comparable across species, and Δ concordance is low and non-significant (Pearson r ≈ 0.20, p ≈ 0.47; Spearman ρ ≈ 0.04, p ≈ 0.89).
- This indicates that, at this resolution and spatial scale, AD does not induce a conserved reorganization of local cell-type neighborhoods between human cortex and the TgCRND8 mouse model in our data.
- An important practical implication is that micro-architectural conclusions are sensitive to analysis scale and annotation granularity: broad cell classes and a single radius may miss subtler, state-specific spatial remodeling (e.g., activated microglia subtypes near plaques).
- Overall, our results support a scale-specific view of translational relevance: while the mouse may capture selected glial programs, its disease-driven spatial neighborhood remodeling appears limited or model-specific relative to the human tissue analyzed here, warranting caution when extrapolating spatial micro-architecture phenotypes from TgCRND8 to humans.

## Conclusion - Model relevance depends on the biological scale

Using matched Xenium spatial transcriptomics in mouse and human cortex, we evaluated how well the TgCRND8 model captures Alzheimer’s disease across cellular composition, cell-type transcriptional programs, and local spatial organization. The key message is that TgCRND8 relevance is not global: it depends strongly on which disease dimension is examined.

| **Biological scale** | **Human Alzheimer’s signal** | **TgCRND8 mouse signal** | **Cross-specie correspondence** | **Interpretation** |
| --- | --- | --- | --- | --- |
| Baseline cellular composition | High OPC-oligo contribution, diverse cortical balance | Astrocyte and excitatory neuron dominated | Low | Strong intrinsic species difference dominate over disease effects |
| Disease-associtaed composition shift | Moderate changes in astrocytes and neurons | Moderate shifts, different direction | Low | Composition changes are not conserved and weakly informative. |
| Glial activation (markers) | Strong astrocytic activation, limited microglial response | Strong microglial activation, astrocytic changes | Partial | Activation reflects overlapping but asymmetric glial responses |
| Gene-level transcriptional changes | Broad, strong DE across all cell classes | Limited DE across cell classes | Minimal | Human disease shows far greater transcriptional remodeling |
| Pathway-level programs | Strong enrichment of immune and stress pathways (glia) | Moderate enrichment of similar programs | Partial (glial specific) | Biological convergence emerges at the program level |
| AD-associated orthologs | Many DE genes, strong effect sizes | Few DE genes | Extremely limited | Only APOE conserved, and only in astrocytes |
| Local spatial organization | Subtle or absent gene-level clustering | Strong clustering of APOE, MOBP, TREM2 | None | Spatial micro-architecture is not conserved across species |
| Cell-type neighborhood micro-architecture  | Mostly within-class proximity (e.g., neuron–neuron); AD-related shifts are subtle/heterogeneous | Strong within-class clustering; AD-related proximity shifts are modest and differ from human | Low / None | Neighborhood structure is dominated by baseline tissue organization; AD-driven micro-architectural reorganization is not consistently conserved across species at this resolution. |

At the level of **cellular composition**, strong baseline differences between mouse and human cortex dominate the signal. Alzheimer’s-associated shifts in broad cell-class proportions are present in both species but remain moderate and are not consistently aligned, limiting their value as conserved disease signatures.

Disease-related effects become clearer when focusing on glial activation states. Marker-based patterns suggest partial correspondence, but with a pronounced asymmetry: microglial activation is stronger in TgCRND8, whereas astrocytic activation is more consistent in human Alzheimer’s cortex. This points to overlapping involvement of glia, but differences in how pathology engages immune and support cells across species.

At the **transcriptional level**, human Alzheimer’s samples show far broader and stronger differential expression across cell classes than TgCRND8 mice, making direct gene-level overlap intrinsically rare. When shifting from genes to pathway-level programs, partial convergence emerges  (especially for immune, stress-response, and metabolic processes) largely within glial populations. However, stringent comparison of AD-associated orthologs shows that gene-level conservation is highly limited: among Alzheimer’s disease–associated genes, only APOE is significantly and directionally concordant, and only in astrocytes, consistent with TgCRND8 as an amyloid-driven model.

Finally, the strongest divergence appears in **local spatial organization**. APOE-, MOBP-, and TREM2-expressing cells cluster strongly in TgCRND8 cortex, whereas comparable spatial reorganization is absent in the human tissue analyzed here. This lack of spatial conservation suggests that micro-architectural phenotypes in the mouse may not directly translate to human Alzheimer’s disease. In addition to gene-level spatial clustering, we evaluated **cell-type neighborhood micro-architecture** by measuring which cell classes are found near each other more often than expected by chance (proximity enrichment within an 80 µm radius). Across datasets, proximity patterns are dominated by **baseline tissue organization** (strong within-class clustering such as neuron–neuron neighborhoods). However, **AD-associated shifts in these neighborhood enrichments show little cross-species agreement** (only 16 shared pairs; weak and non-significant Δhuman vs Δmouse correlations), suggesting that disease-driven reorganization of local cell neighborhoods is not robustly conserved between the analyzed human tissue and TgCRND8 under this resolution and spatial scale.

Overall, TgCRND8 captures selected amyloid-associated glial programs (most clearly at the pathway level), but does not reproduce the breadth of human transcriptional remodeling or the spatial tissue reorganization observed in this dataset. These results support a mechanism- and scale-specific view of model relevance, and illustrate how spatial transcriptomics can move model evaluation beyond a single “valid/invalid” verdict.