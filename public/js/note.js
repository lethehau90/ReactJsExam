
var list;
var Node =  React.createClass({
    render : function(){
        return (
            <div className = "div-note">
                {this.props.children}
            </div>
        );
    }
});

function addDiv(){
    ReactDOM.render(
        <InputDiv/>,
        document.getElementById("divAdd")
    )
}

var List = React.createClass({

    getInitialState: function(){
        list = this;
        return {
             mang : ["Jquery", "Php"]
        }
    },

    render: function(){
        return (
            <div className="div-list">
                <button onClick={addDiv}>Them</button>
                <div id="divAdd"></div>
               {
                   this.state.mang.map(function(node, index){
                        return (
                            <Node key={index}>{node}</Node>
                        );
                   })
               }
            </div>
        );
    }
});

var InputDiv = React.createClass({

    send(){
        //list.setState({mang : list.state.mang.concat(this.refs.txt.value)})
        list.state.mang.push(this.refs.txt.value)
        list.setState(list.state)
    },

    render : function(){
        return(
            <div>
                <input type="text" ref="txt" placeholder ="input text" />
                <button onClick={this.send}>Gui</button>
            </div>
        );
    }
});

ReactDOM.render(
        <div>
            <List/>
        </div>
        ,document.getElementById("root")
)