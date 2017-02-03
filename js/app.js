
var questions =  ['name of country' ,'pakistan' ,'multan','england','A'];
var data = 'sfdsafa';


var quizRender = React.createClass({
      

     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div(null,"QUIZ GAME WITH REACT"),
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
                         React.DOM.h1(null, this.props.questions),
                         React.DOM.div(
                             null,
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer'
                                 }
                             ),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer'
                                 }
                             ),
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer'
                                 }
                             )
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
       {
           data: data,
       },
       React.createElement(quizRender)
    ),
    document.getElementById('app')
);