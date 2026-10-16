---
layout: page
title: Conference Publications
lede: "Conference and workshop papers, listed most recent first."
subnav:
  - title: All Publications
    url: /publications
  - title: Journals
    url: /publications/journals
  - title: Conferences
    url: /publications/conferences
---

<ol class="entry-list">
{% assign items = site.data.conferences %}
{% for pub in items %}
{% assign n = items.size | minus: forloop.index0 %}
<li class="entry">
  <div class="entry__index">{{ n }}.</div>
  <div class="entry__body">
    <div class="entry__title">{{ pub.title }}</div>
    <div class="entry__meta">{{ pub.authors | replace: "Soumen Atta", "<strong>Soumen Atta</strong>" }}. <span class="entry__venue">{{ pub.venue }}</span>{% if pub.place %}, {{ pub.place }}{% endif %}{% if pub.date %}, {{ pub.date }}{% endif %}{% if pub.vol %}, {{ pub.vol }}{% endif %}{% if pub.pages %}, {{ pub.pages }}{% endif %}{% if pub.year %}, {{ pub.year }}{% endif %}.</div>
    {% if pub.note %}<div class="entry__extra">{{ pub.note }}</div>{% endif %}
    <div class="entry__links">
      {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">DOI</a>{% endif %}
      {% if pub.url %}<a href="{{ pub.url }}" target="_blank" rel="noopener">Link</a>{% endif %}
    </div>
  </div>
</li>
{% endfor %}
</ol>
