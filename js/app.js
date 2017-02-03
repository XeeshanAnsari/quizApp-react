
var questions = [
    ['name of country' ,'pakistan' ,'multan','england','A'],
    ['sadsa','sdas','fasf','asf','B'],
] ;

var pos = 0;



var quizRender = React.createClass({
      


     getInitialState: function(){
         return{
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
         }
     },
  
     _checkAnswer: function(e){
          pos++;
          this.setState({
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
          })

     },
     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div(null, "QUIZ GAME OF REACT"),
             React.DOM.div(
                 null,
                 React.DOM.div(
                     null,
                     React.DOM.h1(null,"QUESTION 4 OF 1")
                 ),
                 React.DOM.div(
                     null,
                     
                     React.DOM.div(
                         null,
                         React.DOM.h1(null, this.state.quesion),
                         React.DOM.div(
                             null,
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer'
                                 }
                             ),
                              this.state.opt1,
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer',

                                   
                                 }
                             ),
                             this.state.opt2,
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer'
                                 }
                             ),
                             this.state.opt3
                         ),
                         React.DOM.button(
                                 {
                                    type: "button",
                                    onClick: this._checkAnswer
                                 },
                                 'NEXT'
                             )
                     )
                 )
             )
         )
     }
});


ReactDOM.render(
    React.DOM.div(
       null,
       React.createElement(quizRender,
       {
           data: questions,
       }
       )
    ),
    document.getElementById('app')
);