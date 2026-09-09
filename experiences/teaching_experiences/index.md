---
layout: page
title: Teaching Experiences
lede: "Assistant Professor and faculty positions, most recent first."
subnav:
  - title: All Experiences
    url: /experiences
  - title: Research Experiences
    url: /experiences/research_experiences
  - title: Teaching Experiences
    url: /experiences/teaching_experiences
---

<ul class="timeline">
{% for exp in site.data.teaching_experiences %}
<li>
  <div class="timeline__dates">{{ exp.dates }}</div>
  <div class="timeline__role">{{ exp.role }}</div>
  <div class="timeline__place">{{ exp.place }}</div>
  {% if exp.note %}<div class="timeline__note">{{ exp.note }}</div>{% endif %}
</li>
{% endfor %}
</ul>

<p class="small muted">For a detailed, semester-by-semester list of courses taught (including credits and hours), see <a href="/experiences/teaching_experiences/courses">Detailed Pedagogical Teaching Activities</a>.</p>
