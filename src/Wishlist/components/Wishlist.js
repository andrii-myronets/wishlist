import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
import { addToWishlistAction, getWishlistOptionsAction } from '../ducks';
import OptionLabelItem from './OptionLabelItem';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import Wishlistitem from './WishlistItem';


const Wishlist = ({ options, wishlistItems, getOptions, addItemToWishlist }) => {

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    getOptions(inputValue)
  }, [inputValue, getOptions]);

  useEffect(() => {
    if (value) {
      addItemToWishlist(value)
      setValue(null)
    }
  }, [value, addItemToWishlist])

  return (<>
    <Autocomplete
      id="article-wishlist"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={options || []}
      getOptionLabel={(option) => option.name}
      getOptionSelected={(option, value) => option.id === value.id}
      renderOption={(option) => <OptionLabelItem item={option} />}
      style={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label="Select article" variant="outlined" />}
    />
    <Typography variant="h5" style={{ padding: 20 }}>Article wishlist</Typography>
    <List style={{ width: 500 }}>
      {wishlistItems?.length > 0 ?
        wishlistItems.map(item => <Wishlistitem item={item} key={item.id} />) :
        <ListItem>
          <ListItemText secondary="No items has been added" />
        </ListItem>}
    </List>
  </>
  );
};

const mapStateToProps = (state) => ({
  options: state.wishlist.wishlistOptions,
  wishlistItems: state.wishlist.wishlistItems
});

const mapDispatchToProps = (dispatch) => ({
  getOptions: (query) => dispatch(getWishlistOptionsAction(query)),
  addItemToWishlist: (item) => dispatch(addToWishlistAction(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);