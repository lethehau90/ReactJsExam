
var list;
var Node =  React.createClass({
    
    delete : function(){
        $.post("/delete", {idXoa : this.props.id}, function(data){
            list.setState({mang : data});
        })
    },

    edit : function(){
        this.setState({onEdit : true})
    },

    save : function(){
        var that = this;
        $.post("/update", {idSua : this.props.id, noiDung : this.refs.txt.value }, function(data){
            list.setState({mang : data});
            that.setState({onEdit : false});
        });
    },

    cancel : function(){
        this.setState({onEdit : false});
    },

    getInitialState() {
        return { onEdit : false}
    },

    render : function(){
        if(this.state.onEdit){
            return (
            <div className = "div-note">
                <input defaultValue={this.props.children} ref = "txt"/>
                <button onClick= {this.save}>Lưu</button>
                <button onClick= {this.cancel}>Hủy</button>
            </div>
        );
        }
        else{
            return (
            <div className = "div-note">
                <p>
                    {this.props.children}
                </p>
                <button onClick= {this.delete}>Xoa</button>
                <button onClick= {this.edit}>Sua</button>
            </div>
        );
        }
        
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
             mang : []
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
                            <Node key={index} id={index}>{node}</Node>
                        );
                   })
               }
            </div>
        );
    },

    componentDidMount(){
        var that = this;
        $.post("/getNotes", function(data){
            that.setState({mang : data});
        });
    }

});

var InputDiv = React.createClass({

    send(){
        //post api
        $.post("/addNote", {note : this.refs.txt.value}, function(data){
            list.setState({mang : data})
        })

        //list.setState({mang : list.state.mang.concat(this.refs.txt.value)})
        // list.state.mang.push(this.refs.txt.value);
        // list.setState(list.state);
        //huy component
        ReactDOM.unmountComponentAtNode(document.getElementById("divAdd"));
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