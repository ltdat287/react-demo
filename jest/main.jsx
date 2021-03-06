var React   = require('react/addons'),
    request = require('superagent'),
    Router  = require('react-router'),
    mui     = require('material-ui'),
    Member  = require('./member.jsx')
    ;

var Route         = Router.Route;
var RouteHandler  = Router.RouteHandler;
var DefaultRoute  = Router.DefaultRoute;
var Link          = Router.Link;

var ThemeManager = new mui.Styles.ThemeManager();

var List     = mui.List;
var ListDivider  = mui.ListDivider;
   

var Members = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  getInitialState() {
    return {
      members: [
        {id:1, name: "Avatar 1", like: false, src: "http://canime.files.wordpress.com/2010/05/mask-dtb.jpg"},
        {id:2, name: "Avatar 2", like: true, src: "http://z4.ifrm.com/30544/116/0/a3359905/avatar-3359905.jpg"},
        {id:3, name: "Avatar 3", like: false, src: "http://www.dodaj.rs/f/O/IM/OxPONIh/134.jpg"}
      ]
    }
  },
  deleteItem(id){
    this.setState({
      members: this.state.members.filter(function(member){
        return member.id !== id;
      })
    });
  },
  render() {
    var members = this.state.members.map(function(member){
      return (
        <div>
          <Member id={member.id} onDelete={this.deleteItem} name={member.name} initialLike={member.like} src={member.src}/>
          <ListDivider inset={true}/>
        </div>
        );
    }, this);
    return (<List>{members}</List>);
  }
})

React.render(<Members />, document.body);