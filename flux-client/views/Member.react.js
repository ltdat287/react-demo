var React   = require('react/addons'),
    request = require('superagent'),
    Router  = require('react-router'),
    mui     = require('material-ui')
    ;

var Route         = Router.Route;
var RouteHandler  = Router.RouteHandler;
var DefaultRoute  = Router.DefaultRoute;
var Link          = Router.Link;

var ThemeManager = new mui.Styles.ThemeManager();

var ListItem     = mui.ListItem;
var Avatar       = mui.Avatar;
var IconButton   = mui.IconButton;
var ToggleStar   = require('./toggle-star.jsx');
var Delete       = require('./delete.jsx');
var Colors       = mui.Styles.Colors ;

var MemberActions = require('../actions/MemberActions');
    
var Member = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  _onClick() {
    MemberActions.toggleLike(this.props);
  },
  _onDelete() {
    MemberActions.destroy(this.props.id);
  },
  render() {
    var starColor = this.props.like ? Colors.yellow800 : Colors.grey400; 
    return (
        <ListItem 
          leftAvatar={<Avatar src={this.props.src} />}
          rightIconButton={
            <div>
              <IconButton onClick={this._onClick}><ToggleStar color={starColor} /></IconButton>
              <IconButton onClick={this._onDelete}><Delete color={Colors.red800} /></IconButton>
            </div>}
          secondaryTextLines={2}> 
          {this.props.name} 
        </ListItem>
      );
  }
});

module.exports = Member;