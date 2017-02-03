
var questions = [['name of country' ,'pakistan' ,'multan','england','A']] ;
var data = 'sfdsafa';


var quizRender = React.createClass({
      

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
                         React.DOM.h1(null, this.props.data[0][0]),
                         React.DOM.div(
                             null,
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer'
                                 }
                             ),
                              this.props.data[0][1],
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer',
                                   
                                 }
                             ),
                             this.props.data[0][2],
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer'
                                 }
                             ),
                             this.props.data[0][3]
                         ),
                         React.DOM.button(
                                 {
                                    type: "button"
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