
function getName(name){
    alert(name)
}

var HauLe = React.createClass({
    taskInfo : function(){
        alert(this.props.children);
    },

    render : function(){
        return(
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>
                <button onClick={this.taskInfo}>Thong tin</button>
                <p>
                    <button onClick={()=>{
                        var str = this.props.ten + ' giang vien: ' + this.props.giangvien;
                        getName(str);
                        }}>get name</button>
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
                    <HauLe ten="React Js" giangvien = "Mr. Hau">Can ban</HauLe>
                    <HauLe ten="Node Js" giangvien = "Mr. Tung"> Nang cao </HauLe>
                </div>
                , document.getElementById("root"));
