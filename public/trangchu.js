var HauLe = React.createClass({
    render : function(){
        return(
            <div>
                <h1 className="mauvang">Khoa hoc React</h1>
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
                    <HauLe></HauLe>
                </div>
                , document.getElementById("root"));
