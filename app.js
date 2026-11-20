'use strict';

function assess(answers) {
  const breakdown = skills.map(skill => ({ skill, correct: 0, total: 0, missed: [] }));

  questions.forEach((question, index) => {
    const result = breakdown.find(item => item.skill === question.skill);
    result.total += 1;
    if (answers[index] === question.answer) {
      result.correct += 1;
    } else {
      result.missed.push(question);
    }
  });

  const correct = breakdown.reduce((sum, item) => sum + item.correct, 0);
  const weakest = Math.min(...breakdown.map(item => item.correct));

  let title = 'Close on this check';
  let advice = 'Review your missed topics, then take a full A1 mock before booking.';
  if (weakest >= 3) {
    title = 'Strong on this check';
    advice = 'Take a full A1 mock for your exam provider before booking.';
  } else if (correct <= 6 || weakest <= 1) {
    title = 'Build the basics first';
    advice = 'Practise the topics below before trying a full A1 mock.';
  }

  const ranked = [...breakdown].sort((first, second) => first.correct - second.correct);
  const practice = ranked.flatMap(item => item.missed.map(question => question.practice)).slice(0, 3);
  if (practice.length < 2) {
    practice.push(['Full A1 mock', 'Use the official practice materials below. Complete every section under timed conditions.']);
  }
  if (practice.length < 2) {
    practice.push(['Speaking and writing practice', 'Record a short introduction and write a short message. Ask a teacher or study partner for feedback.']);
  }

  return { breakdown, correct, title, advice, practice };
}

const app = document.querySelector('#app');
const homeMarkup = app.innerHTML;
let answers = [];
let current = 0;

function focusStart(element) {
  element.tabIndex = -1;
  element.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function renderHome() {
  app.className = 'layout';
  app.innerHTML = homeMarkup;
  document.querySelector('#start').addEventListener('click', () => {
    answers = Array(questions.length).fill(null);
    current = 0;
    renderQuestion();
  });
}

function renderQuestion() {
  const question = questions[current];
  const last = current === questions.length - 1;
  app.className = 'layout inner';
  app.innerHTML = `
    <div class="step-header">
      <p class="eyebrow">${question.skill}</p>
      <span>Question ${current + 1} of ${questions.length}</span>
    </div>
    <progress value="${current}" max="${questions.length}" aria-label="Check progress"></progress>
    <form class="panel">
      <fieldset>
        <legend lang="de" id="prompt">${question.prompt}</legend>
        ${question.passage ? `<p class="passage" id="passage" lang="de">${question.passage}</p>` : ''}
        ${question.options.map((option, index) => `
          <label class="option" lang="de">
            <input type="radio" name="answer" value="${index}" ${answers[current] === index ? 'checked' : ''}>
            <span>${option}</span>
          </label>`).join('')}
      </fieldset>
      <p class="error" role="alert"></p>
      <div class="actions">
        ${current > 0 ? '<button type="button" class="secondary" id="back">Back</button>' : ''}
        <button class="primary" type="submit">${last ? 'See my results' : 'Next question'} <span aria-hidden="true">→</span></button>
      </div>
    </form>`;

  const form = app.querySelector('form');
  const error = form.querySelector('.error');
  form.addEventListener('change', event => {
    answers[current] = Number(event.target.value);
    error.textContent = '';
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (answers[current] === null) {
      error.textContent = 'Choose an answer to continue.';
      return;
    }
    if (last) {
      renderResults();
    } else {
      current += 1;
      renderQuestion();
    }
  });
  app.querySelector('#back')?.addEventListener('click', () => {
    current -= 1;
    renderQuestion();
  });
  focusStart(app.querySelector('#prompt'));
}

function renderResults() {
  const { breakdown, correct, title, advice, practice } = assess(answers);
  app.innerHTML = `
    <div class="results">
      <section class="panel result-panel">
        <p class="eyebrow">YOUR A1 CHECK · ${correct}/${questions.length} CORRECT</p>
        <h1 class="result-title">${title}</h1>
        <p class="result-summary">${advice} The full exams also assess listening, writing and speaking.</p>
        <dl class="skills">
          ${breakdown.map(item => `
            <div class="skill">
              <dt>${item.skill}</dt>
              <dd>${item.correct}/${item.total} correct</dd>
            </div>`).join('')}
        </dl>
      </section>
      <section class="panel result-panel">
        <h2>What to practise before booking</h2>
        <ol class="plan">
          ${practice.map(([topic, activity]) => `<li><strong>${topic}</strong><p>${activity}</p></li>`).join('')}
        </ol>
        <p class="resources">
          <a href="https://www.goethe.de/en/spr/prf/ueb/pa1.html" target="_blank" rel="noopener">Goethe A1 practice ↗</a>
          <a href="https://osd.at/en/portfolio-item/oesd-zertifikat-a1-za1/" target="_blank" rel="noopener">ÖSD A1 practice ↗</a>
        </p>
      </section>
      <section class="panel result-panel">
        <h2>Review your answers</h2>
        ${questions.map((question, index) => `
          <details>
            <summary>${index + 1}. <span lang="de">${question.prompt}</span> · ${answers[index] === question.answer ? 'Correct' : 'Missed'}</summary>
            ${question.passage ? `<p class="passage" lang="de">${question.passage}</p>` : ''}
            <p>Your answer: <span lang="de">${question.options[answers[index]]}</span></p>
            <p>Correct answer: <strong lang="de">${question.options[question.answer]}</strong></p>
            <p>${question.explanation}</p>
          </details>`).join('')}
      </section>
      <button class="secondary" id="restart">Take the check again</button>
    </div>`;
  app.querySelector('#restart').addEventListener('click', () => {
    renderHome();
    focusStart(app.querySelector('#start'));
  });
  focusStart(app.querySelector('h1'));
}

renderHome();
