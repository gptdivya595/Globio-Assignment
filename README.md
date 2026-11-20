# A1 Checkpoint

A five-minute pre-booking check for learners who have finished German A1. The app gives learners a score in vocabulary, grammar and reading, then turns missed answers into concrete practice tasks.

## Run locally

Open `index.html` in a browser. The app uses plain HTML, CSS and JavaScript. Answers live in memory for the current attempt. There is no sign-in, storage or analytics.

## How scoring works

Each of the three skills has four questions. A correct answer earns one point. The score labels are provisional product rules.

| Result | Rule | Next step |
| --- | --- | --- |
| Strong on this check | At least 3 out of 4 in every skill | Take a full mock for the intended exam provider |
| Build the basics first | 6 or fewer overall, or 1 or fewer in any skill | Practise the identified gaps before attempting a full mock |
| Close on this check | All remaining scores | Review the missed topics and take a full mock |

A 9/12 with scores of 4/4, 4/4 and 1/4 triggers “Build the basics first.” This keeps a concentrated gap visible. Practice suggestions come from missed questions in the lowest-scoring skills first. A full mock and an active practice task fill out the plan when there are fewer than two misses.

Both official exams also have listening, writing and speaking sections. The score only reflects performance on this check. See the [Goethe A1 exam format](https://www.goethe.de/ins/de/en/m/prf/gzsd1.cfm), [ÖSD A1 exam format](https://osd.at/en/portfolio-item/oesd-zertifikat-a1-za1/) and [CEFR descriptors](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors-search).

## Code walkthrough

- `questions.js` holds the 12 original questions, correct answers, explanations and practice tasks.
- `app.js` holds the scoring function `assess` and the home, quiz and results views.
- `index.html` and `styles.css` provide the page and responsive layout.

## Publish

Push the files to the root of a public GitHub repository. Under **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, and save. GitHub displays the public app link after deployment. [GitHub Pages instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
