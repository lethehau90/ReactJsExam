var Note = React.createClass({
    render(){
        return (
            <div>
                <p>{this.props.children}</p>
            </div>
        );
    }
});

var List = React.createClass({

    add(){
        this.state.mang.push("Nodejs","ReactJs");
        this.setState(this.state);
    },

    getInitialState : function(){
        return {
            mang : ["php",".Net", ".Net core", "Jquery"]
        }
    },

    render: function(){
        return(
            <div>
                <button onClick={this.add}>Thêm mảng</button>
                {this.state.mang.map(function(node, index){
                    return(
                        <Note key={index}>{node}</Note>
                    );
                })}
            </div>
        );
    }
});

ReactDOM.render(
   <List></List>
    ,document.getElementById('root')
);