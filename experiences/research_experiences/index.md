---
layout: page
title: Research Experiences
lede: "Postdoctoral and doctoral research positions, most recent first."
subnav:
  - title: All Experiences
    url: /experiences
  - title: Research Experiences
    url: /experiences/research_experiences
  - title: Teaching Experiences
    url: /experiences/teaching_experiences
---

<ul class="timeline">
{% for exp in site.data.research_experiences %}
<li>
  <div class="timeline__dates">{{ exp.dates }}</div>
  <div class="timeline__role">{{ exp.role }}</div>
  <div class="timeline__place">{{ exp.place }}</div>
  {% if exp.note %}<div class="timeline__note">{{ exp.note }}</div>{% endif %}
</li>
{% endfor %}
</ul>
