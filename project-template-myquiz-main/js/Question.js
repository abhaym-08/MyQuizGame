class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.question = createElement("h3")
    this.answer1 = createElement("h4")
    this.answer2 = createElement("h4")
    this.answer3 = createElement("h4")
    this.answer4 = createElement("h4")
    this.input = createInput("").attribute("placeholder", "Enter your answer")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What starts with T, ends with T, and is full of T?")
    this.question.position(250,100)

    this.answer1.html("Treat")
    this.answer1.position(250,150)
    this.answer2.html("Teapot")
    this.answer2.position(250,175)
    this.answer3.html("Tint")
    this.answer3.position(250,200)
    this.answer4.html("Taught")
    this.answer4.position(250,225)

    this.input.position(300,300)

    this.input1.position(150, 300);
    this.button.position(290, 350);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thanks for submitting")
      this.message.position(425, 350)
    })


  }
}
