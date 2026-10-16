---
layout: page
title: Data Sets
lede: "Benchmark instances and supplementary material accompanying published research. Each page below is a permanent, citable supplementary webpage for the corresponding paper."
---

<div class="card-grid">
{% for d in site.data.datasets %}
<div class="card">
  <h3>{{ d.code }}</h3>
  <p>{{ d.paper }}</p>
  <div class="card__meta">{{ d.venue }}</div>
  <a class="card__link" href="{{ d.path | relative_url }}">Open data set</a>
</div>
{% endfor %}
</div>
