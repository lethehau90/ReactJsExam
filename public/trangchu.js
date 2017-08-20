
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

ReactDOM.render(
                <div>
                    <HauLe ten="React Js" giangvien = "Mr. Hau" tongHocVien = "10">Can ban</HauLe>
                    <HauLe ten="Node Js" giangvien = "Mr. Tung" tongHocVien = "20"> Nang cao </HauLe>
                </div>
                , document.getElementById("root"));
