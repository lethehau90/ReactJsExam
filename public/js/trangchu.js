
function getName(name){
    alert(name)
}

var HauLe = React.createClass({
    taskInfo : function(){
        alert(this.props.children);
    },

    //getInitState
    getInitialState: function(){
        return { tongHocVien : this.props.tongHocVien}
    },

    themHocVien(){

        this.state.tongHocVien = parseInt(this.state.tongHocVien) +1 ;
        this.setState(this.state);

        // this.setState({
        //     tongHocVien: parseInt(this.state.tongHocVien) + 1
        // });
    },

    //3s sẽ setInterval 1 lần tự động themHocVien
    // componentDidMount(){
    //     setInterval(this.themHocVien, 3000);
    // },
     //end getInitState

    render : function(){
        return(
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>

                {/*setState*/}
                <div>So hoc vien : {this.state.tongHocVien}</div> <hr/>

                <button onClick={this.taskInfo}>Thong tin</button>
                <p>
                    <button onClick={()=>{
                        var str = this.props.ten + ' giang vien: ' + this.props.giangvien;
                        getName(str);
                        }}>get name</button>
                </p>
                <p>
                    <button onClick={this.themHocVien}>Them</button>
                </p>
                <KhoaHoc/>
            </div>
        );
    }
});

var KhoaHoc = React.createClass({
    render : function(){
        return(
            <h1>Can ban</h1>
        );
    }
});

//Ref
var InputTag = React.createClass({

    showText(){
        let text = this.refs.txt.value;
        if(!text) return;
        alert(text);
    },
    
    showSL : function(){
        let select = this.refs.sl.value;
        alert(select);
    },

    render : function(){
        return(
            <div>
                <div>
                    <input type="text" ref = "txt" />
                    <button onClick = {this.showText}>Click</button>
                </div>
                <hr/>
                <div>
                    <select ref="sl">
                        <option value="a">AAAA</option>
                        <option value="b">BBBB</option>
                        <option value="c">CCC</option>
                    </select>
                    <button onClick={this.showSL}>Click</button>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
                <div>
                    <InputTag></InputTag>
                    <HauLe ten="React Js" giangvien = "Mr. Hau" tongHocVien = "10">Can ban</HauLe>
                    <HauLe ten="Node Js" giangvien = "Mr. Tung" tongHocVien = "20"> Nang cao </HauLe>
                </div>
                , document.getElementById("root"));
