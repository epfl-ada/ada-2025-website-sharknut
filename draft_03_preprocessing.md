----
layout : default
----
## Making mouse and human comparable
<a id="harmonization"></a>

Direct comparison between mouse and human spatial transcriptomics data is not straightforward. Beyond biological differences, the datasets differ in anatomical coverage, cell-type annotation strategies, and data structure. Meaningful cross-species analysis therefore requires careful preprocessing and harmonization to ensure that observed differences reflect disease- and species-related effects rather than technical or anatomical mismatches.

### Quality control and reliable cell selection
Raw Xenium outputs include a rich but heterogeneous set of information, ranging from transcript coordinates to cell segmentation and morphology metrics. As a first step, we performed systematic quality control to identify low-confidence cells and unreliable transcript detections. Cell-level metrics such as transcript counts, number of detected genes, cell and nuclear areas, and background signal from negative controls were used to assess data integrity and segmentation quality.
Based on these metrics, low-quality cells were removed using uniform criteria applied across all subjects. Transcript filtering was applied implicitly by retaining only transcripts associated with high-confidence cells. This approach ensures consistency between cell-level quality control and the resulting expression matrices, while minimizing the influence of segmentation artifacts and background signal.

<iframe
  src="{{ site.baseurl }}/assets/plotly/qc_overview_prepost.html"
  width="100%"
  height="560"
  style="border:0; border-radius:12px;"
  loading="lazy">
</iframe>


