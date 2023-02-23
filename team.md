---
title: Team
layout: default
---

## Our team of researchers

**Note:** Please contact [Sara](mailto:s.correia@swansea.ac.uk) if you have any questions about the project or its outputs; the project has concluded and some members of the research team have since left Swansea University.

{% for researcher in site.data.team %}
{% figure %}
### {{ researcher.name }}

{% if researcher.orcid %}[{{ researcher.short_name }}](https://orcid.org/{{ researcher.orcid }}) {% else %} {{ researcher.short_name }} {% endif %} was a {{ researcher.description | downcase }} on this project. {% if researcher.twitter or researcher.link %} You can find {{ researcher.pronoun1 }} online on {% if researcher.twitter %}[Twitter]({{ researcher.twitter }}) {% endif %} {% if researcher.link %} {% if researcher.twitter and researcher.link %} and {% endif %}[{{ researcher.pronoun2 }} website]({{ researcher.link }}){% endif %}.{% endif %}{% if researcher.research_interests %} {{ researcher.pronoun2 | capitalize }} academic interests include: {{ researcher.research_interests }}. {% endif %}


{% endfigure %}
{% endfor %}

