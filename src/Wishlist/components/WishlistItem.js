import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromWishlistAction, getWishlistOptionsAction } from '../ducks';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
   large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Wishlistitem = ({ item, removeWishItem, getOptions }) => {
  const classes = useStyles();

  const handleClick = () => {
    removeWishItem(item);
    getOptions()
  }
  
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={item.name} src={item.avatar} className={classes.large}/>
      </ListItemAvatar>
      <ListItemText
        primary={item.name}
        secondary={item.author.firstName + ' ' + item.author.lastName}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
};

const mapDispatchToProps = (dispatch) => ({
  removeWishItem: (item) => dispatch(removeFromWishlistAction(item)),
  getOptions: (query) => dispatch(getWishlistOptionsAction(query)),
});

export default connect(null, mapDispatchToProps)(Wishlistitem);