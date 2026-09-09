---
layout: page
title: Journal Publications
lede: "Peer-reviewed journal articles, listed most recent first."
subnav:
  - title: All Publications
    url: /publications
  - title: Journals
    url: /publications/journals
  - title: Conferences
    url: /publications/conferences
---

<ol class="entry-list">
{% assign items = site.data.journals %}
{% for pub in items %}
{% assign n = items.size | minus: forloop.index0 %}
<li class="entry">
  <div class="entry__index">{{ n }}.</div>
  <div class="entry__body">
    <div class="entry__title">{{ pub.title }}</div>
    <div class="entry__meta">{{ pub.authors | replace: "Soumen Atta", "<strong>Soumen Atta</strong>" }}. <span class="entry__venue">{{ pub.venue }}</span>{% if pub.publisher %}, {{ pub.publisher }}{% endif %}{% if pub.vol %}, {{ pub.vol }}{% endif %}, {{ pub.year }}.</div>
    {% if pub.note %}<div class="entry__extra">{{ pub.note }}</div>{% endif %}
    <div class="entry__links">
      {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">DOI</a>{% endif %}
      {% if pub.dataset_url %}<a href="{{ pub.dataset_url | relative_url }}">Data set</a>{% endif %}
    </div>
  </div>
</li>
{% endfor %}
</ol>
