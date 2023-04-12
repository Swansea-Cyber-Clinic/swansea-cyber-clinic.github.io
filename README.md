# Swansea Cyber Clinic Website

## What is this?
This is repository for the website of the Swansea Cyber Clinic, a [MASI Basecamp](https://www.swansea.ac.uk/masi/masi-projects/#victimisation-and-justice-in-the-digital-society=is-expanded) interdisciplinary research project ("Victimisation and Justice in the Digital Society") between the [HRC School of Law](https://www.swansea.ac.uk/law/) and the [Computational Foundry](https://www.swansea.ac.uk/computational-foundry/) at Swansea University. This website hosts the research outputs of the clinic.

## Why has the website repository changed?
[Our old website](https://github.com/Swansea-Cyber-Clinic/cyber-clinic-website) has now been retired. It was a purely [Vue.js](https://vuejs.org) static site, and made use of [sql.js-httpvfs](https://github.com/phiresky/sql.js-httpvfs) to perform queries on a generated SQLite database containing organisation listings. While the functionality provided by sql.js-httpvfs was incredibly flexible, hosting the site was an ongoing challenge; both GitHub and GitLab Pages had problems with the way in which the SQLite database was "streamed", especially relating to compression. We had used [Render](https://render.com/) to host the website, as it didn't have problems with asset compression; changes to their pricing structure for teams made its ongoing use infeasible, however.

During Summer 2022, [the Python script used to generate the SQLite database](https://github.com/Swansea-Cyber-Clinic/service_mapping) was completely overhauled given its user-unfriendly interface. In its place, [database_generator](https://github.com/Swansea-Cyber-Clinic/database_generator) was created; using an object-oriented paradigm instead of a functional one. It uses [pandas](https://pandas.pydata.org/) to deserialise our exported CSV file, and then serialises it into a SQLite database using [Orator](https://orator-orm.com/) (an [active record](https://en.wikipedia.org/wiki/Active_record_pattern)-style object-relational mapper for Python). database_generator makes use of [orator-validator](https://github.com/alfonsocv12/orator-validator) and custom validation to ensure data integrity.

Given that Orator has the functionality to export a relational database in JSON format, and that a move away from SQLite would be needed, it was decided to recreate the website from scratch.

## How has the website changed?
This website is created using [Jekyll](https://jekyllrb.com/), a static site generator written in Ruby. It is used by GitHub by default to generate documentation for project pages if required, and is widely used to easily generate simple websites. Most parts of this website are written in Markdown, which Jekyll transforms into custom-styled HTML. While Jekyll is relatively simple to use, it only generates static pages. Vue.js has therefore been retained for the interactive service mapping portion of the website, using the [webpack](https://webpack.js.org/)-based [integration of Vue.js and Jekyll described by Christopher Murphy](https://hackwild.com/article/jekyll-ssg-with-vue-single-file-components/).

## Licenses
The source code of this website is licensed under the [MIT License](https://github.com/swansea-cyber-clinic/swansea-cyber-clinic.github.io/blob/main/LICENSE). The underlying material (data used for the service mapping, and information about the project and team) are not yet licensed for use, please [contact us](mailto:cyberclinic@swansea.ac.uk) if you'd like to use this data for yourself.