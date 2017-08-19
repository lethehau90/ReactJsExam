var HauLe = React.createClass({
    render : function(){
        return(
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>
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
