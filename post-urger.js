'use strict';

function getDeadlineDay(n) {
  const current = new Date();
  const deadline = new Date();

  deadline.setDate(current.getDate() + n);
  
  const year = deadline.getFullYear();
  const month = formatMonthAndDay(deadline.getMonth() + 1);
  const day = formatMonthAndDay(deadline.getDate());

  return `${ year }-${ month }-${ day }`;
}

function formatMonthAndDay(value) {
  return (value < 10 ? '0' : '') + value;
}

class PostUrger {

  constructor(daysLeft) {
    this.daysLeft = daysLeft;
    this.deadline = getDeadlineDay(this.daysLeft, 'D');
    this.generate();
  }

  generate() {
    this.script = `
    (function() {
      const current = new Date();
      const deadline = new Date('${ this.deadline }');

      const daysLeft = Math.floor((deadline.getTime() - current.getTime()) / (24 * 60 * 60 * 1000)) + 1;

      let opacity;
      if (daysLeft > 0) {
        opacity = daysLeft / ${ this.daysLeft };
      } else {
        opacity = 0;
      }
      
      document.body.style.opacity = opacity;
    })();
    `
  }

  get() {
    return this.script;
  }
}

hexo.extend.helper.register('post_urger', (daysLeft) => {
  if (daysLeft) {
    return `
      <script type="text/javascript">
      ${ new PostUrger(daysLeft).get() }
      </script>
    `;
  }

  return '';
});