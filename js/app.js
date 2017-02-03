
var questions = [
    ['name of country' ,'pakistan' ,'multan','england','A'],
    ['sadsa','sdas','fasf','asf','B'],
    ['name of country' ,'pakistan' ,'multan','england','A'],
    ['sadsa','sdas','fasf','asf','B']

] ;

var pos = 0, correct = 0 , choice;



var quizRender = React.createClass({
      


     getInitialState: function(){
         return{
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
         }
     },
  
     _checkAnswer: function(e){
          choices = document.getElementsByName("choices");
          
            for (var i = 0; i < choices.length; i++) {
                if(choices[i].checked){
                    choice = choices[i].value;
                }
            }
            
            if(choice == this.props.data[pos][4]){
                correct++;
                
            }
          pos++;
          this.setState({
             quesion: this.props.data[pos][0],
             opt1: this.props.data[pos][1],
             opt2: this.props.data[pos][2],
             opt3: this.props.data[pos][3],
             ans: this.props.data[pos][4],
          })

     },
     _showQuestion: function(){
          
            if(pos >= 3){
                return React.DOM.div(
                     null,
                     React.DOM.h1(null,'complete')
                 )
             } else {
                
                 return  React.DOM.div(
                         null,
                          React.DOM.div(
                             null,
                            React.DOM.h1(null,"QUESTION "+ (pos+1) +" OF 4")
                          ),
                         React.DOM.h1(null, this.state.quesion),
                         React.DOM.div(
                             null,
                             React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer',
                                    value:'A'
                                 }
                             ),
                              this.state.opt1,
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer',
                                    value:'B'                          
                                 }
                             ),
                             this.state.opt2,
                              React.DOM.input(
                                 {
                                    type: "radio",
                                    name: 'answer',
                                    value:'C'
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
                     );
             }
         
                 
     },
     render: function(){
         return React.DOM.div(
             null,
             React.DOM.div(null, "QUIZ GAME OF REACT"),
             React.DOM.div(
                 null,
                
                 React.DOM.div(
                     null,
                     this._showQuestion() 
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