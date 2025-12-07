#!/bin/bash

# List of all slugs
slugs=(
  "intro/what-you-will-build"
  "setup/creating-project"
  "setup/first-script"
  "first-model/creating-mlp"
  "first-model/preparing-dataset"
  "first-model/training-model"
  "first-model/making-predictions"
  "first-model/saving-loading"
  "data/csv-datasets"
  "data/json-datasets"
  "data/image-datasets"
  "data/preprocessing-basics"
  "data/splitting-train-test"
  "training/epochs"
  "training/learning-rate"
  "training/overfitting-underfitting"
  "training/loss-functions"
  "training/optimizers"
  "models/dense-mlp"
  "models/cnn-images"
  "models/rnn-sequences"
  "models/when-to-use-which"
  "cli/train-lle-init"
  "cli/train-lle-train"
  "cli/train-lle-test"
  "cli/train-lle-export"
  "cli/train-lle-stats"
  "cli/full-cli-workflows"
  "export/what-is-lle-format"
  "export/exporting-models"
  "export/importing-models"
  "export/version-compatibility"
  "projects/house-price-prediction"
  "projects/image-classifier"
  "projects/text-sequence-predictor"
  "projects/mini-recommendation-system"
  "debugging/common-training-mistakes"
  "debugging/shape-mismatch-errors"
  "debugging/bad-loss-issues"
  "debugging/dataset-parsing-failures"
  "performance/cpu-limitations"
  "performance/batch-sizes"
  "performance/memory-usage"
  "performance/model-size-limits"
  "roadmap/gpu-support"
  "roadmap/wasm-runtime"
  "roadmap/onnx-export"
  "roadmap/distributed-training"
  "contributing/how-to-help"
  "contributing/docs-contribution"
  "contributing/code-contribution"
  "contributing/bug-report-flow"
  "license/apache-2-0"
)

for slug in "${slugs[@]}"; do
  dir=$(dirname "$slug")
  file="app/content/$slug.mdx"
  title=$(basename "$slug" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  cat > "$file" << EOF
---
title: $title
description: Guide for $title
---

# $title

This page is under construction. Content coming soon.

## Overview

$title is an important topic in train-lle development.

## Next Steps

Check back later for detailed documentation.
EOF
done