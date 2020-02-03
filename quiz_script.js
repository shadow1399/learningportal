   var ul = document.getElementById('ul');
   var btn = document.getElementById('button');
   var quizBox = document.getElementById('questionBox');
   var op1 = document.getElementById('op1');
   var op2 = document.getElementById('op2');
   var op3 = document.getElementById('op3');
   var op4 = document.getElementById('op4');
   var status1 = document.getElementById('status1');


   var app = {
       questions: [
           { q: 'HTML stands for?', options: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Tabular Markup Language', 'None of these'], answer: 1 },
           { q: 'Who is making the Web standards?', options: ['Google', 'Microsoft', 'Mozilla', 'The World Wide Web Consortium'], answer: 4 },

           { q: 'which of the following tag is used to mark a begining of paragraph ?', options: ['TD', 'br', 'P', 'tr'], answer: 3 },

           { q: 'Correct HTML tag for the largest heading is ?', options: ['h4', 'h1', 'h8', 'h9'], answer: 2 },
           { q: 'What does CSS stand for?', options: ['Colorful Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'], answer: 2 },
           { q: 'Where in an HTML document is the correct place to refer to an external style sheet?', options: ['In the &lt;head&gt; section', 'In the &lt;body&gt; section', 'At the end of the document', 'None of these'], answer: 1 },
           { q: 'What is the correct HTML element for inserting a line break?', options: ['&lt;br&gt;', '&lt;break&gt;', '&lt;lb&gt;', 'BR'], answer: 1 },
           { q: 'Which HTML tag is used to define an internal style sheet?', options: ['&lt;css&gt;', '&lt;style&gt;', '&lt;script&gt;', 'None of these'], answer: 2 },
           { q: 'Correct HTML tag for the largest heading is ?', options: ['h4', 'h1', 'h8', 'h9'], answer: 2 },
           { q: 'which of the following tag is used to mark a begining of paragraph ?', options: ['TD', 'br', 'P', 'tr'], answer: 3 }

       ],
       index: 0,
       load: function() {
           if (this.index < this.questions.length) {
               quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
               op1.innerHTML = this.questions[this.index].options[0];
               op2.innerHTML = this.questions[this.index].options[1];
               op3.innerHTML = this.questions[this.index].options[2];
               op4.innerHTML = this.questions[this.index].options[3];

           } else {

               quizBox.innerHTML = "Quiz Over......!!!"
               op1.style.display = "none";
               op2.style.display = "none";
               op3.style.display = "none";
               op4.style.display = "none";
               btn.style.display = "none";
               status1.style.display = "none";

           }
       },
       next: function() {
           this.index++;
           this.load();
       },
       check: function(element) {

           var id = element.id.split('');

           if (id[id.length - 1] == this.questions[this.index].answer) {
               this.score++;
               element.className = "correct";
               element.innerHTML = "Correct";
           } else {
               element.className = "wrong";
               element.innerHTML = "Wrong";
           }
       },
       notClickAble: function() {
           for (let i = 0; i < ul.children.length; i++) {
               ul.children[i].style.pointerEvents = "none";
           }
       },

       clickAble: function() {
           for (let i = 0; i < ul.children.length; i++) {
               ul.children[i].style.pointerEvents = "auto";
               ul.children[i].className = ''

           }
       },


   }


   window.onload = app.load();

   function button(element) {
       app.check(element);
       app.notClickAble();
   }

   function next() {
       app.next();
       app.clickAble();
   }